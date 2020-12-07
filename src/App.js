import React from 'react';
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/menu/menu'
import Rodape from './components/galeria/rodape/rodape'
import Main from './components/main'
import Artistas from './artistas'
import Blog from './blog'
import Contato from './contato'
import Categorias from './components/categorias/categorias';
import Galeria from './components/galeria/galeria'
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  render(){
      return(
          <div >
              <Menu />
              <Switch>
                  <Route exact path='/' component={Main} />
                  <Route path='/artistas' component={Artistas} />
                  <Route path='/blog' component={Blog} />
                  <Route path='/contato' component={Contato}/>
              </Switch>
              <Rodape />
          </div>
      )
  }
}


export default App;

