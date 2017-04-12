/*
* @Author: Gabriel Lucena
* @Date:   2017-03-18 09:02:56
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-04-09 18:37:40
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import app modules
import { SummaryComponent } from './cv/containers/summary/summary.component';
import { ResumeComponent } from './cv/containers/resume/resume.component';
import { ContactsComponent } from './cv/containers/contacts/contacts.component';

// Define routes
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/summary',
        pathMatch: 'full' 
    },
    {
        path: 'summary',
        component: SummaryComponent
    },
    {
        path: 'resume',
        component: ResumeComponent
    },
    {
        path: 'contacts',
        component: ContactsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}