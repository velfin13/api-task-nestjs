import { TaskDTO } from './dto/task.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('api/v1/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Post()
  create(@Body() taskDTO: TaskDTO) {
    return this.taskService.create(taskDTO);
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
