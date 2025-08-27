<script lang="ts">
    import {user}  from '../stores'


    let isLoading = true
    if($user){
        isLoading =false
    }

    const onLoggin = ()=>{
        $user.isLoggedIn = true
    }

</script>

{#if isLoading}
  <p>Loading...</p>
  {:else if $user.isLoggedIn}
    <h3>Wellcome {$user.name}</h3>
  {:else}
    <button on:click={onLoggin}>Please log in</button>
{/if}