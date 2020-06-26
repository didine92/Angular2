import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-listcatalog',
  templateUrl: './listcatalog.component.html',
  styleUrls: ['./listcatalog.component.css']
})
export class ListcatalogComponent implements OnInit {

	private catalog: any[];

    displayedColumns: string[] = ['name', 'decription'];
    dataSource: MatTableDataSource<any>;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;


	constructor(
		private httpClient: HttpClient
    ) {}

    ngOnInit() {
		this.refreshList();
    }
  
    applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
		this.dataSource.paginator.firstPage();
		}
    }
	
	refreshList()
	{
		this.httpClient.get<any[]>('http://localhost:8000/api/catalog')
			.subscribe(
				(data) => {
					this.catalog=data;
					this.dataSource = new MatTableDataSource(this.catalog);
					this.dataSource.paginator = this.paginator;
					this.dataSource.sort = this.sort;
				});
	}
	
	deleteCatalog(id)
	{
		console.log('id='+id);		
	}			

}

