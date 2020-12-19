import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import { useState } from 'react';


function Carroussel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
				<Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://picsum.photos/seed/picsum/100/200"
                    alt="First slide"
                    witdh="100%"
                    height = "640px"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://picsum.photos/seed/picsum/200/300"
                    alt="Third slide"
                    witdh="100%"
                    height = "640px"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://picsum.photos/seed/picsum/200/300"
                    alt="Third slide"
                    witdh="100%"
                    height = "640px"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
		);
	}

export default Carroussel;