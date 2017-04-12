/*
* @Author: Gabriel Lucena
* @Date:   2017-03-25 18:36:22
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-04-09 19:09:16
*/

import { Component, OnInit } from '@angular/core';

import { CvService } from '../../cv.service';


@Component( {
    selector: 'contacts-heading',
    templateUrl: './contacts-heading.component.html',
    styleUrls: [
        './contacts-heading.component.scss'
    ]
} )
export class ContactsHeading implements OnInit {

    cvData: any;
    
    constructor ( private cvService : CvService ) {};

    ngOnInit () {
        this.cvData = this.cvService.getCvData();
    }
}