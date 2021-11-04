import { Component } from '@angular/core';
import TasksService from '../services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  constructor(private tasksServices: TasksService) {}

  get tasks() {
    return this.tasksServices.tasks;
  }

  detele(id: number) {
    this.tasksServices.removeTask(id);
  }
}
