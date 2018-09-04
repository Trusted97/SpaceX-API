// Launches Endpoints

const Router = require('koa-router');
const launches = require('../../controllers/v3/launches');

const v3 = new Router({
  prefix: '/v3/launches',
});

// Return all past and upcoming launches
v3.get('/', launches.all);

// Return most recent launch
v3.get('/latest', launches.latest);

// Return next launch
v3.get('/next', launches.next);

// Return upcoming launches
v3.get('/upcoming', launches.upcoming);

// Return all past launches
v3.get('/past', launches.past);

// Return specific launch by flight number
v3.get('/:flight_number', launches.specific);

// Update specific launch by flight number
v3.patch('/:flight_number', launches.updateOne);

module.exports = v3;
