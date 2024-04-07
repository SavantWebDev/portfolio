import CardsColaborators from '../CardsColaborators/CardsColaborators'
import style from './GridTeam.module.css'

export default function GridTeam() {
    return (
        <section className={style.container}>
            {/* Grid Area */}
            <div className={style.gridArea}>
                <CardsColaborators />
                
                <CardsColaborators />

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