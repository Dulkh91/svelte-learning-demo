<script>
  import { Router, Route, Link } from 'svelte-routing';
  import Home from './routes/Home.svelte';
  import Post from './routes/Post.svelte';

</script>


<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </nav>

  <main>
    <Route path="/"><Home/></Route>
    <Route path="/post/:id" let:params>
      <Post id={params.id} />
    </Route>
  </main>
</Router>



