<script lang="ts">
  let name = "";
  let isSubcribe = false;
  let country = "Cambodia";
</script>

<div>
  <h2>Form Binding</h2>
  <label for="name">Name</label>
  <input type="text" bind:value={name} />
  <p>Inputed name: {name}</p>
</div>


<!-- Check -->
<div>
    <label for="check">
        <input type="checkbox" bind:checked={isSubcribe}>
        ចុះឈ្មោះទទួលព័ត៌មាន
    </label>
    <p>ចុះឈ្មោះ: {isSubcribe?"បាទ":"ទេ"}</p>
</div>

<div>
    <label for="select"> Choosing:</label>
    <select bind:value={country}>
        <option>Cambodia</option>
        <option>Viet Name</option>
        <option>Lao</option>
    </select>

    <p>ជ្រើសរើសប្រទេស: {country}</p>
</div>
