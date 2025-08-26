<script>
    let count = 0
    function increase(){
        count += 1
    }
    $: quar = count * 4
</script>

<h2>{count}</h2>

<button on:click={increase}>Increase</button>

<h3>quar value: {quar}</h3>
