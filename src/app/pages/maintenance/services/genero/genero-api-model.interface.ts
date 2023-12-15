//#region  CREATE  / UPDATE EVENT
export interface IRequestCreateUpdateGenero {
  nombre: string;
  estado: number;
}

//#endregion

//#region GET LIST CONCERTS
export interface IResponseGenero {
  id: number;
  nombre: string;
  estado: number;
}

//#endregion
