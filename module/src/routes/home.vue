<script>
import { defineComponent } from 'vue';
import { useStores } from '@directus/extensions-sdk';
import { useRouter } from 'vue-router';

export default defineComponent({
	name: '$t:advertus_home',

	setup() {
		const router = useRouter()
		const collectionsStore = useCollectionsStore()

		// extension has installed collections
		if (collectionsStore.allCollections.filter(({ collection }) => collection.startsWith('advertus_')).length) router.push('/advertus/overview')

		// TODO perform operations to add tables and columns

		router.push('/advertus/overview')
	}
})
</script>
