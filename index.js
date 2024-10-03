const fileManager = require('./fileManager');
const readLineSync = require('readline-sync');
const path = require('path');
const { read } = require('fs');



async function main() {

    const baseDir = path.join(__dirname, "my_files");

    fileManager.createDirectory(baseDir);

    while(true) {

        console.log("\nMenu:");
        console.log("1 - Create file");
        console.log("2 - List files");
        console.log("3 - Read file");
        console.log("4 - Write file");
        console.log("5 - Delete file");
        console.log("6 - Quit");

        const choice = readLineSync.question("Pick a choice: ");

        switch(choice) {
            case '1':
                const fileName = readLineSync.question("Type the file name: ");
                const fileContent = readLineSync.question("Type the content or press enter to ignore: ");
                const createFilePath = path.join(baseDir, fileName)
                const fileMessage = await fileManager.createFile(createFilePath, fileContent);
                console.log(fileMessage);
                break;
            case '2':
                const fileList = await fileManager.listFiles(baseDir);
                console.log("Files in the directory: ", fileList)
                break;
            case '3':
                const fileRead = readLineSync.question("What is the file name?" );
                const fileReadPath = path.join(baseDir, fileRead);
                const fileReadContent = await fileManager.readFile(fileReadPath);
                console.log("File content: ", fileReadContent);
                break;
            case '4':
                //5:16 Try e Catch video
                console.log("4");
                break;
            case '5':
                console.log("5");
                break;
            case '6':
                console.log("Leaving... au revoir!");
                return;
            default:
                console.error("Unknown option, try again.")
        }
    }
}

main();