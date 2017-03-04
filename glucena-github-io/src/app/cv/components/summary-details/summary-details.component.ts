/*
* @Author: Gabriel Lucena
* @Date:   2017-03-04 20:39:46
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-03-04 21:03:41
*/

import { Component, OnInit } from '@angular/core';

import { CvService } from '../../cv.service';


@Component( {
    selector: 'summary-details',
    templateUrl: './summary-details.component.html',
    styleUrls: ['./summary-details.component.scss']
} )
export class SummaryDetails implements OnInit {

    cvData: any;
    
    constructor ( private cvService : CvService ) {};

    ngOnInit () {
        this.cvData = this.cvService.getCvData();
    }
}
