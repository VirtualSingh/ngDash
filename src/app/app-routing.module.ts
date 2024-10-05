import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { TasksComponent } from './tasks/tasks.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  { path: 'bookmarks', component: BookmarksComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'notes', component: NotesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
