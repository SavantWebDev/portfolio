import style from './CardsProjects.module.css'

export default function CardsProjects({number, img, subTitle, Title, description, tags}) {

    let TagsGeradas = tags

    return (
        <article className={style.card}>
            {/* Image Area */}
            <div className={style.imageArea}>
                <img src={img} alt="Imagem do Projeto" />

                <span>{number}</span>
            </div>

            {/* Text Area */}
            <div className={style.textArea}>
                <span>{subTitle}</span>
                <h1>{Title}</h1>
                <p>{description}</p>
                {/* Tags */}
                <ul className={style.tagsArea}> 
                    {/* {
                        TagsGeradas.forEach((tag) => {
                            <li>{tag}</li>
                        })
                    } */}
                </ul>
            </div>
        </article>
    )
}