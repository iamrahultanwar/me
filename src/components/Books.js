import React from 'react'
import Layout from '@theme/Layout';

function Books({ bookName }) {
    return (
        <Layout>
            <iframe src={`/file/${bookName}.pdf`} style={{ height: "100vh", width: "100vw" }} ></iframe>
        </Layout>
    )
}

export default Books