import React,  { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Wallpaper from '../../components/Wallpaper/Wallpaper';
import ReceiveSubmissionType from '../../models/ReceiveSubmissionType';
import feedbackService from '../../services/feedbackService';
import { RouteComponentProps } from 'react-router';
import CommentSection from './components/CommentSection';
import ImageCarousel from './components/ImageCarousel';

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
    const [loading, setLoading] = useState(true);

    const submissionId = props.match.params.id;
    const fService = new feedbackService();

    const fetchSubmission = async () => {
        await fService.getSubmissionById(submissionId).then(response => setSubmission(response));
        setLoading(false);
    }

    // on load 
    useEffect(() => {
        fetchSubmission();
    }, []);
    
  return (
  <>
    <Wallpaper />
    {loading ? (
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ) : 
              <> 
                <div className="content-wrapper">
                <a className="btn btn-outline-success" href="/feedback">Back To Submissions</a>
                <div className="container single-submission-container">
                  <div className="row my-row">
                    <div className="col-12 col-md-7 my-col">
                      <h1 className="heading title-heading">{submission?.title}</h1>
                      <p className="description">{submission?.description}</p>
                    </div>
                    <div className="col-12 col-md-5 my-col">
                    <ImageCarousel imageUrls={submission?.image}/>
                    </div>
                  </div>
                  <div className="row my-row">
                    <div className="col-sm my-col">
                      <h1 className="heading">Who would benefit from your idea and why?</h1>
                      <p>{submission?.benefit}</p> 
                    </div>
                  </div>
                  <div className="row my-row">
                    <div className="col-sm my-col">
                      <h1 className="heading">How will your idea make a positive contribution to the Hyde Park area?</h1>
                      <p>{submission?.contribution}</p>
                    </div>
                  </div>
                  <div className="row my-row">
                    <div className="col-sm my-col">
                      <h1 className="heading">Are there any practical skills needed to implement your idea?</h1>
                      <p>{submission?.skills}</p>
                    </div>
                  </div>
                  <div className="row my-row">
                    <div className="col-sm my-col">
                      <h1 className="heading">Outline the rough costs for your idea - how will it fit into the £250 budget?</h1>
                      <p>{submission?.costs}</p>
                    </div>
                  </div>
                  <div className="row my-row">
                    <div className="col-sm my-col">
                      <h1 className="heading">Will your idea need maintenance? If so, how might this happen?</h1>
                      <p>{submission?.maintenance}</p>
                    </div>
                  </div>
                  <div className="row my-row">
                    <div className="col-sm my-col">
                      <h1 className="heading">Is there anything else to consider for your idea?</h1>
                      <p>{submission?.other}</p>
                    </div>
                  </div>
              </div>
            </div>
            <CommentSection key={submissionId} id={submissionId} />
            </>
    }
    <Footer /> 
  </>
  )
};
export default SingleSubmission;
