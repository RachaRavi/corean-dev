import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageModule } from './pages/home-page/home-page.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { DocumentPageComponent } from './pages/document-page/document-page.component';
import { DocumentTemplatePageComponent } from './pages/document-template-page/document-template-page.component';
import { DocumentDataPageComponent } from './pages/document-data-page/document-data-page.component';
import { DocumentGeneratePageComponent } from './pages/document-generate-page/document-generate-page.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'template/create', component: CreatePageComponent},
  {path: 'document', component: DocumentPageComponent},
  {path: 'document/template', component: DocumentTemplatePageComponent},
  {path: 'document/data', component: DocumentDataPageComponent},
  {path: 'document/generate', component: DocumentGeneratePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
