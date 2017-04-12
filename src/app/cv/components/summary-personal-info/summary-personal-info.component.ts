/*
* @Author: Gabriel Lucena
* @Date:   2017-03-04 20:39:46
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-03-04 20:41:06
*/

import { Component, OnInit } from '@angular/core';

import { CvService } from '../../cv.service';


@Component( {
    selector: 'summary-personal-info',
    templateUrl: './summary-personal-info.component.html',
    styleUrls: ['./summary-personal-info.component.scss']
} )
export class SummaryPersonalInfo implements OnInit {

    cvData: any;
    
    constructor ( private cvService : CvService ) {};

    ngOnInit () {
        this.cvData = this.cvService.getCvData();
    }
}
