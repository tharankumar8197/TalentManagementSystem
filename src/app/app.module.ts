import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { CertComponent } from './cert/cert.component';
import { CertificateComponent } from './certificate/certificate.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { CareerOverviewComponent } from './career-overview/career-overview.component';
import { TalentOverviewComponent } from './talent-overview/talent-overview.component';
import { GoalsComponent } from './talent-overview/goals/goals.component';
import { ViewcertifiComponent } from './viewcertifi/viewcertifi.component';
import { ViewproectsComponent } from './viewproects/viewproects.component';
import { AdditionalviewComponent } from './additionalview/additionalview.component';
import { AdditionaldetailsComponent } from './additionaldetails/additionaldetails.component';
import { JobseekerhomeComponent } from './jobseekerhome/jobseekerhome.component';
import { EducationviewComponent } from './educationview/educationview.component';

@NgModule({
  declarations: [
    AppComponent,
    CertComponent,
    CertificateComponent,
    PersonalInfoComponent,
    CareerOverviewComponent,
    TalentOverviewComponent,
    GoalsComponent,
    ViewcertifiComponent,
    ViewproectsComponent,
    AdditionalviewComponent,
    AdditionaldetailsComponent,
    JobseekerhomeComponent,
    EducationviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
