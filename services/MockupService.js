/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Mockup } = require('../models/Mockup');

/**
* Creates the data
*
* mockup Mockup data to be created
* returns mockup
* */
const createmockup = ({ mockup }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Mockup(mockup).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* mockupId String the Id parameter
* no response value expected for this operation
* */
const deletemockup = ({ mockupId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Mockup.findOneAndDelete({ _id:mockupId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllmockup = () => new Promise(
  async (resolve, reject) => {
    try {
      query = await Mockup.find().exec();
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* mockupId String the Id parameter
* returns mockup
* */
const getmockup = ({ mockupId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Mockup.findById(mockupId).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* mockupId String the Id parameter
* mockup Mockup data to be updated (optional)
* returns mockup
* */
const updatemockup = ({ mockupId, mockup }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Mockup.findOneAndUpdate({ _id:mockupId },mockup).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createmockup,
  deletemockup,
  getAllmockup,
  getmockup,
  updatemockup,
};
