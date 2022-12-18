import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',
    styleUrls: ['./contador.component.scss']
})
export class ContadorComponent {
    public number   : number   = 20;
    public base     : number   = 5;

    acumular(value: number): void {
        this.number = this.number + value * this.base;
    }
}