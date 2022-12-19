import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../models/personaje.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {

    nuevo: Personaje = {
        nombre: '',
        poder: 0,
    }

    @Output() newPerson: EventEmitter<Personaje> = new EventEmitter<Personaje>();

    agregar() {
        if (this.nuevo.nombre.trim().length === 0) return;

        this.newPerson.emit(this.nuevo);

        console.log('Hijo eviando:...',this.nuevo);

        this.nuevo = {
            nombre: '',
            poder: 0,
        };
    }
}
