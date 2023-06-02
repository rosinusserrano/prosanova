import React from "react";

export const ProgramTypeToColor = {
  Diskutieren: "#BFA9ED",
  Lesen: "#C18167",
  Aufführen: "#C8BF9B",
  Andauern: "#E3CC4E",
  Teilnehmen: "#F97DD0",
  Schauen: "skyblue",
  Hören: "#FF9B53",
  Feiern: "#999999",
};

export const ProgrammAmFreitag = [
  {
    location: "Aula",
    people: <>Sinthujan Varatharajah</>,
    title: "Hier fehlt ein Titel",
    time: "12:30 - 14:00",
    description: "Das ist die Beschreibung",
    type: "Lesen",
  },
  {
    location: "Klassenzimmer",
    people: <>Thomas Stangl, Murphy</>,
    title: "Der Sprung/ Die Sprünge (in der Zeit)",
    time: "12:15 - 14:00",
    description: <>Das ist eine Beschreibung in JSX</>,
    type: "Schauen",
  },
];

export const ProgrammAmSamstag = [
  {
    location: "Labor",
    people: <>Olufemi Atibioke</>,
    title: "The Line / Literaturmeditation II",
    time: "10:30-11:15",
    description:
      "In den Literaturmeditation werden die Augen geschlossen, die Atmung wird beruhigt und es wird ein Punkt kommen, an dem der Text nicht mehr Selbstzweck ist. Vielleicht wird er zu einem Traum weiterverarbeitet. Vielleicht auch nicht. Vielleicht ist es falsch davon auszugehen, dass es eine Monotonie, eine Ruhe, eine Konsistenz geben muss. Störungen können passieren, auch in dieser Literaturmeditation. An jedem Festivaltag findet eine Literaturmeditation zu unterschiedlichen Tagen statt. Diese Literaturmeditation wird von Olufemi Atibioke geleitet. ",
    type: "Teilnehmen",
  },

  {
    location: "Labor",
    people: <></>,
    title: "Container",
    time: "ab 10 Uhr",
    description:
      "Im Container öffnen wir die verstaubte Konservendose, die da, ganz da hinten im Vorratsschrank. Hier finden wir Stimmen der Literaturgeschichte, die unerhört blieben und überhört wurden. Der Container ist der Versuch, diesen Stimmen Sichtbarkeit zu verschaffen, sie zu feiern, ihnen zu gedenken. Wir hören Soundcollagen, machen einen Filmabend, führen Interviews mit Hinterbliebenen. Wir erinnern, konservieren, bereiten auf und erleben nach. Mit: Ilse Aichinger, Ronald M. Schernikau, Mascha Kaléko, May Ayim, Semra Ertan, Else Lasker-Schüler, Marianne Fritz, stolzeaugen.books und solange wir erinnern, Selma Meerbaum, Sakine Cansiz und Mahmoud Darwisch. Der Container ist über den gesamten Festivalzeitraum geöffnet. ",
    type: "Andauern",
  },

  {
    location: "Klassenzimmer",
    people: <>Tatjana von der Beek und Julia Buchberger</>,
    title: "Zwischen Traditionslinien und Innovation",
    time: "10:30-11:30",
    description:
      "Wir wollen uns fragen: Wie genau macht man eigentlich Festivals in Hildesheim, wenn man von allen Seiten abhängig ist und welche Abhängigkeiten, vor allem bei der Betrachtung einer finanziellen Perspektive, bestehen dabei? Welche Rolle spielt die Uni und gibt es Wege, sie zu ignorieren? Julia Buchberger und Tatjana von der Beek haben in Hildesheim studiert und in Teams und Kollektiven mehrere Festivals kuratiert. Gemeinsam mit Armin Djamali sprechen sie über Erwartungshaltungen, mögliche Traditionslinien, Innovation und widerständige Unabhängigkeiten selbstorganisierter Kulturevents.",
    type: "Diskutieren",
  },
  {
    location: "Dunkelkammer",
    people: <>HKW</>,
    title: "Schlechte Wörter / Bad Words (Audioserie)",
    time: "10:00-17:00",
    description:
      "Ausgehend von Aichingers Text schafft die Audioserie Schlechte Wörter / Bad Words einen Ort für ein anderes Sprechen über Sprache und Literatur, für die Annäherung an ein neues Sprachgefühl. Aus Gesprächen, Lesungen, Sprachnachrichten, Field Recordings und Musik entsteht ein begehbarer, vielstimmiger Raum mit wechselnden Gästen. Die Verabredung lautet: Wir gehen von einem Text aus, damit ein anderer Text beginnen kann. Im Rahmen des PROSANOVA bekommt die Audioserie einen eigenen Raum, weitab vom Trubel des Festivals. Ein Ort zum Zuhören, Ruhen und Ankommen. Geöffnet am Samstag von 10-17 Uhr.",
    type: "Hören",
  },
  {
    location: "Dunkelkammer",
    people: <>Franziska Gänsler</>,
    title: "TV is poetry",
    time: "11:00-12:00",
    description: (
      <>
        (alles ist ein Date, TV ist reality, reality ist poetry) Franziska
        Gänsler lädt zum gemeinsamen Fernsehen ein: Wenn guilty pleasure zum
        Date wird und daraus neue Kontexte entstehen. In einer Live-Performance
        nimmt uns die Autorin mit auf die Suche nach Worten, die Sichtbarkeit
        und Poetik für etwas einfordern, dem viele bloß als Binge begegnen,
        Szenen, die von Bild zu Wort zum Satz ein enges Netz aus Zugehörigkeiten
        ergeben und letztlich aufzeigen, wie sich reality TV als Tool eignet, um
        über den eigenen Wahrnehmungshorizont hinauszugehen.
      </>
    ),
    type: "Hören",
  },
  {
    location: "Werkstatt",
    people: <>dyke dogs, Duygu Agal</>,
    title: "Lesbian Semiotics / Workshop",
    time: "11:00-14:30",
    description: (
      <>
        Butch/Femme? Leder? Lippenstift? Dressing like a lesbian ist nicht immer
        einfach, dafür spielerisch und unendlich hot! Zusammen mit euch möchten
        wir innerhalb eines Workshops eure ‘lesbischen Zeichen’ aufspüren,
        bewundern und in unseren digitalen dyke dogs Fundus überführen. Maximale
        Personenanzahl: 20. Anmeldungen unter: workshop@prosanova.net Dieser
        Workshop ist ausschließlich für FLINTA* Personen zugänglich.
      </>
    ),
    type: "Teilnehmen",
  },
  {
    location: "Klassenzimmer",
    people: <>Philipp Laue</>,
    title: "Bekenntnisse an das Misstrauen: Zeit zu gehen. ein Bruchstück.",
    time: "12:00-12:45",
    description: (
      <>
        In dem Text von Philipp Laue ist Rafi weg und Edvin ist der, der auf ihn
        wartet. Abwechselnd zwischen Imagination und Realität beschäftigt sich
        Edvin mit der Sehnsucht nach jemandem, der nur kurz zum Einkaufen gehen
        wollte und mit den eigenen Bedürfnissen nach Lust, Nähe und
        Abhängigkeit. Im Vermittlungsprogramm "Bekenntnisse an das Misstrauen"
        ist exklusiv für das PROSANOVA eine szenische Lesung von und mit Philipp
        Laue, Deniz Bolat und Nico Crayen entstanden.
      </>
    ),
    type: "Aufführen",
  },
  {
    location: "Mensa",
    people: <>Thomas Stangl</>,
    title: "Das Labyrinth der Gurken",
    time: "ab 12:00",
    description: (
      <>
        Obwohl wir permanent von Text und Nachrichten umgeben sind, ist das
        Briefeschreiben wohl eher vom Aussterben bedroht. Doch im ganzen
        Festivaltrubel brauchen wir vielleicht nichts so sehr wie eine kurze
        Pause, in der wir unseren Gedanken nachhängen können. In der Cafeteria
        kannst du eine kurze Pause einlegen und dem Autor Thomas Stangl einen
        Brief schreiben. Anlass dazu bietet ein Kurzprosatext, der lediglich aus
        einem Satz besteht und den du gemeinsam mit Stift und Papier vor Ort
        findest. Im Nachgang des Festivals beantwortet Thomas Stangl exklusiv
        für das PROSANOVA sieben Briefe.
      </>
    ),
    type: "Andauern",
  },
  {
    location: "Aula",
    people: (
      <>
        சிந்துஜன் வரதராஜா <br></br>(Sinthujan Varatharajah){" "}
      </>
    ),
    title: "Vortrag",
    time: "ab 12:00",
    description: <></>,
    type: "Diskutieren",
  },

  {
    location: "Labor",
    people: <>Jen Calleja </>,
    title: "Vehicle: A Verse Novel",
    time: "13:00 - 14:00",
    description: (
      <>
        We are in danger. The Nation is now on high alert. Do not accept
        telegrams from unverified sources; return to sender. Do not look out to
        sea, do not look into the sky. Unless it is completely necessary, do not
        look out of the window…" In einer Zeit, in der die Erforschung der
        Vergangenheit geächtet und illegal geworden ist, sendet eine längst
        vergessene Inselgruppe, The Islets, ein Notsignal an ihre früheren
        Siedler*innen. Eine reformierte Kultmusikerin, die mittlerweile
        Staatsagentin geworden ist, wird damit beauftragt, Informationen zu
        sammeln. In ihrem Werk Vehicle setzt sich die Autorin Jen Calleja mit
        Xenophobie, Ausbeutung, der Frage nach Deutungshoheit und der Politik
        des Übersetzens auseinander. Mit einer Collage aus visuellem Material
        erzählt sie, was sie beim Schreiben inspiriert hat. Die Veranstaltung
        wird auf Englisch stattfinden.
      </>
    ),
    type: "Lesen",
  },

  {
    location: "Aula",
    people: <>Amir Gudarzi und Tanasgol Sabbagh </>,
    title: "Am Anfang war das Sprechen",
    time: "14:00 - 15:00",
    description: (
      <>
        Das gesprochene Wort findet dort statt, wo es hingehört - auf der Bühne.
        Im Mund. Im ganzen Körper. Der Dramatiker Amir Gudarzi und die Spoken
        Word Dichterin Tanasgol Sabbagh treffen sich zu einem Zwiegespräch über
        das Schreiben von gesprochenen Texten, das Situative der Bühnenliteratur
        und die herrschenden und limitierenden Vorstellungen von Gattung und
        Form.
      </>
    ),
    type: "Diskutieren",
  },
  {
    location: "Klassenzimmer",
    people: <>Anja Flach, Esther Winckelmann und Leyla Kaya </>,
    title: "Sakine Cansiz: Mein ganzes Leben war ein Kampf",
    time: "14:00 - 15:30",
    description: (
      <>
        Sakine Cansız war Mitbegründerin der kurdischen Arbeiterpartei und der
        Frauenbewegung und wurde 2016 in Paris ermordet. Anja Flach, die Sakine
        Cansız vom Türkischen und Kurdischen ins Deutsche mitübersetzt hat,
        liest zusammen mit Esther Winckelmann und Leyla Kaya Auszüge aus Sakine
        Cansız' Tagebüchern vor. Innerhalb der Lesung testen wir die Grenzen von
        politischem und literarischem Schreiben aus. Und gedenken gleichzeitig
        der kurdischen Aktivistin Sakine Cansız. Anschließend wollen wir uns
        innerhalb eines Gesprächs mit Fragen von Solidarität und Verantwortung
        deutschsprachiger Verlage im Umgang mit politischen Schriftsteller*innen
        beschäftigen: Wer ist von Publikationsverboten betroffen und in welchem
        Ausmaß? Wie sieht praktische Solidarität im Literaturbetrieb aus? Was
        ist widerständiges Schreiben?
      </>
    ),
    type: "Diskutieren",
  },
  {
    location: "Labor",
    people: <>Inana Othman </>,
    title: "Mythos-Corpus-Algorithmus",
    time: "15:00 - 16:00",
    description: (
      <>
        Wenn Erinnern ein Satz wäre, würde er dann mit meinem Körper im Jetzt
        enden? Kann mein Körper aber wirklich nur ein nackter Punkt im Meer des
        Satzes sein? Oder ist er diese sinnliche Distanz zwischen allen Punkten
        und Berührungsfeldern einer materiellen Ansammlung von Wörtern, Bildern
        und der sie transzendierenden Bedeutung? In dieser Lesung erwartet dich
        eine zwischensinnliche Synergie mehrerer Reisen auf den ungerade Weg
        zurück und wieder nach vorne in der Ökonomie der Erinnerung, zugleich
        Imagination, in der Gefängnis, Asylheim, Schreiben, Mythen und Körper
        als Fabriken agieren und immer Neues produzieren. Das schreibende und
        imaginierende Selbst ist die Treib- und Arbeitskraft, gleichzeitig das
        Produkt. Die Zeit ist das Kapital.
      </>
    ),
    type: "Lesen",
  },

  {
    location: "Werkstatt",
    people: (
      <>
        Rosa Lobejäger, Nico Blumrich, Felice Wilhelms, Philip Hart, Leah
        Rombach, Marlo Oberließen{" "}
      </>
    ),
    title: "Bekenntnisse an das kollektive Vertrauen: Ein Schreibwettbewerb",
    time: "15:00 - 16:00",
    description: (
      <>
        Einen Text mit Anderen zu teilen, setzt Vertrauen voraus und schafft
        einen Raum der Intimität. Gemeinsam wollen wir diesen Raum erforschen
        und Strategien kollektiven Vertrauens erproben. In einer kleinen Gruppe
        von fünf Wettbewerbsteilnehmer*innen wirst du vor Ort ab 15 Uhr eine
        Stunde Zeit haben, dein Bekenntnis an das kollektive Vertrauen zu
        verfassen. Dabei wird es keine gattungsspezifischen Vorgaben der Jury
        geben. Wir suchen Teilnehmer*innen, die bereit sind, uns an ihrem
        Schreibprozess teilhaben zu lassen, entstandene Texte mit einer Jury und
        einem kleinen Publikum zu teilen und sich so kollektiv einer Poetologie
        des Prozesshaften und Unfertigen anzunähern. Im Rahmen einer
        partizipativen Jurydiskussion wird anschließend ein Text ausgewählt.
        Hierzu laden wir zum Zuhören und Mitdiskutieren herzlich ein! Der
        ausgewählte Text wird im Anschluss auf Litradio veröffentlicht.
        Anmeldung für Wettbewerbsteilnehmer*innen bis 21. Juni unter
        schreibwettbewerb.prosanova@gmail.com (Aufgrund der begrenzten
        Teilnehmer*innenzahl erhalten ausschließlich die ersten fünf Anmeldungen
        einen Platz) Konkrete Schreibimpulse sowie alle weiteren Formalia und
        die Zusammensetzung der Jury werden kurz vorher bekanntgegeben, um den
        Wettbewerb möglichst fair zu gestalten. Anmeldung unter
        workshop@prosanova.net. Entstanden in Kooperation mit dem
        Literaturinstitut der Universität Hildesheim.
      </>
    ),
    type: "Teilnehmen",
  },
  {
    location: "Extern",
    people: <>Giorgio Ferretti</>,
    title: "die richtigen orte finden / die richtigen worte finden",
    time: "15:00 - 15:30",
    description: (
      <>
        Giorgio Ferretti ist abgeschweift. Oder heißt das abgeschwiffen? Egal:
        Abschweifung. Im wahrsten Sinne des Ortes. Plötzlich steht er da, wo er
        sonst nicht steht: auf einem Balkon. Ein Balkon, der plötzlich Bühne
        ist, der plötzlich neu besetzt wird. Als er die Anfrage bekommt, einen
        Text zu Ilse Aichingers »Schlechte Wörter« zu schreiben, sagt Giorgio
        Ferretti natürlich Ja. Aber was kann er zu diesem Text sagen, was noch
        nicht gesagt wurde? Über eine inhaltliche Ebene hinaus befragt Giorgio
        den Text nach seiner Funktion als Fläche. Ist ein Text ein Ort, von dem
        es abzuschweifen gilt? Und was passiert, wenn man sich so weit entfernt,
        dass man nicht mehr von Abschweifung spricht, sondern von einer
        Bewegung? Das Ergebnis ist der Versuch, einem Faden zu folgen, der
        konstant zu verschwinden scheint.
      </>
    ),
    type: "Schauen",
  },
  {
    location: "Aula",
    people: <>Cana Bilir-Meier und Natasha A Kelly</>,
    title:
      "Widerständiges Schreiben: Eine Widmung an May Ayim und Semra Ertan ",
    time: "16:30 - 18:00",
    description: (
      <>
        Die Autorinnen May Ayim und Semra Ertan haben es auf einzigartige Weise
        geschafft, der jungen afro-deutschen und migrantischen Jugend eine
        Stimme zu geben. Die beiden Autorinnen starben Ende des 20. Jahrhunderts
        und verließen eine von Alltagsrassimus geprägte Gesellschaft, die bis
        heute mehr vergisst als das sie thematisiert. Weil sie unsere Welt in
        zeitloser Art und Weise beschreiben und uns zeigen, wie man
        gesellschaftliche Veränderungen durch die Kraft der Worte herbeiführen
        kann, widmen sich Natasha A. Kelly und Cana Bilir-Meier in diesem Format
        den Gedichten und den Biografien der beiden Frauen und schlagen
        gleichzeitig eine Brücke ins Jetzt. Wie können wir an Ertan und Ayim
        erinnern und welche Bedeutung haben ihre Gedichte bis heute?
      </>
    ),
    type: "Diskutieren",
  },
  {
    location: "Klassenzimmer",
    people: <>Stoff aus Luft</>,
    title: "Das bessere Leben: Stoff aus Luft live",
    time: "16:30 - 18:30",
    description: (
      <>
        "Was machen wir hier? Hier, wo du dich nach mir umlehnst. Wir sehen
        schön aus. Wir lecken uns unsere Wunden. Wir feiern das große Fest. Wir
        machen Burger, labern und lachen" (Olufemi Atibioke) Wir sind nur kurz
        nach der Arbeit vorbeigekommen. Wir halten uns an den Händen und dann,
        unbemerkt fast, platzt das Licht. Hier auf der Wiese, hier zwischen Tür
        und Angel, im cruisingpark, in meinem kleinen Zimmer, ist vielleicht das
        bessere Leben. In der ersten Live-Folge von Stoff aus Luft, dem Magazin
        für gesprochene Literatur, wollen wir gemeinsam nicht an die guten,
        sondern an die besseren Orte. Dahin, wo es schön, so schön ist, solange
        es hält. Trefft uns da, kommt mit. Eine Kooperation von Stoff aus Luft
        und PROSANOVA mit Olufemi Atibioke, Avrina Prabala-Joslin, Inana Othman,
        Damon Taleghani und Sarah Elena Müller
      </>
    ),
    type: "Hören",
  },
  {
    location: "Werkstatt",
    people: <>Linda Florek, Hanna Rafalski, Kay Schier, Malte Wegner</>,
    title: "Der Zwei-Stunden-Roman",
    time: "17:00 - 19:00",
    description: (
      <>
        Wir gebrauchen die einsame Autor:innenschaft nicht mehr. Was gebrauchen
        wir dann? 15 Kapitel, 15 Autor:innen, 120 Minuten – in dieser Zeit
        lassen wir Fünfe gerade sein und improvisieren entlang von
        Schreibimpulsen einen erzählenden Text. Kommt am Ende dabei ein Roman
        heraus? Oder haben wir einfach Spaß? Womöglich sogar beides? Wir wissen
        es noch nicht. Findet es mit uns heraus. Anmeldung unter
        workshop@prosanova.net. Entstanden in Kooperation mit dem
        Literaturinstitut der Universität Hildesheim.
      </>
    ),
    type: "Teilnehmen",
  },

  {
    location: "Labor",
    people: <>Xosewist</>,
    title: "möglichkeiten are on جدران aufgehängt",
    time: "17:30 - 18:15",
    description: (
      <>
        Vers für Vers prallen beim Lesen von Xoşewîsts Gedichtssammlung Leipzig
        يّا t verschiedene Sprachen aufeinander, die sich beim Zuhören
        überlappen und klanglich ineinanderfließen. Das eröffnet neue Fragen in
        Bezug auf die Linearität und Stringenz eines Textes: Wenn sich ein
        Gedicht nicht innerhalb von Einsprachigkeit verorten lässt, sich einer
        geraden Lesart verweigert - welche neuen Verbindungen ergeben sich dann?
        Und mit welchen Lücken werden wir innerhalb eines Leseprozesses
        konfrontiert, der die Rezipierenden selbst zu Übersetzer*innen werden
        lässt? Zu all diesen Fragen laden uns die Gedichte ein, die sich nicht
        nur sprachlich, sondern auch inhaltlich zwischen Aufbegehren,
        Verschwinden, Flucht und Neuverortungen beständig in Bewegung befinden.
        Moderiert wird die Lesung von Giorgio Ferretti.
      </>
    ),
    type: "Lesen",
  },
  {
    location: "Sanitär-Zimmer",
    people: <>Olufemi Atibioke</>,
    title: "Ausfälle / Ego als Nicht-Ort",
    time: "ab 18:00 Uhr",
    description: (
      <>
        Stellen wir uns vor: Wir betreten eine Box, die mit nichts gefüllt ist
        als uns selbst. Nirgendwo spüren wir das Ego so sehr wie hier - und hier
        soll nun der Ursprung des Textes liegen. Macht das Ego als Anfang diesen
        nun zu einem Absurden? Oder nicht vielmehr zu einem Ehrlichen,
        Hinfälligen, Schlechten? Olufemi Atibioke fragt nach dem Ego und seiner
        unabdingbaren Permanenz im Kapitalismus. Wie damit umgehen, dass die
        schreibende Person und der Text zwangsläufig ein Verhältnis haben? Und
        was ist das Verhältnis von Text und Autor:in - Wie sehr schreibt es sich
        über die Rezeption hinaus in den Körper des Autors hinein, durch ihn
        hindurch? Alle schreibenden Personen sind herzlich eingeladen, in diesem
        Raum zu träumen, zu zweifeln oder den eigenen Zweifeln standzuhalten,
        ihnen etwas anderes entgegenzusetzen, ehrlich zu sein oder auch nicht,
        sich trösten zu lassen und weiterhin zu scheitern. Samstag geöffnet von
        18-20 Uhr.
      </>
    ),
    type: "Andauern",
  },

  {
    location: "Extern",
    people: <>Tatjana von der Beek </>,
    title: "Ein Literaturspaziergang mit Tatjana von der Beek",
    time: "18:30 - 21:00",
    description: (
      <>
        Mit der Autorin Tatjana von der Beek wollen wir uns auf die Suche nach
        der Isolation begeben - in Kooperation mit den Hildesheimer
        Kulturelebnistagen. Was bedeutet es, abgeschieden von der Welt zu sein
        und nichts zu kennen außer dem, was einem die Familie predigt und was
        man vom Fenster aus im Sternenhimmel sieht? Die Protagonistin in Tatjana
        von der Beeks Debütroman “Die Welt vor den Fenstern” wächst genauso auf,
        eingegliedert in strenge familiäre Strukturen, die sie allmählich jedoch
        immer mehr hinterfragt. Für den Lesungsspaziergang in der Hildesheimer
        Börde treffen wir uns um 18.30 Uhr an der Bushaltestelle HAWK-Campus, wo
        uns ein Bus-Shuttle abholt und ungefähr zwei Stunden später wieder
        absetzt. Für Getränke und etwas Kleines zu essen auf der Fahrt ist
        gesorgt.
      </>
    ),
    type: "Lesen",
  },

  {
    location: "Aula",
    people: <>dyke dogs, Duygu Agal </>,
    title: "Lesbian Semiotics / dyke dogs Salon",
    time: "19:00 - 20:30",
    description: (
      <>
        “at 49 / had her first dyke haircut / felt great” schreibt Joy Crone in
        ihrem Gedicht ‘Rural Old Lesbian’. Darüber sind auch wir happy und
        fragen zugleich, clothes-wise: Wie navigieren wir lesbische Semiotics
        und vor allem: Was sind lesbische Zeichen? Der Ohrring auf der rechten
        Seite? Die Lederjacke? Der Karabinerhaken am Hosenbund? Das Lippenlecken
        am Ende eines Dates? Oder der rote Lippenstift, um geflissentlich
        zwischen Butch und Femme zu switchen? dyke dogs nähert sich der
        Soziologie gegenwärtiger lesbischer fashion und imaginiert the most
        lesbian of all uniforms. Mit: Lynn Takeo Musiol, Eva Tepest und Duygu
        Ağal
      </>
    ),
    type: "Diskutieren",
  },

  {
    location: "Labor",
    people: <>Elona Beqiraj und Agon Beqiraj</>,
    title: "Sound Text Collage I",
    time: "19:00 - 20:00",
    description: (
      <>
        “I caught myself feeling jealous of the moon” - In einer lyrischen
        Performance verbindet Elona Beqiraj erstmals gemeinsam mit ihrem Bruder
        Agon Beqiraj Klänge albanischer Lieder mit ihren deutschsprachigen
        Texten. Wie in einer Schleife gefangen, wiederholen sich ihre Worte mit
        den verfremdeten Klängen der Lieder, die ihre Kindheit beschreiben.
        Taucht ein in die Berge des Kosovo und begebt euch mit Elona und Agon
        Beqiraj auf eine Traumreise.
      </>
    ),
    type: "Aufführen",
  },

  {
    location: "Aula",
    people: <>Savo</>,
    title: "PARTY",
    time: "21:00 - 22:00",
    description: (
      <>
        
      </>
    ),
    type: "Feiern",
  }, 
  {
    location: "Klassenzimmer",
    people: <>disk.o</>,
    title: "PARTY",
    time: "21:00 - 22:00",
    description: (
      <>
        
      </>
    ),
    type: "Feiern",
  }, 
  {
    location: "Aula",
    people: <>yung_womb, slimgirl fat</>,
    title: "PARTY",
    time: "22:00 - 00:00",
    description: (
      <>
        
      </>
    ),
    type: "Feiern",
  },  
  {
    location: "Klassenzimmer",
    people: <>Orientalisman and Cansel</>,
    title: "PARTY",
    time: "22:00 - 00:00",
    description: (
      <>
        
      </>
    ),
    type: "Feiern",
  }, 
  {
    location: "Aula",
    people: <>Pavement Gun</>,
    title: "PARTY",
    time: "00:00 - 03:00",
    description: (
      <>
        
      </>
    ),
    type: "Feiern",
  },  
  {
    location: "Klassenzimmer",
    people: <>Gemini Gems</>,
    title: "PARTY",
    time: "00:00 - 02:00",
    description: (
      <>
        
      </>
    ),
    type: "Feiern",
  }, 
  {
    location: "Klassenzimmer",
    people: <>---</>,
    title: "PARTY",
    time: "02:00 - 03:00",
    description: (
      <>
        
      </>
    ),
    type: "Feiern",
  },   
  {
    location: "Aula",
    people: <>disk.o</>,
    title: "PARTY",
    time: "03:00 - 04:00",
    description: (
      <>
        
      </>
    ),
    type: "Feiern",
  },     
];

export const ProgrammAmSonntag = [];
