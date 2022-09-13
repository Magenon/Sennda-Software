import * as React from "react";
import './Solucoes.css';
import { Par } from "../../SplashScreen.js";

// import { v4 as chave } from 'uuid';

function Solucoes() {
    return (
        <div class="">
            <div class="pagina-titulo">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <h1>Soluções</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Breadcrumb --> */}
            <div class="breadcrumb">
                <div class="">
                    <div class="row">
                        <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12">
                            <p></p>
                            <div id="crumbs">
                                {/* <a href="https://sennda.com.br">Home</a>
                                    <span class="current">Contato</span> */}
                            </div>
                            <p></p>
                        </div>
                    </div>
                </div>

                <div class="containers">

                <Par>
                  
                            <div class="img">
                                <a href="https://sennda.com.br/solucoes/sennda-prize"
                                    class="text-decoration-none text-uppercase font-weight-bold text-center">
                                    <img data-src="https://sennda.com.br/wp-content/uploads/2016/04/logo-sennda-prize.png" alt="ERP"
                                        class="imagem-responsiva"
                                        src="https://sennda.com.br/wp-content/uploads/2016/04/logo-sennda-prize.png" />
                                    <p class="mt-3 font-weight-bolder">Sennda Prize</p>
                                </a>
                            </div>                    

                    <div class="img">
                        <a href="https://sennda.com.br/solucoes/sennda-nfe"
                            class="text-decoration-none text-uppercase font-weight-bold text-center">
                            <img data-src="	https://sennda.com.br/wp-content/uploads/2016/04/logo-sennda-nfe.png" alt="ERP"
                                class="imagem-responsiva"
                                src="	https://sennda.com.br/wp-content/uploads/2016/04/logo-sennda-nfe.png" />
                            <p class="mt-3 font-weight-bolder">Sennda NFe</p>
                        </a>
                    </div>

                    <div class="img">
                        <a href="https://sennda.com.br/solucoes/sennda-gestao"
                            class="text-decoration-none text-uppercase font-weight-bold text-center">
                            <img data-src="https://sennda.com.br/wp-content/uploads/2022/02/gestao_pdvoff.png" alt="ERP"
                                class="imagem-responsiva"
                                src="https://sennda.com.br/wp-content/uploads/2022/02/gestao_pdvoff.png" />
                            <p></p>
                            <p class="mt-3 font-weight-bolder">Sennda Gestão</p>
                        </a>
                    </div>

                    <div class="img">
                        <a href="https://sennda.com.br/solucoes/sistema-de-manifestacao-de-nf-e"
                            class="text-decoration-none text-uppercase font-weight-bold text-center">
                            <img data-src="https://sennda.com.br/wp-content/uploads/2016/05/sistema-manifestacao-nfe.png" alt="ERP"
                                class="imagem-responsiva"
                                src="https://sennda.com.br/wp-content/uploads/2016/05/sistema-manifestacao-nfe.png" />
                            <p class="mt-3 font-weight-bolder">manifestação de NFe</p>
                        </a>
                    </div>

                    </Par>
                    
                </div>
            </div>
        </div>
    );
};

export default Solucoes;