import style from './ProjectsArea.module.css'

// Components
import CardsProjects from '../CardsProjects/CardsProjects'

export default function PrejectsArea() {
    return (
        <section className={style.container}>
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

            {/* Cards Container */}
            <div className={style.cardsContainer}>
                <svg className={style.decoratorHigh} width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="38" cy="38" r="37.5" stroke="white"/>
                    <path d="M22 40H55" stroke="white"/>
                    <path d="M38.5 55.5V25" stroke="white"/>
                    <path d="M27.7164 51.0336L49.2832 29.4668" stroke="white"/>
                    <path d="M49.5668 51.5668L28 30" stroke="white"/>
                </svg>


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

                    lastCard={true}
                />

                {/* View More Area */}
                <div className={style.viewMore}>
                    {/* Numer Projects */}
                    <h3>
                        <b>+</b>
                        25 projetos
                    </h3>
                    
                    {/* Button Area */}
                    <div className={style.buttonArea}>
                        <span></span>

                        <a href="">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.82525 3.34088C9.15476 3.01137 9.68899 3.01137 10.0185 3.34088L15.081 8.40338C15.4105 8.73288 15.4105 9.26712 15.081 9.59662L10.0185 14.6591C9.68899 14.9886 9.15476 14.9886 8.82525 14.6591C8.49575 14.3296 8.49575 13.7954 8.82525 13.4659L13.2911 9L8.82525 4.53412C8.49575 4.20462 8.49575 3.67038 8.82525 3.34088Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.67188 9C2.67188 8.53401 3.04963 8.15625 3.51562 8.15625H13.7812C14.2472 8.15625 14.625 8.53401 14.625 9C14.625 9.46599 14.2472 9.84375 13.7812 9.84375H3.51562C3.04963 9.84375 2.67188 9.46599 2.67188 9Z" fill="white"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}