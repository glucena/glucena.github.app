/*
* @Author: Gabriel Lucena
* @Date:   2017-04-08 19:53:32
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-04-08 19:54:26
*/

'use strict';

import { Component, OnInit } from '@angular/core';

import { CvService } from '../../cv.service';


@Component( {
    selector: 'cv-download',
    templateUrl: './cv-download.component.html',
    styleUrls: ['./cv-download.component.scss']
} )
export class CvDownload implements OnInit {

    cvData: any;
    
    constructor ( private cvService : CvService ) {};

    ngOnInit () {
        this.cvData = this.cvService.getCvData();
    }
}
