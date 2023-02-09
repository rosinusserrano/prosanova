# Git Basics

Man kann mit Git sehr viel machen, aber wir benutzen nur die basics.

# Kleine Einführung

## Remote vs. Lokal

Mit Git kannst du Code mit einem *Remote*-Server (in unserem Fall Github) synchronisieren. Das Synchronisieren muss man aber manuell machen, das passiert nicht automatisch. Das heißt, das auf deinem Rechner *lokal* nicht unbedingt die Version ist, die auf Github angezeigt wird.

Das kann daran liegen, dass du selber etwas programmiert hast und noch nicht gepusht hast. Oder es kann daran liegen, dass jemand anderes Code auf den Server gepusht hat, und du noch nicht deine lokale Version des Codes auf den neuesten Stand synchronisiert hast.

Was du nicht auf den Remote-Server gepusht hast können andere nicht sehen.

## Wie synchronisiere ich meinen Code mit dem Remote-Server

### Eine bestehende Repository "clonen"

Wenn du eine Repo lokal auf deinen Rechner kopieren willst dann geh mit dem Terminal in den Ordner in dem der Ordner der Repo kopiert werden soll. Also sowas wie `/Benutzer/Projekte/` und nicht `/Benutzer/Projekte/DasNeueProjekt`, weil sonst in dem Ordner `DasNeueProjekt` der Ordner der Repo kopiert wird. Das ist nicht schlimm, ist aber meist nicht so gewollt.

Wenn du dann in dem Ordner bist, gibst du folgenden Befehl ein:

```bash
>>> git clone <URL_DER_REPOSITORY>
```

Dann sollte eine Kopie der Repository runtergeladen werden


### Code auf den Remote Server pushen

Angenommen du hast jetzt ein paar Dateien geändert, ein paar Dateien neu hinzugefügt, dann funktioniert das "pushen" in 3 Schritten:

**(1)**

die Dateien die man pushen will müssen zunächst "gestaged" werden:

```bash
>>> git add <datei1.html> <neue_datei.js>
```

oder wenn man faul ist:

```bash
>>> git add .  # das fügt alle geänderten Dateien hinzu
```

Das *stagen* der Dateien sagt Git erstmal nur welche Dateien für die Versionierung berücksichtig werden sollen. Mit Tools wie VSCode kann man sogar nur bestimmte Zeilen aus einer Datei stagen, aber das ist erstmal egal. 

**(2)**

Die Dateien die gestaged sind, müssen dann erstmal **committed** werden. Das committen hat folgenden Sinn: Git speichert sich den Zustand des Codes nach jedem Commit, was auch eigentlich das besondere an Git ist. Dadurch kann man nämlich den Code sozusagen zurückspulen und jede alte Version des Codes wieder hochziehen. Das ist praktisch, wenn man zum Beispiel ausversehen Code pusht, der die App kaputt macht. Dann kann man einfach den Commit rückgängig machen und alles ist wieder gut.

Committen tust du so:

```bash
>>> git commit -m "Eine kleine message mit der veränderung die man gemacht hat"
```

Optimalerweise hat man einen Workflow, in dem man kleine Änderungen am Code vornimmt, diese dann direkt committed, weiter Änderungen vornimmt und diese dann committed usw...

**(3)**

Die Commits sind aber noch nicht auf dem Remote-Server. Um alle commits, die noch nicht auf dem Server sind, auf den Server zu packen, gibt man folgenden Befehl ein:

```bash
>>> git push
```

*Manchmal kommen kleine Fehlermeldungen von git weil man noch nicht gesagt hat wohin gepusht werden soll. Aber darum kümmern wir uns wenns soweit ist*


### Aktuelle Version vom Server ziehen (*git pull*)

Wenn jemand anderes auf der gleichen Branch (dazu unten mehr) arbeitet (was vermieden werden sollte, aber immer mal wieder vorkommt, und auch eigentlich kein Problem ist), dann kann es wie oben beschrieben passieren, dass die andere Person Code auf den Remote-Server pusht. Das führt dazu, dass deine lokale Version auf deinem Rechner nicht mehr up-to-date ist. Das wiederum führt dazu, dass wenn man dann Code pushen will, eine Fehlermeldung kommt, dass man erstmal den lokalen Stand auf den Remote Stand updaten muss, bevor man darauf pushen kann. Das ist dann blöd wenn die andere Person in den gleichen Dateien Sachen geändert hat wie man selber weil dann kommt es zu sog. Merge-Conflicts: Du hast Dateien verändert, willst dir dann die Remote Version von Github ziehen in der die gleichen Dateien auch verändert wurden. Dann weiss Git manchmal nicht was es machen soll: Chaos.

Deswegen immer bevor man anfängt irgendwas zu machen:

```bash
>>> git pull
```

Und wenn du nur schauen will ob irgendwas auf dem Remote Server verändert worden ist:

```bash
>>> git status
```


## Git Branches

Man mit Git verschiedene Versionen des Codes parallel verwalten mittels *Branches*. Branches enthalten Kopien des Codes, und heißen so, weil sie von anderen Branches abzweigen.

Um Probleme bei der Versionierung (ich benutze das synonym zu Synchronisierung) zu vermeiden, gibt es den [Git Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow). Der besteht im wesentlichen darin, dass es eine **main** branch gibt, in der immer eine funktionierende Version des Codes drauf ist. Wenn man dann ein neues Feature hinzufügen will (zB das Problem mit den fehlenden Farben) dann erstellt man eine neue Branch, die von der main-Branch abzweigt.

```bash
>>> git checkout -b <name-der-neuen-branch>  # zB git checkout -b farben-problem-loesen
```

Auf der neuen Branch ist dann zunächst erstmal genau der gleiche Code wie auf der main-Branch. Wenn man aber Code ändert, und dann pusht, dann wird bei Github die main-Branch nicht angefasst sondern eine neue Branch mit dem gegebenen Namen erstellt. So macht im Team entwickeln Spass :)