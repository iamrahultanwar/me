import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';


export default function Home() {
  return (
    <Layout
      description="Will update it later">
      <div style={{ display: "flex", width: "100%", height: "100vh", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <h1>
          <code>
            Lets write some code
          </code>
        </h1>
        <img src='https://sado0823.github.io/assets/images/hello-world-2074ad754c4c5269d203396b526efcb7.gif' />
      </div>
    </Layout>
  );
}
