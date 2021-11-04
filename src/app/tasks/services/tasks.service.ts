import { Injectable } from '@angular/core';
import { ITaskList } from '../interfaces/service.interfaces';

@Injectable()
export default class TasksService {
  tasks: ITaskList[] = [
    {
      id: 1,
      desc: 'sweeping',
      completed: false,
    },
    {
      id: 2,
      desc: 'mopping',
      completed: true,
    },
    {
      id: 3,
      desc: 'cooking',
      completed: false,
    },
  ];

  public removeTask(id: number) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }

  public completeTask(id: number) {
    const t = this.tasks.find((t) => t.id === id);
    if (t) t.completed = true;
  }
}
