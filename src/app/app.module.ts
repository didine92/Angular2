import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input'; 
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListcatalogComponent } from './theme/listcatalog/listcatalog.component';
import { ListarticleComponent } from './theme/listarticle/listarticle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ListcatalogComponent,
    ListarticleComponent,

  ],
  imports: [
	AppRoutingModule,
		  RouterModule.forRoot([
	  { path: 'catalog', component: ListcatalogComponent },
	  { path: 'articles/:idCatalog', component: ListarticleComponent }
	]),
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	MatPaginatorModule,
	MatSortModule,
	MatTableModule,
	MatCardModule,
	MatInputModule,
	FormsModule,
	BrowserAnimationsModule,
	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
