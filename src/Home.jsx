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
        document.getElementById('vogaisCountDeclarativo').textContent = 'Número de vogais: ' + count;
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
        // Define um intervalo proximo ao valor real da raiz quadrada
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
        document.getElementById('raizDeclarativo').textContent = 'Resultado: ' + raizQuadrada;
    }

//=-=-=-= 2ª Avaliação =-=-=-=

/*======== Lista Duplamente Encadeada ===========*/

// Classe para criar um nó
class Node {
    constructor(dados) {
        this.dados = dados; // Valor armazenado no nó
        this.anterior = null; // Referência para o nó anterior na lista
        this.proximo = null; // Referência para o proximo nó na lista
    }
}

// Estado do componente para o nó inicial da lista
const [cabeca, definirCabeca] = useState(null);

// Estado do componente para o valor de entrada do usuário
const [valorEntrada, definirValorEntrada] = useState('');
// Estado do componente para o valor de entrada do usuário
const [valorPosicao, setValorPosicao] = useState('');

// Estado do componente para os valores da lista
const [valoresLista, definirValoresLista] = useState([]);

// Função para inserir um nó no final da lista duplamente encadeada
const inserirNoFinal = (dados) => {
    const novoNo = new Node(dados); // Cria um novo nó com os dados fornecidos

    if (!cabeca) { // Se a lista estiver vazia
        definirCabeca(novoNo); // Define o novo nó como o nó inicial

    } else {
        let atual = cabeca;
        while (atual.proximo) {
            atual = atual.proximo; // Percorre a lista até encontrar o último nó
        }
        atual.proximo = novoNo; // Define o proximo do último nó como o novo nó
        novoNo.anterior = atual; // Define o nó anterior do novo nó como o último nó
        novoNo.proximo = null;
    }
    definirValoresLista([...valoresLista, dados]); // Adiciona o valor à lista de valores
    definirValorEntrada(''); // Limpa o valor de entrada
};

// Função para localizar o nó na posição desejada
const localizarNo = (posicao) => {
    if (posicao < 0 || posicao >= valoresLista.length || !cabeca) {
        return null; // Retorna null se a posição for inválida ou a lista estiver vazia
    }

    let atual = cabeca;
    for (let i = 0; i < posicao; i++) {
        if (atual.proximo) {
            atual = atual.proximo; // Avança na lista até a posição desejada
        } else {
            return null; // Retorna null se não houver mais nós na lista antes da posição desejada
        }
    }
    return atual; // Retorna o nó na posição desejada
};

// Função para inserir um nó no meio da lista duplamente encadeada
const inserirNoMeio = (dados, posicao) => {
    const novoNo = new Node(dados); // Cria um novo nó com os dados fornecidos

    // Localiza o nó na posição desejada
    let atual = localizarNo(posicao);
    
    // Verifica se a posição foi encontrada
    if (!atual) {
        console.log('Posição inválida');
        return;
    }

    // Insere o novo nó antes do nó na posição encontrada
    novoNo.proximo = atual;
    novoNo.anterior = atual.anterior;

    // Verifica se o nó atual não é o primeiro da lista
    if (atual.anterior) {
        atual.anterior.proximo = novoNo; // Define o próximo do nó anterior como o novo nó
    } else {
        // Se o nó atual for o primeiro da lista, atualiza a cabeça da lista
        definirCabeca(novoNo);
    }
    
    atual.anterior = novoNo;

    // Atualiza a lista de valores com o novo dado
    definirValoresLista([...valoresLista.slice(0, posicao), dados, ...valoresLista.slice(posicao)]);

    // Limpa o valor de entrada e posição após a inserção
    definirValorEntrada('');
    setValorPosicao('');
};


const deletarNo = (dados) => {
    
    let atual = cabeca; // Começa a busca a partir da cabeça
    while (atual) { // Enquanto houver um nó para verificar
        // Se os dados do nó atual forem iguais aos dados fornecidos
        if (atual.dados === dados) { 
            // Se o nó atual for a cabeça
            if (atual === cabeca) { 
                definirCabeca(atual.proximo); // Define o próximo nó como cabeça
                // Define o anterior do próximo nó como null se houver próximo nó
                if (atual.proximo) { 
                    atual.proximo.anterior = null; 
                }
            } else {
                // Define o próximo do nó anterior como o próximo do nó atual
                if (atual.anterior) { 
                    atual.anterior.proximo = atual.proximo; 
                }
                // Define o anterior do próximo nó como o anterior do nó atual
                if (atual.proximo) { 
                    atual.proximo.anterior = atual.anterior; 
                } else {
                    // Se atual for o último nó da lista, define o próximo do nó anterior como null
                    atual.anterior.proximo = null; 
                }
            }
            // Remove o dado da lista de valores
            definirValoresLista(valoresLista.filter(item => item !== dados)); 
            break; // Sai do loop após a exclusão
        }
        atual = atual.proximo; // Move para o próximo nó
    }
};

// Função para lidar com mudanças no input do valor a ser inserido
const lidarComMudancaDeInputValor = (e) => {
    definirValorEntrada(e.target.value);
};
// Função para lidar com mudanças no input do valor a ser inserido
const lidarComMudancaDeInputPosicao = (e) => {
    setValorPosicao(e.target.value)
};

/*======== Problemas em Paradigmas Funcionais: Processamento de Strings ===========*/

// Definindo estado para a string de entrada e a string processada
const [inputString, setInputString] = useState('');
const [processedString, setProcessedString] = useState('');

// Função para processar a string
const processString = () => {
    // Convertendo a string de entrada para letras minúsculas
    const lowercaseString = inputString.toLowerCase();

    // Removendo espaços em branco extras e dividindo a string em um array de palavras
    const wordsArray = lowercaseString.trim().split(/\s+/);

    // Revertendo a ordem das palavras no array
    const reversedArray = wordsArray.reverse();

    // Juntando as palavras do array em uma única string novamente
    const reversedString = reversedArray.join(' ');

    // Atualizando o estado da string processada
    setProcessedString(reversedString);
};

/*======== Problemas em Paradigmas Funcionais: Matemáticos. ===========*/

const [numTotalSuditos, setNumTotalSuditos] = useState('');
const [convidados, setConvidados] = useState([]);

function calcularConvidados(N, turnos) {
    // Função para gerar uma lista de números de 1 a N
    const gerarLista = (tamanho) => Array.from({ length: tamanho }, (_, i) => i + 1);
    
    // Função para remover os múltiplos de 'divisor' da lista
    const removerMultiplos = (lista, divisor) => lista.filter((_, index) => (index + 1) % divisor !== 0);
    
    // Função para remover os súditos por turno
    const removerPorTurno = (lista, Ti) => removerMultiplos(lista, Ti);

    // Gera a lista inicial de súditos
    const listaConvidados = gerarLista(N);

    // Reduz a lista de convidados aplicando as remoções por turno
    const convidadosFinais = turnos.reduce((convidados, Ti) => {
        const listaRestante = removerPorTurno(convidados, Ti);
        return listaRestante;
    }, listaConvidados);

    // Retorna os primeiros 10000 convidados, conforme a restrição
    return convidadosFinais.slice(0, 10000);
}

/*Exemplo de entrada
const N = 10; // Número total de súditos
const M = 2; // Número de turnos
*/

const turnos = [2, 3]; // Números sorteados em cada turno

const SortearConvidados = () => {
    const  teste = calcularConvidados(numTotalSuditos, turnos);
    setConvidados(teste)
}

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
                                <h4 className='tittleParadigmas'>Imperativo</h4>
                                <p className='text__paradigmas'>Descreve passo a passo como o programa deve executar as tarefas, usando instruções sequenciais e estruturas de controle.</p><br/>
                                <h4 className='tittleParadigmas'>Cenário de uso</h4>
                                <p className='text__paradigmas'>Desenvolvimento de um algoritmo de ordenação como o Bubble Sort.</p><br />
                                <button className="saiba__mais"><a href="https://guia.dev/pt/pillars/languages-and-tools/programming-paradigms.html#imperativo">Saiba  mais</a></button>
                            </div>

                            <div className="card">
                                <h4 className='tittleParadigmas'>Declarativo</h4>
                                <p className='text__paradigmas'>Define o que o programa deve realizar, focando nos resultados desejados em vez dos detalhes de implementação.</p><br/>
                                <h4 className='tittleParadigmas'>Cenário de uso</h4>
                                <p className='text__paradigmas'>Construção de uma interface de usuário (UI) utilizando bibliotecas como React.js, onde a estrutura e o comportamento são declarados por meio de componentes.</p><br />
                                <button className="saiba__mais"><a href="https://guia.dev/pt/pillars/languages-and-tools/programming-paradigms.html#declarativo">Saiba  mais</a></button>
                            </div>

                            <div className="card">
                                <h4 className='tittleParadigmas'>Orientado a Objetos</h4>
                                <p className='text__paradigmas'>Organiza o código em torno de objetos que contêm propriedades e métodos, facilitando a reutilização e a encapsulação de dados.</p><br/>
                                <h4 className='tittleParadigmas'>Cenário de uso</h4>
                                <p className='text__paradigmas'>Desenvolvimento de um sistema de gerenciamento de tarefas, onde cada tarefa é representada por um objeto com propriedades e métodos específicos.</p><br />
                                <button className="saiba__mais"><a href="https://guia.dev/pt/pillars/languages-and-tools/programming-paradigms.html#orientacao-objeto">Saiba  mais</a></button>
                            </div>

                            <div className="card">
                                <h4 className='tittleParadigmas'>Funcional</h4>
                                <p className='text__paradigmas'>Trata a computação como uma avaliação de funções matemáticas e que evita estados ou dados mutáveis.</p><br/>
                                <h4 className='tittleParadigmas'>Cenário de uso</h4>
                                <p className='text__paradigmas'>Filtrar produtos por categoria, Mapear preços para descontos ou Calcular total da compra</p><br />
                                <button className="saiba__mais"><a href="https://guia.dev/pt/pillars/languages-and-tools/programming-paradigms.html#funcional">Saiba  mais</a></button>
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
                        <h3># Contagem de Vogais</h3>
                        <div className="timeline__item-body-content inputBox">
                            <span style={{marginTop: '10px'}}>Paradigma Imperativo</span>
                            <input type="text" id="inputImperativo" placeholder="Digite uma string"/><br />
                            <p className="timeline__item-p" id="vogaisCount">Número de vogais:</p>
                            <button onClick={contarVogaisImperativo}>Processar String</button>
                        </div>

                        <div className="timeline__item-body-content inputBox">
                        <span style={{marginTop: '10px'}}>Paradigma Declarativo</span>
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
                    <h3># Cálculo de raiz quadrada</h3>
                    <div className="timeline__item-body-content inputBox">
                        
                        <span style={{marginTop: '10px'}}>Paradigma Imperativo</span>
                        <input type="text" id="inputMatImperativo" placeholder="Digite um número"/><br />
                        <p className="timeline__item-p" id="raizImperativo">Resultado:</p>
                        <button onClick={iCalcularRaiz}>Calcular Raiz Quadrada</button>
                    </div>

                    <div className="timeline__item-body-content inputBox">
                        <span style={{marginTop: '10px'}}>Paradigma Declarativo</span>
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
                            <h4 className='text__explanatory'>Nesta aula, foi solicitado a implementação de exmplos práticos com uso de bibliotecas gráficas. Sendo assim, segue abaixo um 'quadro' desenhável
                                implementado com o canvas:
                            </h4>
                            <Canvas/>
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
                            <h4 className='text__explanatory'>Para essa aula, foi solicitado a implementação de operações de inserção e deleção de elementos em uma lista duplamente encadeada,
                                sem usar de bibliotecas para implementação da estrutura de dados e das operações.
                            </h4>
                            <div className="doubly-linked-list">
                                <p style={{textAlign: 'Center', fontWeight: 'bold', marginTop: '10px'}}>Add element to the list</p>
                                <div className="input_box_list">
                                
                                <input type="text" value={valorEntrada} onChange={lidarComMudancaDeInputValor} placeholder='Inserir elemento' style={{marginBottom: '10px'}}/>
                                <input type="text" value={valorPosicao} onChange={lidarComMudancaDeInputPosicao} placeholder='Informar posição'/>

                                {valorPosicao.length > 0 ?(
                                    <button className='Btn__add__elemente' onClick={() => inserirNoMeio(valorEntrada, valorPosicao)} style={{width: '150px'}}>Insert on position</button>
                                ):(
                                    <button className='Btn__add__elemente' onClick={() => inserirNoFinal(valorEntrada)}>Insert</button>
                                )              
                                }
                                
                                    
                                </div>
                                <ul className="list-elements">
                                    {valoresLista.map((value, index) => (
                                        <div key={index} className='container__element' >
                                            <button className='Btn__delete__elemente' onClick={() => deletarNo(value)}>Delete</button>
                                            <div className='element'> {value} </div> 
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="timeline__item">
                    <div className="timeline__item-header">
                        <button className="timeline__arrow"
                        type="button" id="item6"
                        aria-labelledby="item6-name"
                        aria-expanded={expandedItems.includes('item6')}
                        aria-controls="item6-ctrld"
                        aria-haspopup="true"
                        data-item="6"
                        onClick={() => toggleItem('item6')}
                        >
                            <svg className="timeline__arrow-icon" viewBox="0 0 24 24" width="24px" height="24px">
                                <use href="#arrow" />
                            </svg>
                        </button>
                        <span className="timeline__dot"></span>
                        <span id="item6-name" className="timeline__meta">
                            <time className="timeline__date" dateTime="2009-02-13">Fevereiro 28, 2024</time><br/>
                            <strong className="timeline__title">Problemas em Paradigmas Funcionais: Processamento de Strings - Aula 7</strong>
                        </span>
                    </div>
                    <div className={`timeline__item-body ${expandedItems.includes('item6') ? 'timeline__item-body--expanded' : ''}`} id="item6-ctrld" role="region" aria-labelledby="item6" aria-hidden={!expandedItems.includes('item6')}>
                        <div className="timeline__item-body-content"><br />
                        <h4 className='text__explanatory'>
                            Quando o botão "Processar" é clicado, a frase é processada da seguinte maneira:
                                <ul><br />
                                    <li>A frase é convertida para letras minúsculas.</li>
                                    <li>Espaços em branco extras são removidos e a frase é dividida em um array de palavras.</li>
                                    <li>A ordem das palavras no array é revertida.</li>
                                    <li>As palavras são juntadas de volta em uma única string, que é exibida como a string processada.</li>
                                </ul>
                        </h4><br />
                        <h4>Processamento de String</h4>
                            <div className='input_box_list'>
                                
                                <input 
                                    type="text" 
                                    id="inputString" 
                                    value={inputString} 
                                    placeholder='Insira uma string'
                                    onChange={(e) => setInputString(e.target.value)} 
                                />
                            </div>
                            <button onClick={processString} className='Btn__add__elemente'>Processar</button>
                            {processedString && (
                                <div>
                                    <h3>String Processada:</h3>
                                    <p>{processedString}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="timeline__item">
                    <div className="timeline__item-header">
                        <button className="timeline__arrow"
                        type="button" id="item7"
                        aria-labelledby="item7-name"
                        aria-expanded={expandedItems.includes('item7')}
                        aria-controls="item7-ctrld"
                        aria-haspopup="true"
                        data-item="7"
                        onClick={() => toggleItem('item7')}
                        >
                            <svg className="timeline__arrow-icon" viewBox="0 0 24 24" width="24px" height="24px">
                                <use href="#arrow" />
                            </svg>
                        </button>
                        <span className="timeline__dot"></span>
                        <span id="item7-name" className="timeline__meta">
                            <time className="timeline__date" dateTime="2009-02-13">Março 6, 2024</time><br/>
                            <strong className="timeline__title">Problemas em Paradigmas Funcionais: Matemáticos - Aula 8</strong>
                        </span>
                    </div>
                    <div className={`timeline__item-body ${expandedItems.includes('item7') ? 'timeline__item-body--expanded' : ''}`} id="item7-ctrld" role="region" aria-labelledby="item7" aria-hidden={!expandedItems.includes('item7')}>
                        <div className="timeline__item-body-content">
                        <h4 className='text__explanatory'>
                        Resolver de modo Funcional o problema da <a href="https://olimpiada.ic.unicamp.br/pratique/ps/2021/f3/festa/" style={{color: 'blue'}}> Festa Olímpica.</a><br /><br />

                        <ul># Resumo do Problema:
                                    <li>o problema requer a implementação de um algoritmo eficiente que
                                        determine os súditos convidados para a festa, seguindo as regras
                                        estipuladas pela Lei Especial Sobre Comemoração das Olimpíadas,
                                        considerando as restrições de entrada fornecidas.</li>
                                </ul>
                        </h4>
                            <div className='input_box_list'>
                            
                                <input 
                                style={{fontSize: '16px', width: '100%', marginRight: '5px', marginBottom: '10px'}}
                                    type="text" 
                                    id="numTotalSuditos" 
                                    value={numTotalSuditos} 
                                    placeholder='Número total de súditos'
                                    onChange={(e) => setNumTotalSuditos(e.target.value)}
                                />
                                <button onClick={SortearConvidados} className='Btn__add__elemente'>Sortear</button>
                            </div>
                            
                            {convidados.length > 0 && (
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <h3 style={{display: 'flex', marginLeft: '10px',
                                                height: 'auto', justifyContent: 'center',
                                                alignItems: 'center', padding: '3px',
                                                borderRadius: '3px', color: '#000' }}>Convidados Sorteados</h3>
                                    <div className="Box__item">
                                    {convidados.map((item, index) =>
                                    <div key={index}
                                    style={{fontSize: '18px', margin: '5px',
                                            display: 'flex', justifyContent: 'center',
                                            alignItems: 'center', background: 'blue',
                                            padding: '3px', borderRadius: '3px',
                                            width: '30px', height: '30px', color: '#fff'}}>

                                        <p>{item}</p>
                                    </div>
                                    )}
                                    </div>  
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
}
export default Home;