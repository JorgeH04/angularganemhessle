import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../models/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  selectedEmail: Email;
  email: Email[];

  URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { 
    this.selectedEmail = new Email();
  }

  postEmail(Email: Email){
    
    return this.http.post(this.URI, Email);

  }
}
