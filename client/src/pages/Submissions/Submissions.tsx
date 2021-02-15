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
  const exampleSubmissionId = '602427dcd0cc890004c267cf'

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

    {/* <ul className="submission-list">
      <Card 
        title="Example Idea: Communal Green with Seating" 
        imageUrl="https://res.cloudinary.com/dura1eemm/image/upload/v1612961433/caw/igcefffzmdrgghcf05e4.png" 
        description="Our idea is to create a communal green area with seating. It will have an L shaped wooden bench, with a raised bed in the corner for growing plants, flowers and herbs. Upcycled household items such a..." 
        submissionId={exampleSubmissionId}/>
      {loading ? (
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
              ) : 
                results?.map((submission, index) => {
                    if(submission._id !== exampleSubmissionId) {
                      return (
                        <Card 
                          key={index} 
                          title={submission.title} 
                          description={submission.description} 
                          imageUrl={
                            submission.image == undefined || submission.image.length < 1 ? "https://imgur.com/n5VyLq2.png" : submission.image[0]
                          } 
                          submissionId={submission._id} />
                      )
                    }
                  }                  
                )
            }
    </ul> */}

    <Footer /> 
  </> 
  )
};

export default Feedback;
