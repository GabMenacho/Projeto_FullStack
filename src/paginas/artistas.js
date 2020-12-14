import React from 'react';

class Artistas extends React.Component {
    render() {
        return (
            <div className="col-lg-3 col-md-2 d-sm-inline">
                <ul className="border">
                    <li className="mb-1 mt-1 text-left">
                        <a className="text-black" href="/">Edgar</a>
                    </li>
                    <li className="mb-1 mt-1 text-left">
                        <a className="text-black" href="/">Jeny</a>
                    </li>
                    <li className="mb-1 mt-1 text-left">
                        <a className="text-black" href="/">Cesar</a>
                    </li>
                    <li className="mb-1 mt-1 text-left">
                        <a className="text-black" href="/">Taynara</a>
                    </li>
                    <li className="mb-1 mt-1 text-left">
                        <a className="text-black" href="/">Wander</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Artistas;