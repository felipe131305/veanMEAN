import user from "../models/user.js";

const registerUser = async (req, res) => {
  if (!req.body.name || !req.body.tel || !req.body.age || !req.body.document)
    return res.status(400), send({ message: "Incoplete data" });
  let userSchema = new user({
    name: req.body.name,
    tel: req.body.tel,
    age: req.body.age,
    document: req.document,
    dbStatus: true,
  });

  let result = await userSchema.save();
  if (!result)
    return res.status(500).send({ message: "Failed to register user" });
  res.status(200).send({ result });
};
export default { registerUser };
