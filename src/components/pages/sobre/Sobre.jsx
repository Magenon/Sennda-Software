import * as React from "react";
import './Sobre.css'

function Sobre() {   
    return (
        // <!-- Barra de pesquisa -->
        <div className="topo-pesquisa">
            {/* <!-- Form de busca --> */}
            <div id="busca">
                <button type="button" class="close">X</button>
                <form action="https://sennda.com.br" method="get" accept-charset="utf-8" id="searchform" role="search">
                    <input type="search" name="s" placeholder="Digite sua busca" value="" />
                    <input type="submit" class="btn btn-primary" value="Pesquisar" />
                </form>
            </div>            

            <a href="https://sennda-software.reservio.com/" target=""><div class="botao-agendar-certificado">
                <p><i class="fa fa-calendar-check-o" aria-hidden="true">
                </i>
                    {/* Agendar certificado digital */}
                </p>
            </div></a>

            {/* // <!-- Página --> */}
            <div class="pagina-titulo">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <h1>Quem Somos</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* // <!-- Breadcrumb --> */}
            <div class="breadcrumb">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12">
                            <p></p>
                            <div id="crumbs">
                                {/* <a href="https://sennda.com.br">Home</a>
                                /
                                <span class="current">Quem Somos</span> */}
                            </div>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pagina-conteudo">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-7 col-lg-offset-1 col-md-7 col-md-offset-1 col-sm-8">
                            <article class="pagina-artigo">
                                <div class="pagina-artigo-imagem"> </div>
                                <div class="pagina-artigo-textos">
                                    <p><h4>
                                        A Sennda nasceu a partir de uma necessidade de softwares simples e práticos para o pequeno
                                        varejo. Do sucesso de um aplicativo para gerar arquivos MFD de impressoras ficais em cinco
                                        cliques veio à idéia de inovar na construção de softwares para emissão de notas fiscais no
                                        varejo.
                                    </h4></p>
                                    <p>&nbsp;</p>
                                    <p><h4>
                                        Com uma equipe técnica de excelente qualificação e softwares simples e objetivos a sennda
                                        vem ganhando um espaço cada vez maior no mercado de softwares. Com uma excelente infra-estrutura,
                                        vem melhorando a cada dia a qualidade do seu atendimento assim como o bom relacionamento com os clientes,
                                        e por isso já tem seus softwares em 19 estados brasileiros com aproximadamente 2000 usuários.
                                    </h4></p>
                                    <p>&nbsp;</p>
                                    <p><h4>
                                        A empresa tem como foco atender os pequenos empresários com custos acessíveis e um suporte técnico de qualidade,
                                        por isso, os softwares sempre tem preço abaixo da média da concorrência.
                                    </h4></p>
                                    <p>&nbsp;</p>
                                    <p><h4>
                                        Temos como visão, chegar entre as maiores empresas de softwares de automação comercial do país
                                        em um curto período de tempo e com a melhor qualidade.
                                    </h4></p>
                                    <p><h4>
                                        Nossa missão é desenvolver softwares simples e acessíveis e que realmente supram à necessidade do pequeno empresário.
                                    </h4></p>
                                    <img class="alignnone  wp-image-573" src="https://sennda.com.br/wp-content/uploads/2017/11/selo_premio_atendimento_sennda.jpg" alt="" width="143" height="193" srcset="https://sennda.com.br/wp-content/uploads/2017/11/selo_premio_atendimento_sennda.jpg 250w, https://sennda.com.br/wp-content/uploads/2017/11/selo_premio_atendimento_sennda-118x160.jpg 118w" sizes="(max-width: 143px) 100vw, 143px" />
                                    <img loading="lazy" class="alignnone  wp-image-574" src="https://sennda.com.br/wp-content/uploads/2017/11/selo_premio_atendimento_sennda_02.jpg" alt="" width="192" height="190" srcset="https://sennda.com.br/wp-content/uploads/2017/11/selo_premio_atendimento_sennda_02.jpg 341w, https://sennda.com.br/wp-content/uploads/2017/11/selo_premio_atendimento_sennda_02-161x160.jpg 161w, https://sennda.com.br/wp-content/uploads/2017/11/selo_premio_atendimento_sennda_02-140x140.jpg 140w" sizes="(max-width: 192px) 100vw, 192px" />
                                </div>
                            </article>
                            {/* <!-- Fim do loop --> */}
                        </div>
                        {/* <!-- Barra lateral -->   */}
                        <div class="col-lg-3 col-md-3 col-sm-4">
                            <aside class="barra-lateral">

                                <div class="barra-lateral-blog">
                                    <h2>Últimas notícias</h2>
                                    <hr />
                                    {/* <!-- Artigo barra lateral 01 --> */}
                                    <a href="https://sennda.com.br/blog/voce-sabe-o-que-muda-com-a-mp-1-116-2022-na-licenca-maternidade"><div class="barra-lateral-noticias-unico">
                                        <div class="barral-lateral-noticias-imagem">
                                            <img width="130" height="80" src="https://sennda.com.br/wp-content/uploads/2022/05/close-up-pregnant-woman-typing-on-laptop-130x80.jpg" class="attachment-miniatura size-miniatura wp-post-image" alt="" loading="lazy" srcset="https://sennda.com.br/wp-content/uploads/2022/05/close-up-pregnant-woman-typing-on-laptop-130x80.jpg 130w, https://sennda.com.br/wp-content/uploads/2022/05/close-up-pregnant-woman-typing-on-laptop-260x160.jpg 260w" sizes="(max-width: 130px) 100vw, 130px" />
                                        </div>
                                        {/* 
                                            <!--<div class="barra-lateral-noticias-data">
                                                <p>11/05/2022</p>
                                            </div>--> */}

                                        <div class="barra-lateral-noticias-texto">
                                            <p>Você sabe o que muda com a MP 1.116/2022 na licença maternidade?</p>
                                        </div>
                                    </div></a>

                                    <div class="quebra-linha"></div>

                                    {/* <!-- Fim do loop --> */}

                                    {/* <!-- Artigo barra lateral 01 --> */}
                                    <a href="https://sennda.com.br/blog/por-que-ter-um-software-de-vendas-no-pequeno-negocio"><div class="barra-lateral-noticias-unico">
                                        <div class="barral-lateral-noticias-imagem">
                                            <img width="130" height="80" src="https://sennda.com.br/wp-content/uploads/2021/08/software-130x80.jpg" class="attachment-miniatura size-miniatura wp-post-image" alt="software de vendas" loading="lazy" srcset="https://sennda.com.br/wp-content/uploads/2021/08/software-130x80.jpg 130w, https://sennda.com.br/wp-content/uploads/2021/08/software-260x160.jpg 260w" sizes="(max-width: 130px) 100vw, 130px" />
                                        </div>

                                        {/* <!--<div class="barra-lateral-noticias-data">
                                                <p>24/08/2021</p>
                                            </div>--> */}

                                        <div class="barra-lateral-noticias-texto">
                                            <p>Por que ter um software de vendas no pequeno negócio?</p>
                                        </div>
                                    </div></a>

                                    <div class="quebra-linha"></div>

                                    {/* <!-- Fim do loop --> */}

                                    {/* <!-- Artigo barra lateral 01 --> */}
                                    <a href="https://sennda.com.br/blog/sua-empresa-ja-esta-pronta-para-a-emissao-de-nfc-e">
                                        <div class="barra-lateral-noticias-unico">
                                            <div class="barral-lateral-noticias-imagem">
                                                <img width="130" height="80" src="https://sennda.com.br/wp-content/uploads/2021/08/pexels-artem-beliaikin-994517-130x80.jpg"
                                                    class="attachment-miniatura size-miniatura wp-post-image" alt="NFC-e" loading="lazy"
                                                    srcset="https://sennda.com.br/wp-content/uploads/2021/08/pexels-artem-beliaikin-994517-130x80.jpg 130w, https://sennda.com.br/wp-content/uploads/2021/08/pexels-artem-beliaikin-994517-260x160.jpg 260w"
                                                    sizes="(max-width: 130px) 100vw, 130px" />
                                            </div>

                                            {/* <!--<div class="barra-lateral-noticias-data">
                                                <p>10/08/2021</p>
                                            </div>--> */}

                                            <div class="barra-lateral-noticias-texto">
                                                <p>Sua empresa já está pronta para a emissão de NFC-e?</p>
                                            </div>
                                        </div></a>

                                    <div class="quebra-linha"></div>

                                    {/* <!-- Fim do loop --> */}

                                </div>

                                <div class="barra-lateral-categorias">
                                    <h2>Categorias</h2>
                                    <hr />
                                    <ul>
                                        <li class="cat-item cat-item-15"><a href="https://sennda.com.br/blog/dicas">Dicas</a>
                                        </li>
                                        <li class="cat-item cat-item-16"><a href="https://sennda.com.br/blog/legislacao">Legislação</a>
                                        </li>
                                        <li class="cat-item cat-item-14"><a href="https://sennda.com.br/blog/noticias">Notícias</a>
                                        </li>
                                    </ul>
                                    <div class="quebra-linha"></div>
                                </div>

                                <div class="barra-lateral-arquivo">
                                    <h2>Arquivo</h2>
                                    <hr />
                                    <ul>
                                        <li><a href="https://sennda.com.br/2022/05">maio 2022</a></li>
                                        <li><a href="https://sennda.com.br/2021/08">agosto 2021</a></li>
                                        <li><a href="https://sennda.com.br/2021/07">julho 2021</a></li>
                                        <li><a href="https://sennda.com.br/2021/06">junho 2021</a></li>
                                        <li><a href="https://sennda.com.br/2021/05">maio 2021</a></li>
                                        <li><a href="https://sennda.com.br/2021/04">abril 2021</a></li>
                                        <li><a href="https://sennda.com.br/2021/03">março 2021</a></li>
                                        <li><a href="https://sennda.com.br/2021/02">fevereiro 2021</a></li>
                                        <li><a href="https://sennda.com.br/2021/01">janeiro 2021</a></li>
                                        <li><a href="https://sennda.com.br/2020/12">dezembro 2020</a></li>
                                        <li><a href="https://sennda.com.br/2020/11">novembro 2020</a></li>
                                        <li><a href="https://sennda.com.br/2020/10">outubro 2020</a></li>
                                        <li><a href="https://sennda.com.br/2020/09">setembro 2020</a></li>
                                        <li><a href="https://sennda.com.br/2020/08">agosto 2020</a></li>
                                        <li><a href="https://sennda.com.br/2020/07">julho 2020</a></li>
                                        <li><a href="https://sennda.com.br/2020/06">junho 2020</a></li>
                                        <li><a href="https://sennda.com.br/2020/05">maio 2020</a></li>
                                        <li><a href="https://sennda.com.br/2020/04">abril 2020</a></li>
                                        <li><a href="https://sennda.com.br/2020/03">março 2020</a></li>
                                        <li><a href="https://sennda.com.br/2020/02">fevereiro 2020</a></li>
                                        <li><a href="https://sennda.com.br/2020/01">janeiro 2020</a></li>
                                        <li><a href="https://sennda.com.br/2019/12">dezembro 2019</a></li>
                                        <li><a href="https://sennda.com.br/2019/11">novembro 2019</a></li>
                                        <li><a href="https://sennda.com.br/2019/10">outubro 2019</a></li>
                                        <li><a href="https://sennda.com.br/2019/09">setembro 2019</a></li>
                                        <li><a href="https://sennda.com.br/2019/08">agosto 2019</a></li>
                                        <li><a href="https://sennda.com.br/2019/07">julho 2019</a></li>
                                        <li><a href="https://sennda.com.br/2019/06">junho 2019</a></li>
                                        <li><a href="https://sennda.com.br/2019/05">maio 2019</a></li>
                                        <li><a href="https://sennda.com.br/2019/04">abril 2019</a></li>
                                        <li><a href="https://sennda.com.br/2019/03">março 2019</a></li>
                                        <li><a href="https://sennda.com.br/2019/02">fevereiro 2019</a></li>
                                        <li><a href="https://sennda.com.br/2019/01">janeiro 2019</a></li>
                                        <li><a href="https://sennda.com.br/2018/12">dezembro 2018</a></li>
                                        <li><a href="https://sennda.com.br/2018/11">novembro 2018</a></li>
                                        <li><a href="https://sennda.com.br/2018/10">outubro 2018</a></li>
                                        <li><a href="https://sennda.com.br/2018/09">setembro 2018</a></li>
                                        <li><a href="https://sennda.com.br/2018/08">agosto 2018</a></li>
                                        <li><a href="https://sennda.com.br/2018/07">julho 2018</a></li>
                                        <li><a href="https://sennda.com.br/2018/06">junho 2018</a></li>
                                        <li><a href="https://sennda.com.br/2018/05">maio 2018</a></li>
                                        <li><a href="https://sennda.com.br/2018/04">abril 2018</a></li>
                                        <li><a href="https://sennda.com.br/2017/11">novembro 2017</a></li>
                                        <li><a href="https://sennda.com.br/2017/06">junho 2017</a></li>
                                        <li><a href="https://sennda.com.br/2016/09">setembro 2016</a></li>
                                        <li><a href="https://sennda.com.br/2016/06">junho 2016</a></li>
                                        <li><a href="https://sennda.com.br/2016/05">maio 2016</a></li>
                                        <li><a href="https://sennda.com.br/2016/04">abril 2016</a></li>
                                    </ul>
                                    <div class="quebra-linha"></div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sobre;