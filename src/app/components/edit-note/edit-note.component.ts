import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Note } from 'src/app/shared/models/note';
import { NoteService } from 'src/app/shared/services/note.service';


@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit  {

  noteId!: number | null;
  note!: Note;
  errorMsg!: string | null;

  editForm = this.fb.group({
    title: ["", [Validators.required]],
    content: ["", [Validators.required]],
    isImportant: [false]
  })

  ngOnInit(): void {
    this.route.paramMap.subscribe(c => {
      this.noteId = +c.get('id')!;

      if (this.noteId) {
        this.noteService.getNote(this.noteId).subscribe(data => {
          this.note = data;
    
          this.editForm.setValue({
            title: this.note.title || '', 
            content: this.note.content || '', 
            isImportant: this.note.isImportant || false
          });
        });
      }
    })
  }
  

  editNote(note: Note) {
    
      if (this.editForm.valid) {

        const value = this.editForm.value;


        this.noteService.editNote({
          id: note.id,
          title: value.title!,
          content: value.content!,
          isImportant: value.isImportant!,
          createDate: note.createDate!
        }).subscribe(() => {
          this.router.navigate(["/my-notes"]);
        })
      } else {
        this.errorMsg = "Please fill title & content fields";
      }
    }

  constructor(private route: ActivatedRoute, private noteService: NoteService, private fb: FormBuilder, private router: Router) {
  }

}
