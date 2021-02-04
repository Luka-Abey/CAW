export type SendSubmissionType = {
    title: string;
    description?: string;
    benefit?: string;
    contribution?: string;
    skills?: string;
    costs?: string;
    maintenance?: string;
    other?: string;
    image?: Array<string>;
  }

export default SendSubmissionType;