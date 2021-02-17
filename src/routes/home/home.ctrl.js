const login = (req, res) => {
    res.render('home/login');
};

const home = (req, res) => {
    res.render('home/index');
};

module.exports = {
    login,  //login: login
    home,
};