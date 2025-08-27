<script lang="ts">
  import {theme,toggleTheme} from '../lib/stores'
  import Icon from "@iconify/svelte";

  // Optional: Apply theme class to body programmatically
  $: if (typeof document !== 'undefined') {
    document.body.classList.toggle('dark', $theme === 'dark');
  }
  
</script>

<svelte:body class:dark={$theme === 'dark'} />
<button on:click={toggleTheme}>
  {#if $theme === "light"}
    <Icon icon="line-md:moon"   width="30" height="30"/>
  {:else}
    <Icon icon="line-md:moon-to-sunny-outline-transition" width="30" height="30" /> 
  {/if}
</button>
