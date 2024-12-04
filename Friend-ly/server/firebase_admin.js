const admin = require('firebase-admin')
// TODO: Need to make a credentials file under .gitignore to store firebase account
const serviceAccount = require('./firebase_credentials.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
module.exports = {admin};