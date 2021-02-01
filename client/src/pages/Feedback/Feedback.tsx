import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Wallpaper from '../../components/Wallpaper/Wallpaper';
import FeedbackService from '../../services/feedbackService';
import TSubmission from '../../models/TSubmission';

const Feedback: React.FC = () => { 
  
  const fService = new FeedbackService;
  const [results, setResults] = useState(new Array<TSubmission>());
  const [loading, setLoading] = useState(true);

  // on load 
  useEffect(() => {
      fetchSubmissions();
  }, []);


   const fetchSubmissions = async () => { 
      fService.getSubmissions().then(response => { 
      setResults(response);
      setLoading(false);
    });
  } 


  return (  
  <>
    <Wallpaper />
    <div className="feedback-content">
        <h1>No ideas have been submitted Yet:</h1>
        <h3>Please check back soon!</h3>
      <hr/>
    {/* <h3>SUBMISSIONS:</h3>
    <hr/>
        <ol>
          {results?.map((submission, index) => 
          <li className="submission-item" key={index}>title: {submission.title} </li>) }
        </ol> */}
    </div>
    <Footer /> 
  </> 
  )
};

export default Feedback;
