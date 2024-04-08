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
                        <h1>Dream 
                            <br />
                            <b>Team</b>
                        </h1>
                        <p className={style.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        {/* Stats */}
                        <ul className={style.stats}>
                            <li>
                                <span className={style.topText}>projetos</span>
                                <p><b>+ </b>25</p>
                            </li>
                            <li>
                                <span className={style.topText}>anos</span>
                                <p><b>+ </b>3</p>
                            </li>
                            <li>
                                <span className={style.topText}>alcance</span>
                                <p><b>+ </b>100k</p>
                            </li>
                            <li>
                                <span className={style.topText}>experiência</span>
                                <p><b>+ </b>10 anos</p>
                            </li>
                        </ul>
                    </div>
                </div>
                
                {/* Area Down */}
                <div className={style.areaDow}>
                    {/* RollDown Animation */}
                    <div className={style.rollDownAnimation}>
                        <span className={style.ball}></span>
                        <span className={style.line}></span>
                    </div>
                </div>

                {/* Decorators Area */}
                <div className={style.rightArea}>
                    <img src="./images/team.png" alt="" />

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