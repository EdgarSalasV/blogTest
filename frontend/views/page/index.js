import Head from 'next/head'
import Aside from './aside'
import Header from './header'
import Footer from './footer'
import { createContext, useState, useEffect } from 'react'
import classes from './style.module.css'
import { useRouter } from 'next/router'
import axios from 'axios'
import setupAxios from '../../utils/setupAxios'

export const AppContext = createContext(null)

const _body = `
<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae saepe fugit sunt earum rem. Tempore molestias delectus dolore laudantium cum non quaerat doloremque nihil! Rem eligendi corrupti magni expedita et. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia officia, iste ad atque architecto temporibus nisi cupiditate fuga unde dicta, deleniti aut laudantium qui eaque repudiandae eligendi ullam praesentium facilis?  </p> 

<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia officia, iste ad atque architecto temporibus nisi cupiditate fuga unde dicta, deleniti aut laudantium qui eaque repudiandae eligendi ullam praesentium facilis?  </p> `

const ARTICLES = [
    {   
        title: '3D Rendering',
        icon: 'fas fa-cube',
        img: '/images/section-1/1.jpg',
        body: _body
    }, 
    {
        title: 'Virtual Reality',
        icon: 'fa fa-robot',
        img: '/images/section-1/3.jpg',
        body: _body
    },
    {
        title: 'Real State Video',
        icon: 'fa fa-home',
        img: '/images/section-1/2.jpg',
        body: _body
    }
]

const PROJECTS = [
    {
        type: 'RESIDENTIAL',
        img: '/images/section-2/1.jpg',
        name: 'Mediterraean Home',
        location: 'Cabo San Luis, Mexico',
        software: '3D Max, Vray'
    },
    {
        type: 'COMERCIAL',
        img: '/images/section-2/1.jpg',
        name: 'Comercial Home',
        location: 'Cabo San Luis, Mexico',
        software: '3D Max, Vray'
    },
    {
        type: 'COMERCIAL',
        img: '/images/section-2/1.jpg',
        name: 'Comercial 2 Home',
        location: 'Cabo San Luis, Mexico',
        software: '3D Max, Vray'
    },
    {
        type: 'COMERCIAL',
        img: '/images/section-2/1.jpg',
        name: 'Comercial 3 Home',
        location: 'Cabo San Luis, Mexico',
        software: '3D Max, Vray'
    },
    {
        type: 'PRODUCT DESIGN',
        img: '/images/section-2/1.jpg',
        name: 'Design Home',
        location: 'Cabo San Luis, Mexico',
        software: '3D Max, Vray'
    },
]

const PROJECT_TYPES = [
    'RESIDENTIAL',
    'COMERCIAL',
    'PRODUCT DESIGN'
]

const Layout = ({ children }) => {
    return (
        <>
        <Aside />
        <div className={classes.container}>
            <Head>
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
            </Head>
            <Header />
            <main className={classes.mainContainer}> {children} </main>
            <Footer />
        </div>
        </>
    )
}


const index = ({ children }) => {
    const { pathname } = useRouter()
    const [hash, setHash] = useState('')
    const [observer, setObserver] = useState({})
    const [articles, setArticles] = useState(ARTICLES)
    
    const [projectSelected, setProjectSelected] = useState(PROJECTS[0])
    const [typeProjectSelected, setTypeProjectSelected] = useState('all')
    
    const [projects, setProjects] = useState(PROJECTS)
    const [projectTypes, setProjectTypes] = useState(PROJECT_TYPES)

    const [user, setUser] = useState(null)

    useEffect(() => {
        if(user) {
            setupAxios(axios, user.token)
        }
    }, [user])

    const selectArticle = article => {
        const tmpArticles = articles.filter(({ title }) => title !== article.title)
        tmpArticles.unshift(article)
        setArticles(tmpArticles)
    }

    const changeTypeProjectSelected = type => {
        setTypeProjectSelected(projectTypes.includes(type) ? type : 'all')
        const firstProject = type.toLowerCase() === 'all' 
                                ? projects[0] 
                                : projects.filter(project => project.type === type)[0]
        setProjectSelected(firstProject)
    }

    const changeProjectSelected = project => {
        const projectFilters = typeProjectSelected === 'all' 
                            ? projects
                            : projects.filter(_project => 
                                _project.type === typeProjectSelected)
        const indice = projectFilters.findIndex(_project => _project === projectSelected)

        switch(project) {
            case 'next':
                const nextProject = projectFilters[indice+1] || projectFilters[0]
                setProjectSelected(nextProject)
                break
            case 'previous':
                const previousProject = projectFilters[indice-1] || projectFilters[projectFilters.length-1]
                setProjectSelected(previousProject)
                break
            default: 
                break
        }
    }

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setHash(entry.target.id);
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.83,
        }
      );
      setObserver(observer);
    }, [])

    return (
        <AppContext.Provider value={{
            hash, observer, 
            articles, selectArticle,

            projectSelected, changeProjectSelected, 
            typeProjectSelected, changeTypeProjectSelected,

            projects, setProjects,
            projectTypes, setProjectTypes,

            user, setUser
        }}>
            {
                pathname !== '/login'
                    ? <Layout> { children } </Layout>
                    : children
            }
        </AppContext.Provider>
    );
};

export default index;
