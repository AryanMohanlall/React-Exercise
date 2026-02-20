import { useEffect } from 'react';
import { Row, Col, Spin, Empty } from 'antd';
import { useVideoState, useVideoActions } from '../../providers/VideoProvider';
import VideoCard from '../../components/video/';
import Layout from '../../layouts/video';

const Home = () => {
  const { videos, loading, error, video } = useVideoState();
  const { getVideos } = useVideoActions();

  useEffect(() => {
    if(videos?.length === 0 || !videos) getVideos();
  }, [videos]);


  if (loading) return <div style={{ textAlign: 'center', padding: '50px' }}><Spin size="large" /></div>;
  
  if (error) return <div style={{ color: 'white', textAlign: 'center' }}>Error loading videos.</div>;

  return (
    <Layout>
    <div style={{ padding: '20px' }}>
      {video && (
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ color: '#fff' }}>Search Result:</h2>
          <VideoCard
            {...video}
            onClick={(link) => window.open(link, '_blank')}
          />
        </div>
      )
      }
      <Row gutter={[16, 24]} justify="center">
        {videos?.length ? (
          videos.map((video) => (
            <Col key={video.id}>
              <VideoCard 
              {...video}
              onClick={(link) => window.open(link, '_blank')}              />
            </Col>
          ))
        ) : (
          <Empty description={<span style={{color: '#fff'}}>No videos found</span>} />
        )}
      </Row>
    </div>
    </Layout>
  );
};

export default Home;