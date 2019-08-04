<template>
	<v-layout justify-center>
		<v-dialog v-model="dialog" persistent max-width="600">
			<template v-slot:activator="{ on }">
				<v-btn color="primary" dark v-on="on" class="my-3" large>Create Hot Dog</v-btn>
			</template>
			<v-card>
				<v-card-title class="headline">Create Hot Dog</v-card-title>
				<v-card-text>
					<span>Base:</span>
					<v-radio-group v-model="base" row>
						<v-radio  label="Bun" value="Bun"></v-radio>
						<v-radio  label="Pita" value="Pita"></v-radio>
					</v-radio-group>
					<span>Sausages:</span>
					<v-radio-group v-model="sausages" row>
						<v-radio label="Milk" value="Milk"></v-radio>
						<v-radio label="Hunting" value="Hunting"></v-radio>
					</v-radio-group>
					<span>Additional ingredients:</span>
					<v-flex row>
						<v-checkbox v-for="(item, i) in additionalIngredients" :key="i" v-model="item.added"
												:label="item.name" class="mx-2"></v-checkbox>
					</v-flex>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="warning darken-1" @click="dialog = false">Cancel</v-btn>
					<v-btn color="primary darken-1" @click="create">Create</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-layout>
</template>

<script>
  import {mapMutations} from 'vuex'
  import { bus } from './../bus'

  export default {
    name: "Form",
    data: () => ({
      dialog: false,
      base: 'Bun',
      sausages: 'Milk',
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
      ...mapMutations([
        'createItem'
      ]),
      create() {
        const hotDog = {
          base: this.base,
          sausages: this.sausages,
          additionalIngredients: this.additionalIngredients
        }
        this.dialog = false
				this.$store.dispatch('createItem', hotDog)
      },
			editItem(item) {
        this.dialog = true;
				this.base = item.base;
				this.sausages = item.sausages;
				this.additionalIngredients = item.additionalIngredients;
				console.log(this.$data); // TODO console.log
			}
    },
    computed: {
      countPrice() {
        return this.base.price + this.sausages.price + this.additionalIngredients.filter(item => {
          let cost;
          if (item.added) {
            cost = +item.price
          }
          return cost
        })
      }
    },
    mounted() {
      bus.$on('editHotDog', (item) => {
				this.editItem(item)
			})
    }
  }
</script>

<style scoped>

</style>