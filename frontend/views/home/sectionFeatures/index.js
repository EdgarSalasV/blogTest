import { useRef } from 'react'
import useObserverSection from '../../../utils/useObserverSection'
import Article from './article'
import Grid from './Grid'

const index = () => {
    // Subscribe to the Observer Mutation API using custom hook
    // to get exact position of selected title of the nav header 
    const sectionRef = useRef(null)
    useObserverSection(sectionRef)
    
    return (
        <div id='what-we-do' ref={sectionRef}>
            <Grid />
            <Article />
        </div>
    )
}

export default index
