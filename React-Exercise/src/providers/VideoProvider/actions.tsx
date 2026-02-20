import { createAction } from "redux-actions";
import type { IVideoStateContext, IVideo } from "./context";

export const VideoActionEnums = {
    postVideoLoading : "POST_VIDEO_LOADING",
    postVideoSuccess : "POST_VIDEO_SUCCESS", 
    postVideoError : "POST_VIDEO_ERROR",

    getVideoLoading : "GET_VIDEO_LOADING",
    getVideoSuccess : "GET_VIDEO_SUCCESS",
    getVideoError : "GET_VIDEO_ERROR",

    getVideosLoading : "GET_VIDEOS_LOADING",
    getVideosSuccess : "GET_VIDEOS_SUCCESS",
    getVideosError : "GET_VIDEOS_ERROR",

    updateVideoLoading : "UPDATE_VIDEO_LOADING",
    updateVideoSuccess : "UPDATE_VIDEO_SUCCESS",
    updateVideoError : "UPDATE_VIDEO_ERROR",

    deleteVideoLoading : "DELETE_VIDEO_LOADING",
    deleteVideoSuccess : "DELETE_VIDEO_SUCCESS",
    deleteVideoError : "DELETE_VIDEO_ERROR"
} as const;

export const postVideoLoading = createAction<IVideoStateContext>(
    VideoActionEnums.postVideoLoading,
    () => ({ loading: true, success: false, error: false })
);

export const postVideoSuccess = createAction<IVideoStateContext, IVideo>(
    VideoActionEnums.postVideoSuccess,
    (video: IVideo) => ({ loading: false, success: true, error: false, video })
);

export const postVideoError = createAction<IVideoStateContext>(
    VideoActionEnums.postVideoError,
    () => ({ loading: false, success: false, error: true })
);

export const getVideoLoading = createAction<IVideoStateContext>(
    VideoActionEnums.getVideoLoading,
    () => ({ loading: true, success: false, error: false })
);

export const getVideoSuccess = createAction<IVideoStateContext, IVideo>(
    VideoActionEnums.getVideoSuccess,
    (video: IVideo) => ({ loading: false, success: true, error: false, video })
);

export const getVideoError = createAction<IVideoStateContext>(
    VideoActionEnums.getVideoError,
    () => ({ loading: false, success: false, error: true })
);

export const getVideosLoading = createAction<IVideoStateContext>(
    VideoActionEnums.getVideosLoading,
    () => ({ loading: true, success: false, error: false })
);

export const getVideosSuccess = createAction<IVideoStateContext, IVideo[]>(
    VideoActionEnums.getVideosSuccess,
    (videos: IVideo[]) => ({ loading: false, success: true, error: false, videos })
);

export const getVideosError = createAction<IVideoStateContext>(
    VideoActionEnums.getVideosError,
    () => ({ loading: false, success: false, error: true })
);

export const updateVideoLoading = createAction<IVideoStateContext>(
    VideoActionEnums.updateVideoLoading,
    () => ({ loading: true, success: false, error: false })
);

export const updateVideoSuccess = createAction<IVideoStateContext, IVideo>(
    VideoActionEnums.updateVideoSuccess,
    (video: IVideo) => ({ loading: false, success: true, error: false, video })
);

export const updateVideoError = createAction<IVideoStateContext>(
    VideoActionEnums.updateVideoError,
    () => ({ loading: false, success: false, error: true })
);

export const deleteVideoLoading = createAction<IVideoStateContext>(
    VideoActionEnums.deleteVideoLoading,
    () => ({ loading: true, success: false, error: false })
);

export const deleteVideoSuccess = createAction<IVideoStateContext, string>(
    VideoActionEnums.deleteVideoSuccess,
    (id: string) => ({ loading: false, success: true, error: false, id})
);

export const deleteVideoError = createAction<IVideoStateContext>(
    VideoActionEnums.deleteVideoError,
    () => ({ loading: false, success: false, error: true })
);