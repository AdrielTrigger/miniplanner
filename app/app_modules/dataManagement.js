const fs = window.require('fs');

function saveList (array) {
    let list = JSON.stringify(array);
    fs.writeFile('list.json', list, (err) => {
        if (err) throw err;
    });
}

function loadList () {
    let loadedData = fs.readFileSync('./list.json');
    return JSON.parse(loadedData);
}

export { saveList, loadList }