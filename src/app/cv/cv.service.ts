/*
* @Author: Gabriel Lucena
* @Date:   2017-01-29 13:25:23
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-04-09 19:21:51
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
        altTitles: ['Software Engineer', 'JavaScript & python programmer'],
        address: 'Carretera de Trassierra, Córdoba, Spain',
        phone: '+34 123 456 789',
        email: 'gabriel.lucena.toro@gmail.com',
        skype: '@glucenat',
        website: 'https://glucena.github.io'
      },
      academic: {
        title: 'Technical Engineering in Computer Systems',
        from: 2001,
        to: 2005,
        where: 'Escuela Politécnica Superior, Universidad de Córdoba',
        courses: [

        ]
      },
      social: [
        {
          name: 'twitter',
          icon: 'fa-twitter',
          link: 'https://twitter.com/glucenat',
          linkDescription: '@glucenat'
        },
        {
          name: 'github',
          icon: 'fa-github',
          link: 'http://github.com/glucena/',
          linkDescription: 'github.com/glucena'
        },
        {
          name: 'linkedin',
          icon: 'fa-linkedin',
          link: 'http://www.linkedin.com/in/gabriel-lucena-toro',
          linkDescription: 'linkedin.com/in/gabriel-lucena-toro'
        }
      ],
      employment: [
        {
          from: '06/2016',
          to: 'now',
          where: 'SEPALO Software',
          jobPosition: 'Software engineer',
          description: 'Web apps developer implementing loyalty, engagement and gamification applications. The main technologies used in this period were the related to the MEAN stack.',
          image: 'building-baobab',
          projects: [
            {
              title: 'Client\'s mobile apps',
              description: "Implementation of four mobile applications for one of the spanish most important brands from the textile sector. The apps give to the customers the posibility to manage their loyalty account, find a shop or buy products online",
              resposabilities: [
                'Hybrib app devolopment',
                'Integration with the Client online shop',
                'Integration with the Client backends'
              ],
              tags: [
                {label: 'Typescript', icon: 'devicon-typescript-plain'},
                {label: 'Angular', icon: 'devicon-angularjs-plain'},
                {label: 'Ionic framework', icon: 'devicon-ionic-plain'},
                {label: 'Webpack', icon: 'devicon-webpack-plain'}
              ]
            },
            {
              title: 'The island',
              description: "Development of a Gamification Platform to manage the user onboarding process. Developed for a manufacturer of  printers and scanner based in the USA.",
              resposabilities: [
                'Frontent app devolopment',
                'Design & implementation of the app\'s scaffolding',
                'Integration with the Sepalo Gamification Core'
              ],
              tags: [
                {label: 'Javascript', icon: 'devicon-javascript-plain'},
                {label: 'AngularJs', icon: 'devicon-angularjs-plain'},
                {label: 'NodeJS', icon: 'devicon-nodejs-plain'},
                {label: 'Mocha', icon: 'devicon-mocha-plain'},
                {label: 'Jasmine', icon: 'devicon-jasmine-plain'}
                
              ]
            },
            {
              title: 'Loyalty Manager',
              description: "Development of a Gamification Platform to manage the customer's engagement for an important client from the spanish textile sector.",
              resposabilities: [
                'Frontent app devolopment',
                'REST API services implementation',
                'Technical support'
              ],
              tags: [
                {label: 'Javascript', icon: 'devicon-javascript-plain'},
                {label: 'AngularJs', icon: 'devicon-angularjs-plain'},
                {label: 'NodeJS', icon: 'devicon-nodejs-plain'},
                {label: 'Mocha', icon: 'devicon-mocha-plain'},
                {label: 'Jasmine', icon: 'devicon-jasmine-plain'}
              ]
            }
          ]
        }, {
          from: '08/2013',
          to: '06/2016',
          where: 'Wellness Smart Cities & Solutions',
          jobPosition: 'Software engineer',
          description: 'Software developer implementing custom applications and Smart Cities products.',
          image: 'building-once',
          projects: [
            {
              title: 'Public lightning platform',
              description: "Design and implementation of a public lightning management platfom. The platform implements many functionalities such as inventory management, assets geolocation, maintenance management, and lightning remote control and programation",
              resposabilities: [
                'Architecture co-design',
                'Backend & frontend implementation',
                'Third parties integration',
                'Technical support'
              ],
              tags: [
                {label: 'Django', icon: 'devicon-django-plain'},
                {label: 'AngularJs', icon: 'devicon-angularjs-plain'},
                {label: 'd3', icon: 'devicon-d3js-plain'},
                {label: 'MongoDB', icon: 'devicon-mongodb-plain'},
                {label: 'Redis', icon: 'devicon-redis-plain'}
              ]
            },
            {
              title: 'CTBox',
              description: "Design and implementation of an embeded software for a surveilance device developed for Endesa Ingeniería. The software passed all the applicable audits accoding to the EN 50131 normative that defines European Standards for Intruder Alarm Systems. The device is currently on service in more than 200 electrical transformation facilities.",
              resposabilities: [
                'Sofware design and implementation',
                'Integration with backend services',
                'Quality assurance'
              ],
              tags: [
                {label: 'python', icon: 'devicon-python-plain'},
                {label: 'unittest', icon: 'devicon-unittest-plain'}
              ]
            },
            {
              title: 'Quamtra (fromerly eGarbage)',
              description: "Co-Design and implementation of Quantra: an intelligent urban waste collection system allowing, by sensing and constant monitoring of the filling level of the containers, optimize routes and improve the costs associated with the collection.",
              resposabilities: [
                'Architecture co-design and implementation',
                'REST API implementation',
                'Sensors integration'
              ],
              tags: [
                {label: 'Javascript', icon: 'devicon-javascript-plain'},
                {label: 'MongoDB', icon: 'devicon-mongodb-plain'},
                {label: 'Express', icon: 'devicon-express-original'},
                {label: 'AngularJs', icon: 'devicon-angularjs-plain'},
                {label: 'NodeJS', icon: 'devicon-nodejs-plain'}
              ]
            }
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
            level: 95,
            title: 'Web development',
            description: 'More than 10 years of experiencie developing with many plaforms such as MEAN, Django, Flask, Bottlepy...'
          },
          {
            level: 90,
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
        organizative: [
          {
            title: '',
            icon: '',
            description: ''
          }
        ],
        technical: [
          {
            category: 'Web development',
            skills: [
              {
                title: 'javaScript',
                icon: 'devicon-javascript-plain',
                description: "This is the main prgraming language I'am using currently. I can code in several version of this language from ECMA Script 5 to ES6 and beyond" ,
                level: 95
              },
              {
                title: 'nodejs',
                icon: 'devicon-nodejs-plain',
                description: 'This is my reference framework currently, I ve made a lot of apps using that: Monolitics apps (sorry for that), microsevices, devop apps, packages...',
                level: 95
              },
              {
                title: 'angularjs',
                icon: 'devicon-angularjs-plain',
                description: 'Before Angular (2x and beyond) comes, AngularJS was the framework framework I had strongest knowledge. I mastered the framework, the best practices to build an app, the best ways to organice the code... but Angular arrived and everything change.'  ,
                level: 95
              },
              {
                title: 'Angular',
                icon: 'devicon-angularjs-plain',
                description: 'Angular is the choice (for the moment) when I have to build a front end app. I love Angular and the way you can make your apps, so pretty and organized. Currectly I\'m learning a lot of thing day by day and reaching a good level of knowledge. I not an expert yet, but It\'s a matter of time. '  ,
                level: 70
              },
              {
                title: 'typeScript',
                icon: 'devicon-typescript-plain',
                description: 'The last to come, It turns one of my favourites. I use it to develop the more recent angular apps',
                level: 70
              },
              {
                title: 'python',
                icon: 'devicon-python-plain',
                description: "One of my favourites, I have been coding with it more than ten years. Web development, scripting, embeded programs... I have coded almost everything",
                level: 65
              },
              {
                title: 'django',
                icon: 'devicon-django-plain',
                description: 'I love it. This is one of the easier framework I know to get a fullstack app working as soon as you can. Many apps have been developed by with it.',
                level: 50
              },              
              {
                title: 'bootstrap',
                icon: 'devicon-bootstrap-plain',
                description: 'Thanks to this framework for make easy the work to make the apps look great',
                level: 95
              },
              {
                title: 'html5',
                icon: 'devicon-html5-plain',
                description: '',
                level: 95
              },
              {
                title: 'css3',
                icon: 'devicon-css3-plain',
                description: '',
                level: 90
              }
            ]
          },
          {
            category: 'Testing',
            skills: [
              {
                title: 'mocha',
                icon: 'devicon-mocha-plain',
                description: 'This is my first choice to implement unit testing suites for the server side',
                level: 90
              },
              {
                title: 'karma',
                icon: '',
                description: 'Used as font end tests runner',
                level: 90
              },
              {
                title: 'jasmine',
                icon: 'devicon-jasmine-plain',
                description: 'Used in conjuntion with karma to make unit testing for the client side',
                level: 90
              },
              {
                title: 'protractor',
                icon: 'devicon-protractor-plain',
                description: 'Protractor is the main tool I use to implement the front side end to end tests',
                level: 60
              },
              {
                title: 'unittest',
                icon: '',
                description: 'The python library more used by me to implement unit tests',
                level: 90
              }
            ]
          },
          {
            category: 'Databases',
            skills: [
              {
                title: 'mongodb',
                icon: 'devicon-mongodb-plain',
                description: "The reference noSQL database. I'm a experienced developer in this technology. I've used it for many years" ,
                level: 90
              },
              {
                title: 'mySQL',
                icon: 'devicon-mysql-plain',
                description: 'Many relational schemas and databases are being defined by me using that',
                level: 90
              },
              {
                title: 'postgresql',
                icon: 'devicon-postgresql-plain',
                description: 'With mySQL is the main database I use to define relational schemas',
                level: 70
              },
              {
                title: 'redis',
                icon: 'devicon-redis-plain',
                description: "I usually to work with redis to implement cache systems and message queues",
                level: 70
              }
            ]
          },
          {
            category: 'Build & deployment',
            skills: [
              {
                title: 'grunt',
                icon: 'devicon-grunt-plain',
                description: '',
                level: 30
              },
              {
                title: 'gulp',
                icon: 'devicon-gulp-plain',
                description: '',
                level: 50
              },
              {
                title: 'webpack',
                icon: 'devicon-webpack-plain',
                description: '',
                level: 30
              },
              {
                title: 'docker',
                icon: 'devicon-docker-plain',
                description: '',
                level: 30
              },
            ]
          }
        ]
      }
    }
  }
}