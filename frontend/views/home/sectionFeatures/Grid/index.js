import classes from './style.module.css'
import { useContext } from 'react'
import { AppContext } from '../../../page'

const Title = ({ icon, text }) => {
	return (
		<div className={classes.title}>
			<i className={icon}></i>
			<span> { text } </span>
		</div>
	)
}


const Minor = ({ article }) => {
	const { selectArticle } = useContext(AppContext)
	const { img, icon, title } = article
	return (
		<li className={classes.minor} onClick={() => selectArticle(article)}>
			<div className={classes.colorHover}></div>
			<img src={img} alt="image minor of slider" />
			<Title icon={icon} text={title} />
		</li>
	)
}

const Mayor = ({ article }) => {
	const { img } = article
	return (
		<li className={classes.mayor} >
			<img src={img} alt="image mayor of slider" />
		</li>
	)
}

export default function Grid () {
	const { articles } = useContext(AppContext)
	return (<>
		<section className={classes.container}>
			<ul className={classes.grid}>
				<Mayor article={articles[0]} />
				<Minor article={articles[1]}  />
				<Minor article={articles[2]} />
			</ul>
		</section>
	</>)
}