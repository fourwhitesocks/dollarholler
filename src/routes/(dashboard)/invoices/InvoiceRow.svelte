<script lang="ts">
  import View from '$lib/components/Icon/View.svelte';
  import ThreeDots from '$lib/components/Icon/ThreeDots.svelte';
  import Tag from '$lib/components/Tag.svelte';
  //below are our helper functions made in lesson 18
  import { sumLineItems, centsToDollars } from '$lib/utils/moneyHelpers';
  import { convertDate, isLate } from '$lib/utils/dateHelpers';

  export let invoice: Invoice;
  const getInvoiceLabel = () => {
    if (invoice.invoiceStatus === 'draft') {
      return 'draft';
    } else if (invoice.invoiceStatus === 'sent' && !isLate(invoice.dueDate)) {
      return 'sent';
    } else if (invoice.invoiceStatus === 'sent' && isLate(invoice.dueDate)) {
      return 'late';
    } else if (invoice.invoiceStatus === 'paid') {
      return 'paid';
    }
  };
</script>

<!-- list of invoices -->
<div
  class="invoice-table invoice-row items-center rounded-lg bg-white py-3 shadow-tableRow lg:py-6"
>
  <div class="status"><Tag className="ml-auto lg:ml-0" label={getInvoiceLabel()} /></div>
  <div class="dueDate text-sm lg:text-lg">{convertDate(invoice.dueDate)}</div>
  <div class="invoiceNumber text-sm lg:text-lg">{invoice.invoiceNumber}</div>
  <div class="clientName truncate whitespace-nowrap text-base font-bold lg:text-xl">
    {invoice.client.name}
  </div>
  <div class="amount text-right font-mono text-sm font-bold lg:text-lg">
    <!-- this dollar sign is for real lol -->
    ${centsToDollars(sumLineItems(invoice.lineItems))}
  </div>
  <div class="center viewButton  hidden text-sm lg:block lg:text-lg">
    <a href="/invoices" class="text-pastelPurple hover:text-daisyBush"><View /></a>
  </div>
  <div class="center moreButton  hidden text-sm lg:block lg:text-lg">
    <button class="text-pastelPurple hover:text-daisyBush"><ThreeDots /></button>
  </div>
</div>

<style lang="postcss">
  .invoice-row {
    grid-template-areas:
      'invoiceNumber invoiceNumber'
      'clientName amount'
      'dueDate status';
  }

  @media (min-width: 1024px) {
    .invoice-row {
      grid-template-areas: 'status dueDate invoiceNumber clientName amount viewButton moreButton';
    }
  }

  .invoice-row .status {
    grid-area: status;
  }

  .invoice-row .dueDate {
    grid-area: dueDate;
  }

  .invoice-row .invoiceNumber {
    grid-area: invoiceNumber;
  }

  .invoice-row .clientName {
    grid-area: clientName;
  }

  .invoice-row .amount {
    grid-area: amount;
  }

  .invoice-row .viewButton {
    grid-area: viewButton;
  }

  .invoice-row .moreButton {
    grid-area: moreButton;
  }
</style>
