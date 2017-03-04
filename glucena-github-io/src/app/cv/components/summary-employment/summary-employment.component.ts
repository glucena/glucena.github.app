/*
* @Author: Gabriel Lucena
* @Date:   2017-03-04 20:39:46
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-03-04 21:03:31
*/

import { Component, OnInit } from '@angular/core';

import { CvService } from '../../cv.service';


@Component( {
    selector: 'summary-employment',
    templateUrl: './summary-employment.component.html',
    styleUrls: ['./summary-employment.component.scss']
} )
export class SummaryEmployment implements OnInit {

    cvData: any;
    
    constructor ( private cvService : CvService ) {};

    ngOnInit () {
        this.cvData = this.cvService.getCvData();
    }
}
