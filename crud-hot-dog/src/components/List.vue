<template>
	<v-card>
		<v-card-title class="text-center fill-height">My Hot Dogs List</v-card-title>
		<v-card-text>
			<ListItem v-for="(item, i) in getList" :key="i" :item="item"></ListItem>
		</v-card-text>
		<v-card-actions>
			<v-btn
				color="orange"
				text
			>
				Share
			</v-btn>
			<v-btn
				color="orange"
				text
			>
				Explore
			</v-btn>
		</v-card-actions>
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