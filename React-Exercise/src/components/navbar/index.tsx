import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { HomeOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { useStyles } from './style/style';


const Navbar = () => {
  const { styles } = useStyles();
  const location = useLocation();

  const items = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: <Link to="/videos">Home</Link>,
    },
    {
      key: '/about',
      icon: <InfoCircleOutlined />,
      label: <Link to="/about">About</Link>,
    },
  ];

  return (
    <div className={styles.header}>
      <div className={styles.logo}>React App</div>
      <Menu 
        mode="horizontal" 
        selectedKeys={[location.pathname]} 
        items={items} 
        className={styles.menu}
      />
    </div>
  );
};

export default Navbar;
