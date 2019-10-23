import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection(props) {
  return (
    <section id="hero-section">
      <div id="hero-image">
        <img src="https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg" alt="news_image"/>
      </div>
      <div id="hero-text">
      <h1>News</h1>
        <h2>News</h2>
        <Link id="home-link" to="/section">
          <button>Home</button>
        </Link>
      </div>
    </section>
  )
}