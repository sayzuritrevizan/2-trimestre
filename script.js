const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual sua opinião sobre o chat gpt",
            alternativa:[
    {
            texto: "Isso é assustador!",
            afirmacao:"porque e uma tecnologia muito avancada"
    },
    {
        texto: "muito util",
            afirmacao:"pois ajuda com respostas rapidas e eficazes",
    },
    ]
    },
    {
        enunciado: "Voce acha que a IA(inteligencia artificial) foi algo bom implantado na sociedade",
        alternativas: [
            {
                texto: "foi um avanco, nao perdemos tempo buscando respostas",
            afirmacao:"em parte,sim, ajudou o gasto de tmepo buscando respostas"
                },  
            {
       ]
    },
    {
        enunciado: "Após a elaboração do trabalho, o professor realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
            "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores."
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            "Criar uma imagem utilizando uma plataforma de design como o Paint.",
            "Criar uma imagem utilizando um gerador de imagem de IA."
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas: [
           "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
            "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial."
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal=" ";

function mostraPergunta() {
    if(atual >= perguntas.length){
    mostraResultado();
        return;
    }
    perguntaAtual = pergunta[atual];
    caixasPerguntas.textContent = pergunta.enunciado;
    caixaAlternativas.textContext = "";
    mostraAlternativas();
}
function mostraAlternativas () {
    for(const alternativa of perguntaAltual.alternativas) {
        const botaoAlternativas = document.creteElement("button");
        botaoAlternativas.textContent = alternativas.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmcao
    historiFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Esse texto e a introducao para juntar todas as afirmacoes das respostas..."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent ="";
}

mostraPergunta();

