document.addEventListener('DOMContentLoaded', function() {
    const resultado = JSON.parse(localStorage.getItem('resultado'));
    if (resultado) {
        exibirResultado(resultado.torneira);
    }
});

function exibirResultado(torneira) {
    const descricoes = {
        'Torneira de Sensor Automático': 'Você é uma torneira prática e eficiente, focada em resolver problemas rapidamente. Essa torneira simboliza sua eficiência e rapidez em ação.',
        'Torneira de Cozinha Gourmet com Ducha Retrátil': 'Você é uma torneira altamente funcional e focada em facilitar a vida dos usuários. Essa torneira combina a sua praticidade e sofisticação.',
        'Torneira Cascata': 'Você é uma torneira que busca harmonizar com seu ambiente. Essa torneira é suave e esteticamente agradável, o que reflete sua conexão com a natureza e foco em experiências sensoriais.',
        'Torneira Articulada': 'Você é uma torneira flexível e multifuncional. Essa torneira simboliza sua orientação para soluções práticas e sua capacidade de explorar várias possibilidades.',
        'Torneira com Controle de Vazão': 'Você é uma torneira adaptável e gosta de controlar o fluxo de tudo que passa por você. Essa torneira reflete sua flexibilidade e seu desejo de dominar desafios de maneira prática.',
        'Torneira de Duas Alavancas': 'Você é uma torneira tradicional e confiável. Essa torneira simboliza seu apreço por controle preciso e ordem.',
        'Torneira de Rosca Manual': 'Você é uma torneira clássica e de alta durabilidade, com um forte senso de controle. Essa torneira reflete sua valorização da precisão e sua abordagem prática e direta, sem rodeios.',
        'Torneira de Misturador Monocomando': 'Você é uma torneira intuitiva e adaptável. Essa torneira representa sua habilidade de se adaptar sem perder a origininalidade.'
    };

    const imagens = {
        'Torneira de Sensor Automático': '/torneira/images/automatica.png',
        'Torneira de Cozinha Gourmet com Ducha Retrátil': '/torneira/images/ducharetratil.png',
        'Torneira Cascata': '/torneira/images/cascata.png',
        'Torneira Articulada': '/torneira/images/articulada.jpg',
        'Torneira com Controle de Vazão': '/torneira/images/controlevazao.jpg',
        'Torneira de Duas Alavancas': '/torneira/images/dupla.png',
        'Torneira de Rosca Manual': '/torneira/images/roscamanual.png',
        'Torneira de Misturador Monocomando': '/torneira/images/misturadormonocomando.png'
    };

    const numerosId = {
        'Torneira de Sensor Automático': 1,
        'Torneira de Cozinha Gourmet com Ducha Retrátil': 2,
        'Torneira Cascata': 3,
        'Torneira Articulada': 4,
        'Torneira com Controle de Vazão': 5,
        'Torneira de Duas Alavancas': 6,
        'Torneira de Rosca Manual': 7,
        'Torneira de Misturador Monocomando': 8
    };

    const numeroTorneira = numerosId[torneira];

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <div class="resultado-container">
            <h4>Sua Pontuação: ${numeroTorneira}</h4>
            <h3>Você é a <strong>${torneira}</strong></h3>
            <img src="${imagens[torneira]}" alt="${torneira}" class="torneira-imagem">
            <p>${descricoes[torneira]}</p>
        </div>
    `;
    resultadoDiv.style.display = 'block';
}
