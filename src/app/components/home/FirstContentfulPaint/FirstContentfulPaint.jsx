import style from './FirstContentfulPaint.module.css'

export default function FirstContentfulPaint() {
    return (
        <section className={style.container}>
            {/* Text Area */}
            <div className={style.textArea}>
                {/* Sectext 1 */}
                <div className={style.secText}>
                    {/* Decorator */}
                    <svg className={style.decoratorText} width="117" height="149" viewBox="0 0 117 149" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 96L96 1L1 142L101 35.5L36.5 148.5L116 78L74.5 129.5" stroke="#1BCFBD"/>
                    </svg>

                    <h1>We shape</h1>
                    <div className={`${style.conector}  ${style.conec1}`}>
                        <img src="./icons/conector1.svg" alt="conector 1" />
                        <p>we are gorazdo <br />a unique digital agency</p>
                    </div>
                </div>
                {/* Sectext 2 */}
                <div className={style.secText}>
                    <h1>the future</h1>
                    <div className={`${style.conector}  ${style.conec2}`}>
                        <img src="./icons/conector2.svg" alt="conector 1" />
                        <p>we are gorazdo <br />a unique digital agency</p>
                    </div>
                </div>
                {/* Sectext 3 */}
                <div className={style.secText}>
                    <h1>of web</h1>
                    <div className={`${style.conector} ${style.conec3}`}>
                        <img src="./icons/conector3.svg" alt="conector 1" />
                        <p>we are gorazdo <br />a unique digital agency</p>
                    </div>
                </div>
            </div>

            {/* RollDown Animation */}
            <div className={style.rollDownAnimation}>
                <span className={style.ball}></span>
                <span className={style.line}></span>
            </div>

            {/* Image Area */}
            <div className={style.imageArea}>
                <img src="./images/imageFirstContentfulPaint.png" alt="" />
                <svg className={style.glowBlue} width="500" height="500" viewBox="0 0 888 799" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_579_115)">
                    <circle cx="443.953" cy="355.747" r="143.237" fill="#084AF3" fill-opacity="0.3"/>
                    </g>
                    <defs>
                    <filter id="filter0_f_579_115" x="0.715332" y="-87.4909" width="886.475" height="886.475" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_579_115"/>
                    </filter>
                    </defs>
                </svg>

                <span className={style.decoratorLineBall}></span>

                <svg className={style.glowCian} width="350" height="350" viewBox="0 0 563 563" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_579_112)">
                    <circle cx="281.5" cy="281.5" r="81.5" fill="#1BCFBD" fill-opacity="0.5"/>
                    </g>
                    <defs>
                    <filter id="filter0_f_579_112" x="0" y="0" width="563" height="563" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_579_112"/>
                    </filter>
                    </defs>
                </svg>
            </div>

        </section>
    )
}