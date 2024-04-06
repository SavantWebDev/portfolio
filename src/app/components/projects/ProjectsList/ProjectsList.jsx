import CardsProjects from '../CardsProjects/CardsProjects'
import style from './ProjectsList.module.css'

export default function ProjectsList() {
    return (
        <section className={style.containerCards}>
            
            {/* Decorators Area */}
            <div className={style.decoratorsArea}>
                {/* tag */}
                <span className={style.tag}>Experiência & Satisfação</span>
                <svg width="60" height="60" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="38" cy="38" r="37.5" stroke="#404141"/>
                    <path d="M22 40H55" stroke="#404141"/>
                    <path d="M38.5 55.5V25" stroke="#404141"/>
                    <path d="M27.7164 51.0336L49.2832 29.4668" stroke="#404141"/>
                    <path d="M49.5668 51.5668L28 30" stroke="#404141"/>
                </svg>
            </div>

            
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

        </section>
    )
}