import fileManager from './fileManager.js';
import readLineSync from 'readline-sync';
import path from 'path';
import url, { fileURLToPath } from 'url';


async function main() {

    const __dirname = path.dirname(fileURLToPath(import.meta.url));

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

        try {
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
                    const fileRead = readLineSync.question("What is the file name? " );
                    const fileReadPath = path.join(baseDir, fileRead);
                    const fileReadContent = await fileManager.readFile(fileReadPath);
                    console.log("File content: \n\n", fileReadContent);
                    break;
                case '4':
                    const fileWrite = readLineSync.question("Type the file name: ");
                    const fileWritePath = path.join(baseDir, fileWrite);
                    const fileWriteNewContent = readLineSync.question("Type the content to be saved: ");
                    const fileWriteMessage = await fileManager.writeFile(fileWritePath, fileWriteNewContent);
                    console.log(fileWriteMessage)
                    break;
                case '5':
                    const fileDeleteName = readLineSync.question("What is the file name to be deleted? ");
                    const fileDeletePath = path.join(baseDir, fileDeleteName);
                    const fileDeleteMessage = await fileManager.deleteFile(fileDeletePath);
                    console.log(fileDeleteMessage);
                    break;
                case '6':
                    console.log("\nLeaving... au revoir!\n");
                    return;
                default:
                    console.error("Unknown option, try again.")
            }
        } catch (err) {
            console.log(err);
        }
    }
}

main();