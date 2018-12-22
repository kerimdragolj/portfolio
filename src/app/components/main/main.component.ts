import { Component, OnInit } from '@angular/core';
declare var next: any;
declare var writeBio: any;

@Component({
    selector: 'main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    text = `Hello visitor, welcome to my profile. Please look around, meet 
    me and my work. Hope you like it. Do not hesitate to leave your feedback, 
    especially on what should I improve.`;
    
    constructor(
    ) {

    }

    ngOnInit() { 
        this.loadScript('../assets/js/rain.js');
        setTimeout(() => {
            next();
        }, 500);
        setTimeout(() => {
            writeBio(this.text);
        }, 2500);
    }

    loadScript(url: string) {
        const body = <HTMLDivElement> document.body;
        const script = document.createElement('script');
        script.innerHTML = '';
        script.src = url;
        script.async = false;
        script.defer = true;
        body.appendChild(script);
    }
}
