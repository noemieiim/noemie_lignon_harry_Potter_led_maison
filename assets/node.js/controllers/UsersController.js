import prisma from "../config/prisma.js";
import { hashPassword } from "../utils/bcrypt.js";

class UsersController {
  async getMyProfile(req, res) {
    const user = req.user;
    return res.status(200).send(user);
  }

  async index(req, res) {
    const users = await prisma.user.findMany();
    return res.status(200).send(users);
  }

  async store(req, res) {
    try {
      const body = req.body;

      const existingUser = await prisma.user.findFirst({
        where: {
          email: body.email,
        },
      });

      if (existingUser == null) {
        const user = await prisma.user.create({
          data: {
            name: body.name,
            email: body.email,
            password: await hashPassword(body.password),
          },
        });
        return res.status(201).send(user);
      }

      return res.status(409).send("User already exists");
    } catch (err) {
      return res.status(500).send(err.message);
    }
  }

  show(req, res) {
    const id = req.params.id;
    //ici votre code pour recup lutilisateur

    const body = req.body;

    if (true) {
      return res.status(404).send("User not found");
    }

    return res.status(200).send("User found");
  }

  update(req, res) {
    const id = req.params.id;
    const body = req.body;

    return res.status(200).send("User updated");
  }

  destroy(req, res) {
    const id = req.params.id;

    return res.status(200).send("Users deleted");
  }
}

export default new UsersController();
