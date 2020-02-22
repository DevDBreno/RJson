<p align="center">
  <img src="https://imgur.com/utbfMGe.png"/>
</p>

<p align="center">RJson is an rest api built with
  <a href="http://nodejs.org" target="blank">Node.js</a>
	<br/>
  <b>RJson handles a json file using http methods</b>
</p>

### Developed in:

    Node.js    		(v13.8.0)
    Typescript 		(v3.7.5)
    Express.js 		(v4.17.1)

## Usage
[Postman Collection](https://www.getpostman.com/collections/9159a08abf90f0edca66)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

### Rules Schema:

```
		{
  		 		_id: UUID,

    	  	attendaceDay: 'YYYY/MM/DD' || 'daily' || ['monday', 'tuesday'],

    	   	intervals: [{ start: "HH:mm", end: "HH:mm" }, { start: "HH:mm", end: "HH:mm" }],

					weekdays: 'all' || ['friday', 'saturday'] || 'friday'
		}
```
