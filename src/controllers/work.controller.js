const workService = require('../services/work.service.js');

const getAllWorks = async (req, res) => {
  const works = await workService.getAllWorks();
  return res.status(200).json(works);
};

const getWorkById = async (req, res) => {
  const { id } = req.params;
  const work = await workService.getWorkById(id);
  if (!work) return res.status(404).json({ message: 'Obra não encontrada' });
  return res.status(200).json(work);
};

module.exports = {
  getAllWorks,
  getWorkById,
};
