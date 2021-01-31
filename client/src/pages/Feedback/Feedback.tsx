import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Wallpaper from '../../components/Wallpaper/Wallpaper';
import FeedbackService from '../../services/feedbackService';
import TSubmission from '../../models/TSubmission';

const Feedback: React.FC = () => { 
  
  const fService = new FeedbackService;
  const [results, setResults] = useState<Array<TSubmission>>();
  const [loading, setLoading] = useState(true);

  // on load 
  useEffect(() => {
      fetchSubmissions();
  }, []);


   const fetchSubmissions = async () => { 
      fService.getSubmissions().then(response => { 
      const resultsArray = response;
      setResults(resultsArray);
      setLoading(false);
    });
  } 


  return (  
  <>
    <Wallpaper />
    <div className="feedback-content">
        <h1>No ideas have been submitted Yet:</h1>
        <h3>Please check back soon!</h3>
        <ol>
          { loading ? <div>Loading...</div> : results?.map( request => 
          <li>{request} </li>) }
        </ol>

    </div>
    <Footer /> 
  </> 
  )
};

export default Feedback;
