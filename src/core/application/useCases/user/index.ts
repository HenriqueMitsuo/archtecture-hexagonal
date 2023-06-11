import { User } from "core/domain/entities/user";
import { UserUseCase } from "./types";
import { UserRepository } from "core/domain/repositories/userRepository";

export class SystemUserUseCase implements UserUseCase {
    private readonly userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public async getUsers(): Promise<User[]> {
        return this.userRepository.getUsers();
    }
}
