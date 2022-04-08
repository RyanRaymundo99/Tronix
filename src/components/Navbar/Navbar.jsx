import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDropDown, Notifications, Person, Search } from '@mui/icons-material';
import './navbar.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null)
  };

  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='navbar__container'>
        <div className='navbar__left-side'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="logo" />

            <Link to="/" className='link'><span>Homepage</span></Link>
            <Link to="/series" className='link'><span>Series</span></Link>
            <Link to="/movies" className='link'><span>Movies</span></Link>
            <span>New and Popular</span>
            <span>My List</span>
        </div>
        <div className='navbar__right-side'>
            <Search className='navbar__search-icon'/>
            <span>Kid</span>
            <Notifications className='navbar__notification-icon'/>
            <Person className='navbar__user-icon'/>

            <div className='navbar__profile'>
            <ArrowDropDown className='navbar__arrow-down-icon'/>
              <div className='options'>
                <span>Settings</span>
                <span>Logout</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar