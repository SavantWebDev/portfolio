import style from './CardsColaborators.module.css'

export default function CardsColaborators() {
    return (
        <article className={style.cardColaborator}>
            {/* Image Colaborator */}
            <div className={style.imageColaborator}>
                <img src="./images/colaborator.png" alt="Imagem Colaborador" />
            </div>

            {/* Information Area*/}
            <div className={style.informationArea}>
                <h1>
                    HUDSON
                    <br />
                    <b>VINI</b>
                </h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
                {/* Tags */}
                <ul className={style.tags}>
                    <li>Front-End</li>
                    <li>Design</li>
                </ul>
            </div>

            {/* Decorator Glow */}
            <svg className={style.decoratorGlow} width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M81.5 1L1 84.5L85 38.5L58.5 81.5L89.5 67L85 90.5" stroke="#BAFF01"/>
            </svg>

        </article>
    )
}