const axios = require('axios');

let newArray = [];
let cities = [];

const add = (req, res, next) => {
        if(cities.includes(req.body.city)){
            res.status(200).json(newArray)
        } else {
            newArray.push(req.body);
            cities.push(req.body.city)
        }
          res.status(200).json(newArray)
}

const del = (req, res, next) => {
    newArray.splice(req.query.idx, 1)
    return res.status(200).json(newArray)
}

const get = (req, res, next) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${req.body.city},${req.body.country}&appid=${req.body.APIkey}&units=imperial`)
    .then(res => {
        console.log(res.data)
    })
}

module.exports = {
    add,
    del,
    get
}