export const evento = {
    nome: 'Corrida Noturna OC',
    slogan: 'Corra sob as luzes da cidade.',
    data: '17 de abril de 2027 (sábado) · Largada às 19h30',
    local: 'Praça Central — Osvaldo Cruz/SP',
    sobre: 'Percursos de 5 km e 10 km pelas avenidas iluminadas do centro, mais uma caminhada de 3 km para quem quer participar sem correr. Todos os inscritos recebem camiseta refletiva e medalha. Parte do valor das inscrições é doada para a compra de equipamentos do hospital da cidade.'
}

// Os 3 números de destaque exigidos pelo briefing
export const destaques = [
    { valor: '3', texto: 'Percursos' },
    { valor: '1.500', texto: 'Participantes' },
    { valor: '6', texto: 'Pontos de hidratação' }
]

export const programacao = [
    { horario: '16h', atividade: 'Retirada dos kits' },
    { horario: '18h30', atividade: 'Aquecimento coletivo' },
    { horario: '19h30', atividade: 'Largada dos 10 km' },
    { horario: '19h40', atividade: 'Largada dos 5 km' },
    { horario: '19h50', text: 'Saída da caminhada', atividade: 'Saída da caminhada' },
    { horario: '21h', atividade: 'Premiação e show ao vivo' }
]

// Seus percursos mapeados como atrações
export const percursos = [
    { id: 1, nome: '10 km', nivel: 'Avançado', descricao: 'Para quem já corre com frequência; percurso com duas subidas.' },
    { id: 2, nome: '5 km', nivel: 'Iniciante', descricao: 'Ideal para a primeira prova, todo em terreno plano.' },
    { id: 3, nome: 'Caminhada 3 km', nivel: 'Livre', descricao: 'Sem cronometragem, para fazer em família ou com os amigos.' },
    { id: 4, nome: 'Kids 500 m', nivel: 'Infantil', descricao: 'Para crianças de 6 a 12 anos, às 18h, com medalha especial.' }
]

// Tipos de ingressos para o <select>
export const ingressos = [
    { valor: '10km', label: '10 km — R$ 70' },
    { valor: '5km', label: '5 km — R$ 70' },
    { valor: 'caminhada', label: 'Caminhada — R$ 25' },
    { valor: 'kids', label: 'Kids — Gratuito' }
]
