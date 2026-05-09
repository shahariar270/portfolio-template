import React from 'react'
import SeoHead from '@Component/SeoHead'
import { Link } from 'react-router-dom'
import { createBlogSlug, featuredPosts } from './helper'

export const Blog = () => {
  return (
    <section className="st-portfolio--blog">
      <SeoHead
        title="Blog: React, Frontend, MERN Articles"
        description="Read practical React, frontend, and MERN engineering articles covering reusable components, responsive UI, API integration, and production-ready workflows."
      />
      <div className="blog-hero">
        <p>Engineering Notes</p>
        <h2>Practical React, Frontend, and MERN Guides</h2>
        <span>
          Actionable write-ups on component architecture, responsive design,
          and full-stack implementation patterns.
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
            {post.subtitle ? <p className="blog-card__subtitle">{post.subtitle}</p> : null}
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
