import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'
import { CdkStepperModule } from '@angular/cdk/stepper'
import { ReactiveFormsModule, }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CustomStepperComponent } from './herobaner/stepper.component'
import { PreferenceComponent } from './preferences/preferences.component'
import { CategoriesComponent } from './trending/categories.component'
import { PagesComponent } from './trending/pages.component'
import { FurnExampleComponent } from './trending/component/example.component'

@NgModule({
  declarations: [
    AppComponent,
    CustomStepperComponent,
    PreferenceComponent,
    CategoriesComponent,
    PagesComponent,
    FurnExampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    CdkStepperModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
