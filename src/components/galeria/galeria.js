import { render } from '@testing-library/react';
import React from 'react';

class Galeria extends React.Component {
    render() {
        return (
            <div className ="col-lg-9 col-md-10 col-sm-12">
                <div className ="galeria">
                <br /><br />
                    <img className="mb-3 col-lg-3 col-mg-4 col-sm-5 col-6 float-left" src ={require('./imagens/kkrankenbruder1.jpg').default}></img>
                    <img className="mb-3 col-lg-3 col-mg-4 col-sm-5 col-6 float-left" src={require('./imagens/kkrankenbruder2.jpg').default}></img>
                    <img className="mb-3 col-lg-3 col-mg-4 col-sm-5 col-6 float-left" src={require('./imagens/kkrankenbruder4.jpg').default}></img>
                    <img className="mb-3 col-lg-3 col-mg-4 col-sm-5 col-6 float-left" src={require('./imagens/nieta1.jpg').default}></img>
                    <img className="mb-3 col-lg-3 col-mg-4 col-sm-5 col-6 float-left" src={require('./imagens/nieta2.jpg').default}></img>
                    <img className="mb-3 col-lg-3 col-mg-4 col-sm-5 col-6 float-left" src={require('./imagens/nieta3.jpg').default}></img>
                    <img className="mb-3 col-lg-3 col-mg-4 col-sm-5 col-6 float-left" src={require('./imagens/wander1.jpg').default}></img>
                    <img className="mb-3 col-lg-3 col-mg-4 col-sm-5 col-6 float-left" src={require('./imagens/Wander4.jpg').default}></img>
                    <img className="mb-3 col-lg-3 col-mg-4 col-sm-5 col-6 float-left" src={require('./imagens/Wander5.jpg').default}></img>
                    <img className="mb-3 col-lg-3 col-mg-4 col-sm-5 col-6 float-left" src={require('./imagens/kcha1.jpg').default}></img>
                    <img className="mb-3 col-lg-3 col-mg-4 col-sm-5 col-6 float-left" src={require('./imagens/kcha2.jpg').default}></img>
                    <img className="mb-3 col-lg-3 col-mg-4 col-sm-5 col-6 float-left" src={require('./imagens/kcha3.jpg').default}></img>
                </div>

            </div>
        )
    }
}

export default Galeria;