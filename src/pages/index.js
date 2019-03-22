import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  {
    allSanityProject {
      edges {
        node {
          title
          slug {
            current
          }
          projectImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        alignItems: "space-between",
        padding: 0,
      }}
    >
      {data.allSanityProject.edges.map(({ node: project }) => (
        <li
          key={project.slug.current}
          style={{ flex: "1 45%", maxWidth: "45%" }}
        >
          <h2>{project.title}</h2>
          <Image fluid={project.projectImage.asset.fluid} alt={project.title} />
          <p>project.description</p>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage
