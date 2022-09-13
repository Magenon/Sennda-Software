import * as React from "react";
import './Blog.css'
import { Par } from "../../SplashScreen.js";
//import { Button } from "reactstrap";
import "../../style.css";

function Blog() {
    return (
        <div className="">
            <div class="pagina-titulo">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <h1>Blog</h1>
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
                                {/* <a href="https://sennda.com.br">Home</a> / 
                                <span class="current">categoria "Blog"</span> */}
                            </div>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pagina-conteudo">
                <div class="container-fluid">
                    <Par>
                        <div class="row"></div>
                        <div class="col-lg-7 col-lg-offset-1 col-md-7 col-lg-offset-1 col-sm-8">

                            {/* <!-- Início do loop --> */}

                            {/* <!-- Artigo 01 --> */}

                            <a href="https://sennda.com.br/blog/voce-sabe-o-que-muda-com-a-mp-1-116-2022-na-licenca-maternidade">
                                <article class="">

                                    <div class="noticias-imagem">
                                        <img width="260" height="160" src="on-laptop.jpg"
                                            class="attachment-artigo-listagem size-artigo-listagem wp-post-image"
                                            srcset="https://sennda.com.br/wp-content/uploads/2022/05/close-up-pregnant-woman-typing-on-laptop-260x160.jpg 260w, https://sennda.com.br/wp-content/uploads/2022/05/close-up-pregnant-woman-typing-on-laptop-130x80.jpg 130w"
                                            sizes="(max-width: 260px) 100vw, 260px"></img>
                                        <div class="imagem-mais"></div>
                                    </div>

                                    <div class="noticias-titulo">
                                        <h3>Você sabe o que muda com a MP 1.116/2022 na licença maternidade?</h3>
                                    </div>

                                    <div class="noticias-resumo">
                                        <h4>Licença-maternidade é o benefício concedido às mulheres grávidas ou que tiveram filhos. Entretanto,
                                            tal benefício só é concedido para as…
                                        </h4>
                                    </div>

                                    <div className="">
                                        <input type="submit" className="form-newsletter-rodape-botao" value="Leia mais" name="subscribe" id="mc-embedded-subscribe" />
                                    </div>
                                </article>
                            </a>

                            <div class="quebra-linha"></div>
                            <hr />

                            {/* <!-- Fim do loop --> */}

                            {/* <!-- Artigo 02 --> */}

                            <a href="https://sennda.com.br/blog/por-que-ter-um-software-de-vendas-no-pequeno-negocio">
                                <article class="noticia">


                                    <div class="noticias-imagem">
                                        <img width="260" height="160" src="https://sennda.com.br/wp-content/uploads/2021/08/software-260x160.jpg"
                                            class="attachment-artigo-listagem size-artigo-listagem wp-post-image" alt="software de vendas" loading="lazy"
                                            srcset="https://sennda.com.br/wp-content/uploads/2021/08/software-260x160.jpg 260w, https://sennda.com.br/wp-content/uploads/2021/08/software-130x80.jpg 130w"
                                            sizes="(max-width: 260px) 100vw, 260px"></img>
                                        <div class="imagem-mais"></div>
                                    </div>

                                    {/* <!--<div class="noticias-data">
                                    <p>24/08/2021</p>
                                </div>--> */}

                                    <div class="noticias-titulo">
                                        <h3>Por que ter um software de vendas no pequeno negócio?</h3>
                                    </div>

                                    <div class="noticias-resumo">
                                        <p>O empreendedor atualmente enfrenta um dilema no que diz respeito a informatização do pequeno negócio, e muitos ainda tem dúvida…</p>
                                    </div>

                                </article>
                            </a>

                            <div class="quebra-linha"></div>
                            <hr />

                            {/* <!-- Fim do loop --> */}

                            {/* <!-- Artigo 03 --> */}

                            <a href="https://sennda.com.br/blog/sua-empresa-ja-esta-pronta-para-a-emissao-de-nfc-e"><article class="noticia">

                                <div class="noticias-imagem">
                                    <img width="260" height="160" src="https://sennda.com.br/wp-content/uploads/2021/08/pexels-artem-beliaikin-994517-260x160.jpg"
                                        class="attachment-artigo-listagem size-artigo-listagem wp-post-image" alt="NFC-e" loading="lazy"
                                        srcset="https://sennda.com.br/wp-content/uploads/2021/08/pexels-artem-beliaikin-994517-260x160.jpg 260w, https://sennda.com.br/wp-content/uploads/2021/08/pexels-artem-beliaikin-994517-130x80.jpg 130w"
                                        sizes="(max-width: 260px) 100vw, 260px"></img>
                                    <div class="imagem-mais"></div>
                                </div>
                                {/* 
                                <!--<div class="noticias-data">
                                <p>10/08/2021</p>
                                </div>--> */}

                                <div class="noticias-titulo">
                                    <h3>Sua empresa já está pronta para a emissão de NFC-e?</h3>
                                </div>

                                <div class="noticias-resumo">
                                    <p>A NFC-e ou Nota Fiscal de Consumidor Eletrônica, começou a ser implementada nos estados brasileiros em 2019, e os empreendedores…</p>
                                </div>

                            </article>
                            </a>

                            <div class="quebra-linha"></div>
                            <hr />

                            {/* <!-- Fim do loop --> */}

                            {/* <!-- Artigo 04 --> */}

                            <a href="https://sennda.com.br/blog/empreendendo-em-qualquer-idade"><article class="noticia">

                                <div class="noticias-imagem">
                                    <img width="260" height="160" src="https://sennda.com.br/wp-content/uploads/2019/08/pleased-female-secretary-in-trendy-glasses-posing-in-office-after-meeting-with-colleagues-indoor-portrait-of-stylish-businesswoman-with-asian-and-african-workers-260x160.jpg"
                                        class="attachment-artigo-listagem size-artigo-listagem wp-post-image" alt="idade" loading="lazy"
                                        srcset="https://sennda.com.br/wp-content/uploads/2019/08/pleased-female-secretary-in-trendy-glasses-posing-in-office-after-meeting-with-colleagues-indoor-portrait-of-stylish-businesswoman-with-asian-and-african-workers-260x160.jpg 260w, https://sennda.com.br/wp-content/uploads/2019/08/pleased-female-secretary-in-trendy-glasses-posing-in-office-after-meeting-with-colleagues-indoor-portrait-of-stylish-businesswoman-with-asian-and-african-workers-130x80.jpg 130w"
                                        sizes="(max-width: 260px) 100vw, 260px"></img>
                                    <div class="imagem-mais">
                                    </div>
                                </div>

                                <div class="noticias-titulo">
                                    <h3>Empreendendo em qualquer idade</h3>
                                </div>

                                <div class="noticias-resumo">
                                    <p>Começando ou concluindo a faculdade? Após alguns anos de carreira e experiência? Quando já possui uma carreira consolidada? Após a…</p>
                                </div>

                            </article>
                            </a>

                            <div class="quebra-linha"></div>
                            <hr />

                            {/* <!-- Fim do loop --> */}

                            {/* <!-- Artigo 05 --> */}

                            <a href="https://sennda.com.br/blog/transforme-seus-clientes-em-vendedores-aplicando-no-pequeno-negocio"><article class="noticia">
                                <div class="noticias-imagem">
                                    <img width="260" height="160" src="https://sennda.com.br/wp-content/uploads/2020/08/young-woman-watching-live-stream-260x160.jpg"
                                        class="attachment-artigo-listagem size-artigo-listagem wp-post-image" alt="clientes em vendedores" loading="lazy"
                                        srcset="https://sennda.com.br/wp-content/uploads/2020/08/young-woman-watching-live-stream-260x160.jpg 260w, https://sennda.com.br/wp-content/uploads/2020/08/young-woman-watching-live-stream-130x80.jpg 130w"
                                        sizes="(max-width: 260px) 100vw, 260px"></img>
                                    <div class="imagem-mais">
                                    </div>
                                </div>

                                {/* <!--<div class="noticias-data">
                                <p>20/07/2021</p>
                                </div>--> */}

                                <div class="noticias-titulo">
                                    <h3>Transforme seus clientes em vendedores – aplicando no pequeno negócio</h3>
                                </div>

                                <div class="noticias-resumo">
                                    <p>A arte de fidelizar clientes é uma ferramenta fundamental para o sucesso de qualquer negócio, mas já pensou em transformar…</p>
                                </div>
                            </article>
                            </a>

                            <div class="quebra-linha"></div>
                            <hr />

                            {/* <!-- Fim do loop --> */}

                            {/* <!-- Artigo 06 --> */}

                            <a href="https://sennda.com.br/blog/o-que-te-impede-de-escalar-seu-negocio"><article class="noticia">

                                <div class="noticias-imagem">
                                    <img width="260" height="160" src="https://sennda.com.br/wp-content/uploads/2021/07/12055-260x160.jpg"
                                        class="attachment-artigo-listagem size-artigo-listagem wp-post-image" alt="escalar seu negócio" loading="lazy"
                                        srcset="https://sennda.com.br/wp-content/uploads/2021/07/12055-260x160.jpg 260w, https://sennda.com.br/wp-content/uploads/2021/07/12055-130x80.jpg 130w"
                                        sizes="(max-width: 260px) 100vw, 260px"></img>
                                    <div class="imagem-mais"></div>
                                </div>

                                {/* <!--<div class="noticias-data">
                                <p>14/07/2021</p>
                                </div>--> */}

                                <div class="noticias-titulo">
                                    <h3>O que te impede de escalar seu negócio?</h3>
                                </div>

                                <div class="noticias-resumo">
                                    <p>Todo empreendedor que começa seu negócio pensa sempre em crescimento. Mas você sabe o que te impede de escalar seu…</p>
                                </div>

                            </article></a>

                            <div class="quebra-linha"></div>
                            <hr />

                            {/* <!-- Fim do loop --> */}

                            {/* <!-- Artigo 07 --> */}

                            <a href="https://sennda.com.br/blog/a-importancia-das-parcerias-para-o-pequeno-negocio"><article class="noticia">

                                <div class="noticias-imagem">
                                    <img width="260" height="160" src="https://sennda.com.br/wp-content/uploads/2020/07/group-of-people-sitting-indoors-3184291-260x160.jpg"
                                        class="attachment-artigo-listagem size-artigo-listagem wp-post-image" alt="parcerias" loading="lazy"
                                        srcset="https://sennda.com.br/wp-content/uploads/2020/07/group-of-people-sitting-indoors-3184291-260x160.jpg 260w, https://sennda.com.br/wp-content/uploads/2020/07/group-of-people-sitting-indoors-3184291-130x80.jpg 130w"
                                        sizes="(max-width: 260px) 100vw, 260px"></img>
                                    <div class="imagem-mais">
                                    </div>
                                </div>
                                {/* 
                                <!--<div class="noticias-data">
                                <p>30/06/2021</p>
                                </div>--> */}

                                <div class="noticias-titulo">
                                    <h3>A importância das parcerias para o pequeno negócio</h3>
                                </div>

                                <div class="noticias-resumo">
                                    <p>Para muitos empreendedores iniciantes, se colocar no mercado, ou ainda se firmar mesmo em meio a crise, é uma tarefa…</p>
                                </div>

                            </article>
                            </a>

                            <div class="quebra-linha"></div>
                            <hr />

                            {/* <!-- Fim do loop --> */}

                            {/* <!-- Artigo 08 --> */}

                            <a href="https://sennda.com.br/blog/dicas-para-aumentar-as-vendas-do-seu-hortifruti"><article class="noticia">

                                <div class="noticias-imagem">
                                    <img width="260" height="160" src="https://sennda.com.br/wp-content/uploads/2020/02/assorted-vegetable-lot-1300972-260x160.jpg"
                                        class="attachment-artigo-listagem size-artigo-listagem wp-post-image" alt="hortifrúti" loading="lazy"
                                        srcset="https://sennda.com.br/wp-content/uploads/2020/02/assorted-vegetable-lot-1300972-260x160.jpg 260w, https://sennda.com.br/wp-content/uploads/2020/02/assorted-vegetable-lot-1300972-130x80.jpg 130w"
                                        sizes="(max-width: 260px) 100vw, 260px"></img>
                                    <div class="imagem-mais"></div>
                                </div>

                                {/* <!--<div class="noticias-data">
                                    <p>22/06/2021</p>
                                </div>--> */}

                                <div class="noticias-titulo">
                                    <h3>Dicas para aumentar as vendas do seu hortifrúti</h3>
                                </div>

                                <div class="noticias-resumo">
                                    <p>Manter as vendas em alta em qualquer estabelecimento nem sempre é uma tarefa fácil, mas se você precisa de dicas…</p>
                                </div>

                            </article>
                            </a>

                            <div class="quebra-linha"></div><hr />

                            {/* <!-- Fim do loop --> */}

                            {/* <!-- Artigo 09 --> */}

                            <a href="https://sennda.com.br/blog/5-erros-para-nunca-mais-cometer-no-seu-hortifruti"><article class="noticia">

                                <div class="noticias-imagem">
                                    <img width="260" height="160" src="https://sennda.com.br/wp-content/uploads/2021/06/fresh-vegetables-fruit-market-stall-260x160.jpg"
                                        class="attachment-artigo-listagem size-artigo-listagem wp-post-image" alt="5 erros hortifrúti" loading="lazy"
                                        srcset="https://sennda.com.br/wp-content/uploads/2021/06/fresh-vegetables-fruit-market-stall-260x160.jpg 260w, https://sennda.com.br/wp-content/uploads/2021/06/fresh-vegetables-fruit-market-stall-130x80.jpg 130w"
                                        sizes="(max-width: 260px) 100vw, 260px"></img>
                                    <div class="imagem-mais"></div>
                                </div>
                                {/* 
                                <!--<div class="noticias-data">
                                    <p>09/06/2021</p>
                                </div>--> */}

                                <div class="noticias-titulo">
                                    <h3>5 erros para nunca mais cometer no seu hortifrúti</h3>
                                </div>

                                <div class="noticias-resumo">
                                    <p>Todo negócio tem seus pontos fortes e fracos, saber valorizar os pontos fortes e melhorar os fracos é tarefa do…</p>
                                </div>

                            </article>
                            </a>

                            <div class="quebra-linha"></div>
                            <hr />

                            {/* <!-- Fim do loop --> */}

                            {/* <!-- Artigo 10 --> */}

                            <a href="https://sennda.com.br/blog/como-manter-a-competitividade-no-hortifruti"><article class="noticia">

                                <div class="noticias-imagem">
                                    <img width="260" height="160" src="https://sennda.com.br/wp-content/uploads/2021/05/good-looking-woman-standing-front-vegetable-shelves-choosing-what-buy-1-260x160.jpg"
                                        class="attachment-artigo-listagem size-artigo-listagem wp-post-image" alt="competitividade no hortifrúti" loading="lazy"
                                        srcset="https://sennda.com.br/wp-content/uploads/2021/05/good-looking-woman-standing-front-vegetable-shelves-choosing-what-buy-1-260x160.jpg 260w, https://sennda.com.br/wp-content/uploads/2021/05/good-looking-woman-standing-front-vegetable-shelves-choosing-what-buy-1-130x80.jpg 130w"
                                        sizes="(max-width: 260px) 100vw, 260px"></img>
                                    <div class="imagem-mais">
                                    </div>
                                </div>

                                {/* <!--<div class="noticias-data">
                                <p>01/06/2021</p>
                                </div>--> */}

                                <div class="noticias-titulo">
                                    <h3>Como manter a competitividade no hortifrúti</h3>
                                </div>

                                <div class="noticias-resumo">
                                    <p>Os empreendedores do ramo de hortaliças enfrentam dúvidas de como manter a competitividade no hortifrúti, já que lidam constantemente com…</p>
                                </div>
                                {/* <div class="botao-pequeno-leia"><p>Leia mais</p></div> */}
                            </article>
                            </a>

                            <div class="quebra-linha"></div><hr />

                        </div>

                    </Par>

                    {/* <!-- Barra lateral --> */}

                    <div class="col-lg-3 col-md-3 col-sm-4">
                        <aside class="barra-lateral">

                            <div class="barra-lateral-blog">
                                <h2>Últimas notícias</h2><hr />

                                {/* <!-- Artigo barra lateral 01 --> */}
                                <a href="https://sennda.com.br/blog/voce-sabe-o-que-muda-com-a-mp-1-116-2022-na-licenca-maternidade"><div class="barra-lateral-noticias-unico">
                                    <div class="barral-lateral-noticias-imagem">
                                        <img width="130" height="80" src="https://sennda.com.br/wp-content/uploads/2022/05/close-up-pregnant-woman-typing-on-laptop-130x80.jpg" class="attachment-miniatura size-miniatura wp-post-image" alt="" loading="lazy" srcset="https://sennda.com.br/wp-content/uploads/2022/05/close-up-pregnant-woman-typing-on-laptop-130x80.jpg 130w, https://sennda.com.br/wp-content/uploads/2022/05/close-up-pregnant-woman-typing-on-laptop-260x160.jpg 260w" sizes="(max-width: 130px) 100vw, 130px">
                                        </img>
                                    </div>

                                    <div class="barra-lateral-noticias-texto">
                                        <p>Você sabe o que muda com a MP 1.116/2022 na licença maternidade?</p>
                                    </div>
                                </div></a>

                                <div class="quebra-linha"></div>

                                {/* <!-- Fim do loop --> */}

                                {/* <!-- Artigo barra lateral 02 --> */}
                                <a href="https://sennda.com.br/blog/por-que-ter-um-software-de-vendas-no-pequeno-negocio"><div class="barra-lateral-noticias-unico">
                                    <div class="barral-lateral-noticias-imagem">
                                        <img width="130" height="80" src="https://sennda.com.br/wp-content/uploads/2021/08/software-130x80.jpg" class="attachment-miniatura size-miniatura wp-post-image" alt="software de vendas" loading="lazy" srcset="https://sennda.com.br/wp-content/uploads/2021/08/software-130x80.jpg 130w, https://sennda.com.br/wp-content/uploads/2021/08/software-260x160.jpg 260w" sizes="(max-width: 130px) 100vw, 130px">
                                        </img>
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

                            </div>

                            <div class="barra-lateral-categorias">
                                <h3>Categorias</h3><hr />
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
                                <h2>Arquivo</h2><hr />
                                <ul>
                                    <li><a href="https://sennda.com.br/2022/05">maio 2022</a></li>
                                    <li><a href="https://sennda.com.br/2021/08">agosto 2021</a></li>
                                </ul>
                                <div class="quebra-linha"></div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;