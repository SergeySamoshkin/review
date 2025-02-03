import {Controller, Get, Param, Patch} from '@nestjs/common';
import { TasksService } from './tasks.service';
import {UserService} from "../user/user.service";
import {AccessService} from "../access/access.service";
import {Task} from "./entities/task.entity";

@Controller('tasks')
export class TasksController {
  constructor(
      private readonly tasksService: TasksService,
      private readonly userService: UserService,
      private readonly accessService: AccessService) {}

  @Get('/')
  getTasks(@Param('id') id: number) {
      let user = this.userService.findOne(id);

      this.accessService.checkAccess(user);

      return this.tasksService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') id: number) {
      let user = this.userService.findOne(id);

      this.accessService.checkAccess(user);

      return this.tasksService.getTask(+id);
  }

  @Patch('/update/:id')
  async updateTask(id: number, data: any): Promise<Task> {
      return this.tasksService.update(id, data);
  }
}
