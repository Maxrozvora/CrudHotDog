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
                        <v-radio v-for="(type, i) in baseType" :key="i" :label="type.name" :value="type"></v-radio>
                    </v-radio-group>
                    <span>Sausages:</span>
                    <v-radio-group v-model="sausages" row>
                        <v-radio v-for="(type, i) in sausagesType" :key="i" :label="type.name" :value="type"></v-radio>
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

    export default {
        name: "Form",
        data: () => ({
            dialog: false,
            base: {name: 'Bun', price: 20},
            sausages: {name: 'Milk', price: 20},
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
                {name: 'Milk', price: 20}, {name: 'Hunting', price: 30}
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
            ...mapMutations([
                'createItem'
            ]),
            create() {
                const hotDog = {
                    base: this.base,
                    sausages: this.sausages,
                    additionalIngredients: this.additionalIngredients,
                    totalPrice: this.totalPrice
                }
                this.createItem(hotDog)
                this.dialog = false
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
        }
    }
</script>

<style scoped>

</style>