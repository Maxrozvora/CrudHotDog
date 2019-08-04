<template>
	<v-card color="#385F73" dark class="mb-2">
		<v-card-text class="white--text">
			<div class="headline mb-2">Hot dog</div>
			<div>Base: {{item.base.name}}</div>
			<div>Sausages: {{item.sausages.name}}</div>
			<div>additional Ingredients:
				<span v-for="(ingr, i) in item.additionalIngredients" :key="i">
					<span v-if="ingr.added">
						{{ingr.name}}
					</span>
			</span>
			</div>
		</v-card-text>

		<v-card-actions>
			<v-btn color="warning">Delete</v-btn>
			<v-btn color="primary">Edit</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
  export default {
    name: "ListItem",
    props: ['item'],
    computed: {
      // totalPrice() {
      //     return this.item.base
      // }
    }
  }
</script>

<style scoped>

</style>