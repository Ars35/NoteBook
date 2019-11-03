import { Component, OnInit, Inject, Output } from '@angular/core';
import { LoginServiceService } from 'src/app/servises/login-service.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { ContentComponent } from '../content/content.component';
import { EventEmitter } from 'events';
import { HttpClient } from '@angular/common/http';
import { ConatctServiceService } from 'src/app/servises/conatct-service.service';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 
})
export class LoginComponent implements OnInit {
  public content:ContentComponent;
public email:string="";
public pass:string="";
  constructor(private loginService :LoginServiceService,private http:HttpClient
    ,private cs:ConatctServiceService,
    private router:Router
     )
    {}
public token:Token;
public tok:string;

ngOnInit(){
  //this.content = new ContentComponent(this.cs)
  
  }

  public login(){
    this.loginService.login(this.email,this.pass)
    .subscribe(token => {this.token = token,this.tok=token.token, localStorage.setItem('token',this.tok), this.router.navigate(['/content'])}),
    err => alert(err.message);
  }
  


}
