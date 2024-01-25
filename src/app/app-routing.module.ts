import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteListComponent } from './components/note-list/note-list.component';
import { HomeComponent } from './components/home/home.component';
import { EditNoteComponent } from './components/edit-note/edit-note.component';

const routes: Routes = [
  { path: "home", component: HomeComponent},
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "my-notes", component: NoteListComponent },
  { path: "my-notes/:id/edit-note", component: EditNoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
