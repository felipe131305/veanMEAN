import animal from "../models/animal.js";

const registerAnimal = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.classification ||
    !req.body.race ||
    !req.body.weigth ||
    !req.body.heigth ||
    !req.body.health ||
    !req.body.age
  )
    return res.status(400), send({ message: "Incomplete data" });
  let animalSchema = new animal({
    name: req.body.name,
    classification: req.body.classification,
    race: req.body.race,
    weigth: req.body.weigth,
    heigth: req.body.heigth,
    health: req.body.health,
    dbStatus: true,
  });

  let result = await animalSchema.save();
  if (!result)
    return res.status(500).send({ message: "Failed to register animal" });
  res.status(200).send({ result });
};
export default { registerAnimal };
