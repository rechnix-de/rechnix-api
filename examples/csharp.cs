// .NET 6+
using System.Net.Http; using System.Text;
var api = "https://rechnix-api.mbanzagroup.workers.dev"; var key = "demo"; // replace with your own key
using var http = new HttpClient(); http.DefaultRequestHeaders.Add("X-API-Key", key);
var json = await File.ReadAllTextAsync("invoice.json");
var res = await http.PostAsync($"{api}/v1/invoices?format=xrechnung-ubl", new StringContent(json, Encoding.UTF8, "application/json"));
res.EnsureSuccessStatusCode();
await File.WriteAllBytesAsync("invoice.xml", await res.Content.ReadAsByteArrayAsync());
Console.WriteLine("XRechnung UBL written to invoice.xml");
