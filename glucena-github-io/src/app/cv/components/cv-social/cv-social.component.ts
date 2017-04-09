/*
* @Author: Gabriel Lucena
* @Date:   2017-04-08 19:59:09
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-04-08 19:59:54
*/

'use strict';

import { Component, OnInit } from '@angular/core';

import { CvService } from '../../cv.service';


@Component( {
    selector: 'cv-social',
    templateUrl: './cv-social.component.html',
    styleUrls: ['./cv-social.component.scss']
} )
export class CvSocial implements OnInit {

    cvData: any;
    
    constructor ( private cvService : CvService ) {};

    ngOnInit () {
        this.cvData = this.cvService.getCvData();
    }
}
