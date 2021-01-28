import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditionaldetailsComponent } from './additionaldetails/additionaldetails.component';
import { EditCareerComponent } from './career-overview/edit-career/edit-career.component';
import { CertComponent } from './cert/cert.component';
import { CertificateComponent } from './certificate/certificate.component';
import { EdudetailsComponent } from './edudetails/edudetails.component';
import { EditComponent } from './personal-info/edit/edit.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';

const routes: Routes = [
  { path : 'Personal', component: PersonalInfoComponent},
  { path: 'EditPersonal', component: EditComponent},
  {path:'CertificateEdit',component: CertificateComponent},
  {path:'projectEdit',component: CertComponent},
  {path:'additionalEdit',component: AdditionaldetailsComponent},
  {path:'eduEdit',component: EdudetailsComponent},
  { path: 'EditCareer', component: EditCareerComponent},
 




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
