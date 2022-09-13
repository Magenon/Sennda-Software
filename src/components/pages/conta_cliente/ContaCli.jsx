import * as React from "react";
import './contaCli.css'

// or less ideally
// import { Button } from 'react-bootstrap';
import { ButtonAcesso, ButtonCad, Par } from '../../SplashScreen.js';

function sayHello() {
    alert('Anda-lê !');
}

function ContaCli() {
    return (
        <div className="">
            <div class="pagina-titulo">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <h1>Minha Conta</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pagina-artigo-imagem"></div>
            {/* <!-- Breadcrumb --> */}
            <div class="breadcrumb">
                <div class="container-fluid">
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
            </div >

            <div className="pagina-conteudo">
                <div className="containerMc">
                    <div className="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            {/* <!-- Início do loop --> */}
                            <Par>
                                <article class="pagina-artigo">
                                    {/* <div class="pagina-artigo-textos"> */}
                                    <div class="woocommerce">
                                        {/* <div class="woocommerce-notices-wrapper"></div> */}

                                        <div class="u-columns col2-set" id="customer_login">

                                            <div class="u-column1 col-1">

                                                <h1>Entrar :</h1>

                                                <div class="col-sm-6 offset-sm-3">

                                                    <form action="" method="post">
                                                        {/* <!-- nome completo do cliente --> */}
                                                        <div class="form-group">
                                                            <input type="text"
                                                                class="form-control"
                                                                name="text_nome_completo"
                                                                placeholder="Nome completo"
                                                                // value="<?php echo $nome ?>"
                                                                required>
                                                            </input>
                                                        </div>
                                                        {/* <!-- email --> */}
                                                        <div class="form-group">
                                                            <input type="email"
                                                                class="form-control"
                                                                name="text_email"
                                                                placeholder="Email"
                                                                // value="<?php echo $email ?>"
                                                                required>
                                                            </input>
                                                        </div>

                                                        <ButtonAcesso>
                                                            Acessar
                                                        </ButtonAcesso>

                                                        <label className="woocommerce-LostPassword">
                                                            <input class="woocommerce-form__input woocommerce-form__input-checkbox" name="rememberme" type="checkbox"
                                                                id="rememberme" value="forever" />
                                                            <span>&nbsp; Lembre-me</span>
                                                        </label>

                                                        <p className="woocommerce-LostPassword">
                                                            <a href="https://sennda.com.br/minha-conta/lost-password">Perdeu sua senha ?</a>
                                                        </p>
                                                        <hr />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </Par>

                            <ButtonCad onClick={sayHello}>
                                Cadastre-se :
                            </ButtonCad>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContaCli;