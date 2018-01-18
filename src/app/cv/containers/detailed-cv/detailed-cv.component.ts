/*
* @Author: Gabriel Lucena
* @Date:   2018-01-03 21:17:04
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2018-01-11 21:34:19
*/

import { Component, OnInit } from '@angular/core';

import * as jsPDF from "jspdf";
import * as html2canvas from 'html2canvas';

import { CvService } from '../../cv.service';

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
    cvData: any;
    
    constructor ( private cvService : CvService ) {};

    ngOnInit () {
        this.cvData = this.cvService.getCvData();
    }

    printPDF () {
        debugger
        let doc = new jsPDF();
 
        let element = <HTMLScriptElement>document.getElementsByTagName("detailed-cv")[0];
        html2canvas(element)
        .then((canvas: any) => {
            doc.addImage(canvas.toDataURL("image/jpeg"), "JPEG", 0, 0, doc.internal.pageSize.width, element.offsetHeight / 5 );
            doc.save(`Report-${Date.now()}.pdf`);
        })
    }
}
