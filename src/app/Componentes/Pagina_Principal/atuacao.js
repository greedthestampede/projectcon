'use client'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import styles from '../../page.module.css'
import '@splidejs/react-splide/css/skyblue';
import Popup from 'reactjs-popup';
import { useState } from 'react';

export default function Atuacao() {
  const [openFirst, setOpenFirst] = useState(false);
  const closeModalFirst = () => setOpenFirst(false);
  const [openSecond, setOpenSecond] = useState(false);
  const closeModalSecond = () => setOpenSecond(false);
  const [openThird, setOpenThird] = useState(false);
  const closeModalThird = () => setOpenThird(false);
  const [openFourth, setOpenFourth] = useState(false);
  const closeModalFourth = () => setOpenFourth(false);
  const [openFifth, setOpenFifth] = useState(false);
  const closeModalFifth = () => setOpenFifth(false);
  const [openSixth, setOpenSixth] = useState(false);
  const closeModalSixth = () => setOpenSixth(false);
  const [openSeventh, setOpenSeventh] = useState(false);
  const closeModalSeventh = () => setOpenSeventh(false);
  const [openEighth, setOpenEighth] = useState(false);
  const closeModalEighth = () => setOpenEighth(false);
  return (
    <div className={styles.centerAlternado}>
      <div className={styles.chamada}>
        <div className={styles.ladoalado}>
          <h1 className={styles.titulo}>
            Áreas de Atuação
          </h1>
        </div>
        <div className={styles.textolado}>
          <Splide className={styles.conjuntoSplide} options={{type: 'loop', perPage: 3, autoplay: false, rewind: true, pauseOnHover: false, pauseOnFocus: false, snap: true, padding: { left: '1rem', right: '1rem' }, gap: '1rem', arrows: false, breakpoints: { 950: { perPage: 2, arrows: true }, 640: { perPage: 1 } }}} aria-label="Áreas de Atuação">
              <Popup trigger={<SplideSlide>
                <div className={styles.cartaoAtuacao} onClick={() => setOpenFirst(o => !o)}>
                  <h2 className={styles.cartaoTitulo}>Abastecimento de Água</h2>
                  <img src="https://placehold.co/800x825.png" className={styles.cartaoImagem} alt="Image 1"/>
                  <p className={styles.cartaoTextoExterno}>Saiba mais...</p>
                </div>
             </SplideSlide>} modal open={openFirst} closeOnDocumentClick onClose={closeModalFirst} lockScroll repositionOnResize>
                <div className={styles.popupJanela}>
                <img src='fechar.png' className={styles.popupFechar} onClick={closeModalFirst} />
                <h2 className={styles.cartaoTituloInterno}>Abastecimento de Água</h2>
                  <p className={styles.cartaoTexto}>A água é um recurso natural essencial para a vida. Ela é usada para beber, cozinhar, tomar banho, lavar roupas, irrigar plantações, gerar energia elétrica e muitos outros fins. </p>
                  <p className={styles.cartaoTexto}>O planejamento do abastecimento de água é um processo que envolve a identificação, a coleta, o tratamento e a distribuição da água potável para uma população. É um processo complexo que deve levar em consideração uma série de fatores, como a disponibilidade de água, a qualidade da água, a demanda por água, a infraestrutura de distribuição de água e os custos envolvidos.</p>
                  <p className={styles.cartaoTexto}>O planejamento do abastecimento de água é importante para garantir que todos tenham acesso à água potável, para proteger a qualidade da água e para evitar o desperdício. É também importante para o desenvolvimento econômico, pois a água é essencial para a produção de alimentos, para a indústria e para o turismo.</p>
                  <p className={styles.cartaoTexto}>O planejamento do abastecimento de água é um processo contínuo que deve ser adaptado às mudanças na disponibilidade de água, na qualidade da água, na demanda por água e na infraestrutura de distribuição de água. É também importante envolver a comunidade no processo de planejamento, para garantir que as necessidades da população sejam atendidas. Aqui estão alguns dos benefícios do planejamento do abastecimento de água:</p>
                  <ul>
                    <li className={styles.cartaoBullet}>	Garante que todos tenham acesso à água potável;</li>
                    <li className={styles.cartaoBullet}>	Protege a qualidade da água;</li>
                    <li className={styles.cartaoBullet}>	Evita o desperdício de água;</li>
                    <li className={styles.cartaoBullet}>	Contribui para o desenvolvimento econômico;</li>
                    <li className={styles.cartaoBullet}>	Melhora a qualidade de vida da população.</li>
                  </ul>
                  <p className={styles.cartaoTexto}>O planejamento do abastecimento de água é uma tarefa complexa, mas é essencial para garantir que todos tenham acesso à água potável e para proteger o meio ambiente.</p>
                </div>
            </Popup>
            <Popup trigger={<SplideSlide>
            <div className={styles.cartaoAtuacao} onClick={() => setOpenSecond(a => !a)}>
                <h2 className={styles.cartaoTitulo}>Esgotamento Sanitário</h2>
                <img src="https://placehold.co/800x825.png" className={styles.cartaoImagem} alt="Image 2"/>
                <p className={styles.cartaoTextoExterno}>Saiba mais...</p>
		          </div>
            </SplideSlide>} modal open={openSecond} closeOnDocumentClick onClose={closeModalSecond} lockScroll repositionOnResize>
            <div className={styles.popupJanela}>
            <img src='fechar.png' className={styles.popupFechar} onClick={closeModalSecond} />
                <h2 className={styles.cartaoTituloInterno}>Esgotamento Sanitário</h2>
              <p className={styles.cartaoTexto}>O esgotamento sanitário é um serviço essencial para a saúde pública e o desenvolvimento sustentável. Ele consiste na coleta, no tratamento e na disposição dos esgotos. A falta de esgotamento sanitário pode causar uma série de problemas, tais como:</p>
		            <ul>
			            <li className={styles.cartaoBullet}>Doenças transmitidas por água e alimentos, como diarreia, cólera, hepatite A e febre tifoide;</li>
			            <li className={styles.cartaoBullet}>Poluição das águas superficiais e subterrâneas, que podem contaminar o abastecimento de água potável;</li>
			            <li className={styles.cartaoBullet}>Infestação de vetores de doenças, como mosquitos, moscas e baratas;</li>
			            <li className={styles.cartaoBullet}>Mau cheiro e poluição visual;</li>
			            <li className={styles.cartaoBullet}>Perda de produtividade econômica, devido à falta de saúde e saneamento.</li>
		            </ul>
		            <p className={styles.cartaoTexto}>A universalização do esgotamento sanitário é uma meta importante para a Agenda 2030 das Nações Unidas. Ela é essencial para alcançar os Objetivos de Desenvolvimento Sustentável (ODS), como a erradicação da pobreza, a redução da desigualdade e a proteção do meio ambiente. No entanto, há muitos desafios para alcançar a universalização do esgotamento sanitário</p>
            </div>
            </Popup>
            <Popup trigger={<SplideSlide>
            <div className={styles.cartaoAtuacao} onClick={() => setOpenThird(a => !a)}>
                <h2 className={styles.cartaoTitulo}>Resíduos Sólidos e Limpeza Urbana</h2>
                <img src="https://placehold.co/800x825.png" className={styles.cartaoImagem} alt="Image 3"/>
                <p className={styles.cartaoTextoExterno}>Saiba mais...</p>
              </div>
            </SplideSlide>} modal open={openThird} closeOnDocumentClick onClose={closeModalThird} lockScroll repositionOnResize>
              <div className={styles.popupJanela}>
                <img src='fechar.png' className={styles.popupFechar} onClick={closeModalThird} />
                <h2 className={styles.cartaoTituloInterno}>Resíduos Sólidos e Limpeza Urbana</h2>
                <p className={styles.cartaoTexto}>A limpeza urbana e o manejo dos resíduos sólidos são serviços essenciais para a saúde pública e o meio ambiente. Eles consistem na coleta, no transporte, no transbordo, no tratamento e na disposição final adequada dos resíduos sólidos. A falta de limpeza urbana e manejo dos resíduos sólidos pode causar uma série de problemas, entre eles:</p>
		            <ul>
		            	<li className={styles.cartaoBullet}>Doenças transmitidas por vetores, como dengue, zika e chikungunya;</li>
		            	<li className={styles.cartaoBullet}>Poluição do ar, da água e do solo;</li>
		            	<li className={styles.cartaoBullet}>Incêndios;</li>
		            	<li className={styles.cartaoBullet}>Mau cheiro;</li>
		            	<li className={styles.cartaoBullet}>Atração de animais peçonhentos;</li>
		            	<li className={styles.cartaoBullet}>Inundações;</li>
		            	<li className={styles.cartaoBullet}>Desvalorização imobiliária;</li>
		            	<li className={styles.cartaoBullet}>Perda de produtividade econômica.</li>
		            </ul>
		            <p className={styles.cartaoTexto}>O planejamento dos serviços de limpeza urbana e manejo dos resíduos sólidos é importante para garantir que esses serviços sejam prestados de forma eficiente e eficaz. O planejamento deve levar em consideração uma série de fatores, como a quantidade de resíduos produzidos, a infraestrutura disponível, o custo dos serviços e as necessidades da população.</p>
		            <p className={styles.cartaoTexto}>O planejamento dos serviços de limpeza urbana e manejo dos resíduos sólidos deve ser realizado de forma participativa, com a participação da população, dos órgãos públicos e das empresas privadas. </p>
		            <p className={styles.cartaoTexto}>O planejamento dos serviços de limpeza urbana e manejo dos resíduos sólidos é uma tarefa complexa que exige uma equipe técnica qualificada e com ampla experiência.</p>	
              </div>
            </Popup>
            <Popup trigger={<SplideSlide>
                <div className={styles.cartaoAtuacao} onClick={() => setOpenFourth(o => !o)}>
                  <h2 className={styles.cartaoTitulo}>Drenagem</h2>
                  <img src="https://placehold.co/800x825.png" className={styles.cartaoImagem} alt="Image 4"/>
                  <p className={styles.cartaoTextoExterno}>Saiba mais...</p>
                </div>
             </SplideSlide>} modal open={openFourth} closeOnDocumentClick onClose={closeModalFourth} lockScroll repositionOnResize>
                <div className={styles.popupJanela}>
                <img src='fechar.png' className={styles.popupFechar} onClick={closeModalFourth} />
                <h2 className={styles.cartaoTituloInterno}>Drenagem</h2>
                  <p className={styles.cartaoTexto}>Possuir uma drenagem urbana eficiente é fundamental para qualquer cidade e com o crescimento constante delas, consequentemente ocorre a impermeabilização do local, que por sua vez impede o escoamento e infiltração das águas pluviais no solo. Tendo isso em mente, o sistema de drenagem deve acompanhar o aumento da urbanização das cidades, a fim de evitar transtornos como: alagamentos e inundações.</p>
                </div>
            </Popup>
            <Popup trigger={<SplideSlide>
            <div className={styles.cartaoAtuacao} onClick={() => setOpenFifth(a => !a)}>
                <h2 className={styles.cartaoTitulo}>Meio Ambiente</h2>
                <img src="https://placehold.co/800x825.png" className={styles.cartaoImagem} alt="Image 5"/>
                <p className={styles.cartaoTextoExterno}>Saiba mais...</p>
		          </div>
            </SplideSlide>} modal open={openFifth} closeOnDocumentClick onClose={closeModalFifth} lockScroll repositionOnResize>
            <div className={styles.popupJanela}>
            <img src='fechar.png' className={styles.popupFechar} onClick={closeModalFifth} />
                <h2 className={styles.cartaoTituloInterno}>Meio Ambiente</h2>
                <p className={styles.cartaoTexto}>O meio ambiente é um assunto que está mundialmente em evidência, principalmente devido à Agenda 2030, da ONU, onde foram estabelecidos objetivos para o desenvolvimento sustentável. É um assunto que envolve principalmente o desenvolvimento sustentável tanto da sociedade quanto de empresas, que por sua vez, está atrelado ao desenvolvimento social, levando-se em consideração que estes serão os responsáveis por praticarem as soluções propostas.</p>
		            <p className={styles.cartaoTexto}>No que diz respeito ao desenvolvimento ecologicamente correto de empresas, seja no estudo, desenvolvimento ou implantação de projetos, há a necessidade de considerar os impactos que a atividade a ser desenvolvida causará ao meio ambiente, de modo que, além de atender a legislação, possua um bom planejamento e a proposição de soluções inovadoras e eficientes.</p>
            </div>
            </Popup>
            <Popup trigger={<SplideSlide>
            <div className={styles.cartaoAtuacao} onClick={() => setOpenSixth(a => !a)}>
                <h2 className={styles.cartaoTitulo}>Recursos Hídricos</h2>
                <img src="https://placehold.co/800x825.png" className={styles.cartaoImagem} alt="Image 6"/>
                <p className={styles.cartaoTextoExterno}>Saiba mais...</p>
              </div>
            </SplideSlide>} modal open={openSixth} closeOnDocumentClick onClose={closeModalSixth} lockScroll repositionOnResize>
              <div className={styles.popupJanela}>
                <img src='fechar.png' className={styles.popupFechar} onClick={closeModalSixth} />
                <h2 className={styles.cartaoTituloInterno}>Recursos Hídricos</h2>
                <p className={styles.cartaoTexto}>Garantir a qualidade dos recursos hídricos possui extrema importância, visto que a água é um bem finito e deve ser preservada. Por meio da correta gestão dos cursos d’ água, busca-se preservar suas características, bem como proteger o ecossistema.</p>
		            <p className={styles.cartaoTexto}>Através do uso de instrumentos específicos para projeções de demanda e diagnóstico da situação atual é possível definir um planejamento de acordo com a situação, detalhando as melhores alternativas a serem adotadas, visto que cada uma possui suas peculiaridades, posteriormente, é definida a estratégia para a execução da alternativa proposta.</p>	
              </div>
            </Popup>
            <Popup trigger={<SplideSlide>
                <div className={styles.cartaoAtuacao} onClick={() => setOpenSeventh(o => !o)}>
                  <h2 className={styles.cartaoTitulo}>Desenvolvimento Urbano e Territorial</h2>
                  <img src="https://placehold.co/800x825.png" className={styles.cartaoImagem} alt="Image 7"/>
                  <p className={styles.cartaoTextoExterno}>Saiba mais...</p>
                </div>
             </SplideSlide>} modal open={openSeventh} closeOnDocumentClick onClose={closeModalSeventh} lockScroll repositionOnResize>
                <div className={styles.popupJanela}>
                <img src='fechar.png' className={styles.popupFechar} onClick={closeModalSeventh} />
                <h2 className={styles.cartaoTituloInterno}>Desenvolvimento Urbano e Territorial</h2>
                  <p className={styles.cartaoTexto}>O processo de industrialização ocorre rapidamente no Brasil desde a metade do século XX, devido a esse fato a população se tornou urbana. Nesse sentido, iniciou-se a ocupação urbana desordenada, que ainda ocorre nas cidades brasileiras, causando diversos problemas, tanto relacionados à área ambiental quanto social, sendo alguns deles:</p>
                  <ul>
                    <li className={styles.cartaoBullet}>	Deslizamentos de terra;</li>
                    <li className={styles.cartaoBullet}>	Enchentes;</li>
                    <li className={styles.cartaoBullet}>	Ilhas de calor;</li>
                    <li className={styles.cartaoBullet}>	Ocupação de áreas irregulares;</li>
                    <li className={styles.cartaoBullet}>	Proliferação de comunidades e</li>
                    <li className={styles.cartaoBullet}>	Aumento da marginalidade.</li>
                  </ul>
                  <p className={styles.cartaoTexto}>Os problemas relacionados ao crescimento desordenado das cidades não se limitam a esses acima citados. Progredir é fundamental e esse processo deve ser muito bem planejado, de modo que seja equilibrado e otimizado, favorecendo os cidadãos com uma melhor qualidade de vida. Planejamento urbano é a palavra-chave para o crescimento ordenado de cidades.</p>
                </div>
            </Popup>
            <Popup trigger={<SplideSlide>
            <div className={styles.cartaoAtuacao} onClick={() => setOpenEighth(a => !a)}>
                <h2 className={styles.cartaoTitulo}>Transporte</h2>
                <img src="https://placehold.co/800x825.png" className={styles.cartaoImagem} alt="Image 2"/>
                <p className={styles.cartaoTextoExterno}>Saiba mais...</p>
		          </div>
            </SplideSlide>} modal open={openEighth} closeOnDocumentClick onClose={closeModalEighth} lockScroll repositionOnResize>
            <div className={styles.popupJanela}>
            <img src='fechar.png' className={styles.popupFechar} onClick={closeModalEighth} />
                <h2 className={styles.cartaoTituloInterno}>Transporte</h2>
                <p className={styles.cartaoTexto}>A malha rodoviária do Brasil é muito extensa, atingindo pouco mais de 1.700.000 de km, sendo este o principal modal utilizado como meio de deslocamento de cargas e pessoas. Nesse sentido, mais da metade do transporte de cargas é realizado por via terrestre, muitas vezes por vias intransitáveis ou em situação precária, necessitando de manutenção ou investimento de pavimentação.</p>
                <p className={styles.cartaoTexto}>Assim sendo, a ProjectCon atua de modo a garantir um sistema rodoviário de qualidade nas obras que realiza, seja efetuando trabalhos de gerenciamento, projeto ou planejamento. Destaca-se que, os serviços realizados visam apresentar o melhor custo-benefício para o cliente, assim como a proposição das melhores soluções e a excelência na execução.</p>
            </div>
            </Popup>
          </Splide>
        </div>
      </div>
    </div>
    )
}