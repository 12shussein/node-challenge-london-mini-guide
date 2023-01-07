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

app.get('/:city/pharmacies', (req, res) => {
    const city = req.params.city;
    if (combinedData[city]) {
      res.json(combinedData[city].pharmacies);
    }
  });
  
  app.get('/:city/colleges', (req, res) => {
    const city = req.params.city;
    if (combinedData[city]) {
    res.json(combinedData[city].colleges);
    }
  });
  
  app.get('/:city/doctors', (req, res) => {
    const city = req.params.city;
    if (combinedData[city]) {
      res.json(combinedData[city].doctors);
    } 
  });
  
  app.get('/:city/hospitals', (req, res) => {
    const city = req.params.city;
    if (combinedData[city]) {
    res.json(combinedData[city].hospitals);
    }
  });
  


const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`listening on port : ${port}`);
});
