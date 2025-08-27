<script lang="ts">
import { login,auth, logout} from '../lib/stores'

const handleLogin = ()=>{
    login({
        userData: "Dul",
        token: 'abc123'
    })
}

auth.subscribe(value=>{
    localStorage.setItem('auth',JSON.stringify(value))
})


</script>

{#if $auth.isAuthenticated}
    <button on:click={logout}>Log out</button>
    {:else}
    <button on:click={handleLogin}>Log in</button>
{/if}