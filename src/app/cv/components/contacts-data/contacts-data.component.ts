/*
* @Author: Gabriel Lucena
* @Date:   2017-04-09 19:12:56
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-04-09 19:15:16
*/

'use strict';

import { Component, OnInit } from '@angular/core';

import { CvService } from '../../cv.service';


@Component( {
    selector: 'contacts-data',
    templateUrl: './contacts-data.component.html',
    styleUrls: [
        './contacts-data.component.scss'
    ]
} )
export class ContactsData implements OnInit {

    cvData: any;
    
    constructor ( private cvService : CvService ) {};

    ngOnInit () {
        this.cvData = this.cvService.getCvData();
    }
}