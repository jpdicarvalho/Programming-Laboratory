import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () =>{
    //lógica aqui
    const [expandedItems, setExpandedItems] = useState([]);

    const toggleItem = (itemId) => {
        if (expandedItems.includes(itemId)) {
            setExpandedItems(expandedItems.filter(id => id !== itemId));
        } else {
            setExpandedItems([...expandedItems, itemId]);
        }
    };
    
    return(
        <div>
            <svg display="none">
            <symbol id="arrow">
                <polyline points="7 10,12 15,17 10" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </symbol>
            </svg>

            <h1>Programming Laboratory - Timeline</h1>

            <div id="timeline" className="timeline">
                <div className="btn-group">
                    <button className="btn" type="button" data-action="expand">Expand All</button>
                    <button className="btn" type="button" data-action="collapse">Collapse All</button>
                </div>
                <h2>1ª Avaliação</h2>
                <div className="timeline__item">
                    <div className="timeline__item-header">
                    <button
                            className="timeline__arrow"
                            type="button"
                            id="item1"
                            aria-labelledby="item1-name"
                            aria-expanded={expandedItems.includes('item1')}
                            aria-controls="item1-ctrld"
                            aria-haspopup="true"
                            data-item="1"
                            onClick={() => toggleItem('item1')}
                        >
                            <svg className="timeline__arrow-icon" viewBox="0 0 24 24" width="24px" height="24px">
                                <use href="#arrow" />
                            </svg>
                        </button>
                        <span className="timeline__dot"></span>
                        <span id="item1-name" className="timeline__meta">
                            <time className="timeline__date" dateTime="1970-01-01">January 17, 2024</time><br/>
                            <strong className="timeline__title">Aula 1</strong>
                        </span>
                    </div>
                    <div className={`timeline__item-body ${expandedItems.includes('item1') ? 'timeline__item-body--expanded' : ''}`} id="item1-ctrld" role="region" aria-labelledby="item1" aria-hidden={!expandedItems.includes('item1')}>
                        <div className="timeline__item-body-content">
                            <h3>Paradigma Imperativo:</h3>
                            <p className="timeline__item-p">
                            No paradigma imperativo, o foco está em como as instruções são executadas.
                            O programador descreve passo a passo o que o computador deve fazer para atingir o resultado desejado.
                            </p><br />
                            <pre>
            <code>
                {`// Exemplo imperativo em JavaScript
function calcularSomaImpares(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            soma += array[i];
        }
    }
    return soma;
}

const numeros = [1, 2, 3, 4, 5];
const somaImpares = calcularSomaImpares(numeros);
console.log('Soma dos números ímpares:', somaImpares);`}
            </code>
        </pre>

                        </div>
                    </div>
                </div>
                <div className="timeline__item">
                    <div className="timeline__item-header">
                        <button className="timeline__arrow" type="button" id="item2" aria-labelledby="item2-name" aria-expanded="false" aria-controls="item2-ctrld" aria-haspopup="true" data-item="2">
                            <svg className="timeline__arrow-icon" viewBox="0 0 24 24" width="24px" height="24px">
                                <use href="#arrow" />
                            </svg>
                        </button>
                        <span className="timeline__dot"></span>
                        <span id="item2-name" className="timeline__meta">
                            <time className="timeline__date" dateTime="1973-10-17">October 17, 1973</time><br/>
                            <strong className="timeline__title">Digits Within ISO 8601 Format</strong>
                        </span>
                    </div>
                    <div className="timeline__item-body" id="item2-ctrld" role="region" aria-labelledby="item2" aria-hidden="true">
                        <div className="timeline__item-body-content">
                            <p className="timeline__item-p">At 6:36:57 PM UTC, the date in ISO 8601 format (1973-10-17) within the time digits (119731017) appeared for the first time.</p>
                        </div>
                    </div>
                </div>
                <div className="timeline__item">
                    <div className="timeline__item-header">
                        <button className="timeline__arrow" type="button" id="item3" aria-labelledby="item3-name" aria-expanded="false" aria-controls="item3-ctrld" aria-haspopup="true" data-item="3">
                            <svg className="timeline__arrow-icon" viewBox="0 0 24 24" width="24px" height="24px">
                                <use href="#arrow" />
                            </svg>
                        </button>
                        <span className="timeline__dot"></span>
                        <span id="item3-name" className="timeline__meta">
                            <time className="timeline__date" dateTime="2001-09-09">September 9, 2001</time><br/>
                            <strong className="timeline__title">1 Billion Seconds</strong>
                        </span>
                    </div>
                    <div className="timeline__item-body" id="item3-ctrld" role="region" aria-labelledby="item3" aria-hidden="true">
                        <div className="timeline__item-body-content">
                            <p className="timeline__item-p">Unix time reached 1,000,000,000 seconds at 1:46:40 AM UTC. The Danish UNIX User Group celebrated this in Copenhagen, Denmark.</p>
                        </div>
                    </div>
                </div>
                <div className="timeline__item">
                    <div className="timeline__item-header">
                        <button className="timeline__arrow" type="button" id="item4" aria-labelledby="item4-name" aria-expanded="false" aria-controls="item4-ctrld" aria-haspopup="true" data-item="4">
                            <svg className="timeline__arrow-icon" viewBox="0 0 24 24" width="24px" height="24px">
                                <use href="#arrow" />
                            </svg>
                        </button>
                        <span className="timeline__dot"></span>
                        <span id="item4-name" className="timeline__meta">
                            <time className="timeline__date" dateTime="2009-02-13">February 13, 2009</time><br/>
                            <strong className="timeline__title">1,234,567,890 Seconds</strong>
                        </span>
                    </div>
                    <div className="timeline__item-body" id="item4-ctrld" role="region" aria-labelledby="item4" aria-hidden="true">
                        <div className="timeline__item-body-content">
                            <p className="timeline__item-p">At 11:31:30 PM UTC, the digits of the time were 1234567890. This was celebrated worldwide, and even Google had a <a href="https://www.google.com/logos/unix1234567890.gif" target="_blank" rel="noopener">doodle</a> for it.</p>
                        </div>
                    </div>
                </div>
                <div className="timeline__item">
                    <div className="timeline__item-header">
                        <button className="timeline__arrow" type="button" id="item5" aria-labelledby="item5-name" aria-expanded="false" aria-controls="item5-ctrld" aria-haspopup="true" data-item="5">
                            <svg className="timeline__arrow-icon" viewBox="0 0 24 24" width="24px" height="24px">
                                <use href="#arrow" />
                            </svg>
                        </button>
                        <span className="timeline__dot"></span>
                        <span id="item5-name" className="timeline__meta">
                            <time className="timeline__date" dateTime="2033-05-18">May 18, 2033</time><br/>
                            <strong className="timeline__title">2 Billion Seconds</strong>
                        </span>
                    </div>
                    <div className="timeline__item-body" id="item5-ctrld" role="region" aria-labelledby="item5" aria-hidden="true">
                        <div className="timeline__item-body-content">
                            <p className="timeline__item-p">Unix time will reach 2,000,000,000 seconds at 3:33:20 AM UTC.</p>
                        </div>
                    </div>
                </div>
                <div className="timeline__item">
                    <div className="timeline__item-header">
                        <button className="timeline__arrow" type="button" id="item6" aria-labelledby="item6-name" aria-expanded="false" aria-controls="item6-ctrld" aria-haspopup="true" data-item="6">
                            <svg className="timeline__arrow-icon" viewBox="0 0 24 24" width="24px" height="24px">
                                <use href="#arrow" />
                            </svg>
                        </button>
                        <span className="timeline__dot"></span>
                        <span id="item6-name" className="timeline__meta">
                            <time className="timeline__date" dateTime="2038-01-19">January 19, 2038</time><br/>
                            <strong className="timeline__title">Unix Epochalypse</strong>
                        </span>
                    </div>
                    <div className="timeline__item-body" id="item6-ctrld" role="region" aria-labelledby="item6" aria-hidden="true">
                        <div className="timeline__item-body-content">
                            <p className="timeline__item-p">Also known as the year 2038 problem, clocks running on a 32-bit signed integer will flip from 3:14:08 AM UTC on this day to 8:45:52 PM UTC on December 13, 1901. Therefore, values only from -2,147,483,648 to 2,147,483,647 for the second are supported.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            </div>
    );
}
export default Home;