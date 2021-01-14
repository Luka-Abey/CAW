import React from 'react';

const Home: React.FC = () => {
 
  return (
  <>
    <div className="wallpaper-container">
      <div className="welcome-content">
        {/* <h1 className="title">Welcome To</h1>  */}
        <img className="img-fluid" src="https://imgur.com/fNMGwNr.png" alt="logo"/>
      </div>
    </div> 

    {/* ========================================================================================= */}
    <div className="main-content-container">
      <div className="about-caw-info">
      <h2 className="custom-heading">Who are C.A.W</h2>
      <p>Community Action on Waste is a Leeds based community co-operative , made up of local residents, alumni and students. Every year, in June, hundreds of tonnes of waste is left on the streets of Leeds. The kind of things left are exactly the kind of things new students will be buying new in September. We want this to end.
      <br/>
      You might know us from our Free Shops, which we ran back in September. We put a load of stuff donated by students in June into one of our members' basements. Then, we set up shop in September to give it back to students as they arrived in Leeds - pay as you feel. We raised over £250 and we’re very happy about this!
      </p>
      </div>
      <div className="current-project-info">
        <h2 className="custom-heading">Current Project</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem aut architecto deleniti laboriosam tenetur consequuntur maxime, doloremque eum laborum harum fugit iste numquam ut esse enim magnam animi quam.</p>
      </div>
    </div>
    {/* ======================================================================================== */}
    <footer>
      <p>Contact Us: <a href="https://www.facebook.com/CommunityActionWaste">Facebook</a></p>
    </footer>
  </>
  )
};


export default Home;
