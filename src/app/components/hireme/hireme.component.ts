import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { ToastrService } from 'ngx-toastr'
declare var sendEmail: any;

@Component({
  selector: 'hireme',
  templateUrl: './hireme.component.html',
  styleUrls: ['./hireme.component.scss']
})
export class HiremeComponent implements OnInit {
  captcha;
  submited = false;
  fullname;
  email;
  phone;
  message;

  constructor(
    private emailService: EmailService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  validateForm() {
    if (this.emailValidator(this.email) && this.validateText(this.fullname) && this.validateText(this.message)) {
      this.submited = true;
    } else {
      this.toastr.error('Error', 'Please check if you filled all required fields correctly!');
    }
  }

  send() {
    let message = `email=${this.email}&name=${this.fullname}&phone=${this.phone}&message=${this.message}`;
    this.emailService.sendEmail('http://formspree.io/kerim.dragolj@hotmail.com', message).subscribe(res => {
      this.toastr.success('SUCCESS', 'Email was successfuly sent');
      setTimeout(() => {
        this.reset();
        this.submited = false;
      }, 1000);
    }, err => {
      this.toastr.error('Error', 'Sending unsuccessful');
      this.submited = false;
      console.log(err);
    });
  }

  reset() {
    this.fullname = '';
    this.email = '';
    this.phone = '';
    this.message = '';
    this.captcha
  }

  emailValidator(email: string): boolean {
    var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!EMAIL_REGEXP.test(email)) {
      return false;
    }
    return true;
  }

  validateText(str) {
    let trimmed = str.trim();
    if (trimmed.length <= 4) {
      return false;
    }
    return true;
  }

  resolved(captchaResponse: string) {
    if (captchaResponse) {
      this.send();
    } 
  }

}
