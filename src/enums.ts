export enum InvoiceStatus {
    draft = 'draft',
    sent = 'sent',
    paid = 'paid'
}
// above is not tracking if it's late but 
//we will use our duedate for that, we don't need to track that info in our database
export enum ClientStatus {
    active = 'active',
    archived = 'archived'
}