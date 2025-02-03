import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

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
}
