import { TaskDTO } from './dto/task.dto';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { ITask } from './task.interface';

@Injectable()
export class TaskService {
  tasks: ITask[] = [];
  create(taskDto: TaskDTO): ITask {
    const task = {
      id: uuidv4() as string,
      ...taskDto,
    };
    this.tasks.push(task);
    return task;
  }
}
