const admin = require('firebase-admin')
// TODO: Need to make a credentials file under .gitignore to store firebase account

/* 
    Firebase steps: 
    1. Go to firebase.google.com, and click Go to Console
    2. Create a new project labled Friend-ly
    3. Click the settings button and go to Project settings. 
    4. Navigate to service accounts and click Generate New Private Key
    5. Copy the downloaded json file into a file labeled firebase_credentials.json
    6. Place firebase_credentials.json into this server folder. 
*/
const serviceAccount = require("./firebase_credentials.json")

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
module.exports = {admin};