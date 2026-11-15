T = {"PrBinance2": [("PrRekruterPalsu", 1.0, 70), ("PrCeoPalsuChat", 1.15, 20)],
     "PrBinance3": [("PrTugasMalware", 1.15, 50), ("PrPerangkatTerpisah", 1.0, 70)],
     "PrBinance4": [("PrCekResmi", 1.0, 80), ("PrRisiko", 1.25, 30)]}
A = '<svg viewBox="0 0 1080 1920" style={S}>'
Z = "    </div>\n  );\n};"
for fn, daftar in T.items():
    p = "src/engine/visuals/" + fn + ".tsx"
    s = open(p, encoding="utf-8").read()
    if "<Isi" in s:
        continue
    s = s.replace('useMasuk } from "./PrKomponen"', 'useMasuk, Isi } from "./PrKomponen"')
    for nama, k, oy in daftar:
        i = s.index("export const " + nama + ":")
        a = s.index(A, i)
        z = s.index(Z, a)
        s = s[:z] + "      </Isi>\n" + s[z:]
        s = s[:a] + "<Isi skala={" + str(k) + "} oy={" + str(oy) + "}>\n      " + s[a:]
    open(p, "w", encoding="utf-8").write(s)
    print(fn, "ok")
