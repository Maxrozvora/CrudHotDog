<template>
	<v-layout justify-center>
		<v-dialog v-model="dialog" persistent max-width="600">
			<v-card>
				<v-card-title class="headline">{{dialogTitle}}</v-card-title>
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
					<div v-if="!edit">
						<v-btn color="warning darken-1" @click="dialog = false">Cancel</v-btn>
						<v-btn color="primary darken-1" @click="create">Create</v-btn>
					</div>
					<div v-else>
						<v-btn color="warning darken-1" @click="dialog = false">Cancel</v-btn>
						<v-btn color="primary darken-1" @click="saveItem">Save</v-btn>
					</div>
				</v-card-actions>
			</v-card>
		</v-dialog>
		<v-btn color="primary" dark class="my-3" @click="showModal" large>Create Hot Dog</v-btn>
	</v-layout>
</template>

<script>
  import {mapMutations} from 'vuex'
  import { bus } from './../bus'

  export default {
    name: "Form",
    data: () => ({
      dialog: false,
			edit: false,
			dialogTitle: '',
      base: 'Bun',
      sausages: 'Milk',
      additionalIngredients: [
        {
          name: 'Cheese',
          added: false
        },
        {
          name: 'Fried potatoes',
          added: false
        },
        {
          name: 'Carrots',
          added: false
        },
        {
          name: 'Cabbage',
          added: false
        },
        {
          name: 'Tomatoes',
          added: false
        },
        {
          name: 'Pickles',
          added: false
        }
      ],
			id: ''
    }),
    methods: {
      ...mapMutations([
        'createItem'
      ]),
      showModal() {
        this.dialog = !this.dialog
				this.dialogTitle = 'Create Hot Dog'
			},
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
        this.dialogTitle = 'Edit Hot Dog';
        this.dialog = true;
        this.edit = true;
				this.base = item.base;
				this.sausages = item.sausages;
				this.additionalIngredients = item.additionalIngredients;
				this.id = item.id
			},
      saveItem() {
        this.dialog = false;
        this.edit = false;

        this.$store.dispatch('updateItem', {
          base: this.base,
          sausages: this.sausages,
          additionalIngredients: this.additionalIngredients,
					id: this.id
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