import css from './DetailsInfo.module.css'

export const ArticleInfo = () =>{
    return (
        <div className={css.articleInfo}>
                <div className={css.articleBlock}>
                    <p>Released year</p>
                    <span>year</span>
                </div>
                <div className={css.articleBlock}>
                    <p>Available languages</p>
                    <ul>map</ul>
                </div>
                <div className={css.articleBlock}>
                    <p>Rating</p>
                    <div></div>
                </div>
                <div className={css.articleBlock}>
                    <p>genres</p>
                    <ul></ul>
                </div>
                <div className={css.articleBlock}>
                    <p>Production countries</p>
                    <ul></ul>
                </div>
                <div className={css.articleBlock}>
                    <p>Production studios</p>
                    <ul></ul>
                </div>
            </div>
    )
}