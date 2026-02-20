import { Typography } from "antd";
import { Footer } from "antd/es/layout/layout";
import { useStyles } from "./styles/style";

const Layout = ({children} : {children : React.ReactNode})=>{
    const { styles } = useStyles();
    return(
        <>
        {children}
        <Footer className={styles.footer}>
            <Typography.Text style={{ color: '#fff' }}>
                Simple React Video App using Providers
            </Typography.Text>
        </Footer>
        </>
    );
}

export default Layout;