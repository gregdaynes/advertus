import { defineModule } from '@directus/shared/utils';
import Overview from './routes/overview.vue';
import Properties from './routes/properties.vue';
import Home from './routes/home.vue';

export default {
	id: 'advertus',
	name: '$t:advertus',
	icon: 'ad_units',
	color: 'var(--warning)',
	routes: [
		{
			path: '',
			component: Home,
		},
		{
			path: 'overview',
			component: Overview,
		},
		{
			path: 'properties',
			component: Properties,
		},
	],
}
