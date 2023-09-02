export enum ROUTES {
	ABOUT_ME = 'about-me',
	JOBS = 'jobs',
	EDUCATION = 'education',
	SKILLS = 'skills',
	GALLERY = 'gallery'
}

export const routes: { [key in ROUTES]: { text: string } } = {
	[ROUTES.ABOUT_ME]: { text: 'ROUTES.ABOUT_ME' },
	[ROUTES.JOBS]: { text: 'ROUTES.JOBS' },
	[ROUTES.EDUCATION]: { text: 'ROUTES.EDUCATION' },
	[ROUTES.SKILLS]: { text: 'ROUTES.SKILLS' },
	[ROUTES.GALLERY]: { text: 'ROUTES.GALLERY' }
};
