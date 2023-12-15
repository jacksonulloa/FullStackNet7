import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { IResponse } from '../../../../commons/services/api/api-models-base.interface';
import {
  IRequestCreateUpdateGenero,
  IResponseGenero,
} from './genero-api-model.interface';

const URL_GENERO = environment.host + '/Genero';

@Injectable()
export class GeneroApiService {
  private _httpClient = inject(HttpClient);

  createGeneros(
    event: IRequestCreateUpdateGenero
  ): Observable<IResponse<number>> {
    console.log('Llego',event);
    return this._httpClient.post<IResponse<number>>(URL_GENERO+'/Agregar', event);
  }

  updateGeneros(
    idEvent: number,
    event: IRequestCreateUpdateGenero
  ): Observable<IResponse<number>> {
    console.log('update',event)
    const url = `${URL_GENERO}/Actualizar?Id=${idEvent}&Nombre=${event.nombre}&Estado=${event.estado}`;
    return this._httpClient.put<IResponse<number>>(url, event);
  }

  deleteGeneros(idEvent: number): Observable<IResponse<number>> {
    const url = `${URL_GENERO}/Eliminar/${idEvent}`;
    return this._httpClient.delete<IResponse<number>>(url);
  }

  getListGeneros(
    page?: number,
    rows?: number,
    filter?: string
  ): Observable<IResponse<IResponseGenero[]>> {
    let params = new HttpParams();
    if (filter) {
      params = params.set('filter', filter);
    }

    if (page) {
      params = params.set('page', page);
    }

    if (rows) {
      params = params.set('pageSize', rows);
    }

    return this._httpClient.get<IResponse<IResponseGenero[]>>(URL_GENERO + '/Listar', {
      params,
    });
  }

  getGeneros(id: number): Observable<IResponse<IResponseGenero>> {
    const url = `${URL_GENERO}/BuscarPorId?id=${id}`;
    return this._httpClient.get<IResponse<IResponseGenero>>(url);
  }
}
