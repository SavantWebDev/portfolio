import style from './CardsColaborators.module.css'

export default function CardsColaborators() {

    return (
        <article className={`${style.cardColaborator}`}>
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
                    <li>Designers</li>
                </ul>
            </div>

            {/* Decorator Glow */}
            <svg className={style.decoratorGlow} width="821" height="821" viewBox="0 0 821 821" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_783_328)">
                <circle cx="410.5" cy="410.5" r="210.5" fill="#1BCFBD" fill-opacity="0.13"/>
                </g>
                <defs>
                <filter id="filter0_f_783_328" x="0" y="0" width="821" height="821" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_783_328"/>
                </filter>
                </defs>
            </svg>

        </article>
    )
}