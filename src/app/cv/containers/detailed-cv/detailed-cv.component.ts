/*
* @Author: Gabriel Lucena
* @Date:   2018-01-03 21:17:04
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2018-01-11 21:34:19
*/

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import * as jsPDF from "jspdf";
import * as html2canvas from 'html2canvas';

import { CvService } from '../../cv.service';

window.html2canvas = html2canvas;

@Component( {
    selector: 'detailed-cv',
    templateUrl: './detailed-cv.component.html',
    styleUrls: [
        './detailed-cv.component.scss',
        '../../../../assets/css/devicon.css',
        '../../../../assets/css/devicon-colors.css'
    ]
} )
export class DetailedCvComponent {

    @ViewChild('summary') el: ElementRef;
    
    cvData: any;
    
    constructor ( private cvService : CvService ) {};

    ngOnInit () {
        this.cvData = this.cvService.getCvData();
    }

    printPDF () {
        let doc = new jsPDF('1', 'pt', 'a4');
 
        let options = {
            pagesplit: false
        };
         
        html2canvas(this.el.nativeElement)
        .then((canvas: any) => {
            doc.addImage(canvas.toDataURL("image/jpeg"), "JPEG", 0, 0, doc.internal.pageSize.width, this.el.nativeElement.offsetHeight / 5 );
            doc.save(`Report-${Date.now()}.pdf`);
        });
        
        
    }
}
