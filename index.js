const fileManager = require('./fileManager');
const readLineSync = require('readline-sync');
const path = require('path');



function main() {

    const baseDir = path.join(__dirname, "my_files");

    while(true) {

        console.log("\nMenu:");
        console.log("1 - Criar arquivo");
        console.log("2 - Listar arquivos");
        console.log("3 - Ler arquivo");
        console.log("4 - Escrever arquivo");
        console.log("5 - Deletar arquivo");
        console.log("6 - Sair");

        const choice = readLineSync.question("Escolha uma opção: ");

        switch(choice) {
            case '1':
                const fileName = readLineSync.question("Digite o nome do arquivo: ");
                const fileContent = readLineSync.question("Digite o conteúdo ou tecle enter para ignorar: ");

                const createFilePath = path.join(__dirname, fileName)

                const fileMessage = fileManager.createFile(createFilePath, fileContent);


                console.log(fileMessage);
                break;
            case '2':
                console.log("2");
                break;
            case '3':
                console.log("3");
                break;
            case '4':
                console.log("4");
                break;
            case '5':
                console.log("5");
                break;
            case '6':
                console.log("Saindo... tchau!");
                return;
            default:
                console.error("Opção inválida, tente novamente.")
        }
    }
}

main();