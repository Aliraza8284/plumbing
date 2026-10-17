#!/usr/bin/env python3
"""
Builds public/us-zips.json: every US ZIP code with its city, state, county and
coordinates, from the free GeoNames postal code file (CC BY 4.0, credit GeoNames).

Run once from your project root (needs internet, Python 3, no extra packages):

    python3 build_zip_data.py

Re-run it every few months to pick up new ZIP codes.

Output format (one entry per ZIP):
    "90210": ["Beverly Hills", "CA", "Los Angeles", 34.0901, -118.4065]
"""
import io
import json
import os
import urllib.request
import zipfile

URL = "https://download.geonames.org/export/zip/US.zip"
OUT = os.path.join("public", "us-zips.json")


def main():
    print("Downloading", URL)
    raw = urllib.request.urlopen(URL, timeout=120).read()
    rows = zipfile.ZipFile(io.BytesIO(raw)).read("US.txt").decode("utf-8").splitlines()

    data = {}
    for line in rows:
        p = line.split("\t")
        if len(p) < 11:
            continue
        # GeoNames columns: 1 postal code, 2 place name, 4 state code, 5 county, 9 lat, 10 lon
        zip_code, place, state, county, lat, lon = p[1], p[2], p[4], p[5], p[9], p[10]
        if not (zip_code.isdigit() and len(zip_code) == 5 and lat and lon):
            continue
        data[zip_code] = [place, state, county, round(float(lat), 4), round(float(lon), 4)]

    os.makedirs("public", exist_ok=True)
    with open(OUT, "w", encoding="utf-8") as f:
        json.dump(data, f, separators=(",", ":"), ensure_ascii=False)

    size_mb = os.path.getsize(OUT) / 1e6
    print(f"Wrote {len(data):,} ZIP codes to {OUT} ({size_mb:.1f} MB, about a quarter of that once gzipped)")


if __name__ == "__main__":
    main()