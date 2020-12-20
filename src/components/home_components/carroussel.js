import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import { useState } from 'react';
import oficinas from './oficinas.png';
import uma from './uma.png'
import espaco from './espaco.png'


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
                    src={uma}
                    alt="First slide"
                    witdh="100%"
                    />
                    <Carousel.Caption>
                    <h3>Encontre na UMA STORE</h3>
                    <p>Produções de artistas brasileiros, trajetórias culturais e uma inspiração para adquirir apoiar os artistas da UmaStore.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={oficinas}
                    alt="Third slide"
                    witdh="100%"
                    />
                    <Carousel.Caption>
                    <h3>Conheça atividades dos artistas</h3>
                    <p>Encontre oficinas, cursos e produção autônoma dos artistas da UmaStore</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={espaco}
                    alt="Third slide"
                    witdh="100%"
                    />
                    <Carousel.Caption>
                    <h3>Como as obras são produzidas?</h3>
                    <p>Conheça o espaço de trabalho dos artistas, ferramentas e materiais.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
		);
	}

export default Carroussel;