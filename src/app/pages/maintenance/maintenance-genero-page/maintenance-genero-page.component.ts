import { Component } from '@angular/core';
import { MaintenanceGeneroModule } from './maintenance-genero-page.module';
import { GenerosService } from './events.service';

@Component({
  standalone: true,
  selector: 'app-maintenance-genero-page',
  templateUrl: './maintenance-genero-page.component.html',
  imports:[MaintenanceGeneroModule],
  providers: [GenerosService]

})
export default class MaintenanceGeneroPageComponent {
  indexTabSaveEvent = 0;
}
