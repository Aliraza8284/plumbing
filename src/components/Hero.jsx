// Hero.jsx
import { useState, useMemo, useRef, useEffect } from "react";
import { Phone, MapPin, ArrowRight, Star, ShieldCheck, Droplets, Waves, Fan, AlertTriangle, Loader2 } from "lucide-react";

/* Palette: #F6F4F2 paper | #425664 slate | #C6AD8F sand | #1f2a33 ink */

const PHONE = "+1 (844) 212-91-86";
const TEL = "tel:+18442129186";

const RATING = "4.9";
const REVIEW_COUNT = "2.4K";

/* Local image — public/images/hero-plumber.jpg mein rakh dein */
const HERO_IMAGE = "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg";
const DATA_URL = "/us-zips.json";
const ZIP_API = "https://api.zippopotam.us/us";
const GEOCODER_URL = "https://geocoding-api.open-meteo.com/v1/search";
const OSM_URL = "https://nominatim.openstreetmap.org/search";

const TABS = [
  { name: "Plumbing", Icon: Droplets },
  { name: "Sewer", Icon: Waves },
  { name: "HVAC", Icon: Fan },
  { name: "Emergency", Icon: AlertTriangle },
];

const AREAS = [
  { city: "Burbank", zips: ["91501", "91502", "91505", "91506", "91521"], response: "42 min", techs: 12, reviews: 842, neighborhoods: "Downtown, Magnolia Park, Media District, Rancho" },
  { city: "Glendale", zips: ["91201", "91202", "91203", "91204", "91205", "91206"], response: "48 min", techs: 11, reviews: 903, neighborhoods: "Brand Blvd, Adams Hill, Chevy Chase, Verdugo" },
  { city: "Pasadena", zips: ["91101", "91103", "91104", "91105", "91106", "91107"], response: "52 min", techs: 13, reviews: 1088, neighborhoods: "Old Town, Caltech, Bungalow Heaven, Playhouse" },
  { city: "Hollywood", zips: ["90028", "90038", "90068", "90046"], response: "28 min", techs: 15, reviews: 1124, neighborhoods: "Walk of Fame, Hollywood Hills, Melrose, Thai Town" },
  { city: "Santa Monica", zips: ["90401", "90402", "90403", "90404", "90405"], response: "55 min", techs: 9, reviews: 967, neighborhoods: "Ocean Ave, Montana, Wilshire, Pico" },
  { city: "Long Beach", zips: ["90802", "90803", "90804", "90805", "90806", "90807"], response: "65 min", techs: 14, reviews: 1203, neighborhoods: "Downtown, Belmont Shore, Naples, Bixby" },
  { city: "Culver City", zips: ["90230", "90231", "90232"], response: "45 min", techs: 7, reviews: 541, neighborhoods: "Downtown, Helms, Fox Hills, Sunkist Park" },
  { city: "Beverly Hills", zips: ["90209", "90210", "90211", "90212"], response: "50 min", techs: 8, reviews: 412, neighborhoods: "Rodeo Drive, Trousdale, Century City, Flats" },
  { city: "Torrance", zips: ["90501", "90502", "90503", "90504", "90505"], response: "60 min", techs: 10, reviews: 738, neighborhoods: "Old Torrance, Southwood, Walteria, Hickory" },
  { city: "Pomona", zips: ["91766", "91767", "91768", "91769"], response: "70 min", techs: 6, reviews: 489, neighborhoods: "Downtown, Lincoln Park, Ganesha, Phillips Ranch" },
];

const CHIPS = ["Hollywood, CA", "Austin, TX", "90028", "10001"];

const US_STATES = {
  AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas", CA: "California", CO: "Colorado", CT: "Connecticut",
  DE: "Delaware", DC: "District of Columbia", FL: "Florida", GA: "Georgia", HI: "Hawaii", ID: "Idaho", IL: "Illinois",
  IN: "Indiana", IA: "Iowa", KS: "Kansas", KY: "Kentucky", LA: "Louisiana", ME: "Maine", MD: "Maryland",
  MA: "Massachusetts", MI: "Michigan", MN: "Minnesota", MS: "Mississippi", MO: "Missouri", MT: "Montana",
  NE: "Nebraska", NV: "Nevada", NH: "New Hampshire", NJ: "New Jersey", NM: "New Mexico", NY: "New York",
  NC: "North Carolina", ND: "North Dakota", OH: "Ohio", OK: "Oklahoma", OR: "Oregon", PA: "Pennsylvania",
  RI: "Rhode Island", SC: "South Carolina", SD: "South Dakota", TN: "Tennessee", TX: "Texas", UT: "Utah",
  VT: "Vermont", VA: "Virginia", WA: "Washington", WV: "West Virginia", WI: "Wisconsin", WY: "Wyoming", PR: "Puerto Rico",
  GU: "Guam", VI: "U.S. Virgin Islands", AS: "American Samoa", MP: "Northern Mariana Islands",
};
const NAME_TO_ABBR = Object.fromEntries(Object.entries(US_STATES).map(([a, n]) => [n.toLowerCase(), a]));

/* ---------- helpers ---------- */

function parseState(token) {
  const t = token.trim();
  if (/^[A-Za-z]{2}$/.test(t) && US_STATES[t.toUpperCase()]) return t.toUpperCase();
  return NAME_TO_ABBR[t.toLowerCase()] || null;
}

function parseQuery(raw) {
  const q = raw.trim().replace(/\s+/g, " ");
  if (/^\d{5}(-\d{4})?$/.test(q)) return { type: "zip", zip: q.slice(0, 5) };
  if (q.length < 2) return { type: "none" };

  if (q.includes(",")) {
    const [c, ...rest] = q.split(",");
    const city = c.trim();
    const abbr = parseState(rest.join(" "));
    if (city && abbr) return { type: "cityState", city, abbr };
    return { type: "city", city: city || q };
  }

  const words = q.split(" ");
  for (const n of [2, 1]) {
    if (words.length > n) {
      const abbr = parseState(words.slice(-n).join(" "));
      if (abbr) return { type: "cityState", city: words.slice(0, -n).join(" "), abbr, full: q };
    }
  }
  return { type: "city", city: q };
}

async function getJSON(url, signal) {
  const res = await fetch(url, { signal });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}

function dedupe(list) {
  const seen = new Set();
  return list.filter((p) => {
    const key = `${p.city}|${p.state}|${p.county}`.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

const norm = (s) =>
  String(s || "")
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/[-_/]/g, " ")
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\bst\b/g, "saint")
    .replace(/\bmt\b/g, "mount")
    .replace(/\bft\b/g, "fort")
    .replace(/\s+/g, " ")
    .trim();

function buildIndex(data) {
  const groups = new Map();
  for (const zip in data) {
    const [city, st, county, lat, lon] = data[zip];
    const key = `${norm(city)}|${st}`;
    let g = groups.get(key);
    if (!g) {
      g = { city, state: US_STATES[st] || st, abbr: st, county, zips: [], lat: 0, lon: 0 };
      groups.set(key, g);
    }
    g.zips.push(zip);
    g.lat += lat;
    g.lon += lon;
  }

  const byCity = new Map();
  for (const [key, g] of groups) {
    g.zips.sort();
    g.lat /= g.zips.length;
    g.lon /= g.zips.length;
    const name = key.split("|")[0];
    if (!byCity.has(name)) byCity.set(name, []);
    byCity.get(name).push(g);
  }
  return { data, byCityState: groups, byCity };
}

let localPromise = null;
function loadLocal() {
  if (!localPromise) {
    localPromise = fetch(DATA_URL)
      .then((r) => {
        if (!r.ok) throw new Error(`Dataset request failed: ${r.status}`);
        return r.json();
      })
      .then(buildIndex)
      .catch(() => {
        localPromise = null;
        return null;
      });
  }
  return localPromise;
}

function findLocal(idx, name, abbr) {
  const n = norm(name);
  if (n.length < 2) return [];

  if (abbr) {
    const hit = idx.byCityState.get(`${n}|${abbr}`);
    if (hit) return [hit];
  } else {
    const hits = idx.byCity.get(n);
    if (hits?.length) return hits;
  }

  if (n.length < 3) return [];
  const out = [];
  for (const [key, place] of idx.byCityState) {
    if (abbr && place.abbr !== abbr) continue;
    if (key.startsWith(n)) out.push(place);
    if (out.length >= 30) break;
  }
  return out;
}

function localLookup(idx, parsed) {
  if (parsed.type === "zip") {
    const r = idx.data[parsed.zip];
    if (!r) return null;
    const [city, st, county, lat, lon] = r;
    return { kind: "one", place: { city, state: US_STATES[st] || st, abbr: st, county, zips: [parsed.zip], lat, lon } };
  }

  let list =
    parsed.type === "cityState" ? findLocal(idx, parsed.city, parsed.abbr) : findLocal(idx, parsed.city, null);
  if (!list.length && parsed.full) list = findLocal(idx, parsed.full, null);
  if (!list.length) return null;
  if (list.length === 1) return { kind: "one", place: list[0] };
  const sorted = [...list].sort((a, b) => b.zips.length - a.zips.length);
  return { kind: "many", places: sorted.slice(0, 6) };
}

async function zipLookup(zip, signal) {
  const data = await getJSON(`${ZIP_API}/${zip}`, signal);
  const p = data?.places?.[0];
  if (!p) return null;
  return {
    city: p["place name"],
    state: p.state,
    abbr: p["state abbreviation"],
    zips: [data["post code"] || zip],
    lat: Number(p.latitude),
    lon: Number(p.longitude),
  };
}

async function cityStateLookup(city, abbr, signal) {
  const data = await getJSON(`${ZIP_API}/${abbr.toLowerCase()}/${encodeURIComponent(city.toLowerCase())}`, signal);
  if (!data?.places?.length) return null;
  const zips = [...new Set(data.places.map((p) => p["post code"]).filter(Boolean))].sort();
  return {
    city: data["place name"] || city,
    state: data.state || US_STATES[abbr],
    abbr,
    zips,
    lat: Number(data.places[0].latitude),
    lon: Number(data.places[0].longitude),
  };
}

async function geocode(city, signal, stateName) {
  const url = `${GEOCODER_URL}?name=${encodeURIComponent(city)}&count=100&language=en&format=json&countryCode=US`;
  const data = await getJSON(url, signal);
  let list = (data?.results || []).filter((r) => r.country_code === "US");
  if (stateName) list = list.filter((r) => (r.admin1 || "").toLowerCase() === stateName.toLowerCase());
  return dedupe(
    list.map((r) => ({
      city: r.name,
      state: r.admin1 || "",
      abbr: NAME_TO_ABBR[(r.admin1 || "").toLowerCase()] || "",
      county: r.admin2 || "",
      zips: r.postcodes || [],
      lat: r.latitude,
      lon: r.longitude,
    }))
  );
}

function fromOsm(r) {
  const a = r.address || {};
  const city = a.city || a.town || a.village || a.hamlet || a.municipality || a.borough || a.suburb;
  if (!city) return null;
  const iso = (a["ISO3166-2-lvl4"] || "").split("-")[1] || "";
  const abbr = US_STATES[iso] ? iso : NAME_TO_ABBR[(a.state || "").toLowerCase()] || "";
  const zips = [
    ...new Set(
      String(a.postcode || "")
        .split(";")
        .map((z) => z.trim().slice(0, 5))
        .filter((z) => /^\d{5}$/.test(z))
    ),
  ];
  return {
    city,
    state: a.state || US_STATES[abbr] || "",
    abbr,
    county: a.county || "",
    zips,
    lat: Number(r.lat),
    lon: Number(r.lon),
  };
}

async function osmSearch(city, signal, stateName) {
  const q = stateName ? `${city}, ${stateName}` : city;
  const base = `${OSM_URL}?q=${encodeURIComponent(q)}&countrycodes=us&format=jsonv2&addressdetails=1&limit=10&accept-language=en`;
  let data = await getJSON(`${base}&featuretype=settlement`, signal);
  if (!data?.length) data = await getJSON(base, signal);
  return dedupe((data || []).map(fromOsm).filter(Boolean));
}

async function osmZip(zip, signal) {
  const url = `${OSM_URL}?postalcode=${zip}&countrycodes=us&format=jsonv2&addressdetails=1&limit=1&accept-language=en`;
  const data = await getJSON(url, signal);
  const p = data?.length ? fromOsm(data[0]) : null;
  return p ? { ...p, zips: [zip] } : null;
}

async function addZips(place, signal) {
  if (place.zips.length || !place.abbr) return place;
  try {
    const found = await cityStateLookup(place.city, place.abbr, signal);
    return found ? { ...place, zips: found.zips } : place;
  } catch (err) {
    if (err?.name === "AbortError") throw err;
    return place;
  }
}

async function lookup(parsed, signal) {
  let attempts = 0;
  let failures = 0;

  attempts++;
  const idx = await loadLocal();
  if (!idx) failures++;
  else {
    const hit = localLookup(idx, parsed);
    if (hit) return hit;
  }

  const attempt = async (fn) => {
    attempts++;
    try {
      return await fn();
    } catch (e) {
      if (e?.name === "AbortError") throw e;
      failures++;
      return null;
    }
  };

  const fromList = async (list) => {
    if (!list || !list.length) return null;
    if (list.length === 1) return { kind: "one", place: await addZips(list[0], signal) };
    return { kind: "many", places: list.slice(0, 6) };
  };

  const nothing = () => {
    if (attempts > 0 && failures === attempts) throw new Error("All lookup services failed");
    return { kind: "none" };
  };

  const cityOnly = async (name) => {
    const a = await fromList(await attempt(() => geocode(name, signal)));
    if (a) return a;
    return fromList(await attempt(() => osmSearch(name, signal)));
  };

  if (parsed.type === "zip") {
    const a = await attempt(() => zipLookup(parsed.zip, signal));
    if (a) return { kind: "one", place: a };
    const b = await attempt(() => osmZip(parsed.zip, signal));
    return b ? { kind: "one", place: b } : nothing();
  }

  if (parsed.type === "cityState") {
    const stateName = US_STATES[parsed.abbr];
    const a = await attempt(() => cityStateLookup(parsed.city, parsed.abbr, signal));
    if (a) return { kind: "one", place: a };

    const b = await fromList(await attempt(() => geocode(parsed.city, signal, stateName)));
    if (b) return b;

    const c = await fromList(await attempt(() => osmSearch(parsed.city, signal, stateName)));
    if (c) return c;

    if (parsed.full) {
      const d = await cityOnly(parsed.full);
      if (d) return d;
    }
    return nothing();
  }

  const out = await cityOnly(parsed.city);
  return out || nothing();
}

function matchAreas(raw) {
  const q = raw.trim().toLowerCase();
  if (q.length < 2) return [];
  const digits = q.replace(/\s/g, "");
  const isZip = /^\d+$/.test(digits);
  return AREAS.filter(
    (a) =>
      a.city.toLowerCase().includes(q) ||
      a.neighborhoods.toLowerCase().includes(q) ||
      (isZip && a.zips.some((z) => z.startsWith(digits)))
  );
}

const areaFor = (p) =>
  AREAS.find((a) => p.zips.some((z) => a.zips.includes(z))) ||
  AREAS.find((a) => p.abbr === "CA" && a.city.toLowerCase() === p.city.toLowerCase()) ||
  null;

const zipLine = (zips) =>
  !zips.length ? "" : zips.length <= 4 ? `ZIP ${zips.join(", ")}` : `ZIP ${zips.slice(0, 4).join(", ")} and ${zips.length - 4} more`;

const placeLabel = (p) => (p.abbr ? `${p.city}, ${p.abbr}` : p.state ? `${p.city}, ${p.state}` : p.city);

const hasCoords = (p) => Number.isFinite(p?.lat) && Number.isFinite(p?.lon);

const mapSrc = (p) => {
  const d = (p.zips?.length || 0) > 3 ? 0.08 : 0.03;
  const box = [p.lon - d, p.lat - d * 0.6, p.lon + d, p.lat + d * 0.6].join(",");
  return `https://www.openstreetmap.org/export/embed.html?bbox=${box}&layer=mapnik&marker=${p.lat},${p.lon}`;
};
const mapLink = (p) => `https://www.openstreetmap.org/?mlat=${p.lat}&mlon=${p.lon}#map=14/${p.lat}/${p.lon}`;

function HeroPhoto() {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <div role="img" aria-label="Plumber at work" className="h-full w-full bg-[#425664]" />;
  }
  return (
    <img
      src={HERO_IMAGE}
      alt="Licensed plumber working on pipes"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover"
    />
  );
}

const Hero = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [choices, setChoices] = useState([]);
  const [status, setStatus] = useState("idle");
  const [activeTab, setActiveTab] = useState("Plumbing");
  const abortRef = useRef(null);

  useEffect(() => {
    loadLocal();
  }, []);

  useEffect(() => () => abortRef.current?.abort(), []);

  const isFiveDigits = /^\d{5}$/.test(query.trim());
  const suggestions = useMemo(
    () => (result || choices.length || status !== "idle" || isFiveDigits ? [] : matchAreas(query).slice(0, 5)),
    [query, result, choices, status, isFiveDigits]
  );

  const reset = () => {
    abortRef.current?.abort();
    setResult(null);
    setChoices([]);
    setStatus("idle");
  };

  const run = async (raw) => {
    const parsed = parseQuery(raw);
    if (parsed.type === "none") return;

    abortRef.current?.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;
    setStatus("loading");
    setResult(null);
    setChoices([]);

    try {
      const out = await lookup(parsed, ctrl.signal);
      if (ctrl.signal.aborted) return;
      if (out.kind === "one") {
        setResult(out.place);
        setStatus("idle");
      } else if (out.kind === "many") {
        setChoices(out.places);
        setStatus("idle");
      } else {
        setStatus("none");
      }
    } catch (err) {
      if (err?.name === "AbortError") return;
      const local = matchAreas(raw)[0];
      if (local) {
        setResult({ city: local.city, state: "California", abbr: "CA", zips: local.zips });
        setStatus("idle");
      } else {
        setStatus("error");
      }
    }
  };

  const onChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    reset();
    if (/^\d{5}$/.test(value.trim())) run(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    run(query);
  };

  const chipSearch = (chip) => {
    setQuery(chip);
    run(chip);
  };

  const pickSuggestion = (a) => {
    setQuery(a.city);
    setChoices([]);
    setStatus("idle");
    setResult({ city: a.city, state: "California", abbr: "CA", zips: a.zips });
  };

  const pickChoice = async (p) => {
    setChoices([]);
    setQuery(placeLabel(p));
    setResult(p);
    const ctrl = new AbortController();
    abortRef.current?.abort();
    abortRef.current = ctrl;
    try {
      const full = await addZips(p, ctrl.signal);
      if (!ctrl.signal.aborted) setResult(full);
    } catch {
      /* aborted by a newer search */
    }
  };

  const area = result ? areaFor(result) : null;

  return (
    <section className="gf-hero relative overflow-hidden bg-[#F6F4F2] text-[#1f2a33]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Nunito+Sans:wght@400;600;700;800&display=swap');
        .gf-hero { font-family: 'Nunito Sans', system-ui, sans-serif; }
        .gf-hero .gf-display { font-family: 'Young Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.01em; }
      `}</style>

      {/* Grid lines overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1f2a33 1px, transparent 1px), linear-gradient(to bottom, #1f2a33 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      {/* angled slate panel behind the photo */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[44%] bg-[#425664] lg:block"
        style={{ clipPath: "polygon(14% 0, 100% 0, 100% 100%, 0 100%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* ================= LEFT ================= */}
          <div className="lg:col-span-6">
            <h1 className="gf-display max-w-[16ch] text-[40px] leading-[1.05] sm:text-[58px]">
              Your home's plumbing, fixed right the first time.
            </h1>
            <p className="mt-5 max-w-[50ch] text-[17px] leading-[1.7] text-[#425664]">
              Family-owned for three generations. Licensed master plumbers, flat-rate pricing and a lifetime workmanship warranty on every job.
            </p>

            {/* ===== Area finder ===== */}
            <div className="mt-7 max-w-[540px] rounded-[12px] border border-[#1f2a33]/12 bg-white p-4 shadow-[0_12px_28px_-18px_rgba(31,42,51,0.35)] sm:p-5">
              <div role="tablist" aria-label="Service type" className="mb-4 grid grid-cols-4 gap-1 rounded-[8px] bg-[#F6F4F2] p-1">
                {TABS.map(({ name, Icon }) => (
                  <button
                    key={name}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === name}
                    onClick={() => setActiveTab(name)}
                    className={`flex items-center justify-center gap-1.5 rounded-[6px] px-1 py-2 text-[12.5px] font-bold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#425664] ${
                      activeTab === name ? "bg-[#425664] text-white" : "text-[#425664] hover:bg-[#425664]/10"
                    }`}
                  >
                    <Icon size={14} aria-hidden="true" />
                    <span>{name}</span>
                  </button>
                ))}
              </div>

              <p className="gf-display text-[20px] leading-tight">{activeTab} help near you</p>

              <form onSubmit={onSubmit} className="relative mt-3">
                <label htmlFor="area-search" className="mb-1.5 block text-[13px] text-[#425664]">
                  Enter any US ZIP code, or a city with its state
                </label>
                <div className="flex items-center gap-2 rounded-[8px] border border-[#1f2a33]/15 bg-[#F6F4F2] p-1.5 focus-within:border-[#425664] focus-within:ring-2 focus-within:ring-[#425664]/20">
                  <MapPin size={18} className="ml-2 shrink-0 text-[#8a6f4d]" aria-hidden="true" />
                  <input
                    id="area-search"
                    type="text"
                    value={query}
                    onChange={onChange}
                    autoComplete="off"
                    inputMode="text"
                    placeholder="For example: 90028 or Austin, TX"
                    className="min-w-0 flex-1 bg-transparent py-2 text-[15px] text-[#1f2a33] outline-none placeholder:text-[#425664]/50"
                  />
                  <button
                    type="submit"
                    aria-label="Find my area"
                    disabled={status === "loading"}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-[6px] bg-[#425664] text-white transition-colors duration-200 hover:bg-[#364753] disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664]"
                  >
                    {status === "loading" ? <Loader2 size={18} className="animate-spin" aria-hidden="true" /> : <ArrowRight size={18} aria-hidden="true" />}
                  </button>
                </div>

                {suggestions.length > 0 && (
                  <ul className="absolute inset-x-0 top-full z-30 mt-2 overflow-hidden rounded-[8px] border border-[#1f2a33]/12 bg-white shadow-lg">
                    {suggestions.map((s) => (
                      <li key={s.city}>
                        <button
                          type="button"
                          onClick={() => pickSuggestion(s)}
                          className="flex w-full items-center gap-3 px-3.5 py-2.5 text-left transition-colors hover:bg-[#F6F4F2] focus-visible:bg-[#F6F4F2] focus-visible:outline-none"
                        >
                          <MapPin size={16} className="shrink-0 text-[#8a6f4d]" aria-hidden="true" />
                          <span className="min-w-0 flex-1">
                            <span className="block text-[14.5px] font-bold leading-tight">{s.city}, CA</span>
                            <span className="block truncate text-[12.5px] text-[#425664]">{s.neighborhoods.split(",")[0]}</span>
                          </span>
                          <span className="shrink-0 text-[12.5px] font-semibold text-[#425664]">{s.response}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </form>

              <div className="mt-3 flex flex-wrap gap-2">
                {CHIPS.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => chipSearch(chip)}
                    className={`rounded-[6px] border px-3 py-1.5 text-[13px] font-bold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#425664] ${
                      query === chip
                        ? "border-[#425664] bg-[#425664] text-white"
                        : "border-[#1f2a33]/15 bg-white text-[#425664] hover:border-[#425664]"
                    }`}
                  >
                    {chip}
                  </button>
                ))}
              </div>

              <div aria-live="polite">
                {status === "loading" && <p className="mt-4 text-[14px] text-[#425664]">Looking up your area…</p>}

                {choices.length > 0 && (
                  <div className="mt-4">
                    <p className="text-[14px] font-bold">We found a few places with that name. Which one is yours?</p>
                    <ul className="mt-2 divide-y divide-[#1f2a33]/10 overflow-hidden rounded-[8px] border border-[#1f2a33]/12">
                      {choices.map((p, i) => (
                        <li key={`${p.city}-${p.state}-${p.county}-${i}`}>
                          <button
                            type="button"
                            onClick={() => pickChoice(p)}
                            className="flex w-full items-center gap-3 px-3.5 py-2.5 text-left transition-colors hover:bg-[#F6F4F2] focus-visible:bg-[#F6F4F2] focus-visible:outline-none"
                          >
                            <MapPin size={16} className="shrink-0 text-[#8a6f4d]" aria-hidden="true" />
                            <span className="min-w-0 flex-1">
                              <span className="block text-[14.5px] font-bold leading-tight">{p.city}, {p.state}</span>
                              {p.county && <span className="block truncate text-[12.5px] text-[#425664]">{p.county}</span>}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {result && (
                  <div className="mt-4 rounded-[10px] bg-[#425664] p-4 text-white">
                    <p className="text-[13px] font-semibold text-[#C6AD8F]">{area ? "Yes, we serve" : "Your area"}</p>
                    <p className="gf-display text-[22px] leading-tight">{placeLabel(result)}</p>
                    {result.state && result.abbr && <p className="mt-0.5 text-[13.5px] text-white/70">{result.state}</p>}
                    {result.zips.length > 0 && <p className="mt-1.5 text-[13.5px] text-white/80">{zipLine(result.zips)}</p>}

                    {hasCoords(result) && (
                      <div className="mt-3">
                        <div className="overflow-hidden rounded-[8px] border border-white/15">
                          <iframe
                            title={`Map of ${placeLabel(result)}`}
                            src={mapSrc(result)}
                            loading="lazy"
                            className="block h-[170px] w-full border-0"
                          />
                        </div>
                        <a
                          href={mapLink(result)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1.5 inline-block text-[12.5px] text-white/70 underline underline-offset-2 hover:text-white"
                        >
                          Open larger map
                        </a>
                      </div>
                    )}

                    {area && (
                      <dl className="mt-3 grid grid-cols-3 divide-x divide-white/15 rounded-[8px] bg-white/8 text-center">
                        <div className="px-2 py-2.5">
                          <dt className="text-[12px] text-white/65">Typical arrival</dt>
                          <dd className="mt-0.5 text-[15px] font-extrabold text-[#C6AD8F]">{area.response}</dd>
                        </div>
                        <div className="px-2 py-2.5">
                          <dt className="text-[12px] text-white/65">Technicians</dt>
                          <dd className="mt-0.5 text-[15px] font-extrabold">{area.techs}</dd>
                        </div>
                        <div className="px-2 py-2.5">
                          <dt className="text-[12px] text-white/65">Reviews</dt>
                          <dd className="mt-0.5 text-[15px] font-extrabold">{area.reviews}+</dd>
                        </div>
                      </dl>
                    )}

                    <a
                      href={TEL}
                      className="mt-3 flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#C6AD8F] py-3 text-[14.5px] font-bold text-[#1f2a33] transition-colors duration-200 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      <Phone size={15} aria-hidden="true" />
                      Call about {activeTab.toLowerCase()} in {result.city}
                    </a>
                  </div>
                )}

                {status === "none" && (
                  <div className="mt-4 rounded-[10px] border border-[#C6AD8F] bg-[#C6AD8F]/15 p-4">
                    <p className="text-[15px] font-bold leading-tight">We couldn't find that place</p>
                    <p className="mt-1.5 text-[14px] leading-[1.55] text-[#425664]">
                      Check the spelling, or try the ZIP code. You can also add the state, like "Springfield, IL". Or call us and we'll help.
                    </p>
                    <a href={TEL} className="mt-2.5 inline-flex items-center gap-2 text-[14.5px] font-bold underline underline-offset-2">
                      <Phone size={14} aria-hidden="true" />
                      {PHONE}
                    </a>
                  </div>
                )}

                {status === "error" && (
                  <div className="mt-4 rounded-[10px] border border-[#C6AD8F] bg-[#C6AD8F]/15 p-4">
                    <p className="text-[15px] font-bold leading-tight">The area search isn't available right now</p>
                    <p className="mt-1.5 text-[14px] leading-[1.55] text-[#425664]">Please try again in a moment, or call us and we'll check your area.</p>
                    <a href={TEL} className="mt-2.5 inline-flex items-center gap-2 text-[14.5px] font-bold underline underline-offset-2">
                      <Phone size={14} aria-hidden="true" />
                      {PHONE}
                    </a>
                  </div>
                )}
              </div>

              <p className="mt-4 flex items-center justify-center gap-2 border-t border-[#1f2a33]/10 pt-4 text-[13.5px] font-semibold text-[#425664]">
                <ShieldCheck size={16} className="text-[#8a6f4d]" aria-hidden="true" />
                Licensed, insured and bonded
              </p>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-[16px] bg-[#425664] shadow-[0_24px_48px_-24px_rgba(31,42,51,0.55)] sm:aspect-[5/4] sm:max-w-[560px] lg:ml-auto lg:aspect-[4/5] lg:max-h-[540px] lg:max-w-[460px]">
              <HeroPhoto />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1f2a33]/90 via-[#1f2a33]/50 to-transparent px-5 pb-5 pt-16 text-white">
                <p className="flex items-center gap-2 text-[15px] font-bold">
                  <Star size={16} className="fill-[#C6AD8F] text-[#C6AD8F]" aria-hidden="true" />
                  {RATING} average from {REVIEW_COUNT} reviews
                </p>
                <p className="mt-1 text-[14px] text-white/80">Licensed master plumbers and HVAC technicians</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;