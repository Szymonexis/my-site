export enum ROUTE_NAMES {
	ABOUT_ME = 'ABOUT_ME',
	JOBS = 'JOBS',
	EDUCATION = 'EDUCATION',
	SKILLS = 'SKILLS',
	GALLERY = 'GALLERY'
}

export const routes: { [key in ROUTE_NAMES]: { text: string; link: string } } = {
	[ROUTE_NAMES.ABOUT_ME]: { text: 'ROUTES.ABOUT_ME', link: 'about-me' },
	[ROUTE_NAMES.JOBS]: { text: 'ROUTES.JOBS', link: 'jobs' },
	[ROUTE_NAMES.EDUCATION]: { text: 'ROUTES.EDUCATION', link: 'education' },
	[ROUTE_NAMES.SKILLS]: { text: 'ROUTES.SKILLS', link: 'skills' },
	[ROUTE_NAMES.GALLERY]: { text: 'ROUTES.GALLERY', link: 'gallery' }
};
