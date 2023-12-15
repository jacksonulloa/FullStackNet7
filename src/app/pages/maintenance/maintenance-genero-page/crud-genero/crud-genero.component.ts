import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { GeneroApiService } from '../../services/service-index';
import { IResponseGenero } from '../../services/genero/genero-api-model.interface';
import { GenerosService } from '../events.service';
import { CRUD_METHOD } from 'src/app/commons/models/enums';

@Component({
  selector: 'app-crud-genero',
  templateUrl: './crud-genero.component.html',
  styleUrls: ['./crud-genero.component.scss'],
})
export class CrudGeneroComponent implements OnInit {
  eventsService = inject(GenerosService);

  ngOnInit(): void {}

  clickSave(): void {
    this.eventsService.saveEvent();
  }

  clickClear(): void {
    this.eventsService.crudMethod = CRUD_METHOD.SAVE;
    this.eventsService.eventsFormGroup.reset();
  }
}
