import style from './OpposingCards.module.css'

export default function OpposingCards() {
    return(
        <section className={style.container}>
            {/* Card */}
            <div className={style.cardArea}>
                {/* Image Area */}
                <div className={style.imageArea}>
                    <img src="https://images.unsplash.com/photo-1518644730709-0835105d9daa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    {/* Subtitle */}
                    <span className={style.subTitle}>Nossa metodologia</span>
                    {/* Icon */}
                    <span className={style.icon}>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.87488 9.12195C8.87488 8.65596 9.25264 8.2782 9.71863 8.2782L16.8781 8.2782C17.3441 8.2782 17.7218 8.65596 17.7218 9.12195L17.7218 16.2814C17.7218 16.7474 17.3441 17.1252 16.8781 17.1252C16.4121 17.1252 16.0343 16.7474 16.0343 16.2814L16.0343 9.9657L9.71863 9.9657C9.25264 9.9657 8.87488 9.58794 8.87488 9.12195Z" fill="black"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.52533 17.4747C8.19583 17.1452 8.19583 16.6109 8.52533 16.2814L15.7842 9.02254C16.1137 8.69303 16.648 8.69303 16.9775 9.02254C17.307 9.35204 17.307 9.88628 16.9775 10.2158L9.71857 17.4747C9.38907 17.8042 8.85484 17.8042 8.52533 17.4747Z" fill="black"/>
                        </svg>
                    </span>
                </div>
                {/* Text Area */}
                <div className={style.textArea}>
                    <h2>We shape</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                {/* RollDown Animation */}
                <div className={style.rollDownAnimation}>
                    <span className={style.ball}></span>
                    <span className={style.line}></span>
                </div>
            </div>

            {/* Card */}
            <div className={`${style.cardArea} ${style.cardOpposing}`}>
                {/* Text Area */}
                <div className={style.textArea}>
                    <h2>the future</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                {/* Image Area */}
                <div className={style.imageArea}>
                    <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    {/* Subtitle */}
                    <span className={style.subTitle}>Nossa metodologia</span>
                    {/* Icon */}
                    <span className={style.icon}>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.87488 9.12195C8.87488 8.65596 9.25264 8.2782 9.71863 8.2782L16.8781 8.2782C17.3441 8.2782 17.7218 8.65596 17.7218 9.12195L17.7218 16.2814C17.7218 16.7474 17.3441 17.1252 16.8781 17.1252C16.4121 17.1252 16.0343 16.7474 16.0343 16.2814L16.0343 9.9657L9.71863 9.9657C9.25264 9.9657 8.87488 9.58794 8.87488 9.12195Z" fill="black"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.52533 17.4747C8.19583 17.1452 8.19583 16.6109 8.52533 16.2814L15.7842 9.02254C16.1137 8.69303 16.648 8.69303 16.9775 9.02254C17.307 9.35204 17.307 9.88628 16.9775 10.2158L9.71857 17.4747C9.38907 17.8042 8.85484 17.8042 8.52533 17.4747Z" fill="black"/>
                        </svg>
                    </span>
                </div>

                {/* RollDown Animation */}
                <div className={style.rollDownAnimation}>
                    <span className={style.ball}></span>
                    <span className={style.line}></span>
                </div>

                {/* Decorator Glow */}
                <svg className={style.decoratorGlow} width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M81.5 1L1 84.5L85 38.5L58.5 81.5L89.5 67L85 90.5" stroke="#BAFF01"/>
                </svg>

            </div>

            {/* Card */}
            <div className={style.cardArea}>
                {/* Image Area */}
                <div className={style.imageArea}>
                    <img src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    {/* Subtitle */}
                    <span className={style.subTitle}>Nossa metodologia</span>
                    {/* Icon */}
                    <span className={style.icon}>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.87488 9.12195C8.87488 8.65596 9.25264 8.2782 9.71863 8.2782L16.8781 8.2782C17.3441 8.2782 17.7218 8.65596 17.7218 9.12195L17.7218 16.2814C17.7218 16.7474 17.3441 17.1252 16.8781 17.1252C16.4121 17.1252 16.0343 16.7474 16.0343 16.2814L16.0343 9.9657L9.71863 9.9657C9.25264 9.9657 8.87488 9.58794 8.87488 9.12195Z" fill="black"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.52533 17.4747C8.19583 17.1452 8.19583 16.6109 8.52533 16.2814L15.7842 9.02254C16.1137 8.69303 16.648 8.69303 16.9775 9.02254C17.307 9.35204 17.307 9.88628 16.9775 10.2158L9.71857 17.4747C9.38907 17.8042 8.85484 17.8042 8.52533 17.4747Z" fill="black"/>
                        </svg>
                    </span>
                </div>
                {/* Text Area */}
                <div className={style.textArea}>
                    <h2>We shape</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                {/* RollDown Animation */}
                <div className={style.rollDownAnimation}>
                    <span className={style.ball}></span>
                    <span className={style.line}></span>
                </div>
            </div>
        </section>
    )
}