
exports.cars = (req, res) => {
    res.sendfile('public/data/cars.html')
}


exports.id = (req, res) => {
    const data = require('../public/data/cars.json')
    res.json(data);

}