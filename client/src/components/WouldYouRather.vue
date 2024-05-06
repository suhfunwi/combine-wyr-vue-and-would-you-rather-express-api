<script setup>
//setup attribute is the same as using setup for an app in the script
import { ref, watch } from 'vue'

defineProps({
  //the props defined in the app
  //props are used to pass data from parent components to children
  question: String,
  answer1: String,
  answer2: String
})

const emit = defineEmits([
    'answer-selected'
])
//the event emitted
//has to emit a specific kind of event, can't just be anything
const choice = ref(null)
//radio buttons should not be selected

// function choiceMade() {
//   emit event to tell parent user has made choice
//   emit("answer-selected", choice.value)
// }

watch(choice, () => {
  emit('answer-selected', choice.value)
})
//does the same thing as the grayed out function above
//'watches' for the change of the choice variable
//uses a watcher function that is used in the import up top
</script>

<template>
  <div id="wyr">
  <h2>Make your choice!</h2>

    <p>{{question}}</p>
  <div>
    <input v-model="choice" v-bind:value="answer1" type="radio" id="answer-1">
    <label for="answer-1">{{answer1}}</label>

    <input v-model="choice" v-bind:value="answer2" type="radio" id="answer-2">
    <label for="answer-2">{{answer2}}</label>
    <!--  makes the answers radio buttons
        v-bind and v=model makes the radio buttons
        work properly by assigning values to them-->
  </div>

</div>
</template>

<style scoped>
#wyr {
  background-color: rebeccapurple;
}
p {
  font-family: cursive,serif;
}
</style>
<!--scoped attribute means the styles won't be applied to the entire page-->
