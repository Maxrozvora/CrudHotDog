<template>
	<v-card color="#385F73" dark class="mb-2">
		<v-card-text class="white--text">
			<div class="headline mb-2">Hot dog</div>
			<div>Base:
				<v-chip color="success ma-2" small>
					{{item.base}}
				</v-chip>
			</div>
			<div>Sausages:
				<v-chip color="success ma-2" small>
					{{item.sausages}}
				</v-chip>
			</div>
			<div>additional Ingredients:
				<span v-for="(ingr, i) in item.additionalIngredients" :key="i">
					<v-chip
						v-if="ingr.added"
						color="success ma-2"
						small
					>
						{{ingr.name}}
					</v-chip>
			</span>
			</div>
		</v-card-text>

		<v-card-actions>
			<v-btn color="warning" @click="deletePost(item)">Delete</v-btn>
			<v-btn color="primary" @click="editPost(item)">Edit</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
  import {bus} from './../bus'

  export default {
    name: "ListItem",
    props: ['item'],
    methods: {
      editPost(item) {
        bus.$emit('editHotDog', item)
      },
      deletePost(item) {
        if (confirm('Are your sure for remove pizza?')) {
          this.$store.dispatch('deleteItem', item)
        }
      }
    },

    computed: {}
  }
</script>

<style scoped>

</style>