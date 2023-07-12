const workService = require('../services/work.service.js');

const getAllWorks = async (req, res) => {
  const works = await workService.getAllWorks();
  return res.status(200).json(works);
};

module.exports = {
  getAllWorks,
};
