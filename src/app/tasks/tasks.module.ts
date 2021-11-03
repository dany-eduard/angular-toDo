import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [SubtitleComponent, TaskListComponent],
  imports: [CommonModule],
  exports: [SubtitleComponent, TaskListComponent],
})
export class TasksModule {}
