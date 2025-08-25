<script>
    let num = 0
    function increase(){
        num += 1
    }
    // Input
    let inputText = ""
</script>

<div>
    <h1>{num}</h1>
    <button on:click={increase}>increase</button>
</div>
<hr/>

<div>
    <p>hello {inputText}!</p>
    <input type="text" bind:value={inputText} >

</div>


    

