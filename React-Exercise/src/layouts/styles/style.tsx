import { createStyles } from "antd-style";

export const useStyles = createStyles(({ css }) => ({
  footer: css`
    text-align: center;
    color: #fff;
    background-color: #4096ff;

    &.ant-layout-footer {
      padding: 24px; 
    }
  `,
}));
