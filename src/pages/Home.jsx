import React from 'react'
import Layout from '../components/Layouts/Layout';
import {Link} from 'react-router-dom';
import '../styles/Homestyle.css'

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{backgroundImage : 'url("images/bgfoodimage.jpg")'}}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food in India</p>
          <Link to="/menu">
            <button>Order Now</button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
