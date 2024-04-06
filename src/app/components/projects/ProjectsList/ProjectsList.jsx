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

            
        </section>
    )
}