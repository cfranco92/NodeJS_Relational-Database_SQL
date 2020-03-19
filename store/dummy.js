const db = {
    'user': { id: 1, name: 'Cristian'}
};

function list(table) {
    return db[table];
}

function get(tabla, id) {
    let col = list(table);
    return col.filter(item => item.id === id) [0] || null;
}

function upSer(tabla, data) {
    db[collection].push(data);
}

function remove(tabla, id) {
    return true;
}

module.exports = {
    list,
    get,
    upSer,
    remove
};