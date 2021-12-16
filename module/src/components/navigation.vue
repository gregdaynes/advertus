<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
	name: 'AdvertusNavigation',
	props: {
		path: {
			type: String,
			default: '/advertus/overview'
		}
	},
	setup() {
		const { t } = useI18n();

		const navItems = [
			{
				icon: 'home',
				name: t('advertus_overview'),
				to: '/advertus/overview'
			},
			{
				icon: 'domain',
				name: t('advertus_properties'),
				to: '/advertus/properties'
			},
		]

		return { navItems, t };
	},
});
</script>

<template>
	<v-list nav>
		<v-list-item v-for="item in navItems" :key="item.to" :to="item.to">
			<v-list-item-icon><v-icon :name="item.icon" /></v-list-item-icon>
			<v-list-item-content>
				<v-text-overflow :text="item.name" />
			</v-list-item-content>
		</v-list-item>
	</v-list>
</template>
