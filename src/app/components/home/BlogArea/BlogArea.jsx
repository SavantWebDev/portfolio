import CardBlog from '../CardBlog/CardBlog'

// Components
import style from './BlogArea.module.css'

export default function BlogArea() {
    return (
        <section className={style.container}>
            <CardBlog />

            <CardBlog />
            
            <CardBlog />
        </section>
    )
}