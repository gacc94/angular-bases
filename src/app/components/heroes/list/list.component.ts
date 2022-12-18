import { Component } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent {

    public  nameHeros: Array<any> = ['Spiderman', 'Thor', 'Iroman','Venom'];

    public deleteName: string = 'Aun no ha eliminado ningun heroe';

    delete(): void {
        this.deleteName =this.nameHeros.pop();
        console.log(this.deleteName);

    }
}
