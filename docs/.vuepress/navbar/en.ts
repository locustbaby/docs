import { navbar } from 'vuepress-theme-hope';

export const enNavbar = navbar([
    {
        text: '版本',
        link: 'latest' ,
        children: [
            { text: 'latest', link: '/en/latest/' },
            { text: 'v2.3', link: '/en/v2.3/' },
        ],
    },
]);
