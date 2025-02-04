import { Injectable } from '@nestjs/common';
import {TaskRepository} from "./tasks.repository";
import {Task} from "./entities/task.entity";
import {txHost} from "../types/tx-host";

@Injectable()
export class TasksService {

  constructor(private readonly taskRepository: TaskRepository, private readonly tx: txHost) {}

  getTasks() {
      return this.tx
          .selectFrom('task')
          .selectAll('task')
          .execute();
  }

  getTask(id: number) {
      return this.tx
          .selectFrom('task')
          .selectAll('task')
          .where('id', '=', id)
          .execute();
  }

  async update(id: number, data: any): Promise<Task> {
      await this.taskRepository.update(id, data);
      return this.taskRepository.findOne(id);
  }
}
