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
    }


    botaoColapse() {

        // jQuery('body').on(evento, '.button-collapse', function () {
            jQuery(".button-collapse").sideNav();
        // });
    }
}
