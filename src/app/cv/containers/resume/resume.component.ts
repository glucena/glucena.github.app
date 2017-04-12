/*
* @Author: Gabriel Lucena
* @Date:   2017-03-18 10:10:29
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-03-18 10:17:57
*/

import { Component, OnInit } from '@angular/core';


import { CvService } from '../../cv.service';

@Component({
    selector: 'resume',
    templateUrl: './resume.component.html',
    styleUrls: [
        './resume.component.scss'
    ]
})
export class ResumeComponent implements OnInit  {
    cvData: any;
    
    constructor ( private cvService : CvService ) {};

    ngOnInit () {
        this.cvData = this.cvService.getCvData();
    }
}