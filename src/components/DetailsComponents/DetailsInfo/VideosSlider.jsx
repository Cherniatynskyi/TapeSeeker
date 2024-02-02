
import Slider from "react-slick";
import css from './DetailsInfo.module.css'
import { IoVideocamOff } from "react-icons/io5";


 const VideosSlider = ({movieVids}) =>{

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
      };

    
    return (<>
            {movieVids?.results?.length !== 0 ?
            <div>
                <Slider className={css.slider} {...settings}>
                    {console.log(movieVids)}
                    {movieVids?.results?.map(vid =>{
                            return (
                                <iframe className={css.frameStyle} key={vid.key} title={vid.name} allowFullScreen={true}
                                    src={`https://www.youtube.com/embed/${vid.key}`}>
                                </iframe>                      
                            )
                        })}
                    </Slider>
            </div> : <h3 className={css.noVideos}>No videos <IoVideocamOff /></h3>}
            </>)
}   


export default VideosSlider
