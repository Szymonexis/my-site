export interface Technology {
	name: string;
	level: number;
}

export interface Job {
	name: string;
	startDate: Date;
	endDate: Date;
	position: string;
	technologies: Technology[];
	address?: string;
	description: string;
}

export const jobs: Job[] = [
	{
		name: 'Fujitsu Poland',
		startDate: new Date(2017, 5),
		endDate: new Date(2021, 3),
		position: 'Senior Service Desk Agent with English',
		technologies: [
			{ name: 'Service Now', level: 100 },
			{ name: 'Oracle', level: 100 },
			{ name: 'DBMS', level: 100 },
			{ name: 'ActiveDirectory', level: 100 }
		],
		address: 'Milionowa 4, 93-102 Łódź',
		description: 'Worked as a Service Desk Agent for UK based and Nordic users (1st line support).'
	},
	{
		name: 'mBank S.A.',
		startDate: new Date(2021, 7),
		endDate: new Date(2022, 2),
		position: 'Backend Developer - Intern',
		technologies: [
			{ name: 'Java 8+', level: 80 },
			{ name: 'Maven', level: 70 },
			{ name: 'SQL', level: 90 },
			{ name: 'Jira', level: 100 },
			{ name: 'Python', level: 95 },
			{ name: 'Jenkins', level: 60 },
			{ name: 'Felix', level: 40 },
			{ name: 'Splunk', level: 100 }
		],
		address: 'płk. Jana Kilińskiego 74, 90-119 Łódź',
		description:
			'Worked in a team that specialized in administration and developement of the main banking forms system for mBank.'
	},
	{
		name: 'Digimonkeys.com sp. z o.o.',
		startDate: new Date(2022, 2),
		endDate: new Date(0),
		position: 'Full Stack Developer - Frontend Heavy',
		technologies: [
			{ name: 'React-Native', level: 70 },
			{ name: 'React', level: 70 },
			{ name: 'Angular 2+', level: 100 },
			{ name: 'NestJS', level: 80 },
			{ name: 'PostgreSQL', level: 90 },
			{ name: 'GCP', level: 60 },
			{ name: 'Python', level: 95 },
			{ name: 'Typescript', level: 100 },
			{ name: 'Java 8+', level: 80 },
			{ name: 'Swift', level: 30 },
			{ name: 'Kotlin', level: 30 },
      { name: 'SCSS/Sass', level: 90 },
      { name: 'styled-components', level: 90 },
		],
		description:
			'Worked in startup, "Dr. Haircare", developement on a Full Stack position. Also took part in some smaller, internal projects.'
	},
	{
		name: 'WPP plc - Wavemaker',
		startDate: new Date(2022, 5),
		endDate: new Date(0),
		position: 'Frontend Developer',
		technologies: [
			{ name: 'Angular 2+', level: 100 },
			{ name: 'Typescript', level: 100 },
			{ name: 'Jira', level: 100 },
			{ name: 'NgRx', level: 100 },
			{ name: 'rxJs', level: 90 },
			{ name: 'Cypress', level: 80 },
			{ name: 'd3.js', level: 70 },
			{ name: 'chart.js', level: 60 },
			{ name: 'SCSS/Sass', level: 90 },
			{ name: 'Figma', level: 30 },
		],
		address: 'Plac Konesera 11, 03-736 Warszawa',
		description:
			'Working on data analysis tools for Wavemaker and WPP clients worldwide - creating new tools and upkeeping old ones. I have lead a quick on-baording for QA testers on how to use Typescript and Cypress in our applications'
	}
];
