const authRouter = require('express').Router();
authRouter.use((req,res,next) => {
  console.log('Auth route hit');
   const isUser = req.headers['authorization'];
    if (!isUser) {
        return res.status(401).json({ error: 'No Authorization header provided' });
    }
    const parts = isUser.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return res.status(401).json({ error: 'Invalid Authorization header format' });
    }
    const token = parts[1];
    if (token !== VALID_TOKEN) {
    return res.status(403).json({ error: 'Invalid token' });
  }
   req.user = { id: 'admin', role: 'admin' };
    console.log("user authenticated successfully");
    next();
});
const VALID_TOKEN = process.env.API_TOKEN || 'mysecrettoken';
function checkUser(req,res,next){
    const isUser = req.headers['authorization'];
    if (!isUser) {
        return res.status(401).json({ error: 'No Authorization header provided' });
    }
    const parts = isUser.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return res.status(401).json({ error: 'Invalid Authorization header format' });
    }
    const token = parts[1];
    if (token !== VALID_TOKEN) {
    return res.status(403).json({ error: 'Invalid token' });
  }
   req.user = { id: 'admin', role: 'admin' };
    console.log("user authenticated successfully");
    next();
}
authRouter.get('/profile', checkUser, (req, res) => {
    res.send('User Profile');
});
module.exports = authRouter;