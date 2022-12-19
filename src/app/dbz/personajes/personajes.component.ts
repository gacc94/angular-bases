import { Component, Input } from '@angular/core';
import { Personaje } from '../../models/personaje.model';

@Component({
    selector: 'app-personajes',
    templateUrl: './personajes.component.html',
    styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent {
    // personaje: Array<Personaje> = [
    //     {
    //         nombre: 'Goku',
    //         poder: 90000,
    //     },
    //     {
    //         nombre: 'Vegeta',
    //         poder: 150000,
    //     },
    // ];

    @Input() data  :Array<Personaje> = [];


}
