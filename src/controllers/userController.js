const User = require('../models/userModel');
const Car = require('../models/carModel');

module.exports = {
  getUsers: async (req, res) => {
    const users = await User.find({});
    res.status(200).json(users);
  },
  addUser: async (req, res) => {
    const user = await new User(req.body).save();
    res.status(200).json(user);
  },

  getUserId: async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findById(id).populate('cars');

    if (user) {
      res.status(200).json(user);
    }
    res.status(404).json({ msg: `Usuario com ID ${id} não encontrado.` });
  },

  replaceUser: async (req, res) => {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);

    if (user) {
      res
        .status(200)
        .json({ msg: `Usuario com ID ${id} atualizado com sucesso.` });
    }
    res.status(404).json({ msg: `Usuario com ID ${id} não encontrado.` });
  },

  updateUser: async (req, res) => {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);

    if (user) {
      res
        .status(200)
        .json({ msg: `Usuario com ID ${id} atualizado com sucesso.` });
    }
    res.status(404).json({ msg: `Usuario com ID ${id} não encontrado.` });
  },

  delUser: async (req, res) => {
    const { id } = req.params;
    const user = await User.findByIdAndRemove(id);

    if (user) {
      res
        .status(200)
        .json({ msg: `Usuario com ID ${id} removido com sucesso.` });
    }
    res.status(404).json({ msg: `Usuario com ID ${id} não encontrado.` });
  },

  getUserCars: async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id).populate('cars');

    if (user) {
      res.status(200).json(user);
    }
    res.status(404).json({ msg: `Usuario com ID ${id} não encontrado.` });
  },

  newUserCars: async (req, res) => {
    const { id } = req.params;
    const newCar = new Car(req.body);
    const user = await User.findById(id);

    newCar.seller = user;
    await newCar.save();
    user.cars.push(newCar);
    await user.save();
    res.status(201).json(newCar);
  }
};
