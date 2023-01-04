<script>
  import { invoices, loadInvoices } from '$lib/stores/InvoiceStore';
  import { onMount } from 'svelte';
  import Search from '$lib/components/Search.svelte';

  import CircledAmount from '$lib/components/CircledAmount.svelte';
  import InvoiceRow from './InvoiceRow.svelte';
  import { centsToDollars, sumInvoices } from '$lib/utils/moneyHelpers';

  onMount(() => {
    loadInvoices();

    console.log($invoices);
  });
</script>

<svelte:head>
  <title>Invoices | The Dollar Holler</title>
</svelte:head>

<div
  class="mb-7 flex flex-col-reverse items-start justify-between gap-y-6 md:flex-row md:items-center md:gap-y-4 lg:mb-16"
>
  <!-- search field -->
  <Search />
  <!-- new invoice button -->

  <div>
    <button
      class="relative translate-y-0 whitespace-nowrap rounded-lg bg-lavenderIndigo px-5 py-2 font-sansSerif text-base font-black text-white shadow-colored transition-all hover:-translate-y-2 hover:shadow-coloredHover lg:px-10 lg:py-3 lg:text-xl"
      >+ Invoice</button
    >
  </div>
</div>

<!-- list of invoices -->
<div>
  <!-- header -->

  <div class="table-header invoice-table hidden text-daisyBush lg:grid ">
    <h3>Status</h3>
    <h3>Due Date</h3>
    <h3>ID</h3>
    <h3>Client</h3>
    <h3 class="text-right">Amount</h3>
    <div />
    <div />
  </div>

  <!-- invoices -->
  {#each $invoices as invoice}
    <InvoiceRow {invoice} />
  {/each}
</div>
<!-- first dollar sign is a string that gets passed to browser and 2nd one is saying this is js go ahead and execute that -->
<!-- circled amt sums up all the invoices and then formats it w/ cents to dollars -->
<CircledAmount label="Total" amount={`$${centsToDollars(sumInvoices($invoices))}`} />

<style lang="postcss">
  .table-header h3 {
    @apply text-xl font-black leading-snug;
  }

  @media (min-width: 1024px) {
    .table-header {
      grid-template-areas: 'status dueDate invoiceNumber clientName amount viewButton moreButton';
    }
  }
</style>
