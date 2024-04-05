import style from './ColaboratorsArea.module.css'

// Components
import CardsColaborators from '../CardsColaborators/CardsColaborators'
import Strip from '../Strip/Strip'

export default function ColaboratorsArea() {
    return (
        <section className={style.container}>
            {/* Container Cards */}
            <div className={style.containerCards}>

                {/* Slider Cards */}
                <div className={style.sliderCards}>
                    <CardsColaborators />
                    
                    <CardsColaborators />
                    
                    {/* More Coborators */}
                    <div className={style.moreColabors}>
                        {/* buttonMore */}
                        <a className={style.buttonMore} href="">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.87488 9.12195C8.87488 8.65596 9.25264 8.2782 9.71863 8.2782L16.8781 8.2782C17.3441 8.2782 17.7218 8.65596 17.7218 9.12195L17.7218 16.2814C17.7218 16.7474 17.3441 17.1252 16.8781 17.1252C16.4121 17.1252 16.0343 16.7474 16.0343 16.2814L16.0343 9.9657L9.71863 9.9657C9.25264 9.9657 8.87488 9.58794 8.87488 9.12195Z" fill="black"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.52533 17.4747C8.19583 17.1452 8.19583 16.6109 8.52533 16.2814L15.7842 9.02254C16.1137 8.69303 16.648 8.69303 16.9775 9.02254C17.307 9.35204 17.307 9.88628 16.9775 10.2158L9.71857 17.4747C9.38907 17.8042 8.85484 17.8042 8.52533 17.4747Z" fill="black"/>
                            </svg>
                        </a>

                        {/* Vetors */}
                        {/* Top Right */}
                        <svg className={`${style.vector} ${style.topRight}`} width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.5 0.5V26M26.5 26H0M26.5 26L7 6.5" stroke="white"/>
                        </svg>
                        {/* Top Left */}
                        <svg className={`${style.vector} ${style.topLeft}`} width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.5 0.5V26M26.5 26H0M26.5 26L7 6.5" stroke="white"/>
                        </svg>
                        {/* bottom Left */}
                        <svg className={`${style.vector} ${style.bottomLeft}`} width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.5 0.5V26M26.5 26H0M26.5 26L7 6.5" stroke="white"/>
                        </svg>
                        {/* Bottom Right */}
                        <svg className={`${style.vector} ${style.bottomRight}`} width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.5 0.5V26M26.5 26H0M26.5 26L7 6.5" stroke="white"/>
                        </svg>
                    </div>
                </div>
            </div>

            {/* line grids */}
            <span className={`${style.lineGrid} ${style.line2}`}></span>

        </section>
    )
}