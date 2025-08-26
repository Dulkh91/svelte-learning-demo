<script lang="ts">
    let messge = ""
    function greet(name: string){
        messge = `សួស្តី ${name}`
    }
</script>

<p>{messge}</p>

<button on:click={()=>greet("Ros Dul") }> Ros Dul</button>
<button on:click={()=>greet("Svelte") }>Svelte</button>