import styles from './SobreMim.module.css';

import PostModelo from '../../components/PostModelo';
import fotoCapa from '../../assets/sobre_mim_capa.png';

const SobreMim = () => {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre Mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Lucas!
            </h3>

            <img
                src='http://github.com/nawsacul.png'
                alt='Foto do Lucas sorrindo'
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Sou um Desenvolvedor Front End com sólidas habilidades em desenvolvimento de websites, com minha especialidade centrada no JavaScript. Atualmente, estou aprofundando meus conhecimentos em React (com JS inicialmente, e planejo mudar para React com TypeScript em um futuro próximo), criando soluções web eficientes e amigáveis ao usuário. Com dois anos de experiência como estagiário de TI e um ano e meio produzindo projetos como freelancer, estive envolvido na liderança de equipes e na gestão de projetos de alta qualidade.
            </p>
            <p className={styles.paragrafo}>
                Anteriormente, comecei minha vida acadêmica na área jurídica, formando-me em Direito, uma decisão motivada pela admiração pelo campo e para honrar meu falecido pai. Essa experiência me proporcionou uma perspectiva única em resolução de problemas e ética profissional.
            </p>
            <p className={styles.paragrafo}>
                Além da minha dedicação ao mundo da tecnologia, acredito no equilíbrio entre a mente e o corpo para o sucesso profissional e pessoal. Dedico tempo à prática de esportes e atividades físicas, como treinos regulares na academia, caiaque, airsoft e boliche.
            </p>
            <p className={styles.paragrafo}>
                Estou animado para continuar minha jornada na tecnologia e ansioso pelas novas oportunidades que virão!
            </p>
        </PostModelo>
    )
}

export default SobreMim;