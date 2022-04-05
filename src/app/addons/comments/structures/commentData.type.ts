export type CommentData = {
    id:string;
    userId: string;
    name: string;
    userImage:string;
    comment: string;
    date: Date;
    replyAvailable: boolean;
    likes: number;
    dislikes: number;
}
