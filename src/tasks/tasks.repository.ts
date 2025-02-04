import {Injectable} from "@nestjs/common";
import {Task} from "./entities/task.entity";
import {txHost} from "../types/tx-host";

@Injectable()
export class TaskRepository {
    protected readonly table = 'tasks';

    constructor(private readonly tx: txHost) {
    }

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

    async update(id: number, data: any): Promise<Task> {
        return this.tx
            .updateTable('task')
            .set({...data})
            .where('id', '=', id)
            .returningAll()
            .execute();
    }
}
