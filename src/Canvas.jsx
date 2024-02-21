import React, { useRef, useEffect, useState } from 'react';
import './Home.css';

// Define o componente Canvas
const Canvas = () => {
    // Referência para o elemento <canvas>
    const canvasRef = useRef(null);
    // Estado para controlar se o usuário está desenhando
    const [isDrawing, setIsDrawing] = useState(false);
    // Variáveis para armazenar as coordenadas iniciais do desenho
    let startX, startY;

    // Efeito que é executado uma vez, quando o componente é montado
    useEffect(() => {
        // Obtém o elemento <canvas> a partir da referência
        const canvas = canvasRef.current;
        // Obtém o contexto de desenho 2D
        const context = canvas.getContext('2d');
        // Configura a cor de traço e a largura da linha
        context.strokeStyle = '#000'; // Cor preta
        context.lineWidth = 2; // Largura da linha
    }, []);

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

    // Retorna o elemento <canvas> com os eventos do mouse associados às funções definidas
    return (
        <canvas
            ref={canvasRef} // Referência para o elemento <canvas>
            className="canvas" // Classe CSS para estilização
            onMouseDown={startDrawing} // Evento quando o mouse é pressionado
            onMouseUp={stopDrawing} // Evento quando o mouse é solto
            onMouseMove={draw} // Evento quando o mouse é movido
        />
    );
}

// Exporta o componente Canvas para utilização em outros arquivos
export default Canvas;