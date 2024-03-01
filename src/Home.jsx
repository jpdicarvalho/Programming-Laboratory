import React, { useEffect, useState } from 'react';
import Canvas from './Canvas';
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

//=-=-=-= 2ª Avaliação =-=-=-=

/*======== Lista Duplamente Encadeada ===========*/
// Define the structure of a node in the doubly linked list
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
const [head, setHead] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [listValues, setListValues] = useState([]);

    // Function to insert a node at the end of the doubly linked list
    const insertAtEnd = (data) => {
        const newNode = new Node(data);

        if (!head) {
            setHead(newNode);
        } else {
            let current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
            newNode.prev = current;
        }

        setListValues([...listValues, data]);
        setInputValue('');
    };

    // Function to delete a node with a specific value from the doubly linked list
    const deleteNode = (data) => {
        if (!head) {
            return;
        }

        let current = head;
        while (current) {
            if (current.data === data) {
                if (current === head) {
                    setHead(current.next);
                    if (current.next) {
                        current.next.prev = null;
                    }
                } else {
                    if (current.prev) {
                        current.prev.next = current.next;
                    }
                    if (current.next) {
                        current.next.prev = current.prev;
                    }
                }
                setListValues(listValues.filter(item => item !== data));
                break;
            }
            current = current.next;
        }
    };

    // Function to handle changes in the input field
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };


    return(
        <div>
            <svg display="none">
            <symbol id="arrow">
                <polyline points="7 10,12 15,17 10" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </symbol>
            </svg>
            <h2 style={{textAlign: 'center', marginTop: '15PX'}}>Timeline</h2>
            <h2 style={{textAlign: 'center'}}>Laboratório de Progamação</h2>
            <h3 style={{marginBottom: '15px'}}>Author: João Pedro Braga de Carvalho</h3>

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

                                <div className="container__card">
                            <div className="card">
                                <h4>Imperativo</h4>
                                Descreve passo a passo como o programa deve executar as tarefas, usando instruções sequenciais e estruturas de controle.<br/>
                                <h4>Cenário de uso</h4>
                                Desenvolvimento de um algoritmo de ordenação como o Bubble Sort. <br />
                            </div>

                            <div className="card">
                                <h4>Declarativo</h4> Define o que o programa deve realizar, focando nos resultados desejados em vez dos detalhes de implementação.<br/>
                                <h4>Cenário de uso</h4> Construção de uma interface de usuário (UI) utilizando bibliotecas como React.js, onde a estrutura e o comportamento são declarados por meio de componentes. <br />
                            </div>

                            <div className="card">
                                <h4>Orientado a Objetos</h4> Organiza o código em torno de objetos que contêm propriedades e métodos, facilitando a reutilização e a encapsulação de dados.<br/>
                                <h4>Cenário de uso</h4> Desenvolvimento de um sistema de gerenciamento de tarefas, onde cada tarefa é representada por um objeto com propriedades e métodos específicos. <br />
                            </div>

                            <div className="card">
                                <h4>Event-Driven</h4> Baseia-se na manipulação de eventos do usuário e do sistema, respondendo a esses eventos de forma assíncrona.<br/>
                                <h4>Cenário de uso</h4> Criação de um sistema de notificações em tempo real em uma aplicação web, onde eventos como novas mensagens ou atualizações são transmitidos e processados pelos clientes. <br />
                            </div>
                            <div className="card">
                                <h4>Assíncrono</h4> Lida com operações que não bloqueiam a execução do programa, utilizando callbacks, Promises e async/await para lidar com tarefas assíncronas de forma eficiente.<br/>
                                <h4>Cenário de uso</h4> Realização de chamadas de API assíncronas em uma aplicação web utilizando Promises ou async/await, permitindo que o programa continue executando outras tarefas enquanto aguarda a resposta da API. <br />
                            </div>
                            </div>
                          
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
                            <p className="timeline__item-p" id="vogaisCountDeclarativo">Número de vogais:</p>
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
                        <span>Cálculo de raiz quadrada - Paradigma Declarativo</span>
                        <input type="text" id="inputMatDeclarativo" placeholder="Digite um número"/><br />
                        <p className="timeline__item-p" id="raizDeclarativo">Resultado:</p>
                        <button onClick={dCalcularRaiz}>Calcular Raiz Quadrada</button>
                    </div>

                    </div>
                </div>
                <div className="timeline__item">
                    <div className="timeline__item-header">
                        <button className="timeline__arrow"
                        type="button" id="item4"
                        aria-labelledby="item4-name"
                        aria-expanded={expandedItems.includes('item4')}
                        aria-controls="item4-ctrld"
                        aria-haspopup="true"
                        data-item="4"
                        onClick={() => toggleItem('item4')}
                        >
                            <svg className="timeline__arrow-icon" viewBox="0 0 24 24" width="24px" height="24px">
                                <use href="#arrow" />
                            </svg>
                        </button>
                        <span className="timeline__dot"></span>
                        <span id="item4-name" className="timeline__meta">
                            <time className="timeline__date" dateTime="2009-02-13">Fevereiro 14, 2024</time><br/>
                            <strong className="timeline__title">Problemas em Paradigmas Imperativos: Geometria Computacional - Aula 4</strong>
                        </span>
                    </div>
                    <div className={`timeline__item-body ${expandedItems.includes('item4') ? 'timeline__item-body--expanded' : ''}`} id="item4-ctrld" role="region" aria-labelledby="item4" aria-hidden={!expandedItems.includes('item4')}>
                        <div className="timeline__item-body-content">
                            <h4>Nesta aula, foi solicitado a implementação de exmplos práticos com uso de bibliotecas gráficas. Sendo assim, segue abaixo um 'quadro' desenhável
                                implementado com o canvas:
                            </h4>
                            <Canvas />
                        </div>
                    </div>
                </div>

                <h2 style={{marginTop: '20px'}}>2ª Avaliação</h2>
                
                <div className="timeline__item">
                    <div className="timeline__item-header">
                        <button className="timeline__arrow"
                        type="button" id="item5"
                        aria-labelledby="item5-name"
                        aria-expanded={expandedItems.includes('item5')}
                        aria-controls="item5-ctrld"
                        aria-haspopup="true"
                        data-item="5"
                        onClick={() => toggleItem('item5')}
                        >
                            <svg className="timeline__arrow-icon" viewBox="0 0 24 24" width="24px" height="24px">
                                <use href="#arrow" />
                            </svg>
                        </button>
                        <span className="timeline__dot"></span>
                        <span id="item5-name" className="timeline__meta">
                            <time className="timeline__date" dateTime="2009-02-13">Fevereiro 21, 2024</time><br/>
                            <strong className="timeline__title">Problemas em Paradigmas Imperativos: Estruturas de Dados - Aula 6</strong>
                        </span>
                    </div>
                    <div className={`timeline__item-body ${expandedItems.includes('item5') ? 'timeline__item-body--expanded' : ''}`} id="item5-ctrld" role="region" aria-labelledby="item5" aria-hidden={!expandedItems.includes('item5')}>
                        <div className="timeline__item-body-content">
                            <h4>Para essa aula, foi solicitado a implementação de operações de inserção e deleção de elementos em uma lista duplamente encadeada,
                                sem usar de bibliotecas para implementação da estrutura de dados e das operações.
                            </h4>
                            <div className="doubly-linked-list">
                                <p style={{textAlign: 'Center', fontWeight: 'bold'}}>Add element to the list</p>
                                <div className="input_box_list">
                                <button className='Btn__add__elemente' onClick={() => insertAtEnd(inputValue)}>Insert</button>
                                <input type="text" value={inputValue} onChange={handleInputChange} />
                                    
                                </div>
                                <ul className="list-elements">
                                    {listValues.map((value, index) => (
                                        <div key={index} className='container__element' >
                                            <button className='Btn__delete__elemente' onClick={() => deleteNode(value)}>Delete</button>
                                            <div className='element'> {value} </div> 
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            </div>
    );
}
export default Home;