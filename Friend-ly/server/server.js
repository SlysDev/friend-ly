const express = require('express')
const cors = require('cors')
const { admin } = require('./firebase/firebase_admin.js')

// Initializing express app
const app = express()
app.use(express.json());
app.use(cors());

/*
    Function takes in an access token from a firebase
    signup and does 2 things:
        1. Authenticates the token
        2. Checks whether the email ends in @uw.edu
    
    @Return: If both checks are met, return true.
            Otherwise false. 
*/
async function authUser(token) {
    try {
        const decodedToken = await admin.auth().verifyIdToken(token)
        let email = decodedToken['email']
        if (email.endsWith("@uw.edu")) {
            return decodedToken
        } else {
            return false
        }
    } catch (err) {
        throw(err)
    }
}
/*
    Handles an auth request for logging in. 
    @param: Takes in an access token, and authenticates it. 
    Status Codes: 
        200: Sucessful auth
        400: Auth failed
*/
app.post('/api/auth', async (req, res) => {
    const { token } = req.body;
    console.log(token)
    try {
        const result = await authUser(token);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Authentication failed' });
    }
});

app.listen(6262, () => console.log('Server running on port 6262'));



