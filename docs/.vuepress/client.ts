import { defineClientConfig } from '@vuepress/client';
import { useFetch } from '@vueuse/core';
import ContactUs from './components/ContactUs.vue';

const verifyToken = (token: string) => {
  const { data } = useFetch('https://ing.cnosdb.cloud/api/v1/auth/api', {
    async beforeFetch({ url, options, cancel }) {
      if (!token) {
        cancel();
        window.location.href = 'https://cnosdb.cloud/start?callback=docs';
      }

      options.headers = {
        ...options.headers,
        Authorization: token,
      };

      return {
        options,
      };
    },
    onFetchError(ctx) {
      const data = ctx.data && JSON.parse(ctx.data);
      if (data.message) {
        window.location.href = 'https://cnosdb.cloud/start?callback=docs';
      }
      return ctx;
    },
  });
};

export default defineClientConfig({
  enhance({ app, router }) {
    // 注册组件才能使用
    app.component('ContactUs', ContactUs);
    if (typeof window === 'object') {
      router.beforeEach((to, _from, next) => {
        if (to.path === '/') {
          next({ path: '/en/latest/' });
        } else if (to.path === '/en/') {
          next({ path: '/en/latest/' });
        } else if (to.path === '/zh/') {
          next({ path: '/zh/latest/' });
        } else if (to.path.indexOf('/en/cloud/') !== -1) {
          // 说明这里匹配到了cloud的文档，需要鉴权，判断url的query是否有token，如果有则正常调用校验接口，否则去cloud登录
          const query_token = to.query.token;
          query_token &&
            window.sessionStorage.setItem('cloud_token', query_token as string);
          const token = window.sessionStorage.getItem('cloud_token');
          if (token) {
            verifyToken(token);
          } else {
            window.location.href = 'https://cnosdb.cloud/start?callback=docs';
          }
        }
        next();
      });
    }
  },
});
