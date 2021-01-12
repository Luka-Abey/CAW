import React from 'react';
import Header from '../../components/Header/Header';

const Home: React.FC = () => (
  
  <body className="text-center" > 
    <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
      <Header /> 
      
      <main role="main" className="inner cover">
        <img src="../media/logo.jpg" alt="logo" />
        <h1 className="cover-heading">Community Action on Waste</h1>
        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi laboriosam voluptatem autem eius nobis ab ex iure aliquam deserunt eligendi perferendis sunt, necessitatibus maxime reiciendis inventore error ratione excepturi quis..</p>

        <h2 className="">About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sed corrupti iure dolor? Quia voluptate id, eius temporibus autem distinctio perspiciatis ad quas minus magni assumenda fugit eos expedita omnis?</p>

      </main>

      <footer className="card-footer">
        <div className="inner">
          <p>Check out our social media <a href="https://www.facebook.com/CommunityActionWaste">Facebook </a>.</p>
        </div>
      </footer>
    </div>
    </body>
);

export default Home;
