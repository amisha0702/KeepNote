import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})

export class NoteAddComponent  {

title:string |any ;
content:string |any;
  
@Output()noteAdded:EventEmitter<any> = new EventEmitter<any>();
addNote(){
  this.noteAdded.emit({
    title: this.title,
    content:this.content
  })
  this.title='';
  this.content='';
}
}
