const cities = require('../controllers/cities');

module.exports = (app) => {
    app.get('/api/cities', (req,res) => cities.index(req,res))
    app.get('/api/cities/:id', (req,res) => cities.show(req,res) )
    app.post('/api/cities/create', (req,res) => cities.create(req,res))
    app.put('/api/cities/update/:id', (req,res) => cities.update(req,res))
    app.delete('/api/cities/destroy/:id', (req,res) => cities.destroy(req,res))
}