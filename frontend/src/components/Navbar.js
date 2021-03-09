import React, { Fragment } from 'react'
import {Link ,NavLink} from 'react-router-dom'
import Alert from './Alert'
import DrawerToggleButton from './SideDrawer/DrawerToggleButton'


const Navbar = (props) => {
    
    return(
        <Fragment>
            <nav className  = 'navbar'>
                <div className = 'navbar__top'>
                    <div className = 'navbar__top__logo'>
                        <Link className = 'navbar__top__logo__link' to = '/'>
                            <img src = 'imgs/logo.jpg' alt ='logo' className = 'navbar__logo'/>
                            <p className = 'navbar__heading'>Bold Collections</p>
                        </Link>
                    </div>

                    <div className = 'navbar--nav__button'>
                     <DrawerToggleButton click = {props.drawerClickHandler}/>
                    </div>

                    <div className = 'navbar__bottom'>
                        <li className = 'navbar__bottom__item'>
                        <NavLink className = 'navbar__bottom__item__link' exact to = '/about'>About</NavLink>
                    </li>
                    <li className = 'navbar__bottom__item'>
                        <NavLink className = 'navbar__bottom__item__link' exact to = '/listings'>Products</NavLink>
                    </li>
                    <li className = 'navbar__bottom__item'>
                        <NavLink className = 'navbar__bottom__item__link' exact to = '/contact'>Contact</NavLink>
                    </li>
                    </div>
                </div>   
            </nav>
            <Alert />
        </Fragment>
    )
}

export default Navbar