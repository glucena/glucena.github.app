/*
* @Author: Gabriel Lucena
* @Date:   2017-04-08 10:44:21
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-04-08 20:00:36
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
import { CvDownload } from './components/cv-download/cv-download.component';
import { CvSocial } from './components/cv-social/cv-social.component';


@NgModule({
    declarations: [
        // register container component
        FooterComponent,
        CvDownload,
        CvSocial
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