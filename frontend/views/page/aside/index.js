import Link from 'next/link'
import classes from './style.module.css'

const Aside = () => {
    return (
        <aside className={classes.aside}>
            <span> By Guaoustudio 2019 |</span> 
            <Link href='/terms'>
                <a className={classes.link}>
                    Terms and Conditions  
                </a>
            </Link>
        </aside>
    )
}

export default Aside