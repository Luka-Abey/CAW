import React,  { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Wallpaper from '../../components/Wallpaper/Wallpaper';
import ReceiveSubmissionType from '../../models/ReceiveSubmissionType';
import feedbackService from '../../services/feedbackService';
import { RouteComponentProps } from 'react-router';

interface MatchParams { 
    submissionId: string;
}

const SingleSubmission: React.FC<RouteComponentProps<MatchParams>> = (props) => {

    const [submission, setSubmission] = useState<ReceiveSubmissionType>();

    const { submissionId } = props.match.params;

    const fService = new feedbackService();

    const fetchSubmission = () => {
        const sId = props.match.params;
    
        console.log(props.match.params.submissionId); 
        console.log(props.match.params); 
        // fService.getSubmissionById().then(response => setSubmission(response));
    }

    useEffect( fetchSubmission,  []);
    
  return (
  <>
    <Wallpaper />
    <div className="content-wrapper">
        <a className="btn btn-outline-success" href="/feedback">Back To Submissions</a>
        <h1> {submission?.title}</h1>
    </div>

    <Footer /> 
  </>
  )
};
export default SingleSubmission;
