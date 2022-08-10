import { TaskDTO } from './dto/task.dto';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('api/v1/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Post()
  create(@Body() taskDTO: TaskDTO) {
    return this.taskService.create(taskDTO);
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() taskDto: TaskDTO) {
    return this.taskService.update(id, taskDto);
  }
  /*  @Post(':id')
  method(@Param('id') id: string) {
    return { id };
  }

  @Get()
  methodGet(@Req() req: Request) {
    return `method ${req.method}`;
  }

  @Put()
  methodPut(@Req() req: Request) {
    return `method ${req.method}`;
  }

  @Patch()
  methodPath(@Req() req: Request) {
    return `method ${req.method}`;
  }

  @Delete()
  methodDelete(@Req() req: Request) {
    return `method ${req.method}`;
  } */
}
