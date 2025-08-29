<script lang="ts">
   export let id

   interface Post{
      id: number;
      title:string;
      body: string;
   }

   let data: Post | null = null
   let isLoading = false
   let error: Error | null = null

   async function fecthData(id:number) {
      isLoading = true
      error = null
      try {
         const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
         if(!res.ok){
            throw new Error('Failed to fetch posts')
         }  
         
         data = await res.json()    
      
      } catch (err) {
         if(err instanceof Error){
            error =  err
         }else{
            error = new Error("An unknown error occurred.")
         }
      }finally{
         isLoading = false
      }
   }

   fecthData(id)

</script>

<div>
   {#if isLoading}
      <p>Loading...</p>
   {:else if  data }
      <h2>{data.title}</h2>
      <p>{data.body}</p>
   {:else if error}
      <p style="color: red">{error}</p>
   {/if}
</div>