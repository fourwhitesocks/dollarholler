<script lang="ts">
  import Search from '$lib/components/Icon/Search.svelte';
</script>

<div class="relative flex w-full items-baseline">
  <!-- svelte-ignore missing-declaration -->
  <div class="mr-2 mt-auto text-pastelPurple"><Search /></div>
  <input
    type="text"
    name="search"
    placeholder="Search by keyword"
    class="font-sansSerif w-72 border-b-2 border-dashed border-b-pastelPurple bg-transparent text-xl text-black outline-none focus:border-solid focus:border-b-lavenderIndigo"
  />

  <button class="font-sansSerif text-xl font-black text-pastelPurple">Search</button>
</div>
