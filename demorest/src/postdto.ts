export interface PostDTO_Response {
    userId:number;
    id:number;
    title:string;
    body:string;
}

export interface PostDTO_Request {
    userId:number;
    id?:number;
    title:string;
    body:string;
}
