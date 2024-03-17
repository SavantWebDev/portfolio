'use client'
import style from './CardsProjects.module.css'

export default function CardsProjects({number, img, subTitle, Title, description, tags}) {

    let TagsGeradas = tags

    

    // console.log(TagsGeradas)

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

                {/* Tags View Area */}
                <div className={style.areaTagsView}>
                    {/* Tags */}
                    <ul className={style.tagsArea}> 
                    {
                        TagsGeradas.map((element, index) => { 
                            return <li key={index}>{element}</li>
                        })
                    }  
                    </ul>
                    {/* View Project */}
                    <a className={style.viewProject} href="">VER PROJETO
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.87488 9.12195C8.87488 8.65596 9.25264 8.2782 9.71863 8.2782L16.8781 8.2782C17.3441 8.2782 17.7218 8.65596 17.7218 9.12195L17.7218 16.2814C17.7218 16.7474 17.3441 17.1252 16.8781 17.1252C16.4121 17.1252 16.0343 16.7474 16.0343 16.2814L16.0343 9.9657L9.71863 9.9657C9.25264 9.9657 8.87488 9.58794 8.87488 9.12195Z" fill="#fff"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.52533 17.4747C8.19583 17.1452 8.19583 16.6109 8.52533 16.2814L15.7842 9.02254C16.1137 8.69303 16.648 8.69303 16.9775 9.02254C17.307 9.35204 17.307 9.88628 16.9775 10.2158L9.71857 17.4747C9.38907 17.8042 8.85484 17.8042 8.52533 17.4747Z" fill="#fff"/>
                        </svg>
                    </a>
                </div>
            </div>
        </article>
    )
}