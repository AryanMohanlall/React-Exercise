import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
  header: css`
    position: fixed;
    top: 20px;            
    left: 50%;            
    transform: translateX(-50%); 
    z-index: 1000;      

    width: 90%;          
    max-width: 1400px;    
    height: 64px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    background: ${token.colorBgContainer};
    box-shadow: ${token.boxShadowTertiary};
    border-radius: ${token.borderRadiusLG};
  `,
  logo: css`
    font-weight: bold;
    font-size: 1.2rem;
    color: ${token.colorPrimary};
    white-space: nowrap;
  `,
  menu: css`
    flex: 1;
    justify-content: flex-end;
    border-bottom: none;
    background: transparent;
  `
}));
