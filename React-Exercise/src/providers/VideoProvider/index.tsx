import { VideoActionEnums, deleteVideoError, deleteVideoLoading,deleteVideoSuccess, getVideoError, getVideoLoading, getVideoSuccess, getVideosError, getVideosLoading, getVideosSuccess, postVideoError, postVideoLoading, postVideoSuccess, updateVideoError, updateVideoLoading, updateVideoSuccess } from './actions';
import { videoReducer } from './reducer';
import { INITIAL_STATE, VideoActionContext, VideoStateContext } from './context';
import type { IVideo, IVideoStateContext, IVideoActionContext } from './context';
import { useContext, useReducer } from 'react';
import { getAxiosInstance } from '../../utils/axiosInstance';

export const VideoProvider = ({children} : {children : React.ReactNode}) => {

    const [state, dispatch] = useReducer(videoReducer, INITIAL_STATE);
    const instance = getAxiosInstance();

    const getVideos = () => {
        dispatch(getVideosLoading());

        instance.get("/videos/popular")
            .then((response) => {
                const mappedVideos: IVideo[] = response.data.videos.map((item: any) => ({
                    img: item.image,
                    id: item.id.toString(),
                    title: `Video by ${item.user.name}`,
                    description: `Duration: ${item.duration} seconds`,
                    avatar: item.image,
                    link: item.url
                }));

                dispatch(getVideosSuccess(mappedVideos));
            })
            .catch((error) => {
                console.log(error);
                dispatch(getVideosError());
            });
    };

        const updateVideo = (updatedVideo: IVideo) => {
            dispatch(updateVideoSuccess(updatedVideo));
        };

        const deleteVideo = (id: string) => {
            dispatch(deleteVideoSuccess(id)); 
        };
        
        const getVideo = async (str: string) => {
            dispatch(getVideoLoading());
            instance.get(`/videos/search?query=${str}`)
                .then((response) => {
                const mappedVideos: IVideo[] = response.data.videos.map((item: any) => ({
                    img: item.image,
                    id: item.id.toString(),
                    title: `Video by ${item.user.name}`,
                    description: `Duration: ${item.duration} seconds`,
                    avatar: item.image,
                    link: item.url
                }));
                    dispatch(getVideoSuccess(mappedVideos[0]));
                })
                .catch((error) => {
                    console.log(error);
                    dispatch(getVideoError());
                });
        };
        
        const postVideo = async (video: IVideo) => {
            dispatch(postVideoLoading());
            dispatch(postVideoSuccess(video));
        };
    return(
        <VideoStateContext.Provider value={state}>
            <VideoActionContext.Provider value={{getVideos, postVideo, getVideo, updateVideo, deleteVideo}}>
                {children}
            </VideoActionContext.Provider>
        </VideoStateContext.Provider>
    );
}

export const useVideoState = () => {
    const context = useContext(VideoStateContext);
    if (!context) {
        throw new Error('useVideoState must be used within a VideoProvider');
    }
    return context;
}

export const useVideoActions = () => {
    const context = useContext(VideoActionContext);
    if (!context) {
        throw new Error('useVideoActions must be used within a VideoProvider');
    }    return context;
}