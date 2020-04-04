import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

import { DefaultHeaderComponent } from './default-header/default-header.component';
import { DefaultFooterComponent } from './default-footer/default-footer.component';
import { BizCardComponent } from './biz-card/biz-card.component';
import { BioComponent } from './bio/bio.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillsItemComponent } from './skills-item/skills-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultHeaderComponent,
    DefaultFooterComponent,
    BizCardComponent,
    BioComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    SkillsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
