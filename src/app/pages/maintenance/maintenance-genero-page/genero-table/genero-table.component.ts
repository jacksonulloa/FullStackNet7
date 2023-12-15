import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IResponseGenero } from '../../services/genero/genero-api-model.interface';
import { GeneroApiService } from '../../services/service-index';
import { GenerosService } from '../events.service';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-genero-table',
  templateUrl: './genero-table.component.html',
  styleUrls: ['./genero-table.component.scss'],
})
export class GeneroTableComponent implements OnInit, OnDestroy {

  @Output() clickUpdate = new EventEmitter();
	@ViewChild(MatPaginator) paginator!: MatPaginator;


	private readonly _generoApiService = inject(GeneroApiService);

	private readonly _eventsService = inject(GenerosService);

  displayedColumns: string[] = ['id', 'nombre', 'estado','opciones'];
  dataSource = new MatTableDataSource<IResponseGenero>();
  resultsLength = 0;


  private dataChangeSubscription?: Subscription;



  ngOnInit(): void {
    this._loadGeneros();
    this.dataChangeSubscription = this._eventsService.dataChanged$.subscribe(() => {
      console.log('Emitir Evento dataChangeSubscription');
			this._loadGeneros();
    });
  }

  ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}
  ngOnDestroy() {
    this.dataChangeSubscription?.unsubscribe();
  }


  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  private _loadGeneros(): void {
		this._generoApiService.getListGeneros().subscribe((response) => {
      console.log(response.data)
      this.dataSource.data = response.data;
      this.resultsLength = response.data.length;
		});
	}


	clickUpdateEvent(idEvent: number): void {
		this._eventsService.updateForm(idEvent).subscribe(() => this.clickUpdate.emit());
	}

	clickDelete(idEvent: number): void {
		this._eventsService.deleteEvent(idEvent).subscribe(() => {
			this._loadGeneros();
		});
	}


}
