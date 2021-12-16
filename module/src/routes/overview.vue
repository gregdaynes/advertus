<template>
	<private-view :title="t('advertus_overview_title')">
		<v-list>
			<v-list-item v-for="collection in collections" :key="collection.cllection">
				{{ collection.collection }}
			</v-list-item>
			<v-button v-on:click="logToConsole">Log collections to console</v-button>
		</v-list>

		<template #navigation>
			<advertus-navigation :path="route.path"/>
		</template>
	</private-view>
</template>

<script>
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useApi } from '@directus/extensions-sdk'
import AdvertusNavigation from '../components/navigation.vue'

export default defineComponent({
	name: 'Overview',
	components: { AdvertusNavigation },
	inject: ['api'],

	setup() {
		const api = useApi();
		const { t } = useI18n();
		const route = useRoute()

		return { t, route }
	},

	data() {
		return {
			collections: null
		}
	},

  methods: {
		logToConsole: function() {
			console.log(this.collections)
		},
	},

	mounted() {
		console.log(this.api)

		this.api.get('/collections?limit=-1').then((res) => {
			this.collections = res.data.data
		})
	}
});
</script>
