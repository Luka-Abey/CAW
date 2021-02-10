import React, { useState, useEffect } from 'react';
import CommentService from '../../../services/commentService';
import CommentType from '../../../models/CommentType';

interface MatchParams { 
  id: string;
}

const CommentSection: React.FC<MatchParams> = (props) => {
  const cService = new CommentService();
  const submissionId = props.id;
  const [results, setResults] = useState(new Array<CommentType>());
  
  useEffect(() => {
    fetchSubmissionComments();
  }, []);
  
  const fetchSubmissionComments = async () => { 
    await cService.getCommentsBySubmission(submissionId).then(response => {
    setResults(response);
  })
} 

  return (
    <>
      <div className="content-wrapper">
        <div className="container my-container">
        <h1 className="custom-heading">Comments</h1>
          {
            results?.map((comment, index) => (
            <div className="row my-row">
              <div className="col-sm my-col">
                <p>{comment.user}</p>
                <small>{comment.date}</small>
                <br/>
                <p className="mb-1">{comment.commentBody}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
};

export default CommentSection;
