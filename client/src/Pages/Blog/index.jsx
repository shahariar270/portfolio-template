import React from 'react'
import SeoHead from '@Component/SeoHead'
import { Link } from 'react-router-dom'
import { createBlogSlug, featuredPosts } from './helper'

export const Blog = () => {
  return (
    <section className="st-portfolio--blog">
      <SeoHead
        title="Blog"
        description="Notes on React, frontend architecture, MERN development, and practical engineering guides."
      />
      <div className="blog-hero">
        <p>Blog Template</p>
        <h2>Notes on React, frontend systems, and MERN development.</h2>
        <span>
          A ready blog layout for publishing development articles, project learnings,
          and practical engineering guides.
        </span>
      </div>

      <div className="blog-grid">
        {featuredPosts.map((post, index) => (
          <article className="blog-card" key={index}>
            <img src={post.image} alt={post.title} />
            <div className="blog-card__meta">
              <span>{post.category}</span>
              <small>{post.readTime}</small>
            </div>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <div className="blog-card__footer">
              <time>{post.date}</time>
              <Link to={`/blog/${createBlogSlug(post.title)}`}>Read Post</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
