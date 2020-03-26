const auth = require('../../../auth');
const TABLE = 'auth';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    async function login(userName, password) {
        const data = await store.query(TABLE, { userName: userName });
        if (data.password === password){
            // GENERATE TOKEN
            return auth.sign(data);
        } else{
            throw new Error('Invalid information');
        }
    }

    function upsert(data) {
        const authData = {
            id: data.id
        }

        if (data.userName) {
            authData.userName = data.userName;
        }

        if (data.password) {
            authData.password = data.password;
        }

        return store.upsert(TABLE, authData);
    }

    return {
        upsert,
        login
    }
};