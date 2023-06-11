import { User } from "core/domain/entities/user";
import { UserRepository } from "core/domain/repositories/userRepository";

export class SystemUserRepository implements UserRepository {
    private static UserList(): Promise<User[]> {
        return Promise.resolve([
            { id: "a", age: 1, name: "teste1" },
            { id: "b", age: 2, name: "teste2" },
            { id: "c", age: 3, name: "teste3" },
        ]);
    }

    public async getUsers(): Promise<User[]> {
        return await SystemUserRepository.UserList();
    }
}
