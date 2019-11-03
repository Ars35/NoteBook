import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contact } from '../models/Contact';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private contactData :Contact;
  private contactSource = new BehaviorSubject(this.contactData)
   currentContact = this.contactSource.asObservable();
   ////////////////////
   private creating:boolean;
   private creatingSource = new BehaviorSubject(this.creating);
   currentState = this.creatingSource.asObservable();  constructor() { }

public change(contact:Contact){
  this.contactSource.next(contact);
}


public changeCreating(creating:boolean){
  this.creatingSource.next(creating);

}


}
