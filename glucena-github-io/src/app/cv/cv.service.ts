/*
* @Author: Gabriel Lucena
* @Date:   2017-01-29 13:25:23
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-03-04 21:19:16
*/
import { Injectable } from '@angular/core';

@Injectable()
export class CvService {
  constructor(){};

  getCvData(): Object {
    return {
      personalData: {
        name: 'Gabriel',
        middleName: 'Lucena',
        lastName: 'Toro',
        fullname: 'Gabriel Lucena Toro',
        birthDate: '12/01/1983',
        title: 'FullStack Developer',
        address: 'Carretera de Trassierra 47, bloque 2, 2ºC',
        phone: '+34 665 032 160',
        email: 'gabriel.lucena.toro@gmail.com'
      },
      academic: {
        title: 'Technical Engineering in Computer Systems',
        from: 2001,
        to: 2005
      },
      social: [
        {
          name: 'twitter',
          icon: '',
          link: 'https://twitter.com/glucenat'
        },
        {
          name: 'github',
          icon: '',
          link: 'http://github.com/glucena/'
        },
        {
          name: 'linkedin',
          icon: '',
          link: ''
        }
      ],
      employment: [
        {
          from: '06/2016',
          to: 'now',
          where: 'SEPALO Software',
          jobPosition: 'Software engineer',
          description: '',
          projects: [
            {
              title: 'Loyalty Manager',
              description: "Development of a Gamification Platform to manage the customer's engagement for an important client from the spanish textile sector.",
              resposabilities: [
                'Frontent app devolopment',
                'REST API services implementation',
                'Technical support'
              ]
            }
          ],
          tags: [
            'Javascript',
            'AngularJS',
            'NodeJS'
          ]
        }
      ],
      skills: {
        summary: 'JavaScript & python developer. MEAN stack expert'

      }
    }
  }
}