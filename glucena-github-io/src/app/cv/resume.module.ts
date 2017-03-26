/*
* @Author: Gabriel Lucena
* @Date:   2017-03-18 10:20:17
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-03-26 17:56:25
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Services
import { CvService } from './cv.service'

// Containers
import { ResumeComponent } from './containers/resume/resume.component';

// Components
import { ResumeResume } from './components/resume-resume/resume-resume.component';
import { ResumeTechSkills } from './components/resume-tech-skills/resume-tech-skills.component';
import { ResumeTimeline } from './components/resume-timeline/resume-timeline.component';


@NgModule({
    declarations: [
        // register container component
        ResumeComponent,
        ResumeResume,
        ResumeTechSkills,
        ResumeTimeline
    ],
    imports: [
        CommonModule,
        NgbModule
    ],
    providers: [
        CvService
    ],
    exports: [
        // exporting root module
        ResumeComponent
    ]
})
export class ResumeModule {}