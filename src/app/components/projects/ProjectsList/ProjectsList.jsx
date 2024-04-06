import CardsProjects from '../CardsProjects/CardsProjects'
import style from './ProjectsList.module.css'

export default function ProjectsList() {
    return (
        <section className={style.containerCards}>
            
            {/* List Cards */}
            <div className={style.listCards}>
                <CardsProjects 
                    img={'./images/imageProject1.jpg'}
                    number='1'
                    subTitle='VENDAS ONLINE'
                    Title='E-COMMERCE'
                    description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                    tags={['Next js', 'Html', 'Css']}
                />

                <CardsProjects 
                    img={'./images/imageProject2.jpg'}
                    number='2'
                    subTitle='Prontuário online'
                    Title='ODONTOLOGIA'
                    description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                    tags={['Typescript', 'Html', 'Css']}
                />

                <CardsProjects 
                    img={'./images/imageProject2.jpg'}
                    number='3'
                    subTitle='Tecnologias'
                    Title='RECRUAMENTO'
                    description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                    tags={['Next js', 'Html', 'Css']}
                />

                <CardsProjects 
                    img={'./images/imageProject2.jpg'}
                    number='3'
                    subTitle='Tecnologias'
                    Title='RECRUAMENTO'
                    description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                    tags={['Next js', 'Html', 'Css']}

                    lastCard={true}
                />
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
        </section>
    )
}