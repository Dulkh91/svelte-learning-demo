<script lang="ts">
    import { auth} from '../lib/stores'
</script>

{#if $auth.isAuthenticated}
    <h1>Wellcome {$auth.user}</h1>
    {:else}
    <p> សូម log in ដើម្បីចូលប្រើប្រាស់</p>

{/if}