import React from 'react';
import { Link } from 'react-router-dom';


export default function Nav(props) {
  return (
    <header>
      <div>
        <Link to='/'>
          <img id="logo" src="https://www.sciencenews.org/wp-content/uploads/2019/08/sn-fallback.png" alt="logo"/>
        </Link>
        <Link id="home-link" to="/">Home</Link>
      </div>
      <nav>
        <a href="#pic-section"></a>
        <a href="#vid-section"></a>
        <a href="contact"></a>
        <Link to="/selector">
          <button>Select news</button>
        </Link>
      </nav>

    </header>
  )
}