import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
  container: css`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
    flexDirection: row;
    gap: 40px;
  `,

  card: css`
    width: 100%;
    max-width: 600px;
    background: rgba(255, 255, 255, 0.1) !important;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
    border-radius: ${token.borderRadiusLG}px !important;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  `,

  formLabel: css`
    color: ${token.colorWhite} !important;
  `,

  submitBtn: css`
    border-radius: ${token.borderRadiusSM}px;
    height: 40px;
    margin-top: 20px;
  `
}));