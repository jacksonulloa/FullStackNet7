import { Routes } from '@angular/router';
import { PATH_MAINTENANCES_PAGES } from '../../commons/config/path-pages';
import { MaintenanceComponent } from './maintenance.component';

export default [
	{
		path: '',
		component: MaintenanceComponent,
		children: [
			{
				path: PATH_MAINTENANCES_PAGES.genero.onlyPath,
				title: 'Genero',
				loadComponent: () => import('./maintenance-genero-page/maintenance-genero-page.component')
			},
			{
				path: '',
				pathMatch: 'full',
				redirectTo: PATH_MAINTENANCES_PAGES.genero.onlyPath
			}
		]
	}
] as Routes;
