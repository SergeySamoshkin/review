import { Controller, Get, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import {UserService} from "../user/user.service";
import {AccessService} from "../access/access.service";

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

  @Get(':getId')
  findOne(@Param('id') id: number) {
    let user = this.userService.findOne(id);

    this.accessService.checkAccess(user);

    return this.tasksService.getTask(+id);
  }
}
