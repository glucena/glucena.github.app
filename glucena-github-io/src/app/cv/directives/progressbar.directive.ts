/*
* @Author: Gabriel Lucena
* @Date:   2017-03-18 19:29:08
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-03-18 21:16:32
*/

import { Directive, ElementRef, Input, OnInit } from '@angular/core';

declare var ProgressBar: any;

@Directive({
    selector: '[data-progressbar]'
})
export class ProgressBarDirective implements OnInit {
    constructor(elem: ElementRef) {
        this.elem = elem.nativeElement;
    }

    elem: any;

    @Input('progressBar') barType: string;
    @Input('progressBarColor') color: string;
    @Input('progressBarTrailcolor') trailColor: string;
    @Input('progressBarTrailwidth') trailWidth: string;
    @Input('progressBarStrokewidth') strokeWidth: string;
    @Input('progressBarFrom') from: string;
    @Input('progressBarTo') to: string;
    @Input('progressBarValue') value: string;
    @Input('progressBarEasing') easing: string;
    @Input('progressBarDuration') duration: string;

    progressbarConfig( ) {
        return {
            value: (typeof this.value != "undefined") ? parseFloat(this.value) : 1,
            progressbar: (typeof this.barType != "undefined") ? this.barType : 'circle',
            color: (typeof this.color != "undefined") ? this.color : '#fff',
            strokeWidth: (typeof this.strokeWidth != "undefined") ? parseInt(this.strokeWidth) : 4,
            trailWidth: (typeof this.trailWidth != "undefined") ? parseFloat(this.trailWidth) : 1,
            trailColor: (typeof this.trailColor != "undefined") ? this.trailColor : '#f4f4f4',
            easing: (typeof this.easing != "undefined") ? this.easing : 'easeInOut',
            duration: (typeof this.duration != "undefined") ? parseInt(this.duration) : 1400,
            text: {
                autoStyleContainer: false
            },
            from: (typeof this.from != "undefined") ? this.from : { color: '#aaa', width: 1 },
            to: (typeof this.to != "undefined") ? this.to : { color: '#333', width: 4 },
            // Set default step function for all animate calls
            step: function(state, circle) {
                circle.path.setAttribute('stroke', state.color);
                circle.path.setAttribute('stroke-width', state.width);

                var value = Math.round(circle.value() * 100);
                if (value === 0) {
                    circle.setText('');
                } else {
                    circle.setText(value + '%');
                }
            }
        };
    };

    ngOnInit() {
        console.log("BT", this)
        let config = this.progressbarConfig();
        new ProgressBar.Circle(this.elem, config);
        /*
        switch (this.barType) {
            case 'line':
                this.elem = new ProgressBar.Line(this.elem, config);
                break;
            case 'circle':
                this.elem = new ProgressBar.Circle(this.elem, config);
                break;
            case 'semicircle':
                this.elem = new ProgressBar.SemiCircle(this.elem, config);
                break;
        }
        */
    }
}