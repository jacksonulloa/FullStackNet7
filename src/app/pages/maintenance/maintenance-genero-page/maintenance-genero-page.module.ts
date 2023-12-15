import { NgModule } from '@angular/core';

import { DatePipe, NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedFormCompleteModule } from '../../../commons/shared/shared-form-complete.module';
import { CrudGeneroComponent } from './crud-genero/crud-genero.component';
import { GeneroTableComponent } from './genero-table/genero-table.component';

@NgModule({
	declarations: [CrudGeneroComponent,GeneroTableComponent],
	imports: [
		MatTableModule,
		MatMenuModule,
		MatPaginatorModule,
		SharedFormCompleteModule,
		NgIf,
		NgFor,
    DatePipe
	],
  providers:[DatePipe],
	exports: [CrudGeneroComponent, GeneroTableComponent, MatTabsModule, MatIconModule]
})
export class MaintenanceGeneroModule {}
