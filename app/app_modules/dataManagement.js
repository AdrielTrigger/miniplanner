const fs = window.require('fs');

function saveList (array) {
    let list = JSON.stringify(array);
    fs.writeFile('list.json', list, (err) => {
        if (err) throw err;
    });
}

function loadList () {
    let loadedData = fs.readFileSync('./list.json');
    console.log(loadedData.length);
    console.log(`${typeof(loadedData)}`);
    loadedData = JSON.parse(loadedData);
    console.log(loadedData.length);
    console.log(`after parsing: ${typeof(loadedData)}`);
    return loadedData;
}

export { saveList, loadList }