<script lang="ts">
  //'paid' = 'draft' means the default is draft
  export let label: 'draft' | 'sent' | 'current' | 'late' | 'paid' = 'draft';
</script>

<!-- might need to remove the last 2 purple directives? maybe -->
<!-- this class:inverted format means if label is equal to draft will give class ect  think this is svelty not sure?  -->
<!-- this is similar to explanation on this page:  https://svelte.dev/tutorial/classes -->
<div
  class=" text-md w-20 rounded-full border-1 border-pastelPurple text-center font-bold capitalize text-pastelPurple"
  class:inverted={label === 'draft'}
  class:success={label === 'sent' || label === 'current'}
  class:alert={label === 'late'}
  class:archive={label === 'paid'}
>
  {label}
</div>

<style lang="postcss">
  .inverted {
    @apply border-pastelPurple text-pastelPurple;
  }

  .success {
    @apply border-robinEggBlue bg-robinEggBlue text-blueGem;
  }

  .alert {
    @apply border-scarlet bg-scarlet text-goldenFizz;
  }

  .archive {
    @apply border-pastelPurple bg-pastelPurple text-white;
  }
</style>
