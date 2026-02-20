import { handleActions, type Action } from "redux-actions";
import { VideoActionEnums } from "./actions";
import type { IVideo, IVideoStateContext } from "./context";
import { INITIAL_STATE } from "./context";

export const videoReducer = handleActions<IVideoStateContext, any>(
    {
        [VideoActionEnums.postVideoLoading]: (state, action: Action<IVideoStateContext>) => ({
            ...state,
            ...action.payload
        }),
        [VideoActionEnums.postVideoSuccess]: (state, action: Action<IVideoStateContext>) => ({
            ...state,
            ...action.payload
        }),
        [VideoActionEnums.postVideoError]: (state, action: Action<IVideoStateContext>) => ({
            ...state,
            ...action.payload
        }),

        [VideoActionEnums.getVideosLoading]: (state, action: Action<IVideoStateContext>) => ({
            ...state,
            ...action.payload
        }),
        [VideoActionEnums.getVideosSuccess]: (state, action: Action<IVideoStateContext>) => ({
            ...state,
            ...action.payload
        }),
        [VideoActionEnums.getVideosError]: (state, action: Action<IVideoStateContext>) => ({
            ...state,
            ...action.payload
        }),

        [VideoActionEnums.getVideoLoading]: (state, action: Action<IVideoStateContext>) => ({
            ...state,
            ...action.payload
        }),
        [VideoActionEnums.getVideoSuccess]: (state, action: Action<IVideoStateContext>) => ({
            ...state,
            ...action.payload
        }),
        [VideoActionEnums.getVideoError]: (state, action: Action<IVideoStateContext>) => ({
            ...state,
            ...action.payload
        }),

        [VideoActionEnums.updateVideoLoading]: (state, action: Action<IVideoStateContext>) => ({
            ...state,
            ...action.payload
        }),

        [VideoActionEnums.updateVideoSuccess]: (state, action: Action<IVideoStateContext>) => ({
            ...state,
            loading: false,
            success: true,
            error: false,
            videos: state.videos.map((video) =>
                video.id === action.payload.video.id
                    ? { ...action.payload.video }
                    : video
            )
        }),

        [VideoActionEnums.updateVideoError]: (state, action: Action<IVideoStateContext>) => ({
            ...state,
            ...action.payload
        }),

        [VideoActionEnums.deleteVideoLoading]: (state, action: Action<IVideoStateContext>) => ({
            ...state,
            ...action.payload
        }),
        [VideoActionEnums.deleteVideoSuccess]: (state, action: Action<IVideoStateContext>) => ({
            ...state,
            loading: false,
            success: true,
            error: false,
            videos: state.videos.filter((video) => video.id !== action.payload.id)
        }),
        [VideoActionEnums.deleteVideoError]: (state, action: Action<IVideoStateContext>) => ({
            ...state,
            ...action.payload
        }),
    },
    INITIAL_STATE
);
