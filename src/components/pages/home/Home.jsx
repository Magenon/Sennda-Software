import * as React from "react";
// import { Link } from "react-router-dom";
// import './Home.css'

// import  'bootstrap/dist/css/bootstrap.min.css' ;

// import Image from '../../img/banner-sennda-atualizado-2022.png'

function Home() {
    return (
        // <!-- Barra de pesquisa -->
        <div className="container">
            <div class="topo-pesquisa">

                {/* <!-- Form de busca --> */}
                {/* <div id="busca">
                    <button type="button" class="close">X</button>
                    <form action="https://sennda.com.br" method="get" accept-charset="utf-8" id="searchform" role="search">
                        <input type="search" name="s" placeholder="Digite sua busca" value="" />
                        <input type="submit" class="btn btn-primary" value="Pesquisar" />
                    </form>
                </div>*/}
            </div> 

            <a href="https://sennda-software.reservio.com/" target=""><div class="botao-agendar-certificado">
                <p>
                    <i class="fa fa-calendar-check-o" aria-hidden="true">
                    </i> Agendar certificado digital
                </p>
            </div>
            </a>

            {/* <!-- Banner-- > */}
            <div class="banner-owl">
                <ul class="">

                    <div class="">
                        <div class="">
                            <div class="">
                                <li class="item">
                                    <a href="solucoes/sennda-prize">
                                        <img src="https://sennda.com.br/wp-content/themes/novosenndawp_v3/img/banner-sennda-atualizado-2022.png" alt="banner" />
                                    </a>
                                </li>
                            </div>

                            {/* <div class="owl-item active">
                                <li class="item">
                                    <a href="solucoes/sennda-prize">
                                        <img src="https://sennda.com.br/wp-content/themes/novosenndawp_v3/img/banner-sennda-atualizado-2022.png" alt="banner" />
                                    </a>
                                </li>
                            </div>  */}

                            {/* <div class="owl-item cloned">
                                <li class="item">
                                    <a href="solucoes/sennda-prize">
                                        <img src="https://sennda.com.br/wp-content/themes/novosenndawp_v3/img/banner-sennda-atualizado-2022.png" alt="banner" />
                                    </a>
                                </li>
                            </div>

                             <div class="owl-item cloned">
                                <li class="item">
                                    <a href="solucoes/sennda-prize">
                                        <img src="https://sennda.com.br/wp-content/themes/novosenndawp_v3/img/banner-sennda-atualizado-2022.png" alt="banner" />
                                    </a>
                                </li>
                            </div>

                            <div class="owl-item cloned">
                                <li class="item">
                                    <a href="solucoes/sennda-prize">
                                        <img src="https://sennda.com.br/wp-content/themes/novosenndawp_v3/img/banner-sennda-atualizado-2022.png" alt="banner" />
                                    </a>
                                </li>
                            </div> */}

                        </div>
                    </div>

                     <div class="owl-nav disabled">
                        <button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button>
                        <button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button>
                    </div>

                    <div class="owl-dots disabled"></div>
                </ul>
            </div>
        </div>
    );
};

export default Home;