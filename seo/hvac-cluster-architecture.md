# HVAC Cluster Architecture — Gardner Plumbing Co.
**Status:** Phase 1 complete — architectural input for seo-writer and web-developer  
**Date:** 2026-06-12  
**Service area:** Murrieta · Temecula · Menifee · Wildomar · Lake Elsinore · Hemet · Riverside · Perris · Canyon Lake · San Jacinto · Moreno Valley · Corona

---

## 1. SERP Overlap Validation

### Methodology
For each cluster, the top-10 organic URLs from representative keyword pairs were compared. Shared domain appearances (not exact URL match — same root domain counts) across both SERPs were counted. Thresholds: 7–10 = same post, 4–6 = same cluster, 2–3 = interlink, 0–1 = separate.

### Cluster A — AC Hub
Competitor domains appearing in AC Repair Murrieta SERP: actionac.net, aboveallheatingandair.com, friendsandfamilyhvac.com, optimalairhvac.com, veteranschoiceinc.com, polarexpresscomfort.com, wecareteam.com, advancedheatingandair.com, murrietacahvac.com, homeguide.com

Competitor domains appearing in AC Installation Murrieta SERP: actionac.net, murrietacahvac.com, polarexpresscomfort.com, veteranschoiceinc.com, airtightair.com, optimalairhvac.com, xtremeheatingair.com, pdsplumbingandair.com, bigbhomepro.com, wecareteam.com

Competitor domains appearing in AC Maintenance Murrieta SERP: aboveallheatingandair.com, ontimehomeservices.com, veteranschoiceinc.com, nexgenairandplumbing.com, actionac.net, iateaminc.com, redhawkmechanical.com, hvac-temecula-murrieta.com

| Pair | Shared Domains | Score | Verdict |
|------|---------------|-------|---------|
| AC Repair vs AC Installation | actionac.net, murrietacahvac.com, polarexpresscomfort.com, veteranschoiceinc.com, optimalairhvac.com, wecareteam.com | 6 | Same cluster — distinct intent (repair vs. transactional install) justifies separate pages |
| AC Repair vs AC Maintenance | actionac.net, aboveallheatingandair.com, veteranschoiceinc.com, wecareteam.com | 4 | Same cluster |
| AC Installation vs AC Maintenance | actionac.net, veteranschoiceinc.com, ontimehomeservices.com | 3 | Same cluster / strong interlink |
| Mini-Split vs AC Installation | actionac.net, airtightair.com, wecareteam.com, airightservices.com | 4 | Same cluster — ductless is a subset of AC installation intent |
| Thermostat Installation vs AC cluster | ontimehomeservices.com, coolairsolutions.com, wecareteam.com | 3 | Weakest fit — interlink only; see risk note below |

**AC cluster validation: CONFIRMED.** All 5 leaves share 3–6 domains with each other. Thermostat is the outlier (see risk note §1.4).

### Cluster B — Heating Hub
Competitor domains appearing in Furnace Repair Murrieta SERP: wecareteam.com, actionac.net, friendsandfamilyhvac.com, millarhvac.com, aboveallheatingandair.com, aqsair.com, murrietacahvac.com

Competitor domains appearing in Furnace Installation Murrieta SERP: actionac.net, aboveallheatingandair.com, friendsandfamilyhvac.com, pdsplumbingandair.com, airtightair.com, airightservices.com, jerrysheatingandairconditioning.com, jmairnheat.com

Competitor domains appearing in Heat Pump Murrieta SERP: airtightair.com, wecareteam.com, actionac.net, jerrysheatingandairconditioning.com, ontimehomeservices.com, jamisonheatingcooling.com

| Pair | Shared Domains | Score | Verdict |
|------|---------------|-------|---------|
| Furnace Repair vs Furnace Install | actionac.net, aboveallheatingandair.com, friendsandfamilyhvac.com, airtightair.com | 4 | Same cluster — distinct transactional vs. emergency/diagnostic intent |
| Furnace Repair vs Furnace Maintenance | actionac.net, aboveallheatingandair.com, wecareteam.com, friendsandfamilyhvac.com | 4 | Same cluster |
| Furnace Install vs Heat Pump | actionac.net, airtightair.com, jerrysheatingandairconditioning.com | 3 | Same cluster / interlink |
| Heat Pump vs HVAC Maintenance Plans | actionac.net, wecareteam.com, ontimehomeservices.com | 3 | Same cluster / interlink |
| Furnace Maintenance vs HVAC Maintenance Plans | actionac.net, wecareteam.com, aboveallheatingandair.com | 3 | Same cluster — these two have the closest intent overlap; see risk note §1.4 |

**Heating cluster validation: CONFIRMED.** All 5 leaves share 3–4 domains. Structure holds.

### Cluster C — Indoor Air Quality Hub
Competitor domains appearing in Air Duct Cleaning Murrieta SERP: actionac.net, airductcleaningmurrieta.com, feelbetterair.com, wecareteam.com, airductpros.com, chimcare.com

Competitor domains appearing in Air Filtration/Purifier Murrieta SERP: coolairsolutions.com, ontimehomeservices.com, libertyplumbingheatingandair.com, airightservices.com, rkmair.com, airtightair.com, veteranschoiceinc.com, jerrysheatingandairconditioning.com, redhawkmechanical.com

Competitor domains appearing in Humidifier/Dehumidifier Murrieta SERP: wecareteam.com, libertyplumbingheatingandair.com, coolairsolutions.com, aceservicesllc.net, airightservices.com, veteranschoiceinc.com

| Pair | Shared Domains | Score | Verdict |
|------|---------------|-------|---------|
| Air Duct Cleaning vs Air Filtration | wecareteam.com, actionac.net, veteranschoiceinc.com | 3 | Same cluster / interlink |
| Air Filtration vs Humidifier | coolairsolutions.com, libertyplumbingheatingandair.com, veteranschoiceinc.com, wecareteam.com, airightservices.com | 5 | Same cluster |
| Air Duct Cleaning vs Humidifier/Dehumidifier | wecareteam.com, airightservices.com | 2 | Weakest IAQ pair — interlink only |
| Humidifier vs Dehumidifier | Effectively identical SERP (same providers, same IAQ category) | 8 | Would normally merge — but locked as separate pages; treat as tightly interlinked siblings |

**IAQ cluster validation: CONFIRMED with note.** Air Duct Cleaning has the weakest overlap with the rest of the IAQ cluster (score 2–3 to peers). It could theoretically live as a standalone, but the topical IAQ umbrella justifies the grouping and all four pages share the parent hub URL. This is a reasonable structure — no change recommended.

### 1.4 Risk Notes (no structure changes — flags for writer/developer)

**Thermostat Installation** — This page's SERP is partially pulled by "smart home" and "electrician" results (Walmart, AAA, HelloTech appear in the top 10), not just HVAC contractors. Overlap with core AC cluster peers is 3, which is on the low end. **Mitigation:** Frame the page tightly as HVAC thermostat integration ("works with your AC system, heat pump, and furnace") to avoid cannibalization with a potential future smart-home page. Do not target "smart home installation" as a keyword.

**Furnace Maintenance vs HVAC Maintenance Plans** — These two are the closest in intent across the entire site. Risk of cannibalization exists if both target "furnace tune up Murrieta." **Mitigation:** Furnace Maintenance targets single-appliance annual service ("furnace tune-up Murrieta"). HVAC Maintenance Plans targets the subscription/contract angle ("HVAC maintenance plan Inland Empire," "HVAC service contract"). Keep primary keywords differentiated. The Plans page is the upsell destination from all 14 leaves.

---

## 2. Seed Keywords — All 17 Pages

### Hub Pages (3)

**H1: `/services/hvac/ac`**
Primary: `AC repair Murrieta CA` / `air conditioning service Murrieta`  
Supporting: `AC repair Temecula CA`, `air conditioning repair Inland Empire`, `HVAC company Murrieta`, `AC service Menifee CA`, `AC repair Wildomar CA`, `air conditioner service Lake Elsinore`  
Intent: Commercial (hub = browse/compare, not a single transactional decision)

**H2: `/services/hvac/heating`**
Primary: `furnace repair Murrieta CA` / `heating repair Murrieta CA`  
Supporting: `furnace repair Temecula CA`, `heating service Inland Empire`, `heating repair Menifee CA`, `HVAC heating Riverside CA`, `furnace service Corona CA`  
Intent: Commercial

**H3: `/services/hvac/indoor-air-quality`**
Primary: `indoor air quality Murrieta CA` / `air quality services Inland Empire`  
Supporting: `indoor air quality Temecula`, `IAQ services Menifee CA`, `healthy home air Riverside CA`, `air quality testing Murrieta`  
Intent: Informational/Commercial mixed

### Leaf Pages (14)

**AC-1: `/services/hvac/ac/ac-repair`**
Primary: `AC repair Murrieta CA`  
Supporting: `emergency AC repair Murrieta`, `24/7 AC repair Temecula`, `air conditioner not cooling Murrieta`, `AC repair Menifee CA`, `AC repair Wildomar CA`, `AC not working Inland Empire`, `air conditioner repair same day Riverside`  
Intent: Transactional (emergency trigger — high urgency)

**AC-2: `/services/hvac/ac/ac-installation`**
Primary: `AC installation Murrieta CA`  
Supporting: `new air conditioner installation Murrieta`, `AC replacement Temecula CA`, `central air installation Menifee`, `new AC system Inland Empire`, `AC installation cost Murrieta`, `central air conditioner Hemet CA`  
Intent: Transactional

**AC-3: `/services/hvac/ac/ac-maintenance`**
Primary: `AC maintenance Murrieta CA`  
Supporting: `AC tune up Murrieta`, `air conditioner tune up Temecula`, `AC service Menifee`, `annual AC maintenance Inland Empire`, `AC checkup Lake Elsinore`, `air conditioning service agreement Murrieta`  
Intent: Commercial

**AC-4: `/services/hvac/ac/mini-split`**
Primary: `mini split installation Murrieta CA`  
Supporting: `ductless AC installation Murrieta`, `ductless mini split Temecula CA`, `ductless air conditioner Menifee`, `mini split AC Wildomar`, `ductless cooling system Inland Empire`, `mini split installation cost Murrieta`  
Intent: Transactional

**AC-5: `/services/hvac/ac/thermostat-installation`**
Primary: `thermostat installation Murrieta CA`  
Supporting: `smart thermostat installation Murrieta`, `programmable thermostat Temecula CA`, `Nest thermostat installation Murrieta`, `ecobee installation Inland Empire`, `thermostat replacement Menifee CA`, `HVAC thermostat upgrade Murrieta`  
Intent: Transactional

**H-1: `/services/hvac/heating/furnace-repair`**
Primary: `furnace repair Murrieta CA`  
Supporting: `emergency furnace repair Murrieta`, `furnace not working Temecula`, `heater repair Murrieta CA`, `furnace repair Menifee CA`, `furnace service Wildomar CA`, `gas furnace repair Inland Empire`, `furnace repair same day Riverside`  
Intent: Transactional (emergency trigger)

**H-2: `/services/hvac/heating/furnace-installation`**
Primary: `furnace installation Murrieta CA`  
Supporting: `new furnace installation Murrieta`, `furnace replacement Temecula CA`, `gas furnace installation Menifee`, `furnace installation cost Inland Empire`, `furnace replacement Hemet CA`, `HVAC furnace upgrade Murrieta`  
Intent: Transactional

**H-3: `/services/hvac/heating/furnace-maintenance`**
Primary: `furnace maintenance Murrieta CA`  
Supporting: `furnace tune up Murrieta CA`, `annual furnace service Temecula`, `furnace checkup Menifee CA`, `heater tune up Inland Empire`, `furnace inspection Wildomar`, `gas furnace service Riverside CA`  
Intent: Commercial

**H-4: `/services/hvac/heating/heat-pump`**
Primary: `heat pump installation Murrieta CA`  
Supporting: `heat pump repair Murrieta CA`, `heat pump system Temecula CA`, `heat pump replacement Inland Empire`, `heat pump service Menifee CA`, `heat pump installation cost Riverside`, `electric heat pump Murrieta`  
Intent: Commercial/Transactional mixed

**H-5: `/services/hvac/heating/hvac-maintenance-plans`**
Primary: `HVAC maintenance plan Murrieta CA`  
Supporting: `HVAC service contract Inland Empire`, `HVAC tune up plan Murrieta`, `preventive HVAC service Temecula`, `HVAC maintenance agreement Menifee`, `annual HVAC service plan Riverside`, `HVAC comfort club Murrieta`  
Intent: Commercial (subscription/contract)

**IAQ-1: `/services/hvac/indoor-air-quality/air-duct-cleaning`**
Primary: `air duct cleaning Murrieta CA`  
Supporting: `duct cleaning Temecula CA`, `HVAC duct cleaning Menifee`, `whole home duct cleaning Inland Empire`, `air duct cleaning cost Murrieta`, `duct cleaning service Riverside CA`, `dryer vent cleaning Murrieta`  
Intent: Transactional

**IAQ-2: `/services/hvac/indoor-air-quality/air-filtration`**
Primary: `air filtration system Murrieta CA`  
Supporting: `whole home air purifier Murrieta`, `HVAC air purifier installation Temecula`, `whole house filtration system Menifee`, `home air purifier installation Inland Empire`, `air scrubber installation Murrieta`, `HEPA filtration system Riverside`  
Intent: Transactional

**IAQ-3: `/services/hvac/indoor-air-quality/whole-home-humidifier`**
Primary: `whole home humidifier installation Murrieta CA`  
Supporting: `whole house humidifier Temecula CA`, `humidifier installation Menifee CA`, `HVAC humidifier Inland Empire`, `steam humidifier installation Murrieta`, `house humidifier Riverside CA`, `humidifier for dry air Murrieta`  
Intent: Transactional

**IAQ-4: `/services/hvac/indoor-air-quality/whole-home-dehumidifier`**
Primary: `whole home dehumidifier installation Murrieta CA`  
Supporting: `dehumidifier installation Temecula CA`, `whole house dehumidifier Menifee`, `HVAC dehumidifier Inland Empire`, `basement dehumidifier Murrieta`, `moisture control system Riverside CA`, `whole home dehumidifier cost Murrieta`  
Intent: Transactional

---

## 3. Internal Link Matrix

### Legend
- **[M]** Mandatory (bidirectional spoke-hub)
- **[R]** Recommended (spoke-spoke within cluster)
- **[O]** Optional (cross-cluster or cross-vertical)

---

### HVAC AC Hub — `/services/hvac/ac`

**Links OUT (hub links to all leaves):**
| Target | Anchor Text Variant |
|--------|---------------------|
| /services/hvac/ac/ac-repair [M] | "AC repair services", "emergency air conditioning repair" |
| /services/hvac/ac/ac-installation [M] | "AC installation", "new air conditioner installation" |
| /services/hvac/ac/ac-maintenance [M] | "AC maintenance", "air conditioning tune-up" |
| /services/hvac/ac/mini-split [M] | "mini-split installation", "ductless AC systems" |
| /services/hvac/ac/thermostat-installation [M] | "thermostat installation", "smart thermostat upgrade" |
| /services/hvac/heating [O] | "heating services", "furnace and heat pump services" |
| /services/hvac/indoor-air-quality [O] | "indoor air quality", "air filtration and duct cleaning" |

**Links IN (pages that must link to this hub):**
| Source | Anchor Text Variant |
|--------|---------------------|
| /services/hvac/ac/ac-repair [M] | "AC services", "our air conditioning services" |
| /services/hvac/ac/ac-installation [M] | "AC services", "full air conditioning service menu" |
| /services/hvac/ac/ac-maintenance [M] | "AC services", "all cooling services" |
| /services/hvac/ac/mini-split [M] | "AC services", "ductless and central AC" |
| /services/hvac/ac/thermostat-installation [M] | "AC services", "HVAC thermostat and cooling" |
| Homepage (/ ) [M] | "AC repair and installation", "air conditioning services" |
| /services page [R] | "AC services Murrieta", "air conditioning" |

---

### HVAC Heating Hub — `/services/hvac/heating`

**Links OUT:**
| Target | Anchor Text Variant |
|--------|---------------------|
| /services/hvac/heating/furnace-repair [M] | "furnace repair", "emergency furnace repair" |
| /services/hvac/heating/furnace-installation [M] | "furnace installation", "new furnace" |
| /services/hvac/heating/furnace-maintenance [M] | "furnace maintenance", "annual furnace tune-up" |
| /services/hvac/heating/heat-pump [M] | "heat pump systems", "heat pump installation" |
| /services/hvac/heating/hvac-maintenance-plans [M] | "HVAC maintenance plans", "preventive service contracts" |
| /services/hvac/ac [O] | "AC services", "cooling and AC repair" |
| /services/hvac/indoor-air-quality [O] | "indoor air quality", "home air quality services" |

**Links IN:**
| Source | Anchor Text Variant |
|--------|---------------------|
| /services/hvac/heating/furnace-repair [M] | "heating services", "our furnace services" |
| /services/hvac/heating/furnace-installation [M] | "heating services", "all heating services" |
| /services/hvac/heating/furnace-maintenance [M] | "heating services", "furnace and heating" |
| /services/hvac/heating/heat-pump [M] | "heating services", "heating and heat pump services" |
| /services/hvac/heating/hvac-maintenance-plans [M] | "heating services", "all HVAC services" |
| Homepage [M] | "heating services", "furnace repair and installation" |
| /services page [R] | "heating services Murrieta", "furnace services" |

---

### HVAC Indoor Air Quality Hub — `/services/hvac/indoor-air-quality`

**Links OUT:**
| Target | Anchor Text Variant |
|--------|---------------------|
| /services/hvac/indoor-air-quality/air-duct-cleaning [M] | "air duct cleaning", "whole-home duct cleaning" |
| /services/hvac/indoor-air-quality/air-filtration [M] | "air filtration systems", "whole-home air purifiers" |
| /services/hvac/indoor-air-quality/whole-home-humidifier [M] | "whole-home humidifiers", "humidifier installation" |
| /services/hvac/indoor-air-quality/whole-home-dehumidifier [M] | "whole-home dehumidifiers", "dehumidifier installation" |
| /services/hvac/ac [O] | "air conditioning services", "AC maintenance" |
| /services/hvac/heating [O] | "heating services", "furnace services" |

**Links IN:**
| Source | Anchor Text Variant |
|--------|---------------------|
| /services/hvac/indoor-air-quality/air-duct-cleaning [M] | "indoor air quality services", "our IAQ services" |
| /services/hvac/indoor-air-quality/air-filtration [M] | "indoor air quality", "air quality services" |
| /services/hvac/indoor-air-quality/whole-home-humidifier [M] | "indoor air quality", "complete home air quality" |
| /services/hvac/indoor-air-quality/whole-home-dehumidifier [M] | "indoor air quality", "moisture and air quality services" |
| Homepage [M] | "indoor air quality services", "home air quality" |
| /services page [R] | "indoor air quality Murrieta", "air duct and filtration" |

---

### AC-1: `/services/hvac/ac/ac-repair`

**Links OUT:**
| Target | Anchor Text Variant | Type |
|--------|---------------------|------|
| /services/hvac/ac | "AC services", "all air conditioning services" | [M] |
| /services/hvac/ac/ac-maintenance | "AC maintenance plan", "prevent AC breakdowns with regular tune-ups" | [R] |
| /services/hvac/ac/ac-installation | "AC replacement", "new system installation" | [R] |
| /services/hvac/ac/thermostat-installation | "thermostat issues", "faulty thermostat replacement" | [R] |
| /services/hvac/heating/hvac-maintenance-plans | "HVAC maintenance plan", "prevent future repairs with a service plan" | [O] |
| /financing | "financing options", "no-surprise financing" | [O] |

**Links IN (minimum 3 required — all satisfied):**
- /services/hvac/ac [M]
- /services/hvac/ac/ac-maintenance [R] — "AC tune-ups help prevent emergency repairs"
- /services/hvac/ac/ac-installation [R] — "repair or replace — compare options"
- Homepage [M] — featured emergency CTA section

---

### AC-2: `/services/hvac/ac/ac-installation`

**Links OUT:**
| Target | Anchor Text Variant | Type |
|--------|---------------------|------|
| /services/hvac/ac | "AC services", "cooling services" | [M] |
| /services/hvac/ac/ac-repair | "AC repair", "before replacing — check if repair makes sense" | [R] |
| /services/hvac/ac/ac-maintenance | "AC maintenance", "protect your new system with annual service" | [R] |
| /services/hvac/ac/mini-split | "ductless mini-split systems", "no-duct installation option" | [R] |
| /services/hvac/heating/heat-pump | "heat pump systems", "dual heating and cooling option" | [O] |
| /financing | "AC financing", "0% financing options" | [O] |

**Links IN:**
- /services/hvac/ac [M]
- /services/hvac/ac/ac-repair [R] — "when repair costs more than replacement"
- /services/hvac/ac/ac-maintenance [R] — "new system? schedule your first tune-up"
- /services/hvac/ac/mini-split [R] — "central AC is another installation option"

---

### AC-3: `/services/hvac/ac/ac-maintenance`

**Links OUT:**
| Target | Anchor Text Variant | Type |
|--------|---------------------|------|
| /services/hvac/ac | "AC services", "full air conditioning services" | [M] |
| /services/hvac/ac/ac-repair | "AC repair", "if your AC needs more than a tune-up" | [R] |
| /services/hvac/ac/ac-installation | "AC replacement", "when maintenance is no longer enough" | [R] |
| /services/hvac/heating/furnace-maintenance | "furnace tune-up", "annual heating maintenance" | [O] |
| /services/hvac/heating/hvac-maintenance-plans | "HVAC maintenance plan", "combine AC and heating service in one plan" | [R] |

**Links IN:**
- /services/hvac/ac [M]
- /services/hvac/ac/ac-repair [R] — "prevent repairs with regular AC maintenance"
- /services/hvac/ac/ac-installation [R] — "after installation, schedule ongoing maintenance"
- /services/hvac/heating/hvac-maintenance-plans [R] — "AC maintenance is included in our HVAC plan"
- /services/maintenance-plans (plumbing) [O] — "combine with your plumbing maintenance plan"

---

### AC-4: `/services/hvac/ac/mini-split`

**Links OUT:**
| Target | Anchor Text Variant | Type |
|--------|---------------------|------|
| /services/hvac/ac | "AC services", "all cooling options" | [M] |
| /services/hvac/ac/ac-installation | "central AC installation", "traditional central air alternative" | [R] |
| /services/hvac/ac/ac-maintenance | "mini-split maintenance", "AC maintenance services" | [R] |
| /services/hvac/ac/thermostat-installation | "smart thermostat", "pair your mini-split with a smart thermostat" | [O] |
| /financing | "mini-split financing", "financing your new system" | [O] |

**Links IN:**
- /services/hvac/ac [M]
- /services/hvac/ac/ac-installation [R] — "ductless systems for homes without existing ductwork"
- /services/hvac/ac/ac-repair [R] — "mini-split repair and ductless AC service"
- /services/hvac/ac/ac-maintenance [O] — "ductless system tune-ups"

---

### AC-5: `/services/hvac/ac/thermostat-installation`

**Links OUT:**
| Target | Anchor Text Variant | Type |
|--------|---------------------|------|
| /services/hvac/ac | "AC services", "air conditioning services" | [M] |
| /services/hvac/ac/ac-repair | "AC not responding to thermostat", "AC repair" | [R] |
| /services/hvac/ac/ac-installation | "new AC system", "upgrade your whole system" | [O] |
| /services/hvac/heating/furnace-repair | "furnace not responding to thermostat", "heating repair" | [R] |
| /services/hvac/heating/heat-pump | "heat pump thermostat compatibility", "heat pump systems" | [O] |

**Links IN:**
- /services/hvac/ac [M]
- /services/hvac/ac/ac-repair [R] — "thermostat failure is a common cause of AC problems"
- /services/hvac/ac/ac-installation [O] — "smart thermostat included with new system install"
- /services/hvac/heating/furnace-repair [R] — "thermostat issues can mimic furnace failure"

---

### H-1: `/services/hvac/heating/furnace-repair`

**Links OUT:**
| Target | Anchor Text Variant | Type |
|--------|---------------------|------|
| /services/hvac/heating | "heating services", "all furnace and heating services" | [M] |
| /services/hvac/heating/furnace-installation | "furnace replacement", "when repair doesn't make sense" | [R] |
| /services/hvac/heating/furnace-maintenance | "furnace maintenance", "prevent future breakdowns" | [R] |
| /services/hvac/ac/thermostat-installation | "thermostat repair", "is your thermostat causing the issue?" | [R] |
| /services/hvac/heating/hvac-maintenance-plans | "HVAC maintenance plan", "avoid surprise furnace repairs" | [O] |
| /financing | "furnace repair financing" | [O] |

**Links IN:**
- /services/hvac/heating [M]
- /services/hvac/heating/furnace-installation [R] — "compare repair vs. replacement costs"
- /services/hvac/heating/furnace-maintenance [R] — "missed tune-ups lead to furnace breakdowns"
- /services/hvac/ac/thermostat-installation [R] — "thermostat-related heating problems"
- Homepage [M] — emergency heating CTA

---

### H-2: `/services/hvac/heating/furnace-installation`

**Links OUT:**
| Target | Anchor Text Variant | Type |
|--------|---------------------|------|
| /services/hvac/heating | "heating services", "all furnace services" | [M] |
| /services/hvac/heating/furnace-repair | "furnace repair", "repair before replacing" | [R] |
| /services/hvac/heating/furnace-maintenance | "furnace maintenance", "protect your new furnace" | [R] |
| /services/hvac/heating/heat-pump | "heat pump systems", "consider a heat pump instead" | [R] |
| /financing | "furnace financing", "installation financing options" | [O] |

**Links IN:**
- /services/hvac/heating [M]
- /services/hvac/heating/furnace-repair [R] — "when repair costs approach replacement"
- /services/hvac/heating/heat-pump [R] — "furnace vs. heat pump comparison"
- /services/hvac/heating/furnace-maintenance [R] — "after installation, schedule annual maintenance"

---

### H-3: `/services/hvac/heating/furnace-maintenance`

**Links OUT:**
| Target | Anchor Text Variant | Type |
|--------|---------------------|------|
| /services/hvac/heating | "heating services", "all furnace and heating services" | [M] |
| /services/hvac/heating/furnace-repair | "furnace repair", "if inspection reveals a problem" | [R] |
| /services/hvac/heating/furnace-installation | "furnace replacement", "when your furnace is beyond maintenance" | [R] |
| /services/hvac/heating/hvac-maintenance-plans | "HVAC maintenance plan", "bundle furnace and AC tune-ups" | [R] |
| /services/hvac/ac/ac-maintenance | "AC tune-up", "schedule AC maintenance too" | [O] |
| /services/maintenance-plans | "plumbing maintenance plan", "bundle with home plumbing care" | [O] |

**Links IN:**
- /services/hvac/heating [M]
- /services/hvac/heating/furnace-repair [R] — "regular maintenance prevents furnace breakdowns"
- /services/hvac/heating/furnace-installation [R] — "new furnace + first-year maintenance"
- /services/hvac/heating/hvac-maintenance-plans [R] — "furnace tune-up is part of the annual plan"

---

### H-4: `/services/hvac/heating/heat-pump`

**Links OUT:**
| Target | Anchor Text Variant | Type |
|--------|---------------------|------|
| /services/hvac/heating | "heating services", "all heating options" | [M] |
| /services/hvac/heating/furnace-installation | "furnace installation", "compare heat pump vs. furnace" | [R] |
| /services/hvac/heating/furnace-repair | "heating repair", "heat pump repair and service" | [R] |
| /services/hvac/ac/ac-installation | "AC installation", "heat pumps also provide cooling" | [R] |
| /services/hvac/heating/hvac-maintenance-plans | "HVAC maintenance plan", "heat pump service plans" | [O] |
| /financing | "heat pump financing", "system financing options" | [O] |

**Links IN:**
- /services/hvac/heating [M]
- /services/hvac/heating/furnace-installation [R] — "heat pump as alternative to gas furnace"
- /services/hvac/ac/ac-installation [R] — "heat pumps heat and cool — dual-purpose option"
- /services/hvac/heating/furnace-maintenance [O] — "heat pump maintenance also available"

---

### H-5: `/services/hvac/heating/hvac-maintenance-plans`

**Links OUT:**
| Target | Anchor Text Variant | Type |
|--------|---------------------|------|
| /services/hvac/heating | "heating services", "furnace services" | [M] |
| /services/hvac/ac/ac-maintenance | "AC tune-up", "AC maintenance included in plan" | [R] |
| /services/hvac/heating/furnace-maintenance | "furnace tune-up", "furnace service included" | [R] |
| /services/hvac/ac/ac-repair | "AC repair", "plan members get priority repair service" | [O] |
| /services/hvac/heating/furnace-repair | "furnace repair", "plan members get priority scheduling" | [O] |
| /services/maintenance-plans | "plumbing maintenance plan", "add plumbing coverage too" | [O] |

**Links IN:**
- /services/hvac/heating [M]
- /services/hvac/heating/furnace-maintenance [R] — "upgrade to a full HVAC plan"
- /services/hvac/ac/ac-maintenance [R] — "upgrade to a full HVAC plan covering both systems"
- /services/hvac/heating/heat-pump [O] — "heat pump service plan options"
- /services/hvac/heating/furnace-installation [O] — "new system + maintenance plan bundle"
- /services/hvac/ac/ac-installation [O] — "new AC + maintenance plan"

---

### IAQ-1: `/services/hvac/indoor-air-quality/air-duct-cleaning`

**Links OUT:**
| Target | Anchor Text Variant | Type |
|--------|---------------------|------|
| /services/hvac/indoor-air-quality | "indoor air quality services", "all IAQ services" | [M] |
| /services/hvac/indoor-air-quality/air-filtration | "air filtration systems", "clean ducts work better with whole-home filtration" | [R] |
| /services/hvac/indoor-air-quality/whole-home-humidifier | "humidifier installation", "balance moisture after cleaning" | [O] |
| /services/hvac/ac/ac-maintenance | "AC maintenance", "duct cleaning pairs with AC service" | [O] |
| /services/hvac/heating/furnace-maintenance | "furnace maintenance", "clean ducts complement furnace service" | [O] |

**Links IN:**
- /services/hvac/indoor-air-quality [M]
- /services/hvac/indoor-air-quality/air-filtration [R] — "start with duct cleaning before adding filtration"
- /services/hvac/ac/ac-maintenance [O] — "add duct cleaning to your AC tune-up"
- /services/hvac/heating/furnace-maintenance [O] — "duct cleaning improves furnace efficiency"

---

### IAQ-2: `/services/hvac/indoor-air-quality/air-filtration`

**Links OUT:**
| Target | Anchor Text Variant | Type |
|--------|---------------------|------|
| /services/hvac/indoor-air-quality | "indoor air quality services", "all IAQ services" | [M] |
| /services/hvac/indoor-air-quality/air-duct-cleaning | "air duct cleaning", "clean ducts before installing filtration" | [R] |
| /services/hvac/indoor-air-quality/whole-home-humidifier | "humidifier installation", "complete home air quality solution" | [R] |
| /services/hvac/indoor-air-quality/whole-home-dehumidifier | "dehumidifier installation", "control humidity and purify air" | [R] |
| /services/hvac/ac/ac-maintenance | "AC service", "filtration works with your AC system" | [O] |

**Links IN:**
- /services/hvac/indoor-air-quality [M]
- /services/hvac/indoor-air-quality/air-duct-cleaning [R] — "after duct cleaning, upgrade with whole-home filtration"
- /services/hvac/indoor-air-quality/whole-home-humidifier [R] — "combine filtration with humidity control"
- /services/hvac/indoor-air-quality/whole-home-dehumidifier [R] — "combine filtration with dehumidification"

---

### IAQ-3: `/services/hvac/indoor-air-quality/whole-home-humidifier`

**Links OUT:**
| Target | Anchor Text Variant | Type |
|--------|---------------------|------|
| /services/hvac/indoor-air-quality | "indoor air quality services", "all IAQ services" | [M] |
| /services/hvac/indoor-air-quality/whole-home-dehumidifier | "dehumidifier installation", "moisture levels too high instead?" | [R] |
| /services/hvac/indoor-air-quality/air-filtration | "air filtration", "combine with whole-home air purification" | [R] |
| /services/hvac/indoor-air-quality/air-duct-cleaning | "duct cleaning", "clean ducts for better humidity distribution" | [O] |
| /services/hvac/heating/furnace-maintenance | "furnace service", "humidifiers integrate with your furnace" | [O] |

**Links IN:**
- /services/hvac/indoor-air-quality [M]
- /services/hvac/indoor-air-quality/whole-home-dehumidifier [R] — "too dry instead of too humid?"
- /services/hvac/indoor-air-quality/air-filtration [R] — "complete air quality: filtration + humidification"
- /services/hvac/indoor-air-quality/air-duct-cleaning [O] — "humidity balance after duct cleaning"

---

### IAQ-4: `/services/hvac/indoor-air-quality/whole-home-dehumidifier`

**Links OUT:**
| Target | Anchor Text Variant | Type |
|--------|---------------------|------|
| /services/hvac/indoor-air-quality | "indoor air quality services", "all IAQ services" | [M] |
| /services/hvac/indoor-air-quality/whole-home-humidifier | "humidifier installation", "air too dry instead?" | [R] |
| /services/hvac/indoor-air-quality/air-filtration | "air filtration", "pair dehumidification with whole-home filtration" | [R] |
| /services/hvac/indoor-air-quality/air-duct-cleaning | "duct cleaning", "clean ducts reduce mold risk" | [O] |
| /services/hvac/ac/ac-maintenance | "AC service", "your AC removes some moisture — annual tune-up helps" | [O] |

**Links IN:**
- /services/hvac/indoor-air-quality [M]
- /services/hvac/indoor-air-quality/whole-home-humidifier [R] — "humidity too high instead of too low?"
- /services/hvac/indoor-air-quality/air-filtration [R] — "dehumidification and air purification together"
- /services/hvac/indoor-air-quality/air-duct-cleaning [O] — "mold-related duct cleaning needs"

---

## 4. Cross-Vertical Links — HVAC to Existing Plumbing Pages

These are the natural bridge points. Do not force links — only use where there is genuine topical relevance.

| HVAC Page | Plumbing Page | Anchor Text | Rationale |
|-----------|---------------|-------------|-----------|
| /services/hvac/heating/hvac-maintenance-plans | /services/maintenance-plans | "plumbing maintenance plan", "add plumbing protection to your home comfort plan" | Strongest natural bridge — same subscription model, same customer |
| /services/hvac/heating/furnace-maintenance | /services/maintenance-plans | "plumbing maintenance plan", "protect your whole home" | Annual maintenance upsell |
| /services/hvac/ac/ac-maintenance | /services/maintenance-plans | "plumbing maintenance plan", "bundle home maintenance" | Same upsell logic |
| /services/hvac/indoor-air-quality/air-duct-cleaning | /services/water-damage | "water damage", "if mold is present — check for plumbing leaks too" | Mold/moisture cross-link; relevant only in body copy context |
| /services/hvac/indoor-air-quality/whole-home-dehumidifier | /services/water-damage | "water damage restoration", "excess moisture can signal a plumbing issue" | Same mold/moisture logic |
| /services/hvac/heating/heat-pump | /services/water-heater-service | "water heater service", "many heat pump systems include water heating" | Relevant for heat pump water heater upsell |

**Reverse bridges (plumbing pages linking to HVAC):**  
The seo-writer should add a brief HVAC callout module to:
- /services/maintenance-plans → links to /services/hvac/heating/hvac-maintenance-plans ("Add HVAC coverage")
- /services/water-damage → links to /services/hvac/indoor-air-quality ("Poor indoor air quality after water damage?")

---

## 5. Site Navigation Links IN — From Existing Global Pages

| Source Page | HVAC Pages It Should Link To | Notes |
|-------------|------------------------------|-------|
| Homepage (/) | All 3 hubs + AC Repair + Furnace Repair (emergency CTAs) | Add HVAC to services grid and hero secondary CTA |
| /services | All 3 hubs — card or section links | Services page is the master directory |
| /financing | All 3 hubs + high-ticket leaves (AC Install, Furnace Install, Heat Pump, Mini-Split) | Financing page should reference HVAC systems as eligible |
| /about-us | All 3 hubs (general "HVAC services" link in body) | One mention tying HVAC expansion to company story |
| /reviews | No specific HVAC links needed — general trust page | |
| /frequently-asked-questions | FAQ items can link to specific leaves contextually | Web dev task: add HVAC FAQ section |

---

## 6. Hub Page Content Briefs (3 Hubs)

### Hub A: `/services/hvac/ac`
**H1:** Air Conditioning Services in Murrieta & the Inland Empire  
**Intent:** Commercial — homeowner is comparing options or looking for a reliable local AC contractor before committing to a specific service  
**What this hub covers:** Overview of all 5 AC services; seasonal relevance (Inland Empire summers); brief trust block (licensed CA HVAC contractor, service area cities); leaf cards with short description + CTA  
**What it delegates to leaves:** All service-specific detail, pricing discussion, process descriptions, FAQs — this hub does not describe how AC repair works  
**Recommended layout:**
1. H1 + brief intro (2–3 sentences, mention service area)
2. Trust/credibility strip (license, years, service area cities)
3. Service cards — one card per leaf (AC Repair, AC Installation, AC Maintenance, Mini-Split, Thermostat) — each with 2-sentence description, CTA button
4. "Why Choose Us" block (generic — see brand-vertical dissonance note below)
5. Service area city grid
6. CTA / contact form

### Hub B: `/services/hvac/heating`
**H1:** Heating Services in Murrieta & the Inland Empire  
**Intent:** Commercial — homeowner with a heating system question, not yet in emergency mode  
**What this hub covers:** Overview of all 5 heating services; seasonal relevance (Inland Empire winters — mild but real, especially Hemet/Menifee elevation areas); leaf cards; trust block  
**What it delegates to leaves:** Furnace-specific diagnostics, installation sizing, maintenance checklists, heat pump technical detail, plan pricing — all on leaves  
**Recommended layout:** Same card-based structure as AC hub. Emphasize that Gardner serves the full Inland Empire — heating needs vary between coastal-influence Murrieta and inland Hemet/San Jacinto

### Hub C: `/services/hvac/indoor-air-quality`
**H1:** Indoor Air Quality Services in Murrieta & the Inland Empire  
**Intent:** Informational/Commercial mixed — homeowner is often researching a problem (allergies, musty smell, dry skin) rather than shopping a specific service  
**What this hub covers:** Brief explainer on why IAQ matters in Inland Empire specifically (dry desert air in summer, smoke season, wildfire particulates); the 4 service categories as cards; trust block  
**What it delegates to leaves:** Technical product explanations (HEPA vs. UV, humidifier types), process walkthroughs, cost ranges  
**Special note for this hub:** This page should have the most educational intro paragraph of the three hubs — the customer often does not know which IAQ service they need. A brief symptom-to-service matcher ("If your home feels dry → humidifier, if you notice dust buildup → duct cleaning or filtration") can improve engagement and reduce bounce  
**Recommended layout:**
1. H1 + 2-paragraph educational intro
2. Symptom/problem cards that link to leaves
3. Why IAQ matters in the Inland Empire (local angle: wildfire smoke, desert dust, seasonal allergies)
4. Trust block
5. Service area cities

---

## 7. Brand-Vertical Dissonance Flag — For seo-writer

**CLIENT BRAND:** Gardner Plumbing Co.  
**NEW VERTICAL:** HVAC  

Apply the agency's brand-vertical dissonance rule (documented in MEMORY.md, first identified on water-heater-sos AC Repair template):

**Rule:** Section H2s on HVAC pages must NOT include "Gardner Plumbing" in the heading text. The brand name signals plumbing expertise to readers — seeing "Why Gardner Plumbing Handles Your AC Repair" creates a trust mismatch.

**Compliant H2 examples:**
- "Why Inland Empire Homeowners Trust Our HVAC Team"
- "What to Expect When You Call for AC Repair"
- "Your Local Murrieta HVAC Contractor"
- "Serving Murrieta, Temecula, and the Inland Empire"

**Non-compliant (do not use):**
- "Why Choose Gardner Plumbing for Furnace Repair"
- "Gardner Plumbing's HVAC Services"
- "Gardner Plumbing — Your Murrieta AC Company"

**Single permitted brand mention in body prose:** One canonical entity anchor per page, structured as: *"Gardner Plumbing Co. is a licensed HVAC contractor serving Murrieta, Temecula, and the greater Inland Empire (CA Contractor's License #[insert])."* This is the AIO entity anchor — one per page, in the intro or about section, never in an H2.

**seo-writer must check this on every one of the 17 pages before delivery.**

---

## 8. Pre-Delivery Validation Summary

| Check | Status |
|-------|--------|
| No two pages share the same primary keyword | Pass — each leaf has a distinct primary |
| Every spoke has at least 3 incoming internal links | Pass — verified in matrix above |
| Every spoke links to its parent hub | Pass — [M] links documented for all 14 leaves |
| Each hub links to all its leaves | Pass — documented above |
| No orphan pages | Pass — all 17 pages have incoming links from hub + sibling spokes + homepage/services |
| Template = Commercial/Transactional for leaves | Pass — intent classified per leaf above |
| Hub template = Commercial/Informational | Pass |
| Word count targets (pillar 2500–4000, spoke 1200–1800) | To be enforced by seo-writer — flag if any draft diverges |
| SERP overlap supports groupings | Pass — all clusters score 3+ within cluster |
| Brand-vertical dissonance rule documented | Pass — flagged above for seo-writer |
