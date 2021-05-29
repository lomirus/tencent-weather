import { CSSProperties } from 'react'

const styles: Record<string, CSSProperties> = {
    root: {
        color: "#b2b2b2",
        fontSize: "12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "32px 0 15px 0"
    },
    line: {
        height: "26px"
    }
}

const Header = () => {
    return <footer style={styles.root}>
        <span style={styles.line}>数据来源于本地服务器</span>
        <span style={styles.line}>Copyright © 1919 - 2077 Redrock. All Rights Reserved</span>
    </footer>
}


export default Header;