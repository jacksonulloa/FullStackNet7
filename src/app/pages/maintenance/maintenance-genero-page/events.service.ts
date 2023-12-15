import { DatePipe } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {
  ConfirmBoxEvokeService,
  ToastEvokeService,
} from '@costlydeveloper/ngx-awesome-popup';
import { EMPTY, Observable, Subject, concatMap, map, of } from 'rxjs';
import { CRUD_METHOD, STATUS_CRUD } from '../../../commons/models/enums';
import { IResponse } from '../../../commons/services/api/api-models-base.interface';
import { GeneroApiService } from '../services/service-index';
import {
  IRequestCreateUpdateGenero,
  IResponseGenero,
} from '../services/genero/genero-api-model.interface';

@Injectable()
export class GenerosService {
  private readonly _formBuilder = inject(FormBuilder);
  private readonly _generoApiService = inject(GeneroApiService);
  private readonly _datePipe = inject(DatePipe);
  private readonly _confirmBoxEvokeService = inject(ConfirmBoxEvokeService);
  private readonly _toastEvokeService = inject(ToastEvokeService);

  private readonly dataChangeSource = new Subject<void>();
  dataChanged$: Observable<void> = this.dataChangeSource.asObservable();


  crudMethod = CRUD_METHOD.SAVE;

  eventsFormGroup = this._formBuilder.nonNullable.group({
    id: [0, Validators.required],
    nombre: ['', Validators.required],
    estado: [0, Validators.required],
  });



  deleteEvent(idEvent: number): Observable<boolean> {
    return this._confirmBoxEvokeService
      .warning(
        'Evento',
        '¿Esta seguro de eliminar el Evento?',
        'Si',
        'Cancelar'
      )
      .pipe(
        concatMap((responseQuestion) =>
          responseQuestion.success
            ? this._generoApiService.deleteGeneros(idEvent)
            : EMPTY
        ),
        concatMap((response) => {
          if (response.success) {
            this._toastEvokeService.success(
              'Exito',
              'El evento a sido eliminado'
            );
            return of(true);
          }
          return of(false);
        })
      );
  }

  updateForm(idEvent: number): Observable<IResponse<IResponseGenero>> {
    return this._generoApiService.getGeneros(idEvent).pipe(
      map((response) => {
        const eventResponse = response.data;
        this.idField.setValue(eventResponse.id);
        this.nombreField.setValue(eventResponse.nombre);
        this.estadoField.setValue(
          eventResponse.estado ? STATUS_CRUD.ACTIVO : STATUS_CRUD.INACTIVO
        );
        this.crudMethod = CRUD_METHOD.UPDATE;
        return response;
      })
    );
  }

  saveEvent(): void {
    console.log('mo formulario', this.eventsFormGroup);
    if (this.eventsFormGroup.valid) {
      this._confirmBoxEvokeService
        .warning(
          'Evento',
          '¿Esta seguro de guardar la información?',
          'Si',
          'Cancelar'
        )
        .pipe(
          concatMap((responseQuestion) =>
            responseQuestion.success ? this._getMethod() : EMPTY
          )
        )
        .subscribe(() => {
          this._toastEvokeService.success(
            'Exito',
            'La información ha sido guardada.'
          );
          this.dataChangeSource.next();
          this.eventsFormGroup.reset();
          this.crudMethod = CRUD_METHOD.SAVE;
        });
    }

  }

  private _getMethod(): Observable<IResponse<number>> {
    const idEvent = this.idField.value as number;
    const request = this._getRequest();
    return this.crudMethod === CRUD_METHOD.SAVE
      ? this._generoApiService.createGeneros(request)
      : this._generoApiService.updateGeneros(idEvent, request);

  }

  /**
   * En esta función vamos a retornar el evento que deseamos guardar o modificar; en el caso de las imagenes puede que al momento de seleccionar el evento para poder modificarlo solo modifiquen atributos de texto o número por lo tanto el valor de la imagen es solo una URL asi que no se debería de enviar, recuerden que el API necesita un base64 para crear una imagen.
   * @param method
   * @returns
   */
  private _getRequest(): IRequestCreateUpdateGenero {
    const request: IRequestCreateUpdateGenero = <IRequestCreateUpdateGenero>{
      nombre: this.nombreField.value,
      estado: this.estadoField.value,
    };
    return request;
  }

  //#region
  get idField(): FormControl<number | null> {
    return this.eventsFormGroup.controls.id;
  }

  get nombreField(): FormControl<string> {
    return this.eventsFormGroup.controls.nombre;
  }

  get estadoField(): FormControl<number> {
    return this.eventsFormGroup.controls.estado;
  }

  //#endregion
}
