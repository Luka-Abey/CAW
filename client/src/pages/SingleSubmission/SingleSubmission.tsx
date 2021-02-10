import React,  { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Wallpaper from '../../components/Wallpaper/Wallpaper';
import ReceiveSubmissionType from '../../models/ReceiveSubmissionType';
import feedbackService from '../../services/feedbackService';
import { RouteComponentProps } from 'react-router';
import CardCarousel from './components/CardCarousel';

interface MatchParams { 
    id: string;
}

const SingleSubmission: React.FC<RouteComponentProps<MatchParams>> = (props) => {

    const [submission, setSubmission] = useState<ReceiveSubmissionType>({
      title: "",
      description: "",
      benefit: "",
      contribution: "",
      skills: "",
      costs: "",
      maintenance: "",
      other: "",
      image: [],
      _id: ""
    });

    const submissionId = props.match.params.id;
    
    const fService = new feedbackService();

    const fetchSubmission = () => {
        fService.getSubmissionById(submissionId).then(response => setSubmission(response));
    }

    useEffect( fetchSubmission,  []);
    
  return (
  <>
    <Wallpaper />
    <div className="content-wrapper">
        <h1 className="custom-heading">Our Example Submission</h1>
        <a className="btn btn-outline-success" href="/feedback">Back To Submissions</a>
        <div className="container my-container">
          <div className="row my-row">
            <div className="col-sm my-col">
              <h3 className="">{submission?.title}</h3>
              <p className="heading">In a few sentences, please explain your idea </p>
              <p>{submission?.description}</p>
            </div>
          </div>
          <div className="row row-image">
            <div className="col-sm my-col">
              <p className="heading">Feel free to draw or add images which might help us to imagine your idea </p>
              <div className="carousel-wrapper">
                <p>image carousel</p>
              </div>
            </div>
          </div>
          <div className="row my-row">
            <div className="col-sm my-col">
              <p className="heading">Who would benefit from your idea and why?</p>
               <p>{submission?.benefit}</p> 
            </div>
          </div>
          <div className="row my-row">
            <div className="col-sm my-col">
              <p className="heading">How will your idea make a positive contribution to the Hyde Park area?</p>
              <p>{submission?.contribution}</p>
            </div>
          </div>
          <div className="row my-row">
            <div className="col-sm my-col">
              <p className="heading">Are there any practical skills needed to implement your idea?</p>
              <p>{submission?.skills}</p>
            </div>
          </div>
          <div className="row my-row">
            <div className="col-sm my-col">
              <p className="heading">Outline the rough costs for your idea - how will it fit into the £250 budget?</p>
              <p>{submission?.costs}</p>
            </div>
          </div>
          <div className="row my-row">
            <div className="col-sm my-col">
              <p className="heading">Will your idea need maintenance? If so, how might this happen?</p>
              <p>{submission?.maintenance}</p>
            </div>
          </div>
          <div className="row my-row">
            <div className="col-sm my-col">
              <p className="heading">Is there anything else to consider for your idea?</p>
              <p>{submission?.other}</p>
            </div>
          </div>

      </div>
    </div>

    <Footer /> 
  </>
  )
};
export default SingleSubmission;
