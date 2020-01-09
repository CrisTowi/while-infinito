import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import containerStyles from "./index.module.css"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    console.log(posts);

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Todas las publicaciones" />
        <Bio />
        <section className={containerStyles.postContainer}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article className={containerStyles.post} key={node.fields.slug}>
                <Link to={node.fields.slug} style={{
                    boxShadow: 'none',
                    textDecoration: 'none' }}>
                  <h3 className={containerStyles.postTitle}>
                    {title}
                  </h3>
                  <small className={containerStyles.postDate}>
                    {node.frontmatter.date}
                  </small>
                  <p className={containerStyles.postDescription}
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                    />
                </Link>
              </article>
            )
          })}
        </section>
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
