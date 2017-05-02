  /**
   * Created by osama on 01/05/17.
   */

  import {Injectable} from "@angular/core"
  import {Http , Response , Headers, RequestOptions} from "@angular/http"
  import 'rxjs/Rx'
  import {Observable} from 'rxjs'

  @Injectable()//make sure inject services in this service
  export class QuoteService{
    constructor(private http:Http){

    }

    addQuote(content: string){
      const body = JSON.stringify({content:content});
      const headers = new Headers({'Content-Type' : 'application/json'});
      return this.http.post('http://localhost:8000/api/quote',body,{headers: headers});
    }

    getQuotes(): Observable<any>{
      return this.http.get('http://localhost:8000/api/quotes')
              .map(
                (response: Response) => {
                  return response.json().quotes;
                }
              );
    }

    updateQuote(id: number,newContent: string){
      const body = JSON.stringify({content: newContent});
      const headers = new Headers({'Content-Type' : 'application/json'});
      return this.http.put('http://localhost:8000/api/quote/'+id,body,{headers: headers})
        .map(
          (response: Response) => response.json().quote
        );
    }

    deleteQuote(id: number){
      return this.http.delete('http://localhost:8000/api/quote/'+id);
    }

  }
