import React, { useState, useEffect } from 'react';
import CommentService from '../../../services/commentService';
import CommentType from '../../../models/CommentType';
import NewComment from './NewComment';


interface MatchParams { 
  id: string;
}

const CommentSection: React.FC<MatchParams> = (props) => {
  const cService = new CommentService();
  const submissionId = props.id;
  const [results, setResults] = useState(new Array<CommentType>());
  const [render, setRender] = useState(false);

  const renderDate = (inputDate: string) => { 
      const cdate = (new Date(inputDate)).toString();
      return (
        <span>{ cdate }</span>
      );
  }

  const handleNewComment = () => {
    setRender(!render)
    fetchSubmissionComments()
  }

  useEffect(() => {
    fetchSubmissionComments();
  }, [render]);
  
  const fetchSubmissionComments = async () => { 
    await cService.getCommentsBySubmission(submissionId).then(response => {
    setResults(response);
  })
} 

  return (
    <>
      <div className="content-wrapper">
        <div className="container comment-container">
        <hr />
        <h1 className="comment-heading">{results.length} Comments:</h1>
          {
            results?.map((comment, index) => (
            <div className="row row-comment">
              <div className="col-sm col-comment">
                <div className="comment-top">
                { comment.user === "eq.body.user" ? 
                  <p className="comment-user">Anoymous</p> :
                  <p className="comment-user">{comment.user}</p>
                }
                <p className="comment-date">{comment.date}</p>
                </div> 
                <br/>
                <p className="comment-body">{comment.commentBody}</p>
              </div>
            </div>
          ))}
        </div>
        <NewComment key={submissionId} id={submissionId} handleNewComment={handleNewComment} /> 
      </div>
    </>
  )
};

export default CommentSection;
