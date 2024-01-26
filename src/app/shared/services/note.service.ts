import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from '../models/note';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  apiUrl = "http://localhost:3000/notes";

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUrl);
  }

  getNote(noteId: number): Observable<Note> {
    return this.http.get<Note>(`${this.apiUrl}/${noteId}`);
  }

  editNote(note: Note): Observable<Note> {
    return this.http.put<Note>(`${this.apiUrl}/${note.id}`, note);
  }

  constructor(private http: HttpClient) { }
}
