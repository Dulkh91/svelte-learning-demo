<script lang="ts">
  import { countNumber } from "../stores";
  import { onDestroy } from "svelte";

  let manualCount: number;

  const unSubscribe = countNumber.subscribe(
    (value: number) => (manualCount = value)
  );

  onDestroy(() => {
    unSubscribe();
  });

</script>

  <div>
    <h3>{$countNumber}</h3>
    <p>Or</p>
    <h3>{manualCount}</h3>
  </div>

