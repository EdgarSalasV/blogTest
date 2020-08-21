import { useContext, useRef } from 'react'
import { AppContext } from '../../page'
import useObserverSection from '../../../utils/useObserverSection'
import classes from './style.module.css'

const Type = ({ type }) => {
	const { changeTypeProjectSelected, typeProjectSelected } = useContext(AppContext)
	const classSelected = type === typeProjectSelected ? classes.typeSelected : ''
	return (
		<span onClick={()=>changeTypeProjectSelected(type)}
			className={`${classes.type} ${classSelected}`}>
			{ type } </span>
	)
}

const Types = () => {
	const { projectTypes  } = useContext(AppContext)
	return (
		<nav className={classes.nav}>
			<Type type='all' />
			{
				projectTypes.map((type, i) => {
					return(
						<span key={i}>
							<span> | </span>
							<Type type={type} key={i} />
						</span>
					)
				})
			}
		</nav>
	)
}

const sectionProyects = () => {
	// Subscribe to the Observer Mutation API using custom hook
	// to get exact position of selected title of the nav header 
    const sectionRef = useRef(null)
	useObserverSection(sectionRef)
	
	const { projectSelected, changeProjectSelected } = useContext(AppContext)
	const { img, name, location, software } = projectSelected 
	return (
		<section id='who-we-are' className={classes.container} ref={sectionRef}>
			<Types />
			<header className={classes.header}>
				<img src={img} alt="" />
				<div className={classes.actions}>
					<button onClick={() => changeProjectSelected('previous') }> {'<'} </button>
					<button onClick={() => changeProjectSelected('next') }> {'>'} </button>
				</div>
			</header>
			<main className={classes.main}>
				<p> <b>Project Name: </b> {name} </p>
				<p> <b>Location: </b> {location} </p>
				<p> <b>Software's: </b> {software} </p>
			</main>
		</section>
	)
}

export default sectionProyects
