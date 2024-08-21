import * as userModel from '../models/user.model.js';

export const getAllUsers = async (req, res) => {
  const [users] = await userModel.all();
  res.json(users);
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  const [user] = await userModel.find(id);
  res.json(user[0]);
};

export const createUser = async (req, res) => {
  const { name, umur } = req.body;
  const [user] = await userModel.create(name, umur);
  res.json(user);
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, umur } = req.body;

  const result = await userModel.edit(id, { name, umur });
  res.json(result);
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await userModel.destroy(id);
  res.json(user);
};
