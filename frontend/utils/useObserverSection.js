import { useContext, useEffect} from 'react'
import { AppContext } from '../views/page'

const useObserverSection = sectionRef => {

    const { observer } = useContext(AppContext)

    useEffect(() => {
        const section = sectionRef.current
        if(observer.observe) {
            observer.observe(section)
        }
        if(observer.unobserve) {
            return () => {
                observer.unobserve(section)
            }
        }
    }, [observer])

}

export default useObserverSection