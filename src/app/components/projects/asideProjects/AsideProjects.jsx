import style from './AsideProjects.module.css'

export default function AsideProjects() {
    return (
        <section className={style.container}>
            {/* Content Container */}
            <div className={style.contentContainer}>

                {/* Aside Container */}
                <aside className={style.asideContainer}>


                    {/* Text Area  */}
                    <div className={style.textArea}>
                        <img className={style.circleWords} src="./icons/circleWords.svg" alt="" />
                        <h1>projetos</h1>
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

                </aside>

            </div>


            {/* line grids */}
            <span className={`${style.lineGrid} ${style.line2}`}></span>
            <span className={`${style.lineGrid} ${style.line3}`}></span>
            <span className={`${style.lineGrid} ${style.line4}`}></span>
        </section>
    )
}