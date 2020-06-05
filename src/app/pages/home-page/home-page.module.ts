import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { EndComponent } from 'src/app/components/end/end.component';
import { CreatePageComponent } from '../create-page/create-page.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ContentComponent } from 'src/app/components/content/content.component';
import { ContentoneComponent } from 'src/app/components/contentone/contentone.component';
import { ContenttwoComponent } from 'src/app/components/contenttwo/contenttwo.component';
import { ContentthreeComponent } from 'src/app/components/contentthree/contentthree.component';
import { DocumentPageComponent } from '../document-page/document-page.component';
import { DocumentTemplatePageComponent } from '../document-template-page/document-template-page.component';
import { DocumentDataPageComponent } from '../document-data-page/document-data-page.component';
import { DocumentGeneratePageComponent } from '../document-generate-page/document-generate-page.component';
import { ViewPageComponent } from '../view-page/view-page.component';


import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [HomePageComponent, NavComponent, ContentComponent, BannerComponent, ContentoneComponent, ViewPageComponent ,
    ContenttwoComponent,
    ContentthreeComponent,
 EndComponent , CreatePageComponent , DocumentPageComponent , DocumentTemplatePageComponent , DocumentDataPageComponent , DocumentGeneratePageComponent  ],
  imports: [
    CommonModule,
    CKEditorModule,
    FormsModule ,
    NgxDatatableModule 
  ]
})
export class HomePageModule { }
