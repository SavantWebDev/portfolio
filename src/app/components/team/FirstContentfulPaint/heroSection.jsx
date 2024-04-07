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
                        <h1>Dream Team</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <ul className={style.marks}>
                            <li className={style.selected}>
                                <span className={style.point}></span>
                            </li>
                            <li>
                                <span className={style.point}></span>
                            </li>
                            <li>
                                <span className={style.point}></span>
                            </li>
                            <li>
                                <span className={style.point}></span>
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