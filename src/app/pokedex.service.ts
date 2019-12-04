import { Injectable } from '@angular/core';

// import Http service
import { HttpClient } from "@angular/common/http";

// add toPromise() method
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  private baseSpriteUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  
  // inject http service in constructor
  constructor(private http: HttpClient) { }

  // pokemon API fetch method
  getPokemon(offset: number, limit: number) {
    return this.http.get(`${this.baseUrl}?offset=${offset}&limit=${limit}`)
    .toPromise()
    .then(response => response.json().results)
    .then(items => items.map((item, idx) => {

      const id: number = idx + offset + 1;

      return {
        name: item.name,
        sprite: `${this.baseSpriteUrl}${id}.png`,
        id
      };
    }));

    }
    
  }
