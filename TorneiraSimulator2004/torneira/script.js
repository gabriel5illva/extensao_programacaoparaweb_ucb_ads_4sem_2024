document.getElementById('questionario').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const respostas = {};
    for (let i = 1; i <= 10; i++) {
        respostas[`q${i}`] = document.querySelector(`input[name="q${i}"]:checked`).value;
    }

    const resultado = analisarRespostas(respostas);
    localStorage.setItem('resultado', JSON.stringify(resultado));
    window.location.href = 'resultado.html';
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

    for (let pergunta in respostas) {
        switch (pergunta) {
            case 'q1':
                if (respostas[pergunta] === 'a') pontuacao['Torneira de Sensor Automático']++;
                break;
            case 'q2':
                if (respostas[pergunta] === 'a') pontuacao['Torneira de Cozinha Gourmet com Ducha Retrátil']++;
                break;
            case 'q3':
                if (respostas[pergunta] === 'a') pontuacao['Torneira Cascata']++;
                break;
            case 'q4':
                if (respostas[pergunta] === 'a') pontuacao['Torneira Articulada']++;
                break;
            case 'q5':
                if (respostas[pergunta] === 'a') pontuacao['Torneira com Controle de Vazão']++;
                break;
            case 'q6':
                if (respostas[pergunta] === 'a') pontuacao['Torneira de Duas Alavancas']++;
                break;
            case 'q7':
                if (respostas[pergunta] === 'a') pontuacao['Torneira de Rosca Manual']++;
                break;
            case 'q8':
                if (respostas[pergunta] === 'a') pontuacao['Torneira de Misturador Monocomando']++;
                break;
            case 'q9':
                if (respostas[pergunta] === 'a') pontuacao['Torneira de Sensor Automático']++;
                break;
            case 'q10':
                if (respostas[pergunta] === 'a') pontuacao['Torneira de Cozinha Gourmet com Ducha Retrátil']++;
                break;
        }
    }

    let torneiraEscolhida = Object.keys(pontuacao).reduce((a, b) => pontuacao[a] > pontuacao[b] ? a : b);
    return { torneira: torneiraEscolhida, pontuacao: pontuacao };
}
