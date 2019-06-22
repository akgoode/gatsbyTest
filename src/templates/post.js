import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'

export default function Template ({data}) {
    const { markdownRemark: post } = data
    return (
        <Layout>
            <SEO title={post.frontmatter.title}
                 description={post.frontmatter.description} />
            <div>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{__html: post.html}} />
            </div>
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
                description
            }
        }
    }
`