// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Tesis Digital',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Preliminares',
					items: [{ autogenerate: { directory: 'tesis/00-preliminares' } }],
				},
				{
					label: 'Primera Parte',
					items: [{ autogenerate: { directory: 'tesis/01-primera-parte' } }],
				},
				{
					label: 'Segunda Parte',
					items: [{ autogenerate: { directory: 'tesis/02-segunda-parte' } }],
				},
				{
					label: 'Tercera Parte',
					items: [{ autogenerate: { directory: 'tesis/03-tercera-parte' } }],
				},
				{
					label: 'Cuarta Parte',
					items: [{ autogenerate: { directory: 'tesis/04-cuarta-parte' } }],
				},
				{
					label: 'Cierre',
					items: [{ autogenerate: { directory: 'tesis/99-cierre' } }],
				},
			],
		}),
	],
});
