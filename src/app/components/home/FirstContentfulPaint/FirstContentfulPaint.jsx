import style from './FirstContentfulPaint.module.css'

export default function FirstContentfulPaint() {
    return (
        <section className={style.container}>

            {/* Left Area */}
            <div className={style.leftArea}>
                <img className={style.circleWords} src="./icons/circleWords.svg" alt="" />

                {/* Text Area  */}
                <div className={style.textArea}>
                    <h1>conceito</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <ul className={style.marks}>
                        <li className={style.selected}>
                            <span className={style.point}></span>
                        </li>
                        <li>
                            <span className={style.point}></span>
                        </li>
                        <li>
                            <span className={style.point}></span>
                        </li>
                        <li>
                            <span className={style.point}></span>
                        </li>
                    </ul>
                </div>
            </div>
            
            {/* Area Down */}
            <div className={style.areaDow}>
                <svg width="231" height="93" viewBox="0 0 231 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46.75 23.875H12.6875C12.5208 26.375 12.4375 28.5833 12.4375 30.5C12.5625 36.7083 14.375 41.6875 17.875 45.4375C21.375 49.1458 26.0625 51 31.9375 51C33.5208 51 35 50.8333 36.375 50.5C37.75 50.125 38.875 49.7083 39.75 49.25C40.6667 48.7917 41.6042 48.125 42.5625 47.25C43.5208 46.375 44.2083 45.6875 44.625 45.1875C45.0833 44.6458 45.6875 43.8542 46.4375 42.8125C47.1875 41.7292 47.6875 41.0417 47.9375 40.75C48.9375 40.9583 49.75 41.4167 50.375 42.125C48.2917 47.7083 45.0625 51.8958 40.6875 54.6875C36.3125 57.4375 31.5625 58.8125 26.4375 58.8125C23.8958 58.8125 21.4167 58.4792 19 57.8125C16.625 57.1875 14.3125 56.1458 12.0625 54.6875C9.8125 53.2292 7.85417 51.4375 6.1875 49.3125C4.52083 47.1458 3.1875 44.4583 2.1875 41.25C1.1875 38 0.6875 34.4167 0.6875 30.5C0.6875 21.7083 3.375 14.4583 8.75 8.75C14.125 3.04167 20.7292 0.1875 28.5625 0.1875C32.0208 0.1875 35.0208 0.6875 37.5625 1.6875C40.1458 2.64583 42.1458 3.95833 43.5625 5.625C45.0208 7.29167 46.0833 9.125 46.75 11.125C47.4583 13.0833 47.8125 15.1875 47.8125 17.4375C47.8125 19.5208 47.4583 21.6667 46.75 23.875ZM27.0625 4.25C24.1875 4.25 21.4583 5.52083 18.875 8.0625C16.3333 10.6042 14.5 14.4583 13.375 19.625H35.875C36.2917 18.0417 36.5 16.6667 36.5 15.5C36.5 12.25 35.75 9.5625 34.25 7.4375C32.75 5.3125 30.3542 4.25 27.0625 4.25ZM51.25 1.5625C56.75 1.8125 62.3125 1.9375 67.9375 1.9375C73.0625 1.9375 78.3125 1.8125 83.6875 1.5625C83.8542 2.22917 83.9375 2.75 83.9375 3.125C83.9375 3.375 83.8542 3.83333 83.6875 4.5C82.4375 4.58333 81.4375 4.6875 80.6875 4.8125C79.9375 4.89583 78.9583 5.0625 77.75 5.3125C76.5833 5.5625 75.6875 5.9375 75.0625 6.4375C74.4792 6.9375 74.1875 7.54167 74.1875 8.25C74.1875 8.625 74.3542 9.39583 74.6875 10.5625L87.375 42.125H87.75L99.8125 10.5625C100.229 9.52083 100.438 8.625 100.438 7.875C100.438 5.95833 98.0417 4.83333 93.25 4.5C93.0833 3.83333 93 3.375 93 3.125C93 2.75 93.0833 2.22917 93.25 1.5625C98.125 1.8125 101.167 1.9375 102.375 1.9375C105.875 1.9375 110.312 1.8125 115.688 1.5625C115.854 2.0625 115.938 2.5 115.938 2.875C115.938 3.125 115.854 3.66667 115.688 4.5C110.479 4.70833 107.104 6.72917 105.562 10.5625L86.25 56.75H86.375L79.4375 74.9375C76.8542 81.6875 74.4375 86.25 72.1875 88.625C69.9792 91 67.1458 92.1875 63.6875 92.1875C60.8958 92.1875 58.5625 91.3542 56.6875 89.6875C54.8542 88.0208 53.9375 85.8333 53.9375 83.125C53.9375 80.6667 54.625 78.7292 56 77.3125C57.375 75.8958 59.0833 75.1875 61.125 75.1875C63 75.1875 64.4375 75.75 65.4375 76.875C66.4792 78 67 79.2708 67 80.6875C67 82.6875 66.1042 84.2708 64.3125 85.4375C64.5208 86.3542 65.2083 86.8125 66.375 86.8125C67.7083 86.8125 68.9583 86.0417 70.125 84.5C71.2917 83 72.8125 79.7708 74.6875 74.8125L81.625 57L62.125 10.5625C61.6667 9.52083 61.0208 8.625 60.1875 7.875C59.3542 7.08333 58.3333 6.47917 57.125 6.0625C55.9583 5.60417 54.9792 5.29167 54.1875 5.125C53.3958 4.91667 52.4167 4.70833 51.25 4.5C51.0833 4.16667 51 3.70833 51 3.125C51 2.5 51.0833 1.97917 51.25 1.5625ZM167.125 23.875H133.062C132.896 26.375 132.812 28.5833 132.812 30.5C132.938 36.7083 134.75 41.6875 138.25 45.4375C141.75 49.1458 146.438 51 152.312 51C153.896 51 155.375 50.8333 156.75 50.5C158.125 50.125 159.25 49.7083 160.125 49.25C161.042 48.7917 161.979 48.125 162.938 47.25C163.896 46.375 164.583 45.6875 165 45.1875C165.458 44.6458 166.062 43.8542 166.812 42.8125C167.562 41.7292 168.062 41.0417 168.312 40.75C169.312 40.9583 170.125 41.4167 170.75 42.125C168.667 47.7083 165.438 51.8958 161.062 54.6875C156.688 57.4375 151.938 58.8125 146.812 58.8125C144.271 58.8125 141.792 58.4792 139.375 57.8125C137 57.1875 134.688 56.1458 132.438 54.6875C130.188 53.2292 128.229 51.4375 126.562 49.3125C124.896 47.1458 123.562 44.4583 122.562 41.25C121.562 38 121.062 34.4167 121.062 30.5C121.062 21.7083 123.75 14.4583 129.125 8.75C134.5 3.04167 141.104 0.1875 148.938 0.1875C152.396 0.1875 155.396 0.6875 157.938 1.6875C160.521 2.64583 162.521 3.95833 163.938 5.625C165.396 7.29167 166.458 9.125 167.125 11.125C167.833 13.0833 168.188 15.1875 168.188 17.4375C168.188 19.5208 167.833 21.6667 167.125 23.875ZM147.438 4.25C144.562 4.25 141.833 5.52083 139.25 8.0625C136.708 10.6042 134.875 14.4583 133.75 19.625H156.25C156.667 18.0417 156.875 16.6667 156.875 15.5C156.875 12.25 156.125 9.5625 154.625 7.4375C153.125 5.3125 150.729 4.25 147.438 4.25ZM186.375 1.5625C192.375 1.89583 198.771 2.0625 205.562 2.0625C212.979 2.0625 219.771 1.89583 225.938 1.5625C226.688 2.35417 227.062 3.125 227.062 3.875L194.812 52.5H208.625C210.833 52.5 212.812 52.25 214.562 51.75C216.354 51.2083 217.833 50.5833 219 49.875C220.208 49.1667 221.438 48.0625 222.688 46.5625C223.938 45.0208 224.917 43.6667 225.625 42.5C226.375 41.3333 227.417 39.6042 228.75 37.3125C229.5 37.3125 230.229 37.4792 230.938 37.8125L226.938 57.375C219.646 57.125 212.354 57 205.062 57C197.396 57 189.938 57.125 182.688 57.375C181.896 56.9167 181.333 56.0625 181 54.8125L213.75 5.4375H205.438C196.021 5.4375 189.188 9.75 184.938 18.375C184.646 18.375 184.125 18.2292 183.375 17.9375C182.667 17.6458 182.208 17.3958 182 17.1875L186.375 1.5625Z" fill="white"/>
                </svg>

                {/* RollDown Animation */}
                <div className={style.rollDownAnimation}>
                    <span className={style.ball}></span>
                    <span className={style.line}></span>
                </div>
            </div>

            {/* Decorators Area */}
            <div className={style.rightArea}>
                {/* Modules Area */}
                <div className={style.modulesArea}>
                    <h2>MODULOS</h2>
                    {/* Module */}
                    <div className={style.module}>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.87488 9.12195C8.87488 8.65596 9.25264 8.2782 9.71863 8.2782L16.8781 8.2782C17.3441 8.2782 17.7218 8.65596 17.7218 9.12195L17.7218 16.2814C17.7218 16.7474 17.3441 17.1252 16.8781 17.1252C16.4121 17.1252 16.0343 16.7474 16.0343 16.2814L16.0343 9.9657L9.71863 9.9657C9.25264 9.9657 8.87488 9.58794 8.87488 9.12195Z" fill="black"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.52533 17.4747C8.19583 17.1452 8.19583 16.6109 8.52533 16.2814L15.7842 9.02254C16.1137 8.69303 16.648 8.69303 16.9775 9.02254C17.307 9.35204 17.307 9.88628 16.9775 10.2158L9.71857 17.4747C9.38907 17.8042 8.85484 17.8042 8.52533 17.4747Z" fill="black"/>
                        </svg>
                        <h3>Dev</h3>
                    </div>
                    {/* Module */}
                    <div className={style.module}>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.87488 9.12195C8.87488 8.65596 9.25264 8.2782 9.71863 8.2782L16.8781 8.2782C17.3441 8.2782 17.7218 8.65596 17.7218 9.12195L17.7218 16.2814C17.7218 16.7474 17.3441 17.1252 16.8781 17.1252C16.4121 17.1252 16.0343 16.7474 16.0343 16.2814L16.0343 9.9657L9.71863 9.9657C9.25264 9.9657 8.87488 9.58794 8.87488 9.12195Z" fill="black"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.52533 17.4747C8.19583 17.1452 8.19583 16.6109 8.52533 16.2814L15.7842 9.02254C16.1137 8.69303 16.648 8.69303 16.9775 9.02254C17.307 9.35204 17.307 9.88628 16.9775 10.2158L9.71857 17.4747C9.38907 17.8042 8.85484 17.8042 8.52533 17.4747Z" fill="black"/>
                        </svg>
                        <h3>Design</h3>
                    </div>
                </div>

                {/* Decorator Down */}
                <div className={style.decoratorDown}>
                    {/* Line */}
                    <div className={style.line}></div>
                    {/* Ball */}
                    <div className={style.ball}>
                        <svg width="14" height="14" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M34.2046 20.5923C34.9735 21.3611 34.9735 22.6076 34.2046 23.3765L22.3921 35.189C21.6233 35.9578 20.3767 35.9578 19.6079 35.189L7.79538 23.3765C7.02654 22.6076 7.02654 21.3611 7.79538 20.5923C8.56423 19.8234 9.81077 19.8234 10.5796 20.5923L21 31.0126L31.4204 20.5923C32.1892 19.8234 33.4358 19.8234 34.2046 20.5923Z" fill="black"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21 6.23437C22.0873 6.23437 22.9687 7.11581 22.9687 8.20312L22.9687 32.1562C22.9687 33.2436 22.0873 34.125 21 34.125C19.9127 34.125 19.0312 33.2436 19.0312 32.1562L19.0312 8.20312C19.0312 7.11581 19.9127 6.23437 21 6.23437Z" fill="black"/>
                        </svg>
                    </div>
                </div>

                <span className={style.decoratorLineBall}></span>

                {/* <svg className={style.glowCian} width="350" height="350" viewBox="0 0 563 563" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_579_112)">
                    <circle cx="281.5" cy="281.5" r="81.5" fill="#1BCFBD" fill-opacity="0.5"/>
                    </g>
                    <defs>
                    <filter id="filter0_f_579_112" x="0" y="0" width="563" height="563" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_579_112"/>
                    </filter>
                    </defs>
                </svg> */}
            </div>
            
            {/* Floating Text - Top*/}
            <span className={style.floatingTextTop}>CONCEITO & INOVAÇÃO</span>
            {/* Floating Text - Bottom*/}
            <span className={style.floatingTextBottom}>MADE IN BRAZIL</span>
            {/* Floating Text - Bottom*/}
            <span className={style.floatingTextRight}>DESENVOLVIMENTO E <br /> DESIGN DE SOFTWERE </span>

        </section>
    )
}