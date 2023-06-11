import { SystemUserUseCase } from "core/application/useCases/user";
import { UserController } from "./userController";
import { SystemUserRepository } from "adapter/driven/infra/repositories/systemUserRepository";

const systemUserRepository = new SystemUserRepository();
const systemUserUseCase = new SystemUserUseCase(systemUserRepository);

export const userController = new UserController(systemUserUseCase);
