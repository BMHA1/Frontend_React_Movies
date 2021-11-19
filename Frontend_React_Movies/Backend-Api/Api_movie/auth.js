const jwt = require('jsonwebtoken');

const checkToken = (req, res, next, requiredRole) => {
    let token = null;
    //sino introducimos en postman el Bearer no necesitamos lo de abajo habria que modificarla
    if (req.headers['authorization']) {
        let splitToken = req.headers['authorization'].split(' ');
        if (splitToken.length === 2) {
            token = splitToken[1];
            
        }
    }

    if (token) {
        try {
            let userToken = jwt.verify(token, process.env.PRIVATE_KEY);
            if (requiredRole == 'user' ||
                userToken.role == 'admin' ||
                (req.path.startsWith('/users') && req.params.id == userToken._id) // perfil del propio usuario autenticado
            ) {
                req.token = userToken;
                next();

            } else {
                res.json({
                    message: 'user not authorized que te peines 0'
                }, 403);
            }
        } catch (error) {
            res.json({
                message: 'user not authenticated que te peines 1'
            }, 401);
        }
    } else {
        res.json({
            message: 'user not authenticated'
        }, 401);
    }
}

const checkUser = (req, res, next) => {
    checkToken(req, res, next, 'user');
};

const checkAdminOrOwn = (req, res, next) => {
    checkToken(req, res, next, 'admin');
}

module.exports = {
    checkUser,
    checkAdminOrOwn
};