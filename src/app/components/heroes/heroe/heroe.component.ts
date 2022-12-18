import { Component} from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    styleUrls: ['./heroe.component.scss'],
})
export class HeroeComponent {
    public name:string = 'Spiderman';
    public edad:number = 45;

    constructor(){}

    getName(): string {
        return `${this.name} -  ${this.edad}`;
    }

    toggleName(): void {
        this.name = 'Iroman';

    }
}