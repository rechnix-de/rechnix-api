# pip install requests
import json, requests
API = "https://rechnix-api.mbanzagroup.workers.dev"
KEY = "demo"  # replace with your own key
invoice = json.load(open("invoice.json", encoding="utf-8"))
r = requests.post(f"{API}/v1/invoices", params={"format": "xrechnung-cii"}, json=invoice, headers={"X-API-Key": KEY})
r.raise_for_status()
open("invoice.xml", "wb").write(r.content)
v = requests.post(f"{API}/v1/validate", params={"profile": "xrechnung", "lang": "en"}, data=r.content,
                  headers={"X-API-Key": KEY, "Content-Type": "application/xml"}).json()
print(json.dumps(v, indent=2))
