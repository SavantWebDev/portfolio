import style from './heroSection.module.css'

export default function HeroSection() {
    return (

        <section className={style.container}>

            <div className={style.containerContent}>

                {/* Left Area */}
                <div className={style.leftArea}>

                    {/* Text Area  */}
                    <div className={style.textArea}>
                        <img className={style.circleWords} src="./icons/circleWords.svg" alt="" />
                        <h1>Let's 
                            <br />
                            <b>Work</b>
                            <br />
                            TOGHETHER
                        </h1>
                        <p className={style.description}>Send us your enquiry and we’ll respond within 1-2 working days.</p>
                    </div>
                </div>


                {/* Decorators Area */}
                <div className={style.rightArea}>
                    {/* Form */}
                    <form className={style.form} action="">
                        {/* Label - Input (Nome) */}
                        <label className={style.label} htmlFor="">WHAT'S YOUR NAME?</label>
                        <div className={style.inputArea}>
                            <input type="text" placeholder='Jhon Doe*' />
                            <span className={style.num}>01</span>
                        </div>
                        
                        {/* Label - Input (Nome) */}
                        <label className={style.label} htmlFor="">WHAT'S YOUR EMAIL?</label>
                        <div className={style.inputArea}>
                            <input type="text" placeholder='jhondoe@gmail.com'/>
                            <span className={style.num}>02</span>
                        </div>

                        {/* Label - Input (Nome) */}
                        <label className={style.label} htmlFor="">WHAT'S THE NAME OF YOUR ORGANIZATION?</label>
                        <div className={style.inputArea}>
                            <input type="text" placeholder='Jhon & Doe' />
                            <span className={style.num}>03</span>
                        </div>

                        {/* Label - Input (Nome) */}
                        <label className={style.label} htmlFor="">WHAT SERVICES ARE YOU LOOKING FOR?</label>
                        <div className={style.inputArea}>
                            <input type="text" placeholder='Brand Identity + Visual Content...' />
                            <span className={style.num}>04</span>
                        </div>

                        {/* Label - Input (Nome) */}
                        <label className={style.label} htmlFor="">YOUR MESSAGE</label>
                        <div className={style.inputArea}>
                            <input type="text" placeholder='Hey there, can you help me with...' />
                            <span className={style.num}>04</span>
                        </div>
                    </form>

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
                </div>
                
                {/* Floating Text - Top*/}
                <span className={style.floatingTextTop}>CONCEITO & INOVAÇÃO</span>

            </div>

            {/* line grids */}
            {/* <span className={`${style.lineGrid} ${style.line1}`}></span> */}
            <span className={`${style.lineGrid} ${style.line2}`}></span>
            <span className={`${style.lineGrid} ${style.line3}`}></span>
            <span className={`${style.lineGrid} ${style.line4}`}></span>
            {/* <span className={`${style.lineGrid} ${style.line5}`}></span> */}
        </section>
    )
}