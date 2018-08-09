import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SignUpComponent} from '../components/sign-up/sign-up.component';
import {SignInComponent} from '../components/sign-in/sign-in.component';
import {BasicInfoComponent} from '../components/basic-info/basic-info.component';
import {EducationalDetailsComponent} from '../components/educational-details/educational-details.component';
import {ProfessionalDetailsComponent} from '../components/professional-details/professional-details.component';
import {AddSkillComponent} from '../components/add-skill/add-skill.component';
import {ProfileListComponent} from '../components/profile/profile-list/profile-list.component';
import {WalletComponent} from '../components/wallet/wallet.component';
import {OrganizationProfileComponent} from '../components/organization-profile/organization-profile.component';
import {VerificationRequestComponent} from '../components/verification-request/verification-request.component';
import {SkillHiringComponent} from '../components/skill-hiring/skill-hiring.component';
import {PaymentComponent} from '../components/payment/payment.component';
import {PaymentSuccessComponent} from '../components/payment-success/payment-success.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/sign-up', pathMatch: 'full' },
    {path: 'sign-up', component: SignUpComponent},
    {path: 'sign-in', component: SignInComponent},
    {path: 'basic-info', component: BasicInfoComponent},
    {path: 'educational-details', component: EducationalDetailsComponent},
    {path: 'professional-details', component: ProfessionalDetailsComponent},
    {path: 'add-skills', component: AddSkillComponent},
    {path: 'profile', component: ProfileListComponent},
    {path: 'wallet', component: WalletComponent},
    {path: 'organization-profile', component: OrganizationProfileComponent},
    {path: 'verification-request', component: VerificationRequestComponent},
    {path: 'skill-hiring', component: SkillHiringComponent},
    {path: 'payment', component: PaymentComponent},
    {path: 'payment-success', component: PaymentSuccessComponent},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
