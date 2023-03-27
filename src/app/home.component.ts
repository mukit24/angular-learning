import {Component} from '@angular/core';
import { HomeService } from './home.service';

@Component({
    selector: 'home',
    template: `
    <!--property binding in two ways: -->
    <h2 class="text-success">This is {{title}}</h2>
    <h2 [textContent]="title"></h2>

    <h4 [class.text-primary]="isBlue">List of Feature</h4>
    <ul>
    <li *ngFor="let feature of features">
    {{feature}}
    </li>
    </ul>
    <button (click)="onClick($event)">Click Me</button>
    <br>
    <input [(ngModel)]="email" (keyup.enter)="handleInput()"/>
    <input (keyup.enter)="handleInput1($event)" />
    <br>
    <label for="sum">write numbers by space:</label>
    <input type="text" id="sum" [(ngModel)]="sum">
    <p>Sum is {{ sum | summation}}</p>
    `
})
export class HomeComponent{
    title = 'Home Page';
    features;
    email="mukit@domain.com";
    isBlue = false;
    sum = '';

    onClick($event:any){
        console.log('Clicked', $event.target);
    }

    handleInput(){
        console.log(this.email);
    }
    handleInput1($event:any){
        console.log($event.target.value);
    }

    constructor(service: HomeService){
        this.features = service.getFeature();
    }
}