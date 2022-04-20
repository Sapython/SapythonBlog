export type CommentData = {
    id:string;
    userId: string;
    name: string;
    userImage:string;
    comment: string;
    date: Date;
    replyAvailable: boolean;
    likedUsers: string[];
    dislikedUsers: string[];
    flagged: boolean;
    flaggedMessage:string;
}
