/*
* @Author: Gabriel Lucena
* @Date:   2017-02-19 18:29:22
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-02-19 18:30:47
*/
import { Component, OnInit } from '@angular/core';

import { CvService } from '../../cv.service';


@Component( {
    selector: 'cv-position',
    templateUrl: './cv-position.component.html',
    styleUrls: ['./cv-position.component.scss']
} )
export class CvPosition implements OnInit {

    cvData: any;
    
    constructor ( private cvService : CvService ) {};

    ngOnInit () {
        this.cvData = this.cvService.getCvData();
    }
}
