import { Injectable } from "@angular/core";
import { AuthorityInformation } from "../models/authority-info.model";

const AuthorizedPersonList: AuthorityInformation[] = [
    {name:"dhiva",idType:"GCC",id:123,mobile:"87238237",mail:"dhivalogu@gmail.com"},
    {name:"dhiva",idType:"GCC",id:123,mobile:"87238237",mail:"dhivalogu@gmail.com"},
    {name:"dhiva",idType:"GCC",id:123,mobile:"87238237",mail:"dhivalogu@gmail.com"}
  ];


@Injectable()
export class ILRService{

    constructor(){}

    getAuthorizedPersonsList()
    {
        return AuthorizedPersonList;
    }
    addAuthorizedPersonsList(AuthorityData:AuthorityInformation)
    {
        AuthorizedPersonList.push(AuthorityData);
        console.log(AuthorizedPersonList);
    }

}