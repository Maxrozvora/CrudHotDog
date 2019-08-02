<template>
	<v-layout justify-center>
		<v-dialog v-model="dialog" persistent max-width="600">
			<template v-slot:activator="{ on }">
				<v-btn color="primary" dark v-on="on">Create Hot Dog</v-btn>
			</template>
			<v-card>
				<v-card-title class="headline">Create Hot Dog</v-card-title>
				<v-card-text>
					<span>Base:</span>
					<v-radio-group v-model="base" row>
						<v-radio v-for="(type, i) in baseType" :key="i" :label="type.name" :value="type"></v-radio>
					</v-radio-group>
					<span>Sausages:</span>
					<v-radio-group v-model="sausages" row>
						<v-radio v-for="(type, i) in sausagesType" :key="i" :label="type.name" :value="type"></v-radio>
					</v-radio-group>
					<span>Additional ingredients:</span>
					<v-flex row>
						<v-checkbox v-for="(item, i) in additionalIngredients" :key="i" v-model="item.added" :label="item.name" class="mx-2"></v-checkbox>
					</v-flex>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
					<v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
				</v-card-actions>
				<pre>
					{{$data}}
				</pre>
			</v-card>
		</v-dialog>
	</v-layout>
</template>

<script>
  export default {
    name: "Form",
		data: () => ({
			dialog: false,
			base: '',
			sausages: '',
			baseType: [
				{
					name: 'Bun',
					Price: 20
				},
				{
					name: 'Pita',
					price: 30
				}
			],
			sausagesType: [
				{name: 'Milk', price: 20}, {name: 'Hinting', price: 30}
			],
			additionalIngredients: [
				{
					name: 'Cheese',
					price: 5,
					added: false
				},
				{
					name: 'Fried potatoes',
					price: 5,
					added: false
				},
				{
					name: 'Carrots',
					price: 3,
					added: false
				},
				{
					name: 'Cabbage',
					price: 3,
					added: false
				},
				{
					name: 'Tomatoes',
					price: 5,
					added: false
				},
				{
					name: 'Pickles',
					price: 5,
					added: false
				}
			]
		})
  }
</script>

<style scoped>

</style>