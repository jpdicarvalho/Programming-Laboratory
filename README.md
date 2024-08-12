# Laboratório de Programação - Disciplina
---
## Author: João Pedro Braga de Carvalho
## Link do site: https://jpdicarvalho.github.io/Programming-Laboratory/

Este projeto consiste na criação de um site utilizando React, JavaScript e CSS. O objetivo principal é desenvolver uma timeline que contenha exemplos práticos de cada conteúdo abordado em sala de aula.

Outrossim, vale ressaltar que os tópicos estão devidamente organizados em suas respectivas avalições propostas.

A seguir, serão apresentadas as funções em JavaScript implementadas para cada exemplo criado:

---
# >> 1ª Avaliação

### Processamento de String - Paradigma Imperativo

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
    
### Processamento de String - Paradigma Declarativo

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

### Processamento Matemático - Paradigma Imperativo

    // Função para calcular a raiz quadrada
    function calcularRaiz() {
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

### Processamento Matemático - Paradigma Declarativo

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

### Problemas em Paradigmas Imperativos: Geometria Computacional

    // Função chamada quando o usuário pressiona o botão do mouse
        const startDrawing = (event) => {
            setIsDrawing(true); // Define que o usuário está desenhando
            const canvas = canvasRef.current;
            const rect = canvas.getBoundingClientRect();
            // Calcula as coordenadas iniciais do desenho em relação ao canvas
            startX = event.clientX - rect.left;
            startY = event.clientY - rect.top;
        }

    // Função chamada quando o usuário solta o botão do mouse
    const stopDrawing = () => {
        setIsDrawing(false); // Define que o usuário parou de desenhar
    }

    // Função chamada quando o usuário move o mouse sobre o canvas
    const draw = (event) => {
        // Verifica se o usuário está desenhando
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        // Obtém as coordenadas atuais do mouse em relação ao canvas
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Inicia um novo caminho de desenho
        context.beginPath();
        // Move o ponto de início do desenho para as coordenadas iniciais
        context.moveTo(startX, startY);
        // Desenha uma linha até as coordenadas atuais do mouse
        context.lineTo(x, y);
        // Aplica o traçado
        context.stroke();

        // Atualiza as coordenadas iniciais para as atuais
        startX = x;
        startY = y;
    }
---
# >> 2ª Avaliação

### Problemas em Paradigmas Imperativos: Estruturas de Dados
Lista Duplamente Encadeada com operações de inserção (meio e final) e deleção de elementos.


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

    //Função para lidar com mudanças no input do valor a ser inserido
        const lidarComMudancaDeInputValor = (e) => {
            definirValorEntrada(e.target.value);
    };
    
    //Função para lidar com mudanças no input do valor a ser inserido
    const lidarComMudancaDeInputPosicao = (e) => {
        setValorPosicao(e.target.value)
    };

### Problemas em Paradigmas Funcionais: Processamento de Strings 
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

### Problemas em Paradigmas Funcionais: Matemáticos


    // Definindo estado para a entrada do número total de súditos, turnos e os convidados finais
    const [numTotalSuditos, setNumTotalSuditos] = useState('');
    const [numTurnos, setNumTurnos] = useState('');
    const [convidados, setConvidados] = useState([]);
    
    function calcularConvidados(N, M, turnos) {
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
        const  teste = calcularConvidados(numTotalSuditos, numTurnos, turnos);
        setConvidados(teste)
    }


#Isso é tudo pessoal!!
