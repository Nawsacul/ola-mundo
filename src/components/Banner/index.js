import styles from './Banner.module.css';
import circuloColorido from '../../assets/circulo_colorido.png'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas! Eu sou Lucas Queiroz, Desenvolvedor Web Front-end. Este foi um projeto em conjunto com um instrutor do Alura, Antônio Evaldo (Front-end e Back-end).
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img 
                    className={styles.minhaFoto}
                    src="https://media.licdn.com/dms/image/D4D03AQEIbR_agYmZNw/profile-displayphoto-shrink_800_800/0/1699407403840?e=1712793600&v=beta&t=2HzgXByzsdw28CuzuLoUu6kay-xBwmZpL6D19quIn1s"
                    alt='Foto do Lucas Queiroz sorrindo'
                />
            </div>
        </div>
    )
}

export default Banner;