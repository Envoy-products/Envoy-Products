// check if the user is authenticated
const auth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = {
    auth
};
