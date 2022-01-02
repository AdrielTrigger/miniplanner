const fs = window.require('fs');

function saveList (array) {
    let list = JSON.stringify(array);
    fs.writeFile('list.json', list, (err) => {
        if (err) throw err;
    });
}

async function loadList () {
    let loadedData; 
    fs.readFile('./list.json', (err, data) => {
        if (err) throw err;
        loadedData = JSON.parse(data);
    });
    return loadedData;
}

export { saveList, loadList }