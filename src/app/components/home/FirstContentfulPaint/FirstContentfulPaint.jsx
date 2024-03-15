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

            <div></div>
        </section>
    )
}