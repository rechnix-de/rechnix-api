// Node 18+
import { readFile, writeFile } from 'node:fs/promises';
const API = 'https://rechnix-api.mbanzagroup.workers.dev', KEY = 'demo'; // replace with your own key
const invoice = await readFile(new URL('./invoice.json', import.meta.url), 'utf8');
const res = await fetch(`${API}/v1/invoices?format=zugferd-pdf&pdf_lang=de`, {
  method: 'POST', headers: { 'X-API-Key': KEY, 'Content-Type': 'application/json' }, body: invoice });
if (!res.ok) throw new Error(await res.text());
await writeFile('invoice.pdf', Buffer.from(await res.arrayBuffer()));
console.log('ZUGFeRD PDF written to invoice.pdf');
