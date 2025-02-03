import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import {UserService} from "../user/user.service";
import {AccessService} from "../access/access.service";

@Controller('tasks')
export class TasksController {
  constructor(
      private readonly tasksService: TasksService,
      private readonly userService: UserService,
      private readonly accessService: AccessService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get('/')
  findAll(@Param('id') id: number) {
      let user = this.userService.findOne(id);

      this.accessService.checkAccess(user);

      return this.tasksService.findAll();
  }

  @Get(':getId')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}
