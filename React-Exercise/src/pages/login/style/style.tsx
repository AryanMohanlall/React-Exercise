import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token }) => ({
  pageWrapper: css`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #141414;
    width: 100vw;
    overflow: hidden;
  `,
  formCard: css`
    width: 100%;
    max-width: 400px;
    background: #1f1f1f;
    border: 1px solid #303030;
  `,
  formContainer: css`
    .ant-form-item-label > label {
      color: ${token.colorTextLightSolid} !important;
      font-weight: 500;
    }

    .ant-input, .ant-input-password {
       background: transparent;
      /*  color: black; */
    }
    
    .ant-form-item-explain-error {
      font-size: 12px;
    }
  `,
}));
