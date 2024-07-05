import { Request, Response } from "express";

import Usuario from "../models/user_model";

export const getUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await Usuario.findAll();

    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Consulte con el administrador",
    });
  }
};

export const getUsuario = async (req: Request, res: Response) => {
  const { ID_USUARIO } = req.params;

  try {
    const usuario = await Usuario.findByPk(ID_USUARIO);

    if (!usuario) {
      return res.status(404).json({
        msg: `No existe un usuario con el ID_USUARIO ${ID_USUARIO}`,
      });
    }

    res.json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Consulte con el administrador",
    });
  }
};

export const postUsuario = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const usuario = await Usuario.create(body);

    res.json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Consulte con el administrador",
    });
  }
};

export const putUsuario = (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  res.json({
    msg: "putUsuarios",
    body,
  });
};

export const deleteUsuario = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    msg: "deleteUsuarios",
    id,
  });
};

export const login = (req: Request, res: Response) => {
  const { id, password } = req.params;

  res.json({
    msg: "login",
    id,
  });
};
