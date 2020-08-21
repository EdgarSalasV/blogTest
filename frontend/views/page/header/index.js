import classes from './style.module.css'
import Nav from './nav'
import { useEffect, useRef, useState } from 'react'
import Logo from '../../../sharedComponents/logo'

const Header = () => {
    const headerRef = useRef()
    const [height, setHeight] = useState(0)
    useEffect(() => {
        const header = headerRef.current
        const { height } = window.getComputedStyle(header)
        setHeight(height)
    }, [])
    return (
        <>
        {/* get space dynamiclly from the height of header */}
        <div style={{marginTop: height}}></div>
        <header className={classes.header} ref={headerRef}>
            <Logo />
            <Nav />
        </header>
        </>
    )
}

export default Header