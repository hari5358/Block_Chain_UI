import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {RouterModule, Routes} from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { EducationalDetailsComponent } from './components/educational-details/educational-details.component';
import { ProfessionalDetailsComponent } from './components/professional-details/professional-details.component';
import { AddSkillComponent } from './components/add-skill/add-skill.component';
import { ProfileListComponent } from './components/profile/profile-list/profile-list.component';
import { WalletComponent } from './components/wallet/wallet.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    BasicInfoComponent,
    EducationalDetailsComponent,
    ProfessionalDetailsComponent,
    AddSkillComponent,
    ProfileListComponent,
    WalletComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
