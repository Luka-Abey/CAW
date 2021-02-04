export type ReceiveSubmissionType = {
    title: string;
    description?: string;
    benefit?: string;
    contribution?: string;
    skills?: string;
    costs?: string;
    maintenance?: string;
    other?: string;
    images?: Array<string>;
  }

export default ReceiveSubmissionType;