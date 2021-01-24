import React from 'react';
import Footer from '../../components/Footer/Footer'
import Wallpaper from '../../components/Wallpaper/Wallpaper'

const Feedback: React.FC = () => (
  <>
    <Wallpaper />

    <div className="feedback-content">
        <h1>No ideas have been submitted</h1>
        <h3>Please check back soon!</h3>
    </div>
    <Footer /> 
  </>
);

export default Feedback;
