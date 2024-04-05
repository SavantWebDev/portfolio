import style from './ColaboratorsArea.module.css'

// Components
import CardsColaborators from '../CardsColaborators/CardsColaborators'
import Strip from '../Strip/Strip'

export default function ColaboratorsArea() {
    return (
        <section className={style.container}>
            {/* Strip */}
            <Strip />
            {/* Container Cards */}
            <div className={style.containerCards}>

                {/* Slider Cards */}
                <div className={style.sliderCards}>
                    <CardsColaborators />
                    
                    <CardsColaborators />
                    
                    <CardsColaborators />
                </div>
            </div>

            {/* Strip */}
            <Strip order />
            {/* Container Cards */}
            <div className={`${style.containerCards} ${style.containerDesign}`}>

                {/* Slider Cards */}
                <div className={style.sliderCards}>
                    <CardsColaborators />
                    
                    <CardsColaborators />
                    
                </div>
            </div>

        </section>
    )
}