/**
 * The MockupController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/MockupService');
const createmockup = async (request, response) => {
  await Controller.handleRequest(request, response, service.createmockup);
};

const deletemockup = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletemockup);
};

const getAllmockup = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllmockup);
};

const getmockup = async (request, response) => {
  await Controller.handleRequest(request, response, service.getmockup);
};

const updatemockup = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatemockup);
};


module.exports = {
  createmockup,
  deletemockup,
  getAllmockup,
  getmockup,
  updatemockup,
};
