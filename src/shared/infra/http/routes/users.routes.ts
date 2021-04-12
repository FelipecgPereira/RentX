import {Router} from "express";

import multer from "multer";
import uploadConfig from "@config/upload";
import { CreateUserControler } from "@modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ProfileUserController } from "@modules/accounts/useCases/profileUseCase/ProfileUserController";

const usersRoutes = Router();
const uploadAvatar = multer(uploadConfig)

const createUserController = new CreateUserControler();
const updateUserAvatarController = new UpdateUserAvatarController();
const profileUserController = new ProfileUserController();

usersRoutes.post("/",ensureAuthenticated,ensureAdmin,createUserController.handle);

usersRoutes.patch("/avatar",ensureAuthenticated,uploadAvatar.single("avatar"),updateUserAvatarController.handle);
usersRoutes.get("/profile",ensureAuthenticated,profileUserController.handle);


export {usersRoutes}
