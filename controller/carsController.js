exports.home = (req, res) => {
    res.sendfile('public/data/cars.html');
}

exports.cars = (req, res) => {
    const data = require('../public/data/cars.json')
    res.json(data);

}

