const Universe = require("../models/universe.model");

const getUniverses = async (req, res) => {
  try {
    const universes = await Universe.find({});

    const modifiedUniverses = [];
    universes.forEach((universe) => {
      const totalDuration = universe.titles.reduce(
        (acc, title) => (acc += title.duration),
        0
      );
      modifiedUniverses.push({
        id: universe.id,
        title: universe.title,
        description: universe.description,
        imgUrl: universe.imgUrl,
        duration: totalDuration,
      });
    });

    res.status(200).json(modifiedUniverses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUniverse = async (req, res) => {
  try {
    const { id } = req.params;
    const universe = await Universe.findOne({ id: id });
    if (!universe)
      return res.status(404).json({ message: "Universe not found." });

    res.status(200).json(universe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getUniverses, getUniverse };
