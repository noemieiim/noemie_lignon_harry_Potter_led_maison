// const express = require("express");
// const UsersController = require("../controllers/UsersController");

import express from "express";
import UsersController from "../controllers/UsersController.js";
import AuthentificationController from "../controllers/AuthentificationController.js";
import AuthentificationMiddleware from "../middlewares/AuthentificationMiddleware.js";
const router = express.Router();

router.get("/users", UsersController.index); //liste des utilisateurs
router.post("/users", UsersController.store);
router.get("/users/:id", UsersController.show);
router.put("/users/:id", UsersController.update);
router.delete("/users/:id", UsersController.destroy);
router.get(
  "/getMyProfile",
  AuthentificationMiddleware.authentification,
  UsersController.getMyProfile
);
router.post("/login", AuthentificationController.login);

export default router;
