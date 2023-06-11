import { Router } from "express";
import { userController } from "../controllers";

export function getUserRouter() {
    const userRouter = Router();

    // https://stackoverflow.com/a/62735419
    // userRouter.get("/", async function (req, res) {
    //     return userController.get(req, res);
    // });
    // userRouter.get("/", userController.get.bind(userController));

    userRouter.get("/", async (req, res) => userController.get(req, res));

    return userRouter;
}
