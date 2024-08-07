import css from './ProfilePopup.module.css'
import { ProfilePopup } from './ProfilePopup';
import { FaUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
import { useEffect } from 'react';

export const ProfileThumb = ({profile}) => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() =>{
        if((isOpen)){
          document.body.addEventListener('click', handlePopupClose)
        }
        return() => {
          document.body.removeEventListener('click', handlePopupClose)
        }
      })

      const handleOpenPopup = (e) =>{
        if((e.target.dataset.popup === 'menu') || (e.target.dataset.popup === 'el')){
          return
        }
        setIsOpen(prev => !prev)  
      }
    
      const handlePopupClose = (e) =>{
        if((e.target.dataset.popup !== 'popupBtn') && (e.target.dataset.popup !== 'menu')  && (e.target.dataset.popup !== 'el') && (e.target.nodeName !== 'path')){
          setIsOpen(prev => !prev)
        }
      }
      

  return (
    <div onClick={(e)=>handleOpenPopup(e)} className={css.profileThumb} data-popup="popupBtn" >
        <FaUser data-popup="popupBtn"  />{profile?.name}<IoIosArrowDown data-popup="popupBtn"  />
        {isOpen && <ProfilePopup isOpen={isOpen}/>}
    </div>
  )
}
