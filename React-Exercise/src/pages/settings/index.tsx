import React from 'react';
import { Button, Form, Input, Select, Space, Card, Typography, message } from 'antd';
import { DeleteOutlined, LockOutlined, SaveOutlined } from '@ant-design/icons';
import { useStyles } from './styles/style';
import { useVideoActions, useVideoState } from '../../providers/VideoProvider';

const { Title } = Typography;

const Settings: React.FC = () => {
  const { styles } = useStyles();
  const [updateForm] = Form.useForm();
  const [deleteForm] = Form.useForm();
  
  const { videos } = useVideoState();
  const { updateVideo } = useVideoActions();
  const { deleteVideo } = useVideoActions();

  const onFinishUpdate = (values: any) => {
    const { videoId, property, value } = values;

    const existingVideo = videos?.find(v => v.id === videoId);

    if (!existingVideo) {
      return message.error('Video ID not found!');
    }

    const updatedData = { 
      ...existingVideo, 
      [property]: value
    };

    if(values.password !== localStorage.getItem('password')){
        message.error(`Incorrect password`);
        return;
    }

    updateVideo(updatedData);
    message.success(`Updated ${property} successfully!`);
    updateForm.resetFields();
  };

  const onFinishDelete = (values: any) => {
       const { videoIdDelete, value} = values;

       const existingVideo = videos?.find(v => v.id === videoIdDelete);

       if (!existingVideo) {
         return message.error('Video ID not found!');
       }

      if(values.passwordDelete !== localStorage.getItem('password')){
          message.error(`Incorrect password`);
          return;
      }

      deleteVideo(existingVideo.id);
      message.success(`Deleted video successfully!`);
      deleteForm.resetFields();
  }

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <Title level={3} style={{ color: '#fff', textAlign: 'center', marginBottom: 30 }}>
          Video Update
        </Title>

        <Form form={updateForm} layout="vertical" onFinish={onFinishUpdate} requiredMark={false}>
          <Form.Item
            label={<span className={styles.formLabel}>Video ID</span>}
            name="videoId"
            rules={[{ required: true, message: 'Please input a Video ID' }]}
          >
            <Input placeholder="Enter the ID of the video to edit" />
          </Form.Item>

          <Form.Item label={<span className={styles.formLabel}>Property to Update</span>} required>
            <Space.Compact style={{ width: '100%' }}>
              <Form.Item name="property" noStyle rules={[{ required: true }]}>
                <Select placeholder="Select property" style={{ width: '40%' }}>
                  <Select.Option value="link">Link</Select.Option>
                  <Select.Option value="description">Description</Select.Option>
                  <Select.Option value="title">Title</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item name="value" noStyle rules={[{ required: true }]}>
                <Input placeholder="Input new value" style={{ width: '60%' }} />
              </Form.Item>
            </Space.Compact>
          </Form.Item>

          <Form.Item 
            label={<span className={styles.formLabel}>Confirm Password</span>} 
            name="password" 
            rules={[{ required: true}]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0 }}>
            <Button type="primary" htmlType="submit" block className={styles.submitBtn} icon={<SaveOutlined />}>
              Update
            </Button>
          </Form.Item>
        </Form>
      </Card>



      <Card className={styles.card}>
        <Title level={3} style={{ color: '#fff', textAlign: 'center', marginBottom: 30 }}>
          Video Delete
        </Title>
      <Form form={deleteForm} layout="vertical" onFinish={onFinishDelete} requiredMark={false}>
          <Form.Item
            label={<span className={styles.formLabel}>Video ID</span>}
            name="videoIdDelete"
            rules={[{ required: true, message: 'Please input a Video ID' }]}
          >

            <Input placeholder="Enter the ID of the video to delete" />
          </Form.Item>

          <Form.Item 
            label={<span className={styles.formLabel}>Confirm Password</span>} 
            name="passwordDelete" 
            rules={[{ required: true}]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block className={styles.submitBtn} icon={<DeleteOutlined />}>
              Delete
            </Button>
          </Form.Item>
      </Form>
      </Card>
    </div>
  );
};

export default Settings;
