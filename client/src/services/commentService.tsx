import config from './config';

class CommentService {
  async getCommentsBySubmission(SubmissionId: string): Promise<any> {
    const response = await fetch(`${config.baseUrl}/comments/${SubmissionId}`, {
      method: 'GET'
    });

    return response.ok ? response.json() : null;
  }

  async postComment(payload: any): Promise<boolean> {
    console.log(payload);
    const response = await fetch(`${config.baseUrl}/comments`, {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(payload)
    });

    return response.ok;
  }

}

export default CommentService;
