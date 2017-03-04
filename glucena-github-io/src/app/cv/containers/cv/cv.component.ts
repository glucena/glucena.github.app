/*
* @Author: Gabriel Lucena
* @Date:   2017-01-14 12:22:04
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-03-04 19:34:28
*/

import { Component, OnInit } from '@angular/core';

import { CvService } from '../../cv.service';

@Component( {
    selector: 'cv',
    templateUrl: './cv.component.html',
    styleUrls: [
        './cv.component.scss',
        '../../../../assets/css/vendor/flaticons/flaticon.min.css'
    ]
} )
export class CvComponent implements OnInit  {

    cvData: any;
    
    constructor ( private cvService : CvService ) {};

	ngOnInit () {
        this.cvData = this.cvService.getCvData();
	}
}