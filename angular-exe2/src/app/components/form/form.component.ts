import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Email } from '../../models/email';
import { EmailService } from '../../service/email.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private emailService: EmailService) {
    
   }

  ngOnInit() {
  }

  sendEmail(form: NgForm) {
    this.emailService.postEmail(form.value)
    .subscribe(res =>{
      console.log(res);
    })
    //console.log(form.value);
  }
}
