import { Component, OnInit } from '@angular/core';

import { Contact } from '../../contact.model';

@Component({
  selector: 'cms-contact-detail',
  standalone: false,
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css',
})
export class ContactDetailComponent implements OnInit {
  contact = new Contact(null, null, null, null, null, null);

  constructor() {}

  ngOnInit(): void {}
}
