const { Work } = require('../database/models');

const getAllWorks = async () => { 
  return Work.findAll();
};

const getWorkById = async (id) => {
  return Work.findOne({
    where: { id },
  });
};

module.exports = {
  getAllWorks,
  getWorkById,
};
