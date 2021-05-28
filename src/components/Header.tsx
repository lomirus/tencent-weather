import { Interpolation, Theme } from '@emotion/react'
import { useContext } from 'react'

import Context from '../store/context'

const styles: Record<string, Interpolation<Theme>> = {
    main: {
        
    }
}

type PropsType = {

}

const Header = ({}: PropsType) => {
    const [state, dispatch] = useContext(Context);
    return <div css={styles.main}>

    </div>
}

export default Header;