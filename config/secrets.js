module.exports = {
    //secret should be in an environment variable, shouldn't be in the source code
    jwtSecret: process.env.JWT_SECRET
}