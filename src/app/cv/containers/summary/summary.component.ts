/*
* @Author: Gabriel Lucena
* @Date:   2017-01-14 12:22:04
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-03-04 20:32:10
*/

import { Component, OnInit } from '@angular/core';

import { CvService } from '../../cv.service';

@Component( {
    selector: 'summary',
    templateUrl: './summary.component.html',
    styleUrls: [
        './summary.component.scss',
        '../../../../assets/css/vendor/flaticons/flaticon.min.css'
    ]
} )
export class SummaryComponent implements OnInit  {

    cvData: any;
    
    constructor ( private cvService : CvService ) {};

	ngOnInit () {
        this.cvData = this.cvService.getCvData();
	}
}