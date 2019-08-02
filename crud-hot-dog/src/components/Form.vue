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
                        <div v-for="(type, i) in baseType" :key="i">
                            <v-radio :label="type.name" :value="type"></v-radio>
                            <span class="caption green--text"> {{type.price}} uah</span>
                        </div>
					</v-radio-group>
					<span>Sausages:</span>
					<v-radio-group v-model="sausages" row>
                        <div v-for="(type, i) in sausagesType" :key="i">
                            <v-radio  :label="type.name" :value="type"></v-radio>
                            <span class="caption green--text"> {{type.price}} uah</span>
                        </div>
					</v-radio-group>
					<span>Additional ingredients:</span>
                    <div class="caption green--text"> 5 uah</div>
                    <v-flex row>
						<v-checkbox v-for="(item, i) in additionalIngredients" :key="i" v-model="item.added" :label="item.name" class="mx-2"></v-checkbox>
					</v-flex>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="green darken-1" text @click="dialog = false">Cancel</v-btn>
					<v-btn color="green darken-1" text @click="create">Create</v-btn>
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
				price: 20
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
				price: 5,
				added: false
			},
			{
				name: 'Cabbage',
				price: 5,
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
		],
		hotDogs: []
	}),
  methods: {
	create() {
		const hotDog = {
			base: this.base,
			sausages: this.sausages,
			additionalIngredients: this.additionalIngredients
		}
		this.hotDogs.push(hotDog);
		console.log(this.hotDogs)
	}
  }
  }
</script>

<style scoped>

</style>