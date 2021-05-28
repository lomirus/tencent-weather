import { useContext, CSSProperties } from 'react'

import Context from '../store/context'

const styles: Record<string, CSSProperties> = {
    main: {
        
    }
}

type PropsType = {

}

const Suggestions = ({}: PropsType) => {
    const [state, dispatch] = useContext(Context);
    return <div style={styles.main}>

    </div>
}

export default Suggestions;