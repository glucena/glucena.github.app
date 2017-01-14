/*
* @Author: Gabriel Lucena
* @Date:   2017-01-14 12:22:04
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-01-14 13:41:46
*/

import { Component, OnInit } from '@angular/core';


@Component( {
    selector: 'cv',
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.scss']
} )
export class CvComponent implements OnInit  {

    personalData: any;
    
    constructor () {};

	ngOnInit () {
        this.personalData = {};
	}
}