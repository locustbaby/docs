import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="Home" description="Hello">
      <div className="cnos-container cnos-introduce">
        <div className="inner-container">
          <div className="flex justify-content-between align-items-center">
            <div className="cloud-warpper">
              <h2>
                {/* <img src="https://cnosdb.com/wp-content/uploads/2023/04/logo-cloud.png" alt="logo-cloud" className="logo-cloud" /> */}
              </h2>
              <h2 className="cloud-title flex">
                <span>Serverless,</span>
                <span>Scalable and Cost-Saving</span>
              </h2>
              <div className="cloud-desc">
                <p className="cloud-desc-item">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      opacity="0.5"
                      cx="6.0002"
                      cy="5.99995"
                      r="4.5"
                      stroke="white"
                      stroke-width="0.6"
                    />
                    <circle
                      cx="6.0001"
                      cy="5.99998"
                      r="2.4"
                      fill="white"
                      fill-opacity="0.8"
                    />
                  </svg>{' '}
                  Leverages cloud infrastructure and integrates with
                  cloud-native ecosystems.
                </p>
                <p className="cloud-desc-item">
                  {' '}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      opacity="0.5"
                      cx="6.0002"
                      cy="5.99995"
                      r="4.5"
                      stroke="white"
                      stroke-width="0.6"
                    />
                    <circle
                      cx="6.0001"
                      cy="5.99998"
                      r="2.4"
                      fill="white"
                      fill-opacity="0.8"
                    />
                  </svg>{' '}
                  Elastic scaling of storage and computing.
                </p>

                <p className="cloud-desc-item">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      opacity="0.5"
                      cx="6.0002"
                      cy="5.99995"
                      r="4.5"
                      stroke="white"
                      stroke-width="0.6"
                    />
                    <circle
                      cx="6.0001"
                      cy="5.99998"
                      r="2.4"
                      fill="white"
                      fill-opacity="0.8"
                    />
                  </svg>{' '}
                  Multi-tenant and pay-as-you-go for lower costs.
                </p>

                <p className="cloud-desc-item">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      opacity="0.5"
                      cx="6.0002"
                      cy="5.99995"
                      r="4.5"
                      stroke="white"
                      stroke-width="0.6"
                    />
                    <circle
                      cx="6.0001"
                      cy="5.99998"
                      r="2.4"
                      fill="white"
                      fill-opacity="0.8"
                    />
                  </svg>{' '}
                  Free engineers from heavy workloads and easily manage cloud
                  services.
                </p>

                <p className="cloud-desc-item">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      opacity="0.5"
                      cx="6.0002"
                      cy="5.99995"
                      r="4.5"
                      stroke="white"
                      stroke-width="0.6"
                    />
                    <circle
                      cx="6.0001"
                      cy="5.99998"
                      r="2.4"
                      fill="white"
                      fill-opacity="0.8"
                    />
                  </svg>{' '}
                  Integrated with cloud-native OLAP and AI-driven modern data
                  ecosystem.
                </p>
              </div>
            </div>
            <div>
              <img
                className="img-cloud"
                src="https://cnosdb.com/wp-content/uploads/2023/04/cloudcloud.png"
                alt="cloud"
              />
            </div>
          </div>
          <div className="flex function-box">
            <a
              href="https://www.cnosdb.com/cnosdb-cloud-waitlist/"
              target="_blank"
              className="btn-cloud btn-primary-cloud btn-primary-cloud-hover"
            >
              Get CnosDB Cloud{' '}
              <img
                src="https://cnosdb.com/wp-content/uploads/2023/04/arrow-right.svg"
                alt="arrow"
              />
            </a>
            <a
              href="https://www.cnosdb.com/cnosdb-cloud-waitlist/"
              target="_blank"
              className="btn-cloud btn-outline-primay-cloud ml-24"
            >
              Book a demo{' '}
              <img
                src="https://cnosdb.com/wp-content/uploads/2023/04/arrow-right.svg"
                alt="arrow"
              />
            </a>
          </div>
          <h3 className="cloud-subtitle">
            <span>High Performance, </span>
            <span>High Compression Rate, </span>
            <span>High Ease-Of-Use</span>
          </h3>
          <div className="flex justify-content-between cloud-high">
            <div className="cloud-high-performance">
              <div className="cloud-high-title">
                <img
                  src="https://cnosdb.com/wp-content/uploads/2023/04/high-performance.png"
                  alt="high-performance"
                />{' '}
                High Performance
              </div>
              <p className="cloud-high-desc">
                Support very large data size; fast batch writing; ultra-high
                data compression ratio
              </p>
            </div>
            <div>
              <div className="cloud-high-title">
                <img
                  src="https://cnosdb.com/wp-content/uploads/2023/04/high-use.png"
                  alt="high-use"
                />{' '}
                High Ease of Use
              </div>
              <p className="cloud-high-desc">
                Compatible with mainstream timing database; rich calculation
                functions; excellent ecosystem
              </p>
            </div>
            <div>
              <div className="cloud-high-title">
                <img
                  src="https://cnosdb.com/wp-content/uploads/2023/04/open-source.png"
                  alt="high-source"
                />{' '}
                100% Open Source
              </div>
              <p className="cloud-high-desc">
                Stand-alone, distributed and ecological tools, etc. all adopt
                the AGPL-3.0 open source protocol
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
