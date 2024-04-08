import CardsColaborators from '../CardsColaborators/CardsColaborators'
import style from './GridTeam.module.css'

export default function GridTeam() {
    return (
        <section className={style.container}>
            {/* Grid Area */}
            <div className={style.gridArea}>
                {/* Title section */}
                <div className={style.titleSection}>
                    <span className={style.disclaimer}>THE MIND</span>
                    <h2>Dev TEAM</h2>
                </div>

                <CardsColaborators />
                
                <CardsColaborators />

                <CardsColaborators />

                <CardsColaborators />
            </div>
            {/* Grid Area */}
            <div className={style.gridArea}>
                {/* Title section */}
                <div className={style.titleSection}>
                    <span className={style.disclaimer}>THE criativity</span>
                    <h2>Design TEAM</h2>
                </div>

                <CardsColaborators />
                
                <CardsColaborators />

            </div>

            {/* line grids */}
            <span className={`${style.lineGrid} ${style.line2}`}></span>
            <span className={`${style.lineGrid} ${style.line3}`}></span>
            <span className={`${style.lineGrid} ${style.line4}`}></span>
        </section>
    )
}