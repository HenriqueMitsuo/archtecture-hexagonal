import { User } from "core/domain/entities/user";
import { UserRepository } from "core/domain/repositories/userRepository";
import { Cpf } from "core/domain/valueObjects/cpf";

export class SystemUserRepository implements UserRepository {
    private static UserList(): Promise<User[]> {
        return Promise.resolve([
            new User("a", "teste1", 1, new Cpf("111111")),
            new User("b", "teste2", 2, new Cpf("222222")),
            new User("c", "teste3", 3, new Cpf("333333")),
        ]);
    }

    public async getUsers(): Promise<User[]> {
        return SystemUserRepository.UserList();
    }
}
