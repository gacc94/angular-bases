import { Injectable } from '@angular/core';
import { Personaje } from '../../models/personaje.model';

@Injectable()
export class DbzService {

    private _personajes: Array<Personaje> = [
        {
            nombre: 'Goku',
            poder: 90000,
        },
        {
            nombre: 'Vegeta',
            poder: 150000,
        },
    ];

    constructor(){
        console.log('Servicio Inicializado');
    }

    addPerson(pers: Personaje) {
        this._personajes.push(pers);
    }

    newPerson(): Array < Personaje > {
        return this._personajes;
    }
}