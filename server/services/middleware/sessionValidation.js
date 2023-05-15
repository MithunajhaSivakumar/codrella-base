import jwt from 'jsonwebtoken'

const auth = function(req, res, next) 
{
    const token = req.headers.authorization.split(" ")[1];

    if(!token)
        return res.status(401).send('NO TOKEN PROVIDED');
    try {
        const decoded = jwt.verify(token, process.env.PRIVATEKEY);
        req.userId = decoded?.id;
        next();
    } catch (error) {
        res.status(400).send('Invalid token')
    }
}

export default auth;