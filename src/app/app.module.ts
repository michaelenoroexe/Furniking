import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'
import { CdkStepperModule } from '@angular/cdk/stepper'
import { ReactiveFormsModule, FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CustomStepperComponent } from './herobaner/stepper.component';
import { PreferenceComponent } from './preferences/preferences.component';
import { CategoriesComponent } from './trending/categories.component';
import { PagesComponent } from './trending/pages.component';
import { FurnExampleComponent } from './trending/component/example.component';
import { OfferItemComponent } from './specialOffer/item/item.component';
import { ProductsCategoriesComponent } from './productsList/categories/categories.component';
import { ProductPagesComponent } from './productsList/pages/pages.component';
import { CustomerPagesComponent } from './customersOutput/pages/stepper.component';
import { CommentComponent } from './customersOutput/components/example.component';
import { ArticleComponent } from './article/article.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomStepperComponent,
    PreferenceComponent,
    CategoriesComponent,
    PagesComponent,
    FurnExampleComponent,
    OfferItemComponent,
    ProductsCategoriesComponent,
    ProductPagesComponent,
    CustomerPagesComponent,
    CommentComponent,
    ArticleComponent
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
    OverlayModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
