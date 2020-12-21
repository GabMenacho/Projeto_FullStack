import React from 'react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './paginas/home'
import Artistas from './paginas/artistas';
import Produtos from './paginas/produtos';
import Blog from './paginas/blog';
import Contato from './paginas/contato';
import paginaProduto from './paginas/pagina_produto';

function Rotas() {
      return(
              <Switch>
                  <Route exact path='/home' component={Home} />
                  <Route exact path='/produtos' component={Produtos} />
                  <Route exact path='/pagina_produto' component={paginaProduto} />
                  <Route exact path='/artistas' component={Artistas} />
                  <Route exact path='/blog' component={Blog} />
                  <Route exact path='/contato' component={Contato}/>
              </Switch>
      )
  }


export default Rotas; 