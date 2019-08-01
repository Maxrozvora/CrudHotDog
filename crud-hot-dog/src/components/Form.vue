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
						<v-radio v-for="(type, i) in baseType" :key="i" :label="type" :value="type"></v-radio>
					</v-radio-group>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
					<v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
				</v-card-actions>
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
			baseType: [
			  'Bun', 'Pita'
			]
		})
  }
</script>

<style scoped>

</style>