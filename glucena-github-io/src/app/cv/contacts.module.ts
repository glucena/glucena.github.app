/*
* @Author: Gabriel Lucena
* @Date:   2017-04-09 18:38:57
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-04-09 18:47:47
*/

'use strict';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgsRevealModule } from 'ng-scrollreveal';

// Services
import { CvService } from './cv.service'

// Containers
import { ContactsComponent } from './containers/contacts/contacts.component';

// Components
//import { ResumeResume } from './components/resume-resume/resume-resume.component';
//import { ResumeTechSkills } from './components/resume-tech-skills/resume-tech-skills.component';
//import { ResumeTimeline } from './components/resume-timeline/resume-timeline.component';


@NgModule({
    declarations: [
        // register container component
        ContactsComponent,
        //ResumeResume,
        //ResumeTechSkills,
        //ResumeTimeline
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
        ContactsComponent
    ]
})
export class ContactsModule {}