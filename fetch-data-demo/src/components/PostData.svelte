<script lang="te">
    import {Link } from 'svelte-routing'
    import {posts, fetchData, error,isLoading} from '../lib/stores'
    import {onMount} from 'svelte'
    import Slots from './Slots.svelte';

    onMount(()=>{
        fetchData()
    })  
    const handleFetch = ()=>{
        fetchData()
    }  

    
</script>

{#if $isLoading}
    <p>Loading......</p>
    {:else if $error}
    <p> Error : {$error}</p>
    <button on:click={handleFetch}>Try again</button>
    {:else}
        <Slots>Title</Slots>
        {#each $posts as post (post.id)}
            <ul>
                <li><Link to={`/post/${post.id}`}>{post.title}</Link></li>
            </ul>
            
        {/each}
    
{/if}

<style>
    ul{
        list-style-type: none;
    }
    ul li{
        border: 1px solid rgb(169, 169, 169);
        padding: 5px;
    }
</style>