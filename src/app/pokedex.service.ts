import { Injectable } from '@angular/core';

// import Http service
import { HttpClientModule } from "@angular/common/http";

// add toPromise() method
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  
  // inject http service in constructor
  constructor(private http: HttpClientModule) { }

  // pokemon API fetch method
  getPokemon(offset: number, limit: number) {
    return this.http.get(`${this.baseUrl}?offset=${offset}&limit=${limit}`)

    }
    
  }
}
