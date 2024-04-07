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
                            <h1>Projetos</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                        </div>

                        {/* Page Link */}
                        <a className={style.pageLink} href="">
                            <span>METODOLOGIA</span>
                            <div className={style.areaIcon}>
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.87488 9.12195C8.87488 8.65596 9.25264 8.2782 9.71863 8.2782L16.8781 8.2782C17.3441 8.2782 17.7218 8.65596 17.7218 9.12195L17.7218 16.2814C17.7218 16.7474 17.3441 17.1252 16.8781 17.1252C16.4121 17.1252 16.0343 16.7474 16.0343 16.2814L16.0343 9.9657L9.71863 9.9657C9.25264 9.9657 8.87488 9.58794 8.87488 9.12195Z" fill="black"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.52533 17.4747C8.19583 17.1452 8.19583 16.6109 8.52533 16.2814L15.7842 9.02254C16.1137 8.69303 16.648 8.69303 16.9775 9.02254C17.307 9.35204 17.307 9.88628 16.9775 10.2158L9.71857 17.4747C9.38907 17.8042 8.85484 17.8042 8.52533 17.4747Z" fill="black"/>
                                </svg>
                            </div>
                        </a>
                    </div>

                </aside>

                {/* Projects Area */}
                <ProjectsList />

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
            </div>


            {/* line grids */}
            <span className={`${style.lineGrid} ${style.line2}`}></span>
            
        </section>
    )
}