import { Component } from '@angular/core';
import { Note } from 'src/app/shared/models/note';
import { NoteService } from 'src/app/shared/services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent {

  notes: Note[] = [];

  constructor(private noteService: NoteService) {
    this.noteService.getNotes().subscribe(data => {
      this.notes = data;
    })
  }
}
