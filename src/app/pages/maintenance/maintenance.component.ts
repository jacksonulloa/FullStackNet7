import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PATH_MAINTENANCES_PAGES } from 'src/app/commons/config/path-pages';
import { ICardMenu } from 'src/app/commons/models/components.interface';
import { GeneroApiService } from './services/service-index';

@Component({
  standalone: true,
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss'],
  imports:[RouterOutlet],
  providers:[GeneroApiService]
})
export class MaintenanceComponent {
	readonly menuAdmin: ICardMenu[] = [
		{
			title: 'VENTAS',
			nameImage: 'buys.png',
			path: PATH_MAINTENANCES_PAGES.genero.withSlash,
		},

	];
}
