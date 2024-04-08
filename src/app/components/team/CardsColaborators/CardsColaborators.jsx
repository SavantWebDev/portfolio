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

                {/* Span Button */}
                <button className={style.spanButton}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_800_132)">
                        <path d="M25.8519 18.1479V25.7035M25.8519 25.7035H18M25.8519 25.7035L20.0741 19.9257" stroke="#595959"/>
                        </g>
                        <g clip-path="url(#clip1_800_132)">
                        <path d="M25.8519 7.85205V0.296495M25.8519 0.296495H18M25.8519 0.296495L20.0741 6.07427" stroke="#595959"/>
                        </g>
                        <g clip-path="url(#clip2_800_132)">
                        <path d="M0.148148 18.1479V25.7035M0.148148 25.7035H8M0.148148 25.7035L5.92593 19.9257" stroke="#595959"/>
                        </g>
                        <g clip-path="url(#clip3_800_132)">
                        <path d="M0.148148 7.85205V0.296495M0.148148 0.296495H8M0.148148 0.296495L5.92593 6.07427" stroke="#595959"/>
                        </g>
                        <circle cx="13" cy="13" r="1.5" stroke="#1ACEB5"/>
                        <defs>
                        <clipPath id="clip0_800_132">
                        <rect width="8" height="8" fill="white" transform="translate(18 18)"/>
                        </clipPath>
                        <clipPath id="clip1_800_132">
                        <rect width="8" height="8" fill="white" transform="matrix(1 0 0 -1 18 8)"/>
                        </clipPath>
                        <clipPath id="clip2_800_132">
                        <rect width="8" height="8" fill="white" transform="matrix(-1 0 0 1 8 18)"/>
                        </clipPath>
                        <clipPath id="clip3_800_132">
                        <rect width="8" height="8" fill="white" transform="matrix(-1 0 0 -1 8 8)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </button>
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