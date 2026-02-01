import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { Document } from '../document.model';

@Component({
  selector: 'cms-document-list',
  standalone: false,
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css',
})
export class DocumentListComponent implements OnInit {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  documents: Document[] = [
    new Document('1', 'Caleb', 'This kid sucks', 'www.calebsucks.com', null),
    new Document('2', 'Nathan', 'This guy slaps', 'www.nathanslaps.com', null),
    new Document('3', 'Hunter', "Meh, he's fine I guess", 'www.hunterisfine.com', null),
    new Document('4', 'Isaac', "Ain't you Abraham's kid", 'www.abrahamskid.com', null),
    new Document('5', 'Sally', 'Only daughter', 'www.onlydaughter.com', null),
  ];

  ngOnInit(): void {}

  onSelected(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
