import React from 'react';
import Image from 'react-bootstrap/Image'
import Prancheta1 from "./galeria/imagens/Prancheta1.png";

class Main extends React.Component{
    render(){
        return(
            <div className="container-fluid text-justify ">
              
                <main className="container-fluid ">
                    <div className="row justify-content-left">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 order-1 order-md-1 order-lg-1">          
                                <Image src={Prancheta1} fluid alt="Foto não encontrada" title="Prancheta1"/>
                            <p>
                                Aqui você encontra
                            </p>  
                        </div>
                    </div>
                </main>
            </div>
        
        )
    }
};

export default Main;