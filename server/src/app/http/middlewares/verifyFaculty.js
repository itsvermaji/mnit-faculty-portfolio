// Middle ware verifyies faculty

module.exports = (req, res, next) => {

    console.log('middleware got kickedin!');
    
    next();
}