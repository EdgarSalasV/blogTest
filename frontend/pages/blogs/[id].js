import axios from 'axios'
import Id from '../../views/blog/[id]'

export async function getServerSideProps(context) {
   const id = context.params.id
   return {
 	  props: { id },
   }
}

export default Id
