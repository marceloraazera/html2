

let perguntas = [
    {
        pergunta: "Em 2025, Lana Del Rey anunciou que seu próximo projeto, intitulado 'Stove', explorará qual gênero musical específico?",
        respostas: ["Country", "Southern Gothic", "Indie Pop", "Eletrônico", "Synth Pop"],
        correta: 0,
        imagem: "https://rollingstone.com.br/wp-content/uploads/2025/08/lana-del-rey-gettyimages-2222849891.jpg"
    },
    {
        pergunta: "Qual artista quebrou recordes em 2024 ao ocupar simultaneamente todas as 14 primeiras posições da Billboard Hot 100 com o álbum 'The Tortured Poets Department'?",
        respostas: ["Taylor Swift", "Ariana Grande", "Billie Eilish", "Dua Lipa", "Beyoncé"],
        correta: 0,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/4/4e/The_Tortured_Poets_Department.jpg" // Substitua pela URL real
    },
    {
        pergunta: "Qual música de Billie Eilish, lançada para a trilha sonora do filme 'Barbie', venceu o Oscar de Melhor Canção Original em 2024?",
        respostas: ["Dance The Night", "Bad Guy", "What Was I Made For?", "LUNCH", "BIRDS OF A FEATHER"],
        correta: 2,
        imagem: "https://external-preview.redd.it/billie-eilish-what-was-i-made-for-z0ry-remix-v0-9K7J_loeFEaEqWXxOOqok4u17zJZAXIn7LiSSVOlkeQ.jpg?auto=webp&s=7a4530e683d5636324e71a60dd9f2436ebe97226"
    },
    {
        pergunta: "Em 2023 e 2024, as turnês mundiais tornaram-se eventos culturais massivos. Qual turnê detém o título de turnê mais lucrativa de todos os tempos?",
        respostas: ["Love On Tour", "Renaissance World Tour", "The Unraveled Tour", "Music of the Spheres World Tour", "The Eras Tour"],
        correta: 4,
        imagem: "https://forbes.com.br/wp-content/uploads/2023/11/mulher-taylor-swift-eras-tour.jpg"
    },
    {
        pergunta: "Olivia Rodrigo é uma das principais vozes da Geração Z. Qual é o nome do seu segundo álbum, lançado em 2023, que explora temas de amadurecimento e frustração?",
        respostas: ["Midnights", "SOUR", "Stove", "girl so in love", "GUTS"],
        correta: 4,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/0/03/Olivia_Rodrigo_-_Guts.png"
    },
    {
        pergunta: "Qual fenômeno das redes sociais e do streaming, vindo da música latina, tornou-se o primeiro artista de língua espanhola a ser o mais ouvido do mundo no Spotify por três anos consecutivos?",
        respostas: ["Shakira", "Maluma", "BadBunny", "Karol G", "Anitta"],
        correta: 2,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZe61nQBvJBdkGRq8b2fVj5cPafJPEEPAvftrplq2vCGzrVFKYlR2pH5odAO3ck7I8ZFKnVjPLfnxYHT-Em9s-JlfvO9NwDKhLiYlbw&s=10"
    },
    {
        pergunta: "A música 'Not Like Us', que se tornou um fenômeno cultural e liderou as paradas em 2024, faz parte de uma das maiores 'tretas' da história do Hip Hop entre quais artistas?",
        respostas: ["Charli XCX e Taylor Swift", "Nicki Minaj e Cardi B", "Lana Del Rey e Ethel Cain", "Kendrick Lamar e Drake", "Kanye West e Jay-z"],
        correta: 3,
        imagem: "https://i.ytimg.com/vi/9GqSo6bSKIw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDOmoVuswSVKw__AggOkyqWGb8nSg"
    },
    {
        pergunta: "Qual artista americana de R&B lançou o álbum 'SOS' em 2022, que permaneceu no topo da Billboard 200 por 10 semanas não consecutivas?",
        respostas: ["SZA", "Sade", "Zendaya", "Laufey", "KATSEYE"],
        correta: 0,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/c/c8/SZA_-_SOS.png"
    },
    {
        pergunta: "O termo 'Synth-pop', inspirado nos anos 80, é a base sonora do álbum 'Future Nostalgia' de qual artista britânica?",
        respostas: ["Dua Lipa", "Selena Gomez", "Madison Beer", "Zara Laesson", "Olivia Rodrigo"],
        correta: 0,
        imagem: "https://m.media-amazon.com/images/I/71VQFsqlPJL._UF1000,1000_QL80_.jpg"
    },
    {
        pergunta: "O hit 'Flowers', que quebrou recordes de streaming e venceu o Grammy de Gravação do Ano em 2024, pertence a qual cantora?",
        respostas: ["SZA", "Ariana Grande", "Miley Cyrus", "Demi Lovato", "Melanie Martinez"],
        correta: 2,
        imagem: "https://cdn-images.dzcdn.net/images/cover/98610629a40996b61b3d24bd5ab8c2e1/1900x1900-000000-80-0-0.jpg"
    },
    {
        pergunta: "A música 'Cruel Summer', de Taylor Swift, tornou-se um hit número 1 e uma das músicas mais ouvidas de 2023/2024, apesar de ter sido lançada originalmente em qual ano?",
        respostas: ["2014", "2022", "2020", "2019", "2021"],
        correta: 3,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/b/b9/Taylor_Swift_-_The_Cruelest_Summer.png"
    },
    {
        pergunta: "Qual produtor musical é frequentemente chamado de 'o arquiteto do pop moderno' por ter produzido hits para Taylor Swift, Lana Del Rey, Lorde e Sabrina Carpenter?",
        respostas: ["Max Martin", "Jack Antonoff", "Pharrell Williams", "Greta Gerwig", "Sofia Coppola"],
        correta: 1,
        imagem: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Jack_Antonoff_at_Electric_Lady_Studios_2023_%28cropped%29.jpg"
    },
]


let perguntaAtual = 0 // Vai mostrar qual pergunta está sendo exibida
let pontuacao = 0 // Mostra quantas respostas certas



function mostrarPergunta() {
    let pergunta = perguntas[perguntaAtual]

    document.getElementById("pergunta").innerText = pergunta.pergunta

    // IA 

    let imgElement = document.getElementById("imagem-pergunta");
    if (!imgElement) {
        imgElement = document.createElement("img");
        imgElement.id = "imagem-pergunta";
        imgElement.style.display = "block";
        imgElement.style.margin = "10px auto"; 
        imgElement.style.maxWidth = "100%"; 

        document.getElementById("pergunta").after(imgElement);
    }
    imgElement.src = pergunta.imagem;

    // Fim da IA

    let respostasDiv = document.getElementById("respostas")
    respostasDiv.innerHTML = " "
    // Limpa a div antes de adicionar novas respostas

    pergunta.respostas.forEach(function(resposta, index) {
        respostasDiv.innerHTML += `<button id="alternativas" onclick="verificarResposta(${index})">${resposta}</button>`
    })
}
function verificarResposta(index) {
    let pergunta = perguntas[perguntaAtual]

    let resultado = document.getElementById("resultado")
    if(index == pergunta.correta) {
        resultado.innerText = "Acertou!"
        resultado.style.color = "rgb(56, 167, 52)"
        pontuacao++
    } else {
        resultado.innerText = "Errou."
        resultado.style.color = "rgb(167, 52, 52)"
    }
}
function proximaPergunta() {
    perguntaAtual++ // Vai para a próxima pergunta
    if(perguntaAtual < perguntas.length) {
        mostrarPergunta()
        document.getElementById("resultado").innerText = " "
    } else {
        mostrarResultadoFinal()
    }
}
function mostrarResultadoFinal() {
    document.getElementById("container").innerHTML = `
    <h2>Quiz Finalizado!</h2>
    <p id="fim">Sua pontuação foi: ${pontuacao} de 12</p>
    <button id="results" onclick="location.reload()">Jogar novamente</button>
    ` 
    // location.reload() atualiza a página
}
mostrarPergunta()
