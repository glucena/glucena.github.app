/*
* @Author: Gabriel Lucena
* @Date:   2017-03-25 19:40:35
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-03-25 20:37:11
*/

import { Component, OnInit } from '@angular/core';

import { CvService } from '../../cv.service';


@Component( {
    selector: 'resume-tech-skills',
    templateUrl: './resume-tech-skills.component.html',
    styleUrls: [
        './resume-tech-skills.component.scss',
        '../../../../assets/css/vendor/flaticons/flaticon.min.css',
        '../../../../assets/css/devicon.css',
        '../../../../assets/css/devicon-colors.css' 
    ]
} )
export class ResumeTechSkills implements OnInit {

    cvData: any;
    
    constructor ( private cvService : CvService ) {};

    ngOnInit () {
        this.cvData = this.cvService.getCvData();
    }
}