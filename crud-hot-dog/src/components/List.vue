<template>
	<v-card>
		<v-card-title class="text-center fill-height">My Hot Dogs List</v-card-title>
		<v-card-text>
			<ListItem v-for="(item, i) in getList" :key="i" :item="item"></ListItem>
			<v-alert type="info" v-if="getList.length === 0">
				Please create hot dogs
			</v-alert>
		</v-card-text>
	</v-card>
</template>

<script>
  import ListItem from '../components/ListItem'

  export default {
    name: "List",
    components: {ListItem},
    computed: {
      getList() {
        return this.$store.getters.getPost
      }
    }
  }
</script>

<style scoped>

</style>