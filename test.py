def flici_minim(n, flici, cutii):
    flici.sort()
    cutii.sort()
    
    suma_minima = sum(abs(flici[i] - cutii[i]) for i in range(n))
    return suma_minima

with open("input.txt", "r") as f:
    n = int(f.readline().strip())
    flici = list(map(int, f.readline().split()))
    cutii = list(map(int, f.readline().split()))

rezultat = flici_minim(n, flici, cutii)

with open("flici.out", "w") as f:
    f.write(str(rezultat))