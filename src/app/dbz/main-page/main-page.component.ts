import { Component, Input } from '@angular/core';
import { Personaje } from '../../models/personaje.model';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

    constructor(
        private _dbzService: DbzService,
    ){}

    nuevo       !: Personaje;
    personajes  : Array<Personaje> = [];

    @Input() newPerson!: Personaje;

    changeName(e: any){
        console.log(e.target.value);
    }

    addPerson(pers: Personaje){
        // this._dbzService.personajes.push(this.nuevo);
        this._dbzService.addPerson(pers)
        this.personajes = this._dbzService.newPerson();
        console.log('♥ Padre reciviendo:....', this._dbzService.newPerson());

    }
}
