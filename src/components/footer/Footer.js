import React from 'react'
import { Link } from "react-router-dom";
import './Footer.css'
import '../style.css'

import { FaMailBulk, FaPhone } from 'react-icons/fa';

const Footer = () => (

    <footer className="rodape">
        <div className="container" />
        <div className="row" />

        <div className="col-lg-3 col-md-3 col-sm-3">
            <div className="rodape-contatos">
                <div>
                    <li className=''><Link className="rodape-logo" to="/"></Link></li>
                </div>
            </div>
        </div>

        {/* ====================================================================================================== */}

        {/* <Par> */}

            <div className="col-lg-2 col-md-2 col-sm-2">
                <div className="rodape-contatos">
                    <p><i className="FaAws" aria-hidden="true"></i> <FaPhone /> (21) 3005-3012<br></br>
                        <i className="FaAws" aria-hidden="true"></i> <FaPhone /> (11) 2122-4221<br></br>
                        <i className="bi bi-telephone" aria-hidden="true"></i> <FaMailBulk /> contato@sennda.com.br
                    </p>
                </div>
            </div>

            {/* ====================================================================================================== */}

            <div className="col-lg-2 col-md-2 col-sm-2">
                <ul className="rodape-menu">
                    <li id="menu-item-619" class="">
                        <p> Links </p>
                        <a className="rodape-menu" href="https://sennda.com.br/seja-uma-revenda">Seja uma revenda</a>
                    </li>
                </ul>
            </div>

            {/* ====================================================================================================== */}

            <div className="col-lg-5 col-md-5 col-sm-5">
                <div className="rodape-newsletter">
                    <p>Assine nossa newsletter e receba informações úteis para seu</p>
                    <p>negócio:</p>

                    <form action="//sennda.us13.list-manage.com/subscribe/post?u=3af511874523d3cfc6600f611&amp;id=0e6c788aa6"
                        method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate >
                        <input type="text" className="form-newsletter-rodape" placeholder="Nome" name="FNAME" id="mce-FNAME" required />
                        <input type="email" className="form-newsletter-rodape" placeholder="E-mail" name="EMAIL" id="mce-EMAIL" required />

                        <input type="submit" className="form-newsletter-rodape-botao" value="Assinar" name="subscribe" id="mc-embedded-subscribe" />

                        <div id="mce-responses" className="clear">
                            <div className="response" id="mce-error-response"></div>
                            <div className="response" id="mce-success-response"></div>
                        </div>
                    </form>

                </div>
                <div className="row">
                    <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
                        <div className="quebra-linha"></div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div align="center">
                    <p>2022 © Sennda Software - Todos os direitos reservados - Desenvolvido por -&nbsp;
                        <a className="rodape-menu" href="http://localhost:3000/" target="">Sennda Software</a>
                    </p>
                </div>
            </div>

        {/* </Par> */}

    </footer >
)

export default Footer