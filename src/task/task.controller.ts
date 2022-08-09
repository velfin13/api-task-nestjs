import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('api/v1/task')
export class TaskController {
  @Post(':id')
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
  }
}
