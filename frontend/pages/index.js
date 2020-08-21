import axios from 'axios'
import { useContext, useEffect } from 'react'
import Head from 'next/head'
import SectionProyects from '../views/home/sectionProyects'
import SectionFeatures from '../views/home/sectionFeatures'
import { AppContext } from '../views/page'

export default function Home({ initValues }) {
  const { setProjects, setProjectTypes, setFiles, projects } = useContext(AppContext)

  useEffect(() => {
    if(projects.length) {
      const { projects, projectTypes, files } = initValues
      // setProjects(projects)
      // setProjectTypes(projectTypes)
      // setFiles(files)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Boreal - 3D </title>
      </Head>
      <SectionFeatures/>
      <SectionProyects/>
    </>
  );
}

export async function getServerSideProps(context) {

  // const projectsData = (await axios.get('https://jsonplaceholder.typicode.com/todos')).data
  // const projectTypesData = (await axios.get('https://jsonplaceholder.typicode.com/todos')).data
  // const files = (await axios.get('https://jsonplaceholder.typicode.com/todos')).data

  // const projects = projectsData.map(({file_id, type_id, ...data}) => ({
  //   img: files.find(({ id }) => id === file_id).url,
  //   type: projectTypesData.find(({ id }) => id === type_id).name,
  //   ...data
  // }))
  // const projectTypes = projectTypesData.map(({name}) => name)
  // const initValues = { projects, projectTypes }
  const initValues = { projects: {}, projectTypes: {} }
  return {
    props: { initValues }, 
  }
}