import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ConatctServiceService } from 'src/app/servises/conatct-service.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/Contact';
import { DataServiceService } from 'src/app/servises/data-service.service';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']

})
export class ContentComponent implements OnInit {
 // @ViewChild('line')row:ElementRef<HTMLTableRowElement>;
  public contacts:Contact[];
  public contact:Contact;
  contactNew :Contact
  
  public  updating = false;
  public creating = false;
  public name:string="";
  public surName:string="";
  public phone:number;
  public email:string="";
  public rowId:number;


  constructor(private contactService :ConatctServiceService,
    private active: ActivatedRoute,
    private router:Router,
    private data:DataServiceService
  
 ) { }

    
  ngOnInit() {
   this.getAllContacts();
   this.contact = new Contact();
   this.contactNew =new Contact();
   this.data.currentContact.subscribe( contact => this.createContact(contact)),
   err=> alert("kek");
  
  };
 // functons for servers query
  public getAllContacts(){

    this.contactService.getAllContacts()
    .subscribe(contacts => this.contacts = contacts),
      error => alert(error.message);
    }

    public removeContact(id:number){
      this.contactService.removeContact(id)
      .subscribe(text=>{alert(text)}),
      err => alert(err.message);
    }
    public getContaById(id:number){
      this.contactService.getContact(id)
      .subscribe(contact => this. contact = contact),
      err=> alert(err.message);
    }

    private createContact(contact:Contact) {
      this.contactService.addContact(contact)
      .subscribe( text => {alert(text), this.getAllContacts(),this.router.navigate(['/content']) }),
      err=> alert(err.message);
    }

    private updateContact(contact:Contact) {
      this.contactService.updateContact(contact)
      .subscribe(text => {alert(text),this.getAllContacts(), this.router.navigate(['/content'])}),
      err=> alert(err.message);
    }
 // function from html
 public remove(id:number){
 // let id = this.active.snapshot.params.id;
    this.removeContact(id);
    this.ngOnInit();
 }
public rowClick(c:Contact){
  
 // alert(this.contact.email)
 this.contact= c;
 
  alert(this.contact.id);
  
   if( this.updating){
     this.updating = false;
   }
   else{
     this.updating = true;
   }
}

public openCreate(){
  
  if(this.creating){
    this.data.changeCreating(false)
    this.creating = false;
  }
  else{
    this.data.changeCreating(true);
    this.creating = true;
  }
}

public update(){
  this.updateContact(this.contact )
  this.updating = false;
}

public create(){
  this.contactNew.id = 0;
  this.contactNew.name = this.name; 
  this.contactNew.surName = this.surName;
  this.contactNew.phone = this.phone; 
  this.contactNew.email = this.email; 
  this.creating = false;
  this.createContact(this.contactNew)
  

}

}
