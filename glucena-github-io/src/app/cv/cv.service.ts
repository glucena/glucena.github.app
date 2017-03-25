/*
* @Author: Gabriel Lucena
* @Date:   2017-01-29 13:25:23
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-03-25 20:45:40
*/
import { Injectable } from '@angular/core';

@Injectable()
export class CvService {
  constructor(){};

  getCvData(): Object {
    return {
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id metus purus. Ut vulputate, est vel tincidunt mattis, orci neque iaculis lectus, et interdum quam felis vel tortor. Fusce ultrices dui quis nunc dignissim faucibus. Ut ac odio quis nibh viverra fringilla ac id nisi. Suspendisse tincidunt augue quis ligula cursus, non efficitur ligula faucibus. Mauris id neque maximus, tincidunt metus et, sodales nulla.',
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
          description: 'Web apps developer implementing project using the MEAN stack',
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
        }, {
          from: '08/2013',
          to: '06/2016',
          where: 'Wellness Smart Cities & Solutions',
          jobPosition: 'Software engineer',
          description: 'Software developer implementing custom applications and Smart Cities products.',
          projects: [
          ],
          tags: [
            'Javascript',
            'AngularJS',
            'NodeJS',
            'Django',
            'Python'
          ]
        }, {
          from: '04/2011',
          to: '08/2013',
          where: 'Wellness Telecom',
          jobPosition: 'Software engineer',
          description: 'Software engineer in R&D department. Design and implementation of custom Web applications',
          projects: [
          ],
          tags: [
            'Django',
            'Python'
          ]
        }, {
          from: '06/2006',
          to: '04/2011',
          where: 'everis',
          jobPosition: 'Applications Analyst',
          description: 'Analyst, planning, design and implementation of Web custom applications.',
          projects: [
          ],
          tags: [
            'Python',
            'Zope/Plone',
            'Liferay'
          ]
        }
      ],
      skills: {
        summary: 'JavaScript & python developer. MEAN stack expert',
        professional: [
          {
            level: 90,
            title: 'Web development',
            description: 'More than 10 years of experiencie developing with many plaforms such as MEAN, Django, Flask, Bottlepy...'
          },
          {
            level: 95,
            title: 'Fullstack',
            description: 'No matter where a solution is needed. I can handle it'
          },
          {
            level: 70,
            title: 'DevOps',
            description: 'Continuous integration oriented development. Expertise implementing automated building & deployment processes'
          }
        ],
        personal: [
          {
            icon: 'flaticon-tool-1',
            title: 'Smart',
            description: 'Always looking for the best and siplest solution. Think once, do many.'
          },
          {
            icon: 'flaticon-circle-1',
            title: 'Autodidact',
            description: 'Cutting-edge technologies follower & best-practices/standars enthusiast'
          },
          {
            icon: 'flaticon-clocks18',
            title: 'Responsible',
            description: 'A deadline is a compromise'
          }
        ],
        technical: [
          {
            title: 'python',
            icon: 'devicon-python-plain',
            description: '' 
          },
          {
            title: 'nodejs',
            icon: 'devicon-nodejs-plain',
            description: '' 
          }

        ]
      }
    }
  }
}