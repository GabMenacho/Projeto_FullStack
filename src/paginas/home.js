import React from 'react';
import Carroussel from '../components/home_components/carroussel';
import Cards from '../components/home_components/cards'

class Home extends React.Component {
    render() {
        return (
            <div className="col-lg-3 col-md-2 d-sm-inline">
                < Carroussel />
                <br />
                <br />
                < Cards />
            </div>
        )
    }
}

export default Home;