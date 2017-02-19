/*
* @Author: Gabriel Lucena
* @Date:   2017-02-19 11:15:51
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-02-19 18:22:13
*/

import { Component, OnInit } from '@angular/core';

import { CvService } from '../../cv.service';


@Component( {
    selector: 'cv-name',
    templateUrl: './cv-name.component.html',
    styleUrls: ['./cv-name.component.scss']
} )
export class CvName implements OnInit {

    cvData: any;
    
    constructor ( private cvService : CvService ) {};

    ngOnInit () {
        this.cvData = this.cvService.getCvData();
    }
}
