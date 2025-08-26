<script lang="ts">
  import Footer from "./components/Footer.svelte";
  import Greet from "./components/Greet.svelte";
  import Counter from "./components/Counter.svelte";
  import Handling from "./components/Handling.svelte";
</script>

<main>
  
  <!-- Learning Props -->
  <p>Learn Props file Greet.svelte</p>
  <Greet name="Ros Dul"/>
  <Greet name="Apple"/>

  <hr>
  <!-- Reactivity -->
   <p>Learning reactivity of file Counter.svelte</p>
  <Counter/>

  <hr>
  <!-- Handling -->
  <Handling/>

  <hr>
  <p>Learning add props file name Footer.svelte</p>
  <Footer/>
  

</main>

