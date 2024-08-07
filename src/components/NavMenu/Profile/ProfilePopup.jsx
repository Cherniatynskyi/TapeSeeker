import css from './ProfilePopup.module.css'
import { NavLink } from 'react-router-dom'

export const ProfilePopup = () => {


    
      
    return (
        <div dada-popup="menu"  className={css.popupBody}>
            <ul dada-popup="menu" className={css.menuList}>
                <NavLink to='/profile' className={css.listItem}>My Profile</NavLink>
                <NavLink  className={css.listItem}>My Library</NavLink>
                <NavLink  className={css.listItem}>Log out</NavLink>
            </ul>
        </div>
    )
}
