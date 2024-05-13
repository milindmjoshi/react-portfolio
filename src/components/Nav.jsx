// Bringing in the required import from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom';;
import Navbar from './UI/Navbar';



export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  const currentPage = useLocation().pathname;
  console.log("current page:" + currentPage);
  return (
    <Navbar 
      links={[
        <Link key={1} className={currentPage === '/' ? 'navLink-active' : 'navLink'} to="/">
          About
        </Link>,
        <Link key={2} className={currentPage === '/portfolio' ? 'navLink-active' : 'navLink'} to="/portfolio">
          Portfolio
        </Link>,
        <Link key={3} className={currentPage === '/contact' ? 'navLink-active' : 'navLink'} to="/contact">
          Contact
        </Link>,
        <Link key={4} className={currentPage === '/resume' ? 'navLink-active' : 'navLink'} to="/resume">
          Resume
      </Link>,
      ]}
    />
  );
}
