import classes from './style.module.css'

const InfoContact = ({ title, children }) => {
  return (
    <li className={classes.infoContact}>
      <h5 className={classes.infoContactTitle}> {title} </h5>
      {children}
    </li>
  )
}

const Contacts = () => {
  return (
    <div className={classes.contacts}>
      <InfoContact title='PHONE'>
        <p> (33) 3456-1234 </p>
        <p> (33) 3123-5432 </p>
      </InfoContact>
      <InfoContact title='EMAIL'>
        <p>info@borela.com</p>
      </InfoContact>
      <InfoContact title='ADDRESS'>
        <p> Av. López Mateo </p>
        <p> WeWork Metdown </p>
        <p> Guadalajara México </p>
      </InfoContact>
    </div>
  )
}

export default Contacts
