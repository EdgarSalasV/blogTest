import { useRef } from "react";
import useObserverSection from "../../../utils/useObserverSection";
import Contacts from "./contacts";
import Icons from "./icons";
import classes from "./style.module.css";
const Footer = () => {
  const sectionRef = useRef();
  useObserverSection(sectionRef);
  return (
    <footer id="contact-us" className={classes.footer} ref={sectionRef}>
      <img src="/images/footer/section.png" alt="background image" />
      <h4>CONTACT US</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        aperiam odit dolorem officia reiciendis similique accusantium earum
        deserunt provident. Veritatis a reiciendis dolor ut dicta aperiam
        voluptas harum sit delectus?
      </p>
      <Contacts />
      <Icons />
    </footer>
  );
};

export default Footer;
