/*
* @Author: Gabriel Lucena
* @Date:   2017-01-14 13:27:37
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-01-14 13:44:33
*/
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { CvComponent } from './containers/cv/cv.component';

@NgModule({
    declarations: [
        // register container component
        CvComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        
    ],
    exports: [
        // exporting root module
        CvComponent
    ]
})
export class CvModule {}