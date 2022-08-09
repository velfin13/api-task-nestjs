import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('api/v1/task')
export class TaskController {
  @Post()
  method(@Req() req: Request) {
    return `method ${req.method}`;
  }

  @Get()
  methodGet(@Req() req: Request) {
    return `method ${req.method}`;
  }
}
