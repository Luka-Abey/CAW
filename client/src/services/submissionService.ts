import config from './config';

class SubmissionService {
  async getSubmission(): Promise<any> {
    const response = await fetch(`${config.baseUrl}/example`, {
      method: 'GET'
    });

    return response.ok ? response.json() : null;
  }

  async postSubmission(payload: any): Promise<boolean> {
    console.log(payload);
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

export default SubmissionService;
