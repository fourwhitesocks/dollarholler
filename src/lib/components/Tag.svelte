<script lang="ts">
  //'paid' = 'draft' means the default is draft
  export let label: 'draft' | 'sent' | 'current' | 'late' | 'paid' = 'draft';
</script>

<!-- this means will give class if label is equal to draft ect  -->
<!-- might need to remove the last 2 purple directives? maybe -->
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
