import classes from './style.module.css'
import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { AppContext } from '../..'

const LinkCustom = ({ href, children }) => {
    const { pathname } = useRouter()
    const classesLink = `
        ${classes.link}
        ${pathname===href ? classes.linkBold : ''}
    `
    return (
        <Link href={href}>
            <a className={classesLink}> { children } </a>
        </Link>
    )
}

const LinkHash = ({ id, children, ...props }) => {
    const { pathname } = useRouter()
    const { hash } = useContext(AppContext)
    const classesLink = `
        ${classes.link}
        ${hash === id ? classes.linkBold : ''}
    `

    if(pathname === '/') {
        return (
            <a href={'#'+id} className={classesLink} 
                {...props}> { children } </a>
        )
    } else {
        return (
            <Link href={'/#' + id }>
                <a className={classes.link} {...props}> { children } </a>
            </Link>
        )
    }
}

const Nav = () => {
    const { user } = useContext(AppContext)
    const [open, setOpen] = useState(false)
    const classesOpen = classes[open ? 'btnClose' : 'btnOpen']
    const classesIcon = open ? 'fa fa-times' : 'fas fa-bars'

    return (
        <>
            <nav className={`${classes.nav} ${classes[open ? 'navOpen' : 'navClose']}`}>
                <LinkHash id='what-we-do' onClick={() => setOpen(false)}> What we do </LinkHash>
                <LinkHash id='who-we-are' onClick={() => setOpen(false)}> Who we are </LinkHash>
                <LinkHash id='contact-us' onClick={() => setOpen(false)}> Contact us </LinkHash>
                <LinkCustom href='/blogs'> Blog </LinkCustom>
                <LinkCustom href={user ? '/user' : '/login'}>
                    <button className='btnAction'> { user ? 'Usuario' : 'Login' } </button>
                </LinkCustom>
            </nav>
            <button className={classesOpen + ' ' + classesIcon}
                onClick={()=>setOpen(!open)} > </button>
        </>
    )
}

export default Nav