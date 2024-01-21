import css from './FooterPost.module.css'


export const FooterPost = () =>{
    return(
        <div className={css.heroAddPosterContainer}>
                <div className={css.heroAddPoster}>
                    <div className={css.heroPosterTextContainer}>
                        <div>
                            <h2>Join our community right now</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum unde maiores praesentium?</p>
                        </div>
                        <button className={css.posterButton}>Join now !</button>
                    </div>
                    
                </div>
            </div>
    )
}