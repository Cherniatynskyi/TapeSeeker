import css from './DetailsInfo.module.css'

export const DetailsInfo = () =>{
    return(
        <div className={css.infoContainer}>
            <div className={css.mainInfo}>
                <div className={css.descriptionContainer}></div>
                <div className={css.castContainer}></div>
                <div className={css.reviewsContainer}></div>
            </div>
            <div className={css.articleInfo}>
                <div className={css.articleBlock}>
                    <p>Released year</p>
                </div>
            </div>
        </div>
    )
}