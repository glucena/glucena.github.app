/*
* @Author: Gabriel Lucena
* @Date:   2017-01-29 13:25:23
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-03-26 22:07:48
*/
import { Injectable } from '@angular/core';

@Injectable()
export class CvService {
  constructor(){};

  getCvData(): Object {
    return {
      summary: "+10 years experienced web developer. I like to make the things right and then make it faster. I've work in many sector such as I.T. consulting, R&D department, working on Smart Cities projects, surveilance projects and more recently making customer loyalty apps. I'm a cuting-edge technologies passionate, always looking for the next-best stack. In a continuous changing world you can't stop of learning, if you want to be up-to-date.",
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
          image: 'building-baobab',
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
          image: 'building-once',
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
          image: 'building-monorail01',
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
          image: 'building-da-vinci',
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
            category: 'Web development',
            skills: [
              {
                title: 'python',
                icon: 'devicon-python-plain',
                description: "One of my favourites, I have been coding with it more than ten years. Web development, scripting, embeded programs... I have coded almost everything"
              },
              {
                title: 'django',
                icon: 'devicon-django-plain',
                description: 'I love it. This is one of the easier framework I know to get a fullstack app working as soon as you can. Many apps have been developed by with it.' 
              },
              {
                title: 'javaScript',
                icon: 'devicon-javascript-plain',
                description: "This is the main prgraming language I'am using currently. I can code in several version of this language from ECMA Script 5 to ES6 and beyond" 
              },
              {
                title: 'nodejs',
                icon: 'devicon-nodejs-plain',
                description: 'This is my reference framework currently, I ve made a lot of apps using that: Monolitics apps (sorry for that), microsevices, devop apps, packages...' 
              },
              {
                title: 'angularjs',
                icon: 'devicon-angularjs-plain',
                description: 'Angular is the choice (for the moment) when I have to build a front end app. I can code angular apps in serveral versions from angular 1.4.x to angular 4 or "just angular" like many people say'  
              },
              {
                title: 'typeScript',
                icon: 'devicon-typescript-plain',
                description: 'The last to come, It turns one of my favourites. I use it to develop the more recent angular apps' 
              },
              {
                title: 'bootstrap',
                icon: 'devicon-bootstrap-plain',
                description: 'Thanks to this framework for make easy the work to make the apps look great' 
              },
              {
                title: 'html5',
                icon: 'devicon-html5-plain',
                description: '' 
              },
              {
                title: 'css3',
                icon: 'devicon-css3-plain',
                description: '' 
              }
            ]
          },
          {
            category: 'Testing',
            skills: [
            {
                title: 'unittest',
                icon: '',
                description: 'The python library more used by me to implement unit tests' 
              },
              {
                title: 'mocha',
                icon: 'devicon-mocha-plain',
                description: 'This is my first choice to implement unit testing suites for the server side' 
              },
              {
                title: 'karma',
                icon: '',
                description: 'Used as font end tests runner' 
              },
              {
                title: 'jasmine',
                icon: 'devicon-jasmine-plain',
                description: 'Used in conjuntion with karma to make unit testing for the client side' 
              },
              {
                title: 'protractor',
                icon: 'devicon-protractor-plain',
                description: 'Protractor is the main tool I use to implement the front side end to end tests' 
              }
            ]
          },
          {
            category: 'Databases',
            skills: [
              {
                title: 'mongodb',
                icon: 'devicon-mongodb-plain',
                description: "The reference noSQL database. I'm a experienced developer in this technology. I've used it for many years" 
              },
              {
                title: 'mySQL',
                icon: 'devicon-mysql-plain',
                description: 'Many relational schemas and databases are being defined by me using that' 
              },
              {
                title: 'postgresql',
                icon: 'devicon-postgresql-plain',
                description: 'With mySQL is the main database I use to define relational schemas' 
              },
              {
                title: 'redis',
                icon: 'devicon-redis-plain',
                description: "I usually to work with redis to implement cache systems and message queues"
              }
            ]
          },
          {
            category: 'Build & deployment',
            skills: [
              {
                title: 'grunt',
                icon: 'devicon-grunt-plain',
                description: '' 
              },
              {
                title: 'gulp',
                icon: 'devicon-gulp-plain',
                description: '' 
              },
              {
                title: 'webpack',
                icon: 'devicon-webpack-plain',
                description: '' 
              },
              {
                title: 'docker',
                icon: 'devicon-docker-plain',
                description: '' 
              },
            ]
          }
        ]
      }
    }
  }
}