import { IComment } from "./IComment";

export interface IPost {
    postId: number,
    title: string;
    description: string;
    category: string;
    comments: IComment[];
    image: string;
}