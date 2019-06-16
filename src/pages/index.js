import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="homevid">
      <video playsInline autoPlay loop muted className="homevid">
        <source
          src="https://vseen.com/wp-content/uploads/2019/02/VSEEN-Brand-Video.mp4"
          type="video/mp4"
        />
        <source
          src="https://vseen.com/wp-content/uploads/2019/02/VSEEN-Brand-Video.webm"
          type="video/webm"
        />
      </video>
    </div>
  </Layout>
)

export default IndexPage
