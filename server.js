const PORT = 3000

const express = require('express')
const tableify = require('tableify')

const app = express()

app.use(express.urlencoded())
app.use('/test', express.static('test'))


app.get('/', (req, res) => res.send(`<h4>Method: ${req.method}</h4>` + tableify(req.query)))
app.post('/', (req, res) => res.send(`<h4>Method: ${req.method}</h4>` + tableify(req.body)))

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))