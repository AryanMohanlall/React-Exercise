import React from 'react';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

interface VideoProps {
  src: string;
  title: string;
  description: string;
  avatar?: string;
  id: string;
  onClick?: (id: string) => void; 
}

const VideoCard: React.FC<VideoProps> = ({ src, title, description, avatar, id, onClick }) => (
  <Card
    hoverable
    onClick={() => onClick?.(id)} 
    style={{ 
      width: 300,
      background: 'rgba(255, 255, 255, 0.2)', 
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      borderRadius: '16px',
    }}
    cover={
      <img
        draggable={false}
        alt={title}
        src={src}
        style={{ borderRadius: '16px 16px 0 0' }}
      />
    }
  >
    <Meta
      avatar={<Avatar src={avatar || "https://api.dicebear.com"} />}
      title={<span style={{ color: '#fff' }}>{title}</span>}
      description={<span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{description}</span>}
    />
  </Card>
);

export default VideoCard;
