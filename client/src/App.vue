<script setup>
import WouldYouRather from './components/WouldYouRather.vue'
import {ref, onMounted} from 'vue'
import wyrService from "./services/wyrService.js";
//we can use onMounted to call a function when the component is first loaded
const wyrQuestion = ref('')
const wyrAnswer1 = ref('')
const wyrAnswer2 = ref('')
// just the questions and the options for answers

const userSelection = ref('')
//this will store the user's answer once they make a choice
onMounted( () =>{
  wyrService.getRandomWYR().then( (wyrData) =>{
    //Expect wyrData to be something like:
  //    {
  //   'question': 'Be able to fly or be able to breathe underwater?',
  //       'answer1': 'Fly',
  //       'answer2': 'Breath underwater'
  //    }
    //returns a promise as well
    wyrQuestion.value = wyrData.question
    wyrAnswer1.value = wyrData.answer1
    wyrAnswer2.value = wyrData.answer2
  })
})
function updateUserSelection(userChoice){
  userSelection.value = `You chose ${userChoice}!`
// '${}' is a template string, don't forget
}


</script>

<template>
  <div id="app-component">
  <h1>Would You Rather?</h1>
    <WouldYouRather v-bind:question="wyrQuestion"
                    v-bind:answer1="wyrAnswer1"
                    v-bind:answer2="wyrAnswer2"
                    v-on:answer-selected="updateUserSelection"
    ></WouldYouRather>
  <!--  sends the would you rather data to the WouldYouRather prop-->

    <p>{{userSelection}}</p>
  </div>
</template>

<style scoped>
#app-component{
  //font-size: 3em;
  background-color: dodgerblue;
  padding: 40px;
}
p{
  font-family: "Franklin Gothic Medium",serif;
}

</style>
