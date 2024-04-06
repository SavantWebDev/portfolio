import ProjectsList from '../ProjectsList/ProjectsList'
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

                        {/* Content Text Area */}
                        <div className={style.contentTextArea}>
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

                        {/* tag */}
                        <span className={style.tag}>MARCAS PARCEIRAS</span>
                        {/* Carrosel Logos */}
                        <div className={style.carroselLogos}>
                            {/* Ara Logos */}
                            <div className={style.areaLogos}>
                                <img src="./images/logosParceiros/figma.svg" alt="" />
                                <img src="./images/logosParceiros/spotfy.svg" alt="" />
                                <img src="./images/logosParceiros/inter.svg" alt="" />
                            </div>
                            {/* Ara Logos */}
                            <div className={style.areaLogos}>
                                <img src="./images/logosParceiros/figma.svg" alt="" />
                                <img src="./images/logosParceiros/spotfy.svg" alt="" />
                                <img src="./images/logosParceiros/inter.svg" alt="" />
                            </div>
                        </div>
                    </div>

                </aside>

                {/* Projects Area */}
                <ProjectsList />

            </div>

            {/* Aside Decorator Bar */}
            <div className={style.asideDecoratorBar}>

                {/* Slider  Itens 1*/}
                <div className={style.sliderItems}>

                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99609 0.000976562L9.99609 19.8103" stroke="white" stroke-width="0.600282"/>
                        <path d="M0.691406 9.90576L19 9.90576" stroke="white" stroke-width="0.600282"/>
                        <path d="M3.37223 3.43229L16.3184 16.3784" stroke="white" stroke-width="0.600282"/>
                        <path d="M3.05289 16.5487L15.999 3.60254" stroke="white" stroke-width="0.600282"/>
                    </svg>

                    <img src=".\icons\fraseProjects.svg" alt="" />

                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99609 0.000976562L9.99609 19.8103" stroke="white" stroke-width="0.600282"/>
                        <path d="M0.691406 9.90576L19 9.90576" stroke="white" stroke-width="0.600282"/>
                        <path d="M3.37223 3.43229L16.3184 16.3784" stroke="white" stroke-width="0.600282"/>
                        <path d="M3.05289 16.5487L15.999 3.60254" stroke="white" stroke-width="0.600282"/>
                    </svg>

                    <img src=".\icons\fraseProjects.svg" alt="" />

                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99609 0.000976562L9.99609 19.8103" stroke="white" stroke-width="0.600282"/>
                        <path d="M0.691406 9.90576L19 9.90576" stroke="white" stroke-width="0.600282"/>
                        <path d="M3.37223 3.43229L16.3184 16.3784" stroke="white" stroke-width="0.600282"/>
                        <path d="M3.05289 16.5487L15.999 3.60254" stroke="white" stroke-width="0.600282"/>
                    </svg>

                    <img src=".\icons\fraseProjects.svg" alt="" />

                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99609 0.000976562L9.99609 19.8103" stroke="white" stroke-width="0.600282"/>
                        <path d="M0.691406 9.90576L19 9.90576" stroke="white" stroke-width="0.600282"/>
                        <path d="M3.37223 3.43229L16.3184 16.3784" stroke="white" stroke-width="0.600282"/>
                        <path d="M3.05289 16.5487L15.999 3.60254" stroke="white" stroke-width="0.600282"/>
                    </svg>

                </div>

                {/* Slider  Itens 2*/}
                <div className={style.sliderItems}>

                    <img src=".\icons\fraseProjects.svg" alt="" />

                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99609 0.000976562L9.99609 19.8103" stroke="white" stroke-width="0.600282"/>
                        <path d="M0.691406 9.90576L19 9.90576" stroke="white" stroke-width="0.600282"/>
                        <path d="M3.37223 3.43229L16.3184 16.3784" stroke="white" stroke-width="0.600282"/>
                        <path d="M3.05289 16.5487L15.999 3.60254" stroke="white" stroke-width="0.600282"/>
                    </svg>

                    <img src=".\icons\fraseProjects.svg" alt="" />

                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99609 0.000976562L9.99609 19.8103" stroke="white" stroke-width="0.600282"/>
                        <path d="M0.691406 9.90576L19 9.90576" stroke="white" stroke-width="0.600282"/>
                        <path d="M3.37223 3.43229L16.3184 16.3784" stroke="white" stroke-width="0.600282"/>
                        <path d="M3.05289 16.5487L15.999 3.60254" stroke="white" stroke-width="0.600282"/>
                    </svg>

                    <img src=".\icons\fraseProjects.svg" alt="" />

                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99609 0.000976562L9.99609 19.8103" stroke="white" stroke-width="0.600282"/>
                        <path d="M0.691406 9.90576L19 9.90576" stroke="white" stroke-width="0.600282"/>
                        <path d="M3.37223 3.43229L16.3184 16.3784" stroke="white" stroke-width="0.600282"/>
                        <path d="M3.05289 16.5487L15.999 3.60254" stroke="white" stroke-width="0.600282"/>
                    </svg>

                </div>

            </div>

            {/* line grids */}
            <span className={`${style.lineGrid} ${style.line2}`}></span>
            
        </section>
    )
}