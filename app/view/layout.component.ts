import {Component, OnInit} from '@angular/core';
declare var jQuery: any;
@Component({
    moduleId: module.id,
    selector: 'layout',
    templateUrl: '../template/layout.component.html'
})
export class LayoutComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
        jQuery('.button-collapse').sideNav({
                menuWidth: 300, // Default is 240
                edge: 'left', // Choose the horizontal origin
                closeOnClick: false // Closes side-nav on <a> clicks, useful for Angular/Meteor
            }
        );


    }


    botaoColapse() {

        // jQuery('body').on(evento, '.button-collapse', function () {

        // });
    }
}
