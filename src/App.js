import React from 'react';
import Menu from './components/menu';
import Rotas from './rotas';
import {BrowserRouter} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'


export default function App (){
      return(
          <BrowserRouter>
             <div className ="App">
              <header>
                <Menu />
              </header>
              <main>
                  <Container fluid>
                      <Rotas />
                  </Container>
              </main>
             </div>
          </BrowserRouter>
      )
  };

