/*
* @Author: Gabriel Lucena
* @Date:   2017-03-05 13:33:21
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-03-05 13:34:06
*/

import { Component, OnInit } from '@angular/core';

import { CvService } from '../../cv.service';


@Component( {
    selector: 'summary-skills',
    templateUrl: './summary-skills.component.html',
    styleUrls: ['./summary-skills.component.scss']
} )
export class SummarySkills implements OnInit {

    cvData: any;
    
    constructor ( private cvService : CvService ) {};

    ngOnInit () {
        this.cvData = this.cvService.getCvData();
    }
}
