import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/Contact';

@Injectable({
  providedIn: 'root'
})
export class ConatctServiceService {
private url: string = "http://localhost:8080/api/";


  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

public constructor(private httpClient: HttpClient) { }

public getAllContacts(): Observable<Contact[]> {
 

return this.httpClient.get<Contact[]>
( this.url + localStorage.getItem('token')+'/contacts'
,{withCredentials:true, responseType: 'json'});
}

public getContact(id:number):Observable<Contact>{
return this.httpClient.get<Contact>
( this.url + "contact/" + id

, {withCredentials:true});

}


public addContact(coupon:Contact):Observable<any>{
return this.httpClient.post( this.url + "contact",
coupon,{withCredentials:true , responseType: 'text'});
}

public removeContact(id:number):Observable<any>{
alert(id);
return this.httpClient.post
(this.url + "contact/" + id

, {withCredentials:true, responseType: 'text'});

}

public updateContact(contact:Contact):Observable<Contact>{
return this.httpClient.put( this.url + "contact",
contact, { withCredentials : true,responseType:'json'} );
}

}
