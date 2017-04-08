/*
* @Author: Gabriel Lucena
* @Date:   2017-04-08 10:44:21
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-04-08 10:48:56
*/

'use strict';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgsRevealModule } from 'ng-scrollreveal';

// Services
import { CvService } from './cv.service'

// Containers
import { FooterComponent } from './containers/footer/footer.component';

// Components

@NgModule({
    declarations: [
        // register container component
        FooterComponent
    ],
    imports: [
        CommonModule,
        NgbModule,
        NgsRevealModule
    ],
    providers: [
        CvService
    ],
    exports: [
        // exporting root module
        FooterComponent
    ]
})
export class FooterModule {}