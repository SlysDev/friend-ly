const { admin } = require('./firebase_admin.js')

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

module.exports = {authUser}
