import classes from './style.module.css'
import { useContext } from 'react'
import { AppContext } from '../../../page'


const Article = () => {
	const { articles } = useContext(AppContext)
	const { title, body, icon } = articles[0]

	return (
		<section className={classes.article}>
			<main className={classes.main}> 
			    <h2 className={`${classes.title} secondTitle`}>
					<i className={icon}></i>
					{ title }
				</h2>
                <div dangerouslySetInnerHTML={{__html: body}}></div>
            </main>
            <aside className={classes.aside}>
                <button className='btnAction'> HIRE US </button>
            </aside>
		</section>
	)
}

export default Article