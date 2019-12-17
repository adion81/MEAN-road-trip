const dangers = require('../../controllers/dangers');

module.exports = (app) => {
    app.get('/api/dangers',(req,res) => dangers.index(req,res))
    app.get('/api/dangers/:id', (req,res) => dangers.show(req,res))
    app.post('/api/dangers/create', (req,res) => dangers.create(req,res))
    app.put('/api/dangers/update/:id', (req,res) => dangers.update(req,res))
    app.delete('/api/dangers/destroy/:id', (req,res) => dangers.destroy(res,res))
}