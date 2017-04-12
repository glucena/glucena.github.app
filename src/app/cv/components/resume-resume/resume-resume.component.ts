/*
* @Author: Gabriel Lucena
* @Date:   2017-03-25 18:36:22
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-03-25 18:38:57
*/

import { Component, OnInit } from '@angular/core';

import { CvService } from '../../cv.service';


@Component( {
    selector: 'resume-resume',
    templateUrl: './resume-resume.component.html',
    styleUrls: [
        './resume-resume.component.scss'
    ]
} )
export class ResumeResume implements OnInit {

    cvData: any;
    
    constructor ( private cvService : CvService ) {};

    ngOnInit () {
        this.cvData = this.cvService.getCvData();
    }
}