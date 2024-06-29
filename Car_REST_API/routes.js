const express = require('express');
const router = express.Router();
const Car = require('./models/car');

/*
  Method: GET
  Endpoint: /cars
  Action: Fetch all cars
*/ 
router.get("/cars", async (req, res) => {
  try {
    const cars = await Car.find();
    res.send(cars)
  } catch(err) {
    return res.status(500).json({ message: err.message });
  }
})

/*
  Method: POST
  Endpoint: /cars
  Action: Add new car. New car is sent inside the request body.
*/
router.post("/cars", async (req, res) => {
  const car = new Car({
    brand: req.body.brand,
    model: req.body.model,
    color: req.body.color,
    type: req.body.type,
    body: req.body.body,
    traction: req.body.traction,
    doors: req.body.doors,
    power: req.body.power,
    year: req.body.year,
    fuel: req.body.year,
    plate: req.body.plate,
  });

  try {
    const newCar = await car.save();
    res.status(201).json({ newCar });
  } catch(err) {
    return res.status(500).json({ message: err.message });
  }
})

/*
  Method: DELETE
  Endpoint: /cars
  Action: Delete car by Plate number. Plate number is sent in the request body.
*/
router.delete("/cars", async (req, res) => {
  const response = await Car.deleteOne({plate: req.body.plate})
  if (response.deletedCount === 0) {
    return res.status(404).json({ message: "Car not found" });
  }
  return res.status(200).json({ message: "Car deleted" });            
})

/*
  Method: PUT
  Endpoint: /cars/{id}
  Action: Edit car by id. Id is sent in the route parameter and updated car inside the request body.
*/
router.put("/cars/:id", async (req, res) => {
  const response = await Car.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
  if (response === null) {
    return res.status(404).json({ message: "Car not found" });
  }
  return res.status(200).json({ message: "Car updated" });
})

module.exports = router;