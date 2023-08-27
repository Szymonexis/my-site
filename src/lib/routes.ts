export enum ROUTE_NAMES {
	ABOUT_ME = 'ABOUT_ME',
	JOBS = 'JOBS',
	EDUCATION = 'EDUCATION',
	SKILLS = 'SKILLS',
	GALLERY = 'GALLERY'
}

export const routes: { [key in ROUTE_NAMES]: { text: string; link: string } } = {
	[ROUTE_NAMES.ABOUT_ME]: { text: 'about me', link: 'about-me' },
	[ROUTE_NAMES.JOBS]: { text: 'jobs', link: 'jobs' },
	[ROUTE_NAMES.EDUCATION]: { text: 'education', link: 'education' },
	[ROUTE_NAMES.SKILLS]: { text: 'skills', link: 'skills' },
	[ROUTE_NAMES.GALLERY]: { text: 'gallery', link: 'gallery' }
};
