/*
* @Author: Gabriel Lucena
* @Date:   2017-03-26 17:52:46
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-04-02 17:23:50
*/

import { Component, OnInit } from '@angular/core';

import { CvService } from '../../cv.service';


@Component( {
    selector: 'resume-timeline',
    templateUrl: './resume-timeline.component.html',
    styleUrls: [
        './resume-timeline.component.scss',
        '../../../../assets/css/vendor/flaticons/flaticon.min.css'
    ]
} )
export class ResumeTimeline implements OnInit {

    cvData: any;
    
    constructor ( private cvService : CvService ) {};

    ngOnInit () {
        this.cvData = this.cvService.getCvData();
    }
}