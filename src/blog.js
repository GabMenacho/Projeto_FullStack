import React from 'react';

class Blog extends React.Component {
    render() {
        return (
            <div className="col-lg-3 col-md-2 d-sm-inline">
                <ul className="border">
                    <li className="mb-1 mt-1 text-left">
                        <a className="text-black" href="/">Eventos</a>
                    </li>
                    <li className="mb-1 mt-1 text-left">
                        <a className="text-black" href="/">Notícias</a>
                    </li>
                    <li className="mb-1 mt-1 text-left">
                        <a className="text-black" href="/">Cursos</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Blog;