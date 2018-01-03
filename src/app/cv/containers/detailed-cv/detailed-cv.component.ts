/*
* @Author: Gabriel Lucena
* @Date:   2018-01-03 21:17:04
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2018-01-03 21:25:59
*/

import { Component, OnInit } from '@angular/core';

import { CvService } from '../../cv.service';

@Component( {
    selector: 'detailed-cv',
    templateUrl: './detailed-cv.component.html',
    styleUrls: ['./detailed-cv.component.scss']
} )
export class DetailedCvComponent {
    cvData: any;
    
    constructor ( private cvService : CvService ) {};

    ngOnInit () {
        this.cvData = this.cvService.getCvData();
    }}