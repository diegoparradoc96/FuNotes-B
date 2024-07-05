import { Request, Response } from "express";

import User from "../models/user_model";
import { hashPassword } from "../utils";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Consulte con el administrador",
    });
  }
};

export const getUser = async (req: Request, res: Response) => {
  const { id_user } = req.params;

  try {
    const user = await User.findByPk(id_user);

    if (!user) {
      return res.status(404).json({
        msg: `No existe un usuario con el id_user ${id_user}`,
      });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Consulte con el administrador",
    });
  }
};

export const postUser = async (req: Request, res: Response) => {
  const { body } = req;

  const user = { ...body, password_user: hashPassword(body.password_user) };

  try {
    const user = await User.create({
      ...body,
      password_user: hashPassword(body.password_user),
    });

    res.json(true);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Consulte con el administrador",
    });
  }
};

export const putUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  res.json({
    msg: "putUser",
    body,
  });
};

export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    msg: "deleteUs",
    id,
  });
};

export const login = async (req: Request, res: Response) => {
  const { id_user, password_user } = req.body;

  try {
    const user: any = await User.findOne({
      where: {
        id_user: id_user,
      },
    });
    if (user) {
      if (user.password_user === hashPassword(password_user)) {
        res.json({
          msg: "Login exitoso",
          id_user: user.id_user,
        });
      } else {
        res.status(401).json({
          msg: "Credenciales inválidas",
        });
      }
    } else {
      res.status(404).json({
        msg: "Usuario no encontrado",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Error interno del servidor",
    });
  }
};
