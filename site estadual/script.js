const cronograma = [
  { dia: "Sexta-feira (18/04)", atividades: [
      "17h - Credenciamento",
      "19h30 - Santa Missa",
      "21h - Abertura Oficial"
  ]},
  { dia: "Sábado (19/04)", atividades: [
      "08h - Oração da Manhã",
      "09h - Palestra",
      "14h - Oficinas",
      "19h - Noite Cultural"
  ]},
  { dia: "Domingo (20/04)", atividades: [
      "08h - Oração",
      "09h - Dinâmica",
      "15h - Adoração",
      "20h - Vigília"
  ]},
  { dia: "Segunda-feira (21/04)", atividades: [
      "08h - Missa de Envio",
      "11h - Encerramento"
  ]}
];

const container = document.getElementById("cronogramaContainer");

cronograma.forEach(dia => {
  const card = document.createElement("div");
  card.classList.add("card");

  const titulo = document.createElement("h3");
  titulo.textContent = dia.dia;
  card.appendChild(titulo);

  dia.atividades.forEach(item => {
    const p = document.createElement("p");
    p.textContent = item;
    card.appendChild(p);
  });

  container.appendChild(card);
});

function mostrarOracao(tipo) {
  const texto = document.getElementById("textoOracao");

  const oracoes = {
    manha: "Senhor Jesus, entregamos este dia em Tuas mãos...",
    refeicao: "Abençoai, Senhor, este alimento...",
    noite: "Obrigado, Senhor, por este dia vivido..."
  };

  texto.textContent = oracoes[tipo];
}