import { Menu, Button } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HomeOutlined, InfoCircleOutlined, LoginOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import { useStyles } from './style/style';

const Navbar = () => {
  const { styles } = useStyles();
  const location = useLocation();
  const navigate = useNavigate();

  const isAdmin = localStorage.getItem('user_role') === 'Admin';

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const items = [
    {
      key: '/videos',
      icon: <HomeOutlined />,
      label: <Link to="/videos">Home</Link>,
    },

    ...(isAdmin ? [{
      key: '/settings',
      icon: <SettingOutlined />,
      label: <Link to="/settings">Settings</Link>,
    }] : []),
    {
      key: 'logout',
      label: (
        <Button 
          type="text" 
          danger 
          icon={<LogoutOutlined />} 
          onClick={handleLogout}
          style={{ padding: 0 }}
        >
          Logout
        </Button>
      ),
    },
  ];

  return (
    <div className={styles.header}>
      <div className={styles.logo}>{localStorage.getItem('email')} | {location.pathname}</div>
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