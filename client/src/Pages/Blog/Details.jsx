import React from 'react'
import SeoHead from '@Component/SeoHead'
import { Link, useParams } from 'react-router-dom'
import { createBlogSlug, featuredPosts } from './helper'

export const BlogDetails = () => {
  const { title } = useParams()
  const post = featuredPosts.find((item) => createBlogSlug(item.title) === title)

  if (!post) {
    return (
      <section className="st-portfolio--blog-detail">
        <SeoHead
          title="Post not found"
          description="This blog article is not available."
          noIndex
        />
        <div className="blog-detail__not-found">
          <p>Post not found</p>
          <h2>This blog article is not available.</h2>
          <Link to="/blog">Back to Blog</Link>
        </div>
      </section>
    )
  }

  return (
    <article className="st-portfolio--blog-detail">
      <SeoHead
        title={`${post.category}: ${post.seoTitle ?? post.title}`}
        description={post.seoDescription ?? post.excerpt}
        image={post.image}
        type="article"
      />
      <Link className="blog-detail__back" to="/blog">Back to Blog</Link>

      <div className="blog-detail__hero">
        <img src={post.image} alt={post.title} />
        <div className="blog-detail__intro">
          <div className="blog-detail__meta">
            <span>{post.category}</span>
            <small>{post.date} | {post.readTime}</small>
          </div>
          <h1>{post.title}</h1>
          {post.subtitle ? <h2 className="blog-detail__subtitle">{post.subtitle}</h2> : null}
          <p>{post.excerpt}</p>
        </div>
        <div className="blog-detail__content">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

    </article>
  )
}
