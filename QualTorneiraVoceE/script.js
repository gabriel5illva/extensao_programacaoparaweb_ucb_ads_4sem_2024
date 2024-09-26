document.getElementById('questionario').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const respostas = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
        q3: document.querySelector('input[name="q3"]:checked').value,
        q4: document.querySelector('input[name="q4"]:checked').value,
        q5: document.querySelector('input[name="q5"]:checked').value,
        q6: document.querySelector('input[name="q6"]:checked').value,
        q7: document.querySelector('input[name="q7"]:checked').value,
        q8: document.querySelector('input[name="q8"]:checked').value,
        q9: document.querySelector('input[name="q9"]:checked').value,
        q10: document.querySelector('input[name="q10"]:checked').value
    };

    const resultado = analisarRespostas(respostas);
    exibirResultado(resultado);
});

function analisarRespostas(respostas) {
    const pontuacao = {
        'Torneira de Sensor Automático': 0,
        'Torneira de Cozinha Gourmet com Ducha Retrátil': 0,
        'Torneira Cascata': 0,
        'Torneira Articulada': 0,
        'Torneira com Controle de Vazão': 0,
        'Torneira de Duas Alavancas': 0,
        'Torneira de Rosca Manual': 0,
        'Torneira de Misturador Monocomando': 0
    };

    if (respostas.q1 === 'a') pontuacao['Torneira de Sensor Automático']++;
    if (respostas.q2 === 'a') pontuacao['Torneira de Cozinha Gourmet com Ducha Retrátil']++;
    if (respostas.q3 === 'a') pontuacao['Torneira Cascata']++;
    if (respostas.q4 === 'a') pontuacao['Torneira Articulada']++;
    if (respostas.q5 === 'a') pontuacao['Torneira com Controle de Vazão']++;
    if (respostas.q6 === 'a') pontuacao['Torneira de Duas Alavancas']++;
    if (respostas.q7 === 'a') pontuacao['Torneira de Rosca Manual']++;
    if (respostas.q8 === 'a') pontuacao['Torneira de Misturador Monocomando']++;
    if (respostas.q9 === 'a') pontuacao['Torneira de Sensor Automático']++;
    if (respostas.q10 === 'a') pontuacao['Torneira de Cozinha Gourmet com Ducha Retrátil']++;

    let torneiraEscolhida = Object.keys(pontuacao).reduce((a, b) => pontuacao[a] > pontuacao[b] ? a : b);
    return torneiraEscolhida;
}

function exibirResultado(torneira) {
    const descricoes = {
        'Torneira de Sensor Automático': 'Você é prático e eficiente, focado em resolver problemas rapidamente. Esta torneira simboliza sua eficiência e rapidez em ação, sendo inovadora e decisiva.',
        'Torneira de Cozinha Gourmet com Ducha Retrátil': 'Você é altamente funcional e focado em facilitar a vida das pessoas ao seu redor. Esta torneira combina praticidade e sofisticação, refletindo sua natureza cuidadosa e inspiradora.',
        'Torneira Cascata': 'Você é sensível e busca harmonia. Esta torneira suave e esteticamente agradável reflete sua conexão com a natureza e foco em experiências sensoriais.',
        'Torneira Articulada': 'Você é flexível e multifuncional. Esta torneira simboliza sua orientação para soluções práticas e sua capacidade de explorar várias possibilidades.',
        'Torneira com Controle de Vazão': 'Você é adaptável e gosta de controlar o fluxo das situações. Esta torneira reflete sua flexibilidade e seu desejo de dominar desafios de maneira prática.',
        'Torneira de Duas Alavancas': 'Você valoriza tradição e confiabilidade. Esta torneira simboliza seu apreço por controle preciso e ordem em sua vida.',
        'Torneira de Rosca Manual': 'Você aprecia o clássico e o durável, com um forte senso de controle. Esta torneira reflete sua valorização da precisão e sua abordagem prática e direta.',
        'Torneira de Misturador Monocomando': 'Você é intuitivo e adaptável. Esta torneira representa sua flexibilidade, criatividade e abordagem prática para inspirar os outros.'
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

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <h2>Seu resultado:</h2>
        <h3>${torneira}</h3>
        <div class="resultado-container">
            <img src="${imagens[torneira]}" alt="${torneira}" class="torneira-imagem">
            <p>${descricoes[torneira]}</p>
        </div>
    `;
    resultadoDiv.style.display = 'block';
}
