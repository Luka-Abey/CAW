import config from './config';
import TSubmission from '../models/SendSubmissionType';

class FeedbackService {
  async getSubmissions(): Promise<TSubmission[]> {
    const response = await fetch(`${config.baseUrl}/submissions`, {
      method: 'GET'
    });

    return response.ok ? response.json() : null;
  }

  async addSubmission(payload: any): Promise<boolean> {
    const response = await fetch(`${config.baseUrl}/submissions`, {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(payload)
    });

    return response.ok;
  }

  async updateSubmission(id: string, payload: any): Promise<boolean> {
    // we are using the fetch client here. Modern browsers should have this implemented already.
    const response = await fetch(`${config.baseUrl}/example/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload)
    });

    return response.ok;
  }
}

export default FeedbackService;
