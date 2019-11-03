import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private url: string = "http://localhost:8080/api/";
 
  

  constructor(private httpClient : HttpClient) { }

ngOnInit(){

}
 public login(email: string, password: string ):Observable<any>{
  return this.httpClient.post(this.url +"login?email="
   + email + "&password=" + password,
    { responseType: 'json' });
}
}
