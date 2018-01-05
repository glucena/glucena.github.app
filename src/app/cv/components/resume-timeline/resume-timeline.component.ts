/*
* @Author: Gabriel Lucena
* @Date:   2017-03-26 17:52:46
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-04-08 20:37:57
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 

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
    
    constructor (
        private cvService : CvService,
        private route: ActivatedRoute,
        private router: Router
    ) {};

    ngOnInit () {
        this.cvData = this.cvService.getCvData();
    }

    goToDetailedCv () {
        this.router.navigate(['detailed-cv']);
    }
}