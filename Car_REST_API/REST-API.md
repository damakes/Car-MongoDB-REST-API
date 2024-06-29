# REST API for the car database
The root endpoint of the REST API: http://localhost:3000/cars



|    Method and endpoint     | Action                                                                                               |
| :------------------------: | :--------------------------------------------------------------------------------------------------- |
| **GET** /cars	| Fetch all cars|
| **POST**	/cars	| Add new car. New car is sent inside the request body.
| **DELETE**	/cars	| Delete car by Plate number. Plate is sent in the request body.
| **PUT**	/cars/{id}	|Edit car by id. Id is sent in the route parameter and updated car inside the request body.