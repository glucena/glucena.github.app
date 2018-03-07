/*
* @Author: Gabriel Lucena
* @Date:   2018-01-03 21:17:04
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2018-01-11 21:34:19
*/

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { CvService } from '../../cv.service';

declare var html2pdf: any;

@Component( {
    selector: 'detailed-cv',
    templateUrl: './detailed-cv.component.html',
    styleUrls: [
        './detailed-cv.component.scss',
        '../../../../assets/css/devicon.css',
        '../../../../assets/css/devicon-colors.css',
        '../../../../assets/css/vendor/flaticons/flaticon.min.css'
    ]
} )
export class DetailedCvComponent {

    @ViewChild('summary') el: ElementRef;
    
    cvData: any;
    downloading: boolean;

    constructor ( private cvService : CvService ) {};

    ngOnInit () {
        this.cvService.cvData.subscribe((data) => {
            this.cvData = data;
        });
    }

    printPDF () {
        this.downloading = true;
        
        html2pdf(this.el.nativeElement, {
            margin:       2,
            filename:     'myfile.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            enableLinks:  true,
            html2canvas:  { dpi: 192, letterRendering: false },
            jsPDF:        { unit: 'mm', format: 'a2', orientation: 'p' }
        });
    }
}
