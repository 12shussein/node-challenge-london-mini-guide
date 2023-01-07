const express = require("express");
const app = express();
app.use(express.json());
const harrow = require("./data/Harrow.json");
const heathrow = require("./data/Heathrow.json");
const stratford = require("./data/Stratford.json");
const cities = {}
const combinedData={"harrow": harrow,
"heathrow": heathrow, 
"stratford":stratford }


app.get('/', (req, res) => {
    res.json(combinedData.harrow);
});

app.get('/pharmacies', (req, res) => {
    res.json(stratford.pharmacies);
});

app.get('/doctors', (req, res) => {
    res.json(stratford.doctors);
});

app.get('/hospitals', (req, res) => {
    res.json(stratford.hospitals);
});
app.get('/colleges', (req, res) => {
    res.json(stratford.colleges);
});



const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`listening on port : ${port}`);
});
