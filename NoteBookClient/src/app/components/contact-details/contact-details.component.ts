import { Component, OnInit } from '@angular/core';
import { ConatctServiceService } from 'src/app/servises/conatct-service.service';
import { Contact } from 'src/app/models/Contact';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/servises/data-service.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  public contact:Contact;
  public dataContact:Contact;
  public creating= false;
  constructor(private service:ConatctServiceService, private router:Router,
    private data:DataServiceService
    ) { }

  ngOnInit() {
    this.contact=new Contact()
    this.data.currentContact.subscribe(contact => this.dataContact = contact)
    this.data.currentState.subscribe( state=> this.creating = state)
  }

public edit(){
  this.contact.id = 0;
  this.data.change(this.contact)

}

  public edit2(){
    this.contact.id = 0;
    alert(this.contact.email)
    this.service.addContact(this.contact)
    .subscribe( () => this.router.navigate(['/content']),
    err=> alert(err.message)
    )
  }



}
