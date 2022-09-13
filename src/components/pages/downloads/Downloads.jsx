import * as React from "react";
import { FaDownload, FaCloudDownloadAlt, FaFileArchive } from 'react-icons/fa';
import { NavbarLink, ContainerDown } from "../../SplashScreen.js";

function Downloads() {
    return (               
        <div className="">
            <div class="pagina-titulo">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <h1>Downloads</h1>
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

            <ContainerDown>
                <NavbarLink class="nav-link" to="www.google.com" target="">
                    Teamviewer &nbsp; <FaDownload />
                </NavbarLink>
                <p/>                
                <NavbarLink className="nav-link" to="www.google.com" target="">
                    Sennda Prize &nbsp; <FaDownload />
                </NavbarLink>
                <p/>
                <NavbarLink className="nav-link" to="www.google.com" target="">
                    Sennda NFe &nbsp; <FaDownload />
                </NavbarLink>
                <p/>
                <NavbarLink className="nav-link" to="www.google.com" target="">
                    Módulo do Contador – Download de XML’s &nbsp;&nbsp; <FaCloudDownloadAlt />
                </NavbarLink>
                <p/>                
                <NavbarLink className="nav-link" to="www.google.com" target="">
                    Sennda NFe comprimido (zip) Versão 3.10 &nbsp;&nbsp; <FaFileArchive />
                </NavbarLink>
            </ContainerDown>
        </div>           
    )
};

export default Downloads;