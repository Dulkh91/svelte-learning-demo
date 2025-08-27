<script>
import {countNumber} from '../stores.js'

const increment = ()=>{
    countNumber.update(n=>n+1)
}

const reset =()=>{
    countNumber.set(0)
}

</script>


<button on:click={increment}>increase</button>
<button on:click={reset}>Reset</button>