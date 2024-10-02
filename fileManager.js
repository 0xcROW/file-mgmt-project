const fs = require('fs');
const path = require('path');

function createDirectory(dirPath) {
    return new Promise((resolve, reject) => {
        fs.mkdir(dirPath, {recursive: true}, (err) => {
            if(err) {
                reject(err)
            } else {
                resolve(`${dirPath} created successfully!`)
            }
        })
    })
}

function createFile(filePath, content = '') {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err) => {
            if(err) {
                reject(err)
            } else {
                resolve(`${filePath} created successfully!`)
            }
        })
    })
}

module.exports = {createDirectory, createFile}