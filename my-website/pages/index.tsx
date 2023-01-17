import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser, faBell } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Home.module.css'
import VoxelDogLoader from '../components/voxel-dog-loader'
import dynamic from 'next/dynamic'

const LazyVoxelDog = dynamic(() => import('../components/voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})
export default function Home() {

  return (
    <div>
        <title>Haouche Masthen</title>
        <div className= {styles.me}>
          <nav className={styles.nav1}>
            <h2 className= {styles.logo}>Portfo<span className={styles.span1}>lio</span></h2>
            <ul className={styles.ul1}>
              <li className={styles.li1}><a className={styles.a1} href="">Home</a></li>
              <li className={styles.li1}><a className={styles.a1} href="#">About Me</a></li>
              <li className={styles.li1}><a className={styles.a1} href="#">Skills</a></li>
            </ul>
            <a href="login.html" className=""></a>
          </nav>
          <div className={styles.content}>
            <h1 className={styles.h1a}>Masthen <span className={styles.span1}>Haouche</span></h1>
            <h3 className={styles.h3a}>I am a student at ETNA.</h3>
            <div className={styles.newslatter}>
              <form>
                <input type="email" name="email" id="mail" placeholder="Enter Your Email"/>
                <input type="submit" name="submit" value="Lets Start"/>
              </form>
            </div>
          </div>
        </div>
        <section className={styles.about}>
            <div className={styles.main}>
            <img src="https://auth.etna-alternance.net/api/users/haouch_m/photo"/>
              <div className={styles.abouttext}>
                <h2 className={styles.h2a}>About Me</h2>
                <h5 className={styles.h5b}> Student <span className={styles.span1}> Junior security Developer</span></h5>
                <p className={styles.p8}>I want to become a Security Developer. I can provide clean code. I also make the website.I can provide clean code with a norm.</p>
                <button className={styles.button1} type="button"><a href="mailto: haouchemalik@gmail.com">Let's Talk</a></button>
              </div>
            </div>
        </section>
        <div className={styles.proj}>
		      <div className={styles.title}>
                <h2>My Project</h2>
                </div>
                <div className={styles.box}>
			        <div className={styles.perso}>
                        <FontAwesomeIcon className={styles.i1} icon={faBars} />
                        <h5 className={styles.h5a}>School project</h5>
                        <div className={styles.pra}>
                            <a className={styles.button1} href="project">Read More</a>
                        </div>
                    </div>
                    <div className={styles.perso}>
                        <FontAwesomeIcon className={styles.i1} icon={faUser} />
                        <h5 className={styles.h5a}>Personnal Project</h5>
                        <div className={styles.pra}>
                            <a className={styles.button1} href="#">Read More</a>
                        </div>
                    </div>
                    <div className={styles.perso}>
                        <FontAwesomeIcon className={styles.i1} icon={faBell} />
                        <h5 className={styles.h5a}>Ongoing Project</h5>
                        <div className={styles.pra}>
                            <a className={styles.button1} href="#">Read More</a>
                        </div>
                    </div>
                </div>
        </div>
        <div className={styles.contactme}>
          <p className={styles.p1}>Let Me join your company.</p>
		      <a className={styles.buttontwo} href="#">Hire Me</a>
        </div>
    </div>
  )
}
