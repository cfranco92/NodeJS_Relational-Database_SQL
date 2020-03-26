
const bcrypt = require('bcrypt');
const auth = require('../../../auth');
const TABLE = 'auth';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    async function login(userName, password) {
        const data = await store.query(TABLE, { userName: userName });

        return bcrypt.compare(password, data.password)
            .then(equal => {
                if (equal === true){
                    // GENERATE TOKEN
                    return auth.sign(data);
                } else{
                    throw new Error('Invalid information');
                }
            })
    }

    async function upsert(data) {
        const authData = {
            id: data.id
        }

        if (data.userName) {
            authData.userName = data.userName;
        }

        if (data.password) {
            authData.password = await bcrypt.hash(data.password, 5);
        }

        return store.upsert(TABLE, authData);
    }

    return {
        upsert,
        login
    }
};