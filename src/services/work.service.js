const { Work } = require('../database/models');

const getAllWorks = async () => { 
  return Work.findAll();
};

module.exports = {
  getAllWorks,
};
