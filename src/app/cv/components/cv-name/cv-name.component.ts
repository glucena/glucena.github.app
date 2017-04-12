/*
* @Author: Gabriel Lucena
* @Date:   2017-02-19 11:15:51
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-04-08 20:17:37
*/

import { Component, OnInit } from '@angular/core';

import { CvService } from '../../cv.service';


@Component( {
    selector: 'cv-name',
    templateUrl: './cv-name.component.html',
    styleUrls: [
        './cv-name.component.scss',
        '../../../../assets/css/vendor/flaticons/flaticon.min.css'
    ]
} )
export class CvName implements OnInit {

    cvData: any;
    
    constructor ( private cvService : CvService ) {};

    ngOnInit () {
        this.cvData = this.cvService.getCvData();
    }
}
