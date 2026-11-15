import json, subprocess
d = json.load(open("src/topik/data.json", encoding="utf-8"))
p = d["potongan"][0]
daftar = [d["scenes"][n - 1] for n in p["scenes"]]
if isinstance(p.get("cta"), dict):
    daftar.append(p["cta"])
mulai = 0
for i, sc in enumerate(daftar):
    dur = max(round(sc["durasi"] * 30), 1)
    fr = mulai + min(dur - 8, 100)
    print(i + 1, sc["visual"], mulai, dur, flush=True)
    cmd = ["npx", "remotion", "still", "src/indexEngine.ts", "Vertikal", f"out/pr-s{i+1}.png", f"--frame={fr}", '--props={"potongan":0}']
    subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    mulai += dur
