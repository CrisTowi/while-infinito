import React from "react"
import { Link, graphql } from "gatsby"


// Containers
import PageBody from '../containers/PageBody';

import SEO from "../components/seo"
import Layout from "../components/Layout"

import containerStyles from "./index.module.css"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    console.log(posts);

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <PageBody posts={posts} />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
