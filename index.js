const options = `
  "--help": "Mostra mensagem de ajuda",
  "--version": "Mostra a versão do programa",
  "--pt ou -1": "Mensagem em português",
  "--en ou -2": "Mensagem em inglês",
  "--es ou -3": "Mensagem em espanhol",
  "--fr ou -4": "Mensagem em francês",
  "--it ou -5": "Mensagem em italiano",
  "--co ou -6": "Mensagem em coreano",
  "--jp ou -7": "Mensagem em japonês",
  "--ru ou -8": "Mensagem em russo",
`;

const help = `
Execute o programa usando:
  bomdia <opção>
Somente com uma das seguintes opções por vez:
  ${options}
`;
const version = "1.0.0";

const fullFlag = {
  "--help": help,
  "--version": version,
  "--pt": "Bom dia",
  "--en": "Good morning",
  "--es": "Buenos días",
  "--fr": "Bonjour",
  "--it": "Buongiorno",
  "--co": "Annyeonghaseyo",
  "--jp": "Ohayou gozaimasu",
  "--ru": "Dobroe utro",
};

const shortFlag = {
  "-h": help,
  "-v": version,
  "-1": fullFlag["--pt"],
  "-2": fullFlag["--en"],
  "-3": fullFlag["--es"],
  "-4": fullFlag["--fr"],
  "-5": fullFlag["--it"],
  "-6": fullFlag["--co"],
  "-7": fullFlag["--jp"],
  "-8": fullFlag["--ru"],
};

if (process.argv.length > 3) {
  console.log("Informe apenas uma opção, -h ou --help para mais informações.");
  process.exit(1);
}

if (process.argv.length < 3) {
  console.log("Informe uma opção, -h ou --help para mais informações.");
  process.exit(1);
}

const flag = process.argv[2];

const message = fullFlag[flag] || shortFlag[flag];

if (!message) {
  console.log("Opção inválida, -h ou --help para mais informações.");
  console.log(options);
  process.exit(1);
}

console.log(message);
