import React from 'react';
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
        <img src='img/go-lang-hello-world.gif' style={{ borderRadius: 5 }} />

        <button style={{ marginTop: 10 }} onClick={() => {
          window.open('file/rahul-tanwar-resume.pdf')
        }} className='css-button-3d--sky' >My Resume</button>
      </div>
    </Layout>
  );
}
