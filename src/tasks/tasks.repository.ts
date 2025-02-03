import {Injectable} from "@nestjs/common";
import {Task} from "./entities/task.entity";

@Injectable()
export class PresetRepository {
    protected readonly table = 'tasks';

    async find(id: number): Promise<Task> {
        return this.tx
            .selectFrom('task')
            .selectAll('task')
            .execute();
    }

    async findOne(id: number): Promise<Task> {
        return this.tx
            .selectFrom('task')
            .selectAll('task')
            .where('id', '=', id)
            .execute();
    }
}
