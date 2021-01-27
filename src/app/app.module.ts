import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { CareerOverviewComponent } from './career-overview/career-overview.component';
import { TalentOverviewComponent } from './talent-overview/talent-overview.component';
import { GoalsComponent } from './talent-overview/goals/goals.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    CareerOverviewComponent,
    TalentOverviewComponent,
    GoalsComponent
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
