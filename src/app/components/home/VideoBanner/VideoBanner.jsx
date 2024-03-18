import style from './VideoBanner.module.css'

export default function VideoBanner() {
    return (
        <section className={style.container}>
            {/* Area Video */}
            <div className={style.areaVideo}>
                {/* Tumbnail */}
                <img className={style.tumbnail} src="https://images.unsplash.com/photo-1630332458166-1c3bdde17665?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tumbnail do Video" />

                {/* color sobre */}
                <div className={style.colorSobre}></div>

                {/* Area Information */}
                <div className={style.areaInformation}>
                    <h2>Conheça nossa <br /> metedologia</h2>
                    {/* Button Play */}
                    <button className={style.buttonPlay}>
                        <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="29.5329" cy="29.7804" r="29.4826" fill="white"/>
                            <path d="M37.2032 28.4165C38.0389 28.899 38.0389 30.1053 37.2032 30.5878L25.9386 37.0914C25.1029 37.5739 24.0583 36.9707 24.0583 36.0057L24.0583 22.9985C24.0583 22.0335 25.1029 21.4304 25.9386 21.9129L37.2032 28.4165Z" fill="black" stroke="black" stroke-width="0.830495"/>
                        </svg>
                        <span>Asssita agora</span>
                    </button>
                </div>
            </div>
        </section>
    )
}