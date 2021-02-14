import React,  { useEffect, useState } from 'react';
import commentService from '../../../services/commentService';
import CommentType from '../../../models/CommentType';
import { setSourceMapRange } from 'typescript';

interface MatchParams { 
  id: string;
  handleNewComment: () => void;
}

const NewComment: React.FC<MatchParams> = (props) => {
  const submissionId = props.id;
  const handleNewComment = props.handleNewComment;
  const cService = new commentService;
  const [loading, setLoading] = useState(false)
  const [comment, setComment] = useState<CommentType>({
    commentBody: "",
    submission: submissionId,
    user: ""
  });
  
  // nice-to-have show filenames when selected + a way to remove a file. 
  const handleInputText = (e: React.FormEvent<HTMLInputElement>) => {
    const {value, name} = e.currentTarget;  
    setComment({ ...comment, [name]: value});
  }

  // validate submissions & send off the submission.
  const handleSubmit = async (e: React.FormEvent<EventTarget>) => { 
    e.preventDefault();
    setLoading(true)
    cService.postComment(comment)
    setComment({
      commentBody: "",
      submission: submissionId,
      user: ""
    })
    handleNewComment();
    setLoading(false)
    // re-render component here... then comment will instantly come up
}
  
  return (
  <>
        <form className="submission-form comment-form" onSubmit={handleSubmit}>
          <div className="form-content-wrapper">
            <div className="form-group">
              <label >Name</label>
              <input type="text" className="form-control" maxLength={130} required name="user" onChange={handleInputText} value={comment.user} />
            </div>
            <div className="form-group">
              <label >Comment</label>
              <input type="text" className="form-control text-area" maxLength={3000} required name="commentBody" onChange={handleInputText} value={comment.commentBody} />
            </div>
           </div>
            {loading ? (
                <button className="btn btn-primary" type="button" disabled>
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </button>
              ) : 
                <button type="submit" className="btn btn-primary" >
                  Submit
                </button>
            }
        </form>
  </>
  )
};
export default NewComment;
