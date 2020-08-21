import { useContext } from "react"
import { AppContext } from "../page"
import { setLogout } from '../../utils/session'
import classes from './style.module.css'

const user = ( ) => {
    const { user, setUser } = useContext(AppContext)

    const getData = () => {
        if(user) {
            return (
                Object.entries(user)
                .map(([key, value], i) => {
                    return(
                        <div key={i}>
                            <strong> { key } </strong>
                            <span> { value } </span>
                        </div>
                    )
                })
            )
        } else {
            return null
        }
    }

    return (
        <div>
            <h1>Datos</h1>
            { getData() }
            <button className={`btnAction ${classes.btnLogout}`}
                onClick={() => setLogout(setUser)}>
                Cerrar sesión
            </button>
        </div>
    )
}

export default user