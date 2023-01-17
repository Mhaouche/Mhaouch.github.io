import styles from '../styles/project.module.css'
import Images from './images/castle.png'
import Images2 from './images/rpg.png'
import Images3 from './images/codeCamp.png'
import Image from 'next/image'

export default function project() {
    return(
        <div className={styles.all}>
            <div className={styles.proj}>
                <div className={styles.title}>
                    <h2>School Project</h2>
                </div>
                <div className={styles.box}>
                    <div className={styles.perso}>
                        <div className={styles.pra}>
                            <label>Castle Proj</label>
                            <Image src={Images} alt="castle"/>
                        </div>
                    </div>
                    <div className={styles.perso}>
                        <div className={styles.pra}>
                            <label>Winner of code Camp</label>
                            <Image src={Images3} alt="castle"/>
                        </div>
                    </div>
                    <div className={styles.perso}>
                        <div className={styles.pra}>
                            <label>Rpg Game</label>
                            <Image src={Images2} alt="castle"/>
                        </div>
                    </div>
                </div>
	        </div>
        </div>
    )
}