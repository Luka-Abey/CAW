export type CommentType = {
  _id?: string;
  submission: string;
  commentBody: string;
  user: string;
  date?: Date;
}

export default CommentType;