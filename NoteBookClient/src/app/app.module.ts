import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login/login.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ContentComponent,
    LoginComponent,
    ContactDetailsComponent,
  ],
  imports: [
  NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    
  ],
  providers: [HttpClient],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
