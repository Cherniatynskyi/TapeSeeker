import Slider from "react-slick";
import css from './TrendingMovies.module.css'



export const TrendingSlider = ({movies}) =>{

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false
      };
    return(
        <div>
            <Slider {...settings}>
                {movies.map(movie =>{
                    return(
                        <div className={css.trendingItem}>
                            <div  key={movie.id}>
                                <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`: 'https://eticketsolutions.com/demo/themes/e-ticket/img/movie.jpg'} alt={movie.title}/>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}