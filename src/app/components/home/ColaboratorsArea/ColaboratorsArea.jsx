import style from './ColaboratorsArea.module.css'

// Components
import CardsColaborators from '../CardsColaborators/CardsColaborators'

export default function ColaboratorsArea() {
    return (
        <section className={style.container}>
            <CardsColaborators />
            
            <CardsColaborators />
            
            <CardsColaborators />
        </section>
    )
}