import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthorityInformation } from "../models/authority-info.model";

const AuthorizedPersonList: AuthorityInformation[] = [
    {name:"dhiva",idType:"GCC",id:123,mobile:"87238237",mail:"dhivalogu@gmail.com"},
    {name:"dhiva",idType:"GCC",id:123,mobile:"87238237",mail:"dhivalogu@gmail.com"},
    {name:"dhiva",idType:"GCC",id:123,mobile:"87238237",mail:"dhivalogu@gmail.com"}
  ];


@Injectable()
export class ILRService{

    constructor(private http:HttpClient){}

    getAuthorizedPersonsList()
    {
        return this.http.get('http://localhost:3000/authorised_persons');
       
    }
    addAuthorizedPersonsList(AuthorityData:AuthorityInformation)
    {
        let result:any;
        let data:any;
        console.log("Check");
        this.http.get('http://localhost:3000/person_id').subscribe(
            responseData=>{
                console.log(responseData);
                result=responseData;
                for(var item in result)
                {
                    if(result[item].id==AuthorityData.id)
                    {
                        this.http.post('http://localhost:3000/authorised_persons',result[item]).subscribe(
                            responseData=>{
                                console.log(responseData);
                            }

                        )
                        console.log("Success");
                    }
                }
            }
        );
    }

}