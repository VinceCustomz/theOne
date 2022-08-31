const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 6;

module.exports = {
  signup,
  login,
};

async function signup(req, res) {
  const hashedPass = await bcrypt.hash(req.body.password, SALT_ROUNDS);
  console.log(hashedPass);
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: hashedPass,
  });

  const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });

  res.status(200).json(token);
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    // check password. if it's bad throw an error.
    if (!(await bcrypt.compare(req.body.password, user.password))) throw new Error();

    // if we got to this line, password is ok. give user a new token.
    const token = jwt.sign({ user }, process.env.SECRET,{ expiresIn: '24h' });
    res.status(200).json(token)
  } catch {
    res.status(400).json('Bad Credentials');
  }
}
