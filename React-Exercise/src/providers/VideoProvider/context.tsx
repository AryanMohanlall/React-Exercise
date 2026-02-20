import { createContext } from "react";


export interface IVideo{
    img: string;
    title: string;
    description: string;
    avatar?: string;
    id: string;
    link: string;
    onClick?: (id: string) => void; 
}

export interface IVideoStateContext{
    loading: boolean,
    success: boolean,
    error: boolean,
    video ?: IVideo,
    videos ?: IVideo[]
}

export interface IVideoActionContext{
    postVideo: (video : IVideo) => void;
    getVideos: () => void;
    getVideo: (id : string) => void;
    updateVideo: (video : IVideo) => void;
    deleteVideo: (id : string) => void;
}

export const INITIAL_STATE : IVideoStateContext = {
    loading : false,
    success : false,
    error : false
}


export const VideoStateContext = createContext<IVideoStateContext>(INITIAL_STATE);

export const VideoActionContext = createContext<IVideoActionContext | undefined>(undefined);