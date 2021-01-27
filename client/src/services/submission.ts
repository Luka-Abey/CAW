import config from './config';

class ExampleService {
  async getData(): Promise<any> {
    const response = await fetch(`${config.baseUrl}`, {
      method: 'GET'
    });

    return response.ok ? response.json() : null;
  }

  async addData(payload: any): Promise<boolean> {
    const response = await fetch(`${config.baseUrl}/example`, {
      method: 'POST',
      body: JSON.stringify(payload)
    });

    return response.ok;
  }

  async updateData(id: string, payload: any): Promise<boolean> {
    // we are using the fetch client here. Modern browsers should have this implemented already.
    const response = await fetch(`${config.baseUrl}/example/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload)
    });

    return response.ok;
  }
}

export default ExampleService;
