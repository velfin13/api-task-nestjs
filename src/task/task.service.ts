import { TaskDTO } from './dto/task.dto';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { ITask } from './task.interface';

@Injectable()
export class TaskService {
  private tasks: ITask[] = [];
  create(taskDto: TaskDTO): ITask {
    const task = {
      id: uuidv4() as string,
      ...taskDto,
    };
    this.tasks.push(task);
    return task;
  }

  findAll(): ITask[] {
    return this.tasks;
  }

  findOne(id: string): ITask {
    return this.tasks.find((t) => t.id === id);
  }

  update(id: string, taskDto: TaskDTO): ITask {
    const newTask = { id, ...taskDto };
    this.tasks = this.tasks.map((t) => (t.id === id ? newTask : t));
    return newTask;
  }

  delete(id): string {
    this.tasks.filter((t) => t.id !== id);
    return 'task deletd';
  }
}
