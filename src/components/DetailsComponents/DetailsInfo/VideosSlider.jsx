
import Slider from "react-slick";
import css from './DetailsInfo.module.css'


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
            {movieVids &&
            <div>
                <Slider className={css.slider} {...settings}>
                    {movieVids?.results?.map(vid =>{
                            return (
                                <iframe className={css.frameStyle} key={vid.key} title={vid.name} allowFullScreen={true}
                                    src={`https://www.youtube.com/embed/${vid.key}`}>
                                </iframe>                      
                            )
                        })}
                    </Slider>
            </div>}
            </>)
}   


export default VideosSlider
