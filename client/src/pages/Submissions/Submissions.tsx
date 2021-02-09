import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Wallpaper from '../../components/Wallpaper/Wallpaper';
import FeedbackService from '../../services/feedbackService';
import ReceiveSubmissionType from '../../models/ReceiveSubmissionType';
import Card from '../../components/Card/Card';
const Feedback: React.FC = () => { 
  
  const fService = new FeedbackService;
  const [results, setResults] = useState(new Array<ReceiveSubmissionType>());
  const [loading, setLoading] = useState(true);

  // on load 
  useEffect(() => {
      fetchSubmissions();
  }, []);


   const fetchSubmissions = async () => { 
      await fService.getSubmissions().then(response => {
      setResults(response);
      setLoading(false);
    })
  } 


  return (  
  <>
    <Wallpaper />
    <div className="feedback-content">
        <h1>No ideas have been submitted Yet:</h1>
        <h3>Please check back soon!</h3>
      <hr/>
    </div> 

    <ul className="submission-list">
      <Card title="Example Submission" imageUrl="https://imgur.com/n5VyLq2.png" description="This is an example submission" submissionId="example" />
      {
      results?.map((submission, index) => 
        <Card key={index} title={submission.title} description={submission.description} imageUrl={submission.image == undefined || submission.image.length < 1 ?  "https://imgur.com/n5VyLq2.png" : submission.image[0]} submissionId={submission._id}/>
      )}
    </ul>

    <Footer /> 
  </> 
  )
};

export default Feedback;
