import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-listarticle',
  templateUrl: './listarticle.component.html',
  styleUrls: ['./listarticle.component.css']
})

  
export class ListarticleComponent implements OnInit {

	private article: any[];
	private idCatalog: number;

    displayedColumns: string[] = ['name', 'description', 'priceHt'];
    dataSource: MatTableDataSource<any>;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;


	constructor(
		private httpClient: HttpClient,
		private route: ActivatedRoute
    ) {}

    ngOnInit() {
		this.refreshList();
		this.idCatalog = Number(this.route.snapshot.paramMap.get("idCatalog"));		
    }
  
    applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
		this.dataSource.paginator.firstPage();
		}
    }
	
	refreshList()
	{
console.log('idCatalog='+this.idCatalog);
		this.httpClient.get<any[]>('http://localhost:8000/api/articles/'+this.idCatalog)
			.subscribe(
				(data) => {
					this.article=data;
					this.dataSource = new MatTableDataSource(this.article);
					this.dataSource.paginator = this.paginator;
					this.dataSource.sort = this.sort;
				});
	}
	
	deleteArticle(id)
	{
		console.log('id='+id);		
	}			

}

