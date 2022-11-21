import { DatosUserModel } from "./datos-user.model";

export class DatosSesionModel{
    info?: DatosUserModel;
    tk?: string;
    isLoggIn: boolean=false;
}