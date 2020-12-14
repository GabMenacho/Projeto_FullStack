import React from 'react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Artistas from './paginas/artistas';
import Produtos from './paginas/produtos';
import Blog from './paginas/blog';
import Contato from './paginas/contato';

function Rotas() {
      return(
              <Switch>
                  <Route exact path='/produtos' component={Produtos} />
                  <Route exact path='/artistas' component={Artistas} />
                  <Route exact path='/blog' component={Blog} />
                  <Route exact path='/contato' component={Contato}/>
              </Switch>
      )
  }


export default Rotas; 