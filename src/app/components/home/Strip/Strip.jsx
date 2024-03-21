import style from './Strip.module.css'

export default function Strip({order}) {

    // If is last Card
    if (order) {
        var haveOrder = style.haveOrder
    }


    return (
        <section className={`${style.container} ${haveOrder}`}>
            {/* Area Info */}
            <div className={style.area}>
                {/* Decorador */}
                <svg width="278" height="135" viewBox="0 0 278 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M56.64 33.8V48.2H37.44V101H23.04V48.2H3.84V33.8H56.64ZM66.2288 101V33.8H109.045V48.2H80.6288V57.8H102.517V72.2H80.6288V86.6H109.045V101H66.2288ZM150.677 102.248C146.133 102.248 141.861 101.352 137.861 99.56C133.861 97.736 130.341 95.224 127.301 92.024C124.293 88.824 121.925 85.128 120.197 80.936C118.501 76.712 117.653 72.2 117.653 67.4C117.653 62.568 118.501 58.056 120.197 53.864C121.925 49.64 124.293 45.944 127.301 42.776C130.341 39.576 133.861 37.08 137.861 35.288C141.861 33.464 146.133 32.552 150.677 32.552C156.117 32.552 161.125 33.816 165.701 36.344C170.277 38.84 174.069 42.184 177.077 46.376L164.213 53.288C162.549 51.368 160.549 49.832 158.213 48.68C155.877 47.528 153.365 46.952 150.677 46.952C148.117 46.952 145.701 47.48 143.429 48.536C141.189 49.592 139.205 51.064 137.477 52.952C135.781 54.808 134.453 56.968 133.493 59.432C132.533 61.896 132.053 64.552 132.053 67.4C132.053 70.216 132.533 72.856 133.493 75.32C134.453 77.784 135.781 79.96 137.477 81.848C139.205 83.704 141.189 85.176 143.429 86.264C145.701 87.32 148.117 87.848 150.677 87.848C153.365 87.848 155.877 87.272 158.213 86.12C160.549 84.936 162.549 83.368 164.213 81.416L177.077 88.424C174.069 92.584 170.277 95.928 165.701 98.456C161.125 100.984 156.117 102.248 150.677 102.248ZM223.874 33.8H238.274V101H223.874V72.2H200.066V101H185.666V33.8H200.066V57.8H223.874V33.8Z" fill="white"/>
                    <circle cx="267" cy="90" r="11" fill="black"/>
                </svg>

                {/* Quote Area */}
                <div className={style.quoteArea}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    
                    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="38" cy="38" r="37.5" stroke="white"/>
                        <path d="M22 40H55" stroke="white"/>
                        <path d="M38.5 55.5V25" stroke="white"/>
                        <path d="M27.7164 51.0336L49.2832 29.4668" stroke="white"/>
                        <path d="M49.5668 51.5668L28 30" stroke="white"/>
                    </svg>

                </div>
            </div>
        </section>
    )
}