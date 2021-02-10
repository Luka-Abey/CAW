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
      <ul className="submission-list">
      {
      results?.map((comment, index) => 
        <li>{comment.user}: {comment.commentBody}</li>
      )}
    </ul>
    </>
  )
};

export default CommentSection;
