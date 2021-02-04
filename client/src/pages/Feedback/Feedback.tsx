import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Wallpaper from '../../components/Wallpaper/Wallpaper';
import FeedbackService from '../../services/feedbackService';
import TSubmission from '../../models/SendSubmissionType';
import Card from '../../components/Card/Card';
const Feedback: React.FC = () => { 
  
  const fService = new FeedbackService;
  const [results, setResults] = useState(new Array<TSubmission>());
  const [loading, setLoading] = useState(true);

  // on load 
  useEffect(() => {
      fetchSubmissions();
  }, []);


   const fetchSubmissions = async () => { 
      await fService.getSubmissions().then(response => { 
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
    </div> 
{/* 
    <ul className="submission-list">
      {
      results?.map((submission, index) => 
        <Card key={index} title={submission.title} description={submission.description} imageUrl={submission.image == undefined || submission.image.length < 1 ?  "https://imgur.com/n5VyLq2.png" : submission.image[0]} submissionId={1234556}/>
      )}
    </ul> */}


    {/* <div className="submissions-wrapper">
      <div className="container-fluid d-flex justify-content-center ">
        <div className="row">
          { results?.map((submission, index) => 
          <div className="col-4"><Card title={submission.title} description={submission.description} imageUrl="img" submissionId={1234556}/></div> )
          }
        </div>    
      </div>
    </div> */}
    <Footer /> 
  </> 
  )
};

export default Feedback;
