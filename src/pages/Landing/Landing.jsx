import styles from './Landing.module.css'
import Logotype from '../../assets/branding/PlanProAll.png'

const Landing = () => {
  return (
    <>
      <main className={styles.container}>
        <section className={styles.splash}>
          <img src={Logotype} alt="logo" />
        </section>
        <section className={styles.about}>
          <header>
            <h1>ABOUT US</h1>
            <h3>Why Productivity?</h3>
          </header>
          <article>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales felis in justo suscipit, a ornare nibh euismod. Nunc laoreet dapibus nunc, eu malesuada nunc mollis ut. Donec at justo at massa vulputate suscipit. Proin auctor eget neque non ultrices. Quisque euismod tellus eu dui ultrices, eu efficitur ex fringilla. Quisque eget ex a elit venenatis dapibus gravida ac sem. Nunc quis felis sit amet est varius ullamcorper. Integer viverra libero sit amet consectetur viverra.
            </p>
          </article>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>© 2022 PLANPRO INC. ALL RIGHTS RESERVED</p>
      </footer>
    </>
  )
}

export default Landing
