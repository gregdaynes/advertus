<template>
	<private-view title="Example Collection List">
		<v-list>
			<v-list-item v-for="collection in collections" :key="collection.cllection">
				{{ collection.collection }}
			</v-list-item>
			<v-button v-on:click="logToConsole">Log collections to console</v-button>
		</v-list>
	</private-view>
</template>

<script>
import { useApi } from '@directus/extensions-sdk'

export default {
	setup() {
		const api = useApi();
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

	inject: ['api'],

	mounted() {
		console.log(this.api)

		this.api.get('/collections?limit=-1').then((res) => {
			this.collections = res.data.data
		})
	}
};
</script>
