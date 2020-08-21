import User from '../views/user'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { AppContext } from '../views/page'


const user = () => {
    const router = useRouter()
    const { user } = useContext(AppContext)

    useEffect(() => {
        if(!user) {
            router.push('/login')
        }
    }, [])

    if(user) {
        return <User />
    } else {
        return null 
    }
}

export default user