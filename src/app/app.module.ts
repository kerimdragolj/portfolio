import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { ToastrModule } from 'ngx-toastr';
import { RecaptchaModule } from 'ng-recaptcha';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HiremeComponent } from './components/hireme/hireme.component';
import { LetshavefunComponent } from './components/letshavefun/letshavefun.component';
import { SkillsExperienceComponent } from './components/skills-experience/skills-experience.component';
import { FooterComponent } from './components/footer/footer.component';

import { EmailService } from './services/email.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpModule,
    ToastrModule.forRoot(),
    RecaptchaModule
  ],
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    AboutComponent,
    FeedbackComponent,
    HiremeComponent,
    LetshavefunComponent,
    SkillsExperienceComponent,
    FooterComponent
  ],
  providers: [
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
