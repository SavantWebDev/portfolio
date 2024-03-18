import style from './ColaboratorsArea.module.css'

// Components
import CardsColaborators from '../CardsColaborators/CardsColaborators'
import Strip from '../Strip/Strip'

export default function ColaboratorsArea() {
    return (
        <section className={style.container}>
            <Strip />

            <div className={style.containerCards}>

                <CardsColaborators />
                
                <CardsColaborators />
                
                <CardsColaborators />
            </div>

        </section>
    )
}