import { useEffect, useRef } from 'react'
import css from './TrailerModal.module.css'
import { IoClose } from "react-icons/io5";
import { useLockBodyScroll } from "@uidotdev/usehooks";


export const TrailerModal = ({ onClose, movieVids}) => {

    const firstRender = useRef(false)
    const trailerUrl = movieVids?.results?.find(element => element.name.includes("Official Trailer") || element.name.includes("Trailer"))
    useLockBodyScroll();

    useEffect(() => {
      if(firstRender.current === true){
        window.addEventListener('keydown', handleKeyDown)
      }

      return () => {
        firstRender.current = true
        window.removeEventListener('keydown', handleKeyDown)
      }
    },)

    const handleKeyDown = e => {
            if (e.code === 'Escape') {  
                onClose()              
            }
    }

    const handleBackdropClick = e => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    const handleButtonClose = ()=>{
      onClose()
    }

        return (
            <div className={css.Overlay} onClick={handleBackdropClick}>
                <div className={css.Modal}>
                    {trailerUrl ? 
                      <iframe className={css.frameStyle}  title={trailerUrl.name} allowFullScreen={true}
                        src={`https://www.youtube.com/embed/${trailerUrl.key}`}>
                      </iframe> : <div style={{color: "white", fontSize:"4em", paddingTop: "80px"}}>No trailers </div>
                    } 
                    <button className={css.modalCloseButton} onClick={handleButtonClose}><IoClose color='white' size="4em"/></button>
                </div>
            </div>
        )
}