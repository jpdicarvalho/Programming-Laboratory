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
/*======== Processamento de String ===========*/

    //Função para processar string - paradigma imperativo
    function contarVogaisImperativo() {
        // Obtém o valor inserido no elemento de entrada HTML com o id 'inputImperativo'
        let inputImperativo = document.getElementById('inputImperativo').value;
    
        // Inicializa a variável de contagem de vogais
        let count = 0;
    
        // Define um array contendo as vogais
        const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
        // Itera sobre cada caractere da string inserida
        for (let i = 0; i < inputImperativo.length; i++) {
            let char = inputImperativo[i];
            
            // Verifica se o caractere atual é uma vogal
            if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
                char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
                // Se for uma vogal, incrementa o contador de vogais
                count++;
            }
        }
    
        // Atualiza o conteúdo do elemento HTML com o id 'vogaisCount' para exibir o número de vogais encontrado
        document.getElementById('vogaisCount').textContent = 'Número de vogais: ' + count;
    }

    //Função para processar string - paradigma declarativo
    function contarVogaisDeclarativo() {
        // Obtém o valor inserido no elemento de entrada HTML com o id 'inputImperativo'
        let inputImperativo = document.getElementById('inputDeclarativo').value;
    
        // Define um array contendo as vogais
        const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
        // Usa o método reduce para contar as vogais na string
        let count = inputImperativo.split('').reduce((acc, char) => {
            if (vogais.includes(char)) {
                return acc + 1;
            } else {
                return acc;
            }
        }, 0);
    
        // Atualiza o conteúdo do elemento HTML com o id 'vogaisCountDeclarativo' para exibir o número de vogais encontradas
        document.getElementById('vogaisCountDeclarativo').textContent = 'Número de vogais Declarativo: ' + count;
    } 
/*======== Processamento Matemático ===========*/

    // Função para calcular a raiz quadrada
    function iCalcularRaiz() {
        // Obtém o valor inserido no elemento de entrada HTML com o id 'inputMatImperativo'
        let inputMatImperativo = document.getElementById('inputMatImperativo').value;

        // Converte o valor inserido para um número
        let numero = parseFloat(inputMatImperativo);

        // Verifica se o número é válido
        if (!isNaN(numero)) {
            // Calcula a raiz quadrada usando o método de bisseção
            let raiz = calcularRaizManual(numero);

            // Atualiza o conteúdo do elemento HTML com o id 'raizImperativo' para exibir o resultado
            document.getElementById('raizImperativo').textContent = 'Raiz quadrada: ' + raiz;
        } else {
            // Se o valor inserido não for um número válido, exibe uma mensagem de erro
            document.getElementById('raizImperativo').textContent = 'Entrada inválida. Por favor, digite um número válido.';
        }
    }

    // Função para calcular a raiz quadrada usando o método de bisseção
    function calcularRaizManual(numero) {
        // Define um intervalo próximo ao valor real da raiz quadrada
        let min = 0;
        let max = numero;
        let precisao = 0.0001; // Precisão desejada

        // Aplica o método da bisseção para encontrar a raiz quadrada
        while (max - min > precisao) {
            let meio = (min + max) / 2;
            if (meio * meio > numero) {
                max = meio;
            } else {
                min = meio;
            }
        }

        // Retorna a média entre os valores mínimo e máximo como a raiz quadrada
        return (min + max) / 2;
}

// Função para calcular a raiz quadrada - paradigma declarativo
function dCalcularRaiz() {
    // Obtém o valor inserido no elemento de entrada HTML com o id 'inputMatDeclarativo'
    let inputMatDeclarativo = document.getElementById('inputMatDeclarativo').value;

    // Converte o valor inserido para um número
    let numero = parseFloat(inputMatDeclarativo);

    // Verifica se o número é válido e não negativo
    let raizQuadrada = (!isNaN(numero) && numero >= 0) ? Math.sqrt(numero) : 'Entrada inválida. Por favor, digite um número válido e não negativo.';

    // Atualiza o conteúdo do elemento HTML com o id 'raizDeclarativo' para exibir o resultado
    document.getElementById('raizDeclarativo').textContent = 'Raiz quadrada: ' + raizQuadrada;
}

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
                            <strong className="timeline__title">Paradigmas de Programação - Aula 1</strong>
                        </span>
                    </div>
                    <div className={`timeline__item-body ${expandedItems.includes('item1') ? 'timeline__item-body--expanded' : ''}`} id="item1-ctrld" role="region" aria-labelledby="item1" aria-hidden={!expandedItems.includes('item1')}>
                        <div className="timeline__item-body-content">
                            
                            <h3>JavaScript</h3>
                            <p className="timeline__item-p">
                            <strong>Imperativo:</strong> Descreve passo a passo como o programa deve executar as tarefas, usando instruções sequenciais e estruturas de controle.<br/>
                                <strong>Ex:</strong> Desenvolvimento de um algoritmo de ordenação como o Bubble Sort. <br />
                            <strong>Declarativo:</strong> Define o que o programa deve realizar, focando nos resultados desejados em vez dos detalhes de implementação.<br/>
                                <strong>Ex:</strong> Construção de uma interface de usuário (UI) utilizando bibliotecas como React.js, onde a estrutura e o comportamento são declarados por meio de componentes. <br />
                            <strong>Orientado a Objetos:</strong> Organiza o código em torno de objetos que contêm propriedades e métodos, facilitando a reutilização e a encapsulação de dados.<br/>
                                <strong>Ex:</strong> Desenvolvimento de um sistema de gerenciamento de tarefas, onde cada tarefa é representada por um objeto com propriedades e métodos específicos. <br />
                            <strong>Event-Driven:</strong> Baseia-se na manipulação de eventos do usuário e do sistema, respondendo a esses eventos de forma assíncrona.<br/>
                                <strong>Ex:</strong> Criação de um sistema de notificações em tempo real em uma aplicação web, onde eventos como novas mensagens ou atualizações são transmitidos e processados pelos clientes. <br />
                            <strong>Assíncrono:</strong> Lida com operações que não bloqueiam a execução do programa, utilizando callbacks, Promises e async/await para lidar com tarefas assíncronas de forma eficiente.<br/>
                            <strong>Ex:</strong> Realização de chamadas de API assíncronas em uma aplicação web utilizando Promises ou async/await, permitindo que o programa continue executando outras tarefas enquanto aguarda a resposta da API. <br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline__item">
                    <div className="timeline__item-header">
                        <button className="timeline__arrow"
                        type="button"
                        id="item2"
                        aria-labelledby="item2-name"
                        aria-expanded={expandedItems.includes('item2')}
                        aria-controls="item2-ctrld"
                        aria-haspopup="true"
                        data-item="2"
                        onClick={() => toggleItem('item2')}
                        >
                            <svg className="timeline__arrow-icon" viewBox="0 0 24 24" width="24px" height="24px">
                                <use href="#arrow" />
                            </svg>
                        </button>
                        <span className="timeline__dot"></span>
                        <span id="item2-name" className="timeline__meta">
                            <time className="timeline__date" dateTime="1973-10-17">Janeiro 24, 2024</time><br/>
                            <strong className="timeline__title"> Paradigmas Imperativos & Declarativos: Processamento de Strings - Aula 2</strong>
                        </span>
                    </div>
                    <div className={`timeline__item-body ${expandedItems.includes('item2') ? 'timeline__item-body--expanded' : ''}`} id="item2-ctrld" role="region" aria-labelledby="item2" aria-hidden={!expandedItems.includes('item2')}>
                        <div className="timeline__item-body-content inputBox">
                            <span>Contagem de Vogais - Paradigma Imperativo</span>
                            <input type="text" id="inputImperativo" placeholder="Digite uma string"/><br />
                            <p className="timeline__item-p" id="vogaisCount">Número de vogais:</p>
                            <button onClick={contarVogaisImperativo}>Processar String</button>
                        </div>

                        <div className="timeline__item-body-content inputBox">
                        <span>Contagem de Vogais - Paradigma Declarativo</span>
                            <input type="text" id="inputDeclarativo" placeholder="Digite uma string"/><br />
                            <p className="timeline__item-p" id="vogaisCountDeclarativo">Número de vogais Declarativo:</p>
                            <button onClick={contarVogaisDeclarativo}>Processar String</button>
                        </div>

                    </div>
                </div>
                <div className="timeline__item">
                    <div className="timeline__item-header">
                        <button className="timeline__arrow"
                        type="button"
                        id="item3"
                        aria-labelledby="item3-name"
                        aria-expanded={expandedItems.includes('item3')}
                        aria-controls="item3-ctrld"
                        aria-haspopup="true"
                        data-item="3"
                        onClick={() => toggleItem('item3')}
                        >

                            <svg className="timeline__arrow-icon" viewBox="0 0 24 24" width="24px" height="24px">
                                <use href="#arrow" />
                            </svg>
                        </button>
                        <span className="timeline__dot"></span>
                        <span id="item3-name" className="timeline__meta">
                            <time className="timeline__date" dateTime="2001-09-09">Fevereiro 7, 2024</time><br/>
                            <strong className="timeline__title">Paradigmas Imperativos & Declarativos: Processamento Matemático - Aula 3</strong>
                        </span>
                    </div>
                    <div className={`timeline__item-body ${expandedItems.includes('item3') ? 'timeline__item-body--expanded' : ''}`} id="item3-ctrld" role="region" aria-labelledby="item3" aria-hidden={!expandedItems.includes('item3')}>
                    <div className="timeline__item-body-content inputBox">
                        <span>Cálculo de raiz quadrada - Paradigma Imperativo</span>
                        <input type="text" id="inputMatImperativo" placeholder="Digite um número"/><br />
                        <p className="timeline__item-p" id="raizImperativo">Resultado:</p>
                        <button onClick={iCalcularRaiz}>Calcular Raiz Quadrada</button>
                    </div>

                    <div className="timeline__item-body-content inputBox">
                        <span>Cálculo de raiz quadrada - Paradigma Imperativo</span>
                        <input type="text" id="inputMatDeclarativo" placeholder="Digite um número"/><br />
                        <p className="timeline__item-p" id="raizDeclarativo">Resultado:</p>
                        <button onClick={dCalcularRaiz}>Calcular Raiz Quadrada</button>
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