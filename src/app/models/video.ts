export interface Video {
    id:string //videoId
    title:string; //title
    description:string //description
    url:string //url
}

export interface Playlist{
    userEmail:string;
    videos:Array<Video>;
}
