const testRoutes =
require('./routes/myTestRoutes');

const express = require('express')
const app = express()
const port = 3000
// localhost:3000/mytest/*
app.use('/mytest', testRoutes);
// import all calculator routes (up the top)
// localhost:3000/calcultator/*
const calculatorRoutes =
require('./routes/calculatorRoutes');

// map the calculator routes to our app
app.use('/calculator', calculatorRoutes);

app.use("/", (req, res) => {
    res.send("Hello from base Route")
})

router.get('/add', (req, res) => {
    console.log(req.query)
    res.send(req.query)
})

app.listen(port, () => {
    console.log(`Example app listening
at http://localhost:${port}`)
})

const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
app.use(
'/api-docs',
swaggerUi.serve,
swaggerUi.setup(swaggerDocument)
);