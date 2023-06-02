import React from "react";

export const ProgramTypeToColor = {
  Diskutieren: "#BFA9ED",
  Lesen: "#C18167",
  Aufführen: "#C8BF9B",
  Andauern: "#E3CC4E",
  Teilnehmen: "#F97DD0",
  Schauen: "skyblue",
  Hören: "#FF9B53",
  Feiern: "#553c6d"
};

export function makeProgramID(title, time, location) {
  return title + time + location
}

export const ProgrammAmFreitag = [
  {
    location: "Schulhof",
    people: "PROSANOVA",
    title: "Begrüßung",
    description: "",
    time: "12-12:30 Uhr",
    type: ""
  },
  {
    location: "Werkstatt",
    people: "Felix Herrmann, Angelina Klempert, Meret Stühmer",
    title: "Bee(ing) part of - ein Schwarmworkshop",
    description: <>
      <p>Was heißt es, Teil eines Schwarms zu werden? Wie gehen wir mit einer gemeinsamen Aufgabe um? Zusammen einen Rhythmus finden. Sich in Worten verweben. Im Klang der Gruppe untergehen. </p>
      <p>Anmeldung unter workshop@prosanova.net. Entstanden in Kooperation mit dem Literaturinstitut der Universität Hildesheim.</p>
    </>,
    time: "ab 13 uhr",
    type: "Teilnehmen"
  },
  {
    title: "Container",
    people: "",
    description: "Im Container öffnen wir die verstaubte Konservendose, die da, ganz da hinten im Vorratsschrank. Hier finden wir Stimmen der Literaturgeschichte, die unerhört blieben und überhört wurden. Der Container ist der Versuch, diesen Stimmen Sichtbarkeit zu verschaffen, sie zu feiern, ihnen zu gedenken. Wir hören Soundcollagen, machen einen Filmabend, führen Interviews mit Hinterbliebenen. Wir erinnern, konservieren, bereiten auf und erleben nach. Mit: Ilse Aichinger, Ronald M. Schernikau, Mascha Kaléko, May Ayim, Semra Ertan, Else Lasker-Schüler, Marianne Fritz, stolzeaugen.books und solange wir erinnern, Selma Meerbaum, Sakine Cansiz und Mahmoud Darwisch. Der Container ist über den gesamten Festivalzeitraum geöffnet.",
    time: "ab 13 Uhr",
    location: "Container",
    type: "Andauern"
  },
  {
    title: <>Schreiben um zu Leben:<br />
      Ein atmendes Erinnerungsgewebe</>,
    people: "Nima Schaper",
    description: "",
    time: "ab 13 Uhr",
    location: "Container",
    type: "Hören"
  },
  {
    title: "Die erste Naivität",
    people: "Anna Kim, Karosh Taha",
    description: "Anna Kim und Karosh Taha untersuchen in ihrer Korrespondenz, die im Vorhinein des Festivals entstanden ist, ihr Verhältnis zum Text und zum Schreiben. Sie fragen nach dem Ursprung des Textes, der mal Naivität war, nach der Urheberschaft am Roman, erforschen die vielfältigen Weisen, in denen sich Sprachen, Erinnerungen und Träume in ihre Texte einschreiben. Durch diese textliche Begegnung erlauben sie einen Blick auf das, was man Autofiktion nennen kann. Was ist das Verhältnis von Lüge und Wahrheit in einem Text? Ist das überhaupt wichtig? Welches Verhältnis von Wahrheit und Lüge ist legitimierbar - und ist Fiktion die Überschneidung von beidem oder die Differenz? Wer darf was und worüber schreiben? Im Rahmen des PROSANOVA 2023 wird die Korrespondenz von Laura Shirin und Deniz Bolat vorgelesen.",
    time: "13:00-13:30",
    location: "Aula",
    type: "Lesen"
  },
  {
    title: "Lieben als kreative Praxis",
    people: "Saskia Vogel",
    description: "Am Anfang steht das Geständnis der Spielerin in Michael Hanekes Verfilmung von Elfriede Jelineks Roman \"Die Klavierspielerin\": Sie offenbart, wie sie geliebt werden will. Die Schriftstellerin und Übersetzerin Saskia Vogel hat dies zum Anlass genommen, sich in ihrem Roman \"Permission\" mit ähnlichen Fragestellungen auseinanderzusetzen. Wie will ich geliebt werden? Und welche Risiken beinhaltet das Äußern vom eigenen Verlangen? In einer Lecture Perfomance mit Auszügen aus \"Permission\" erkundet sie ihre Inspirationsquelle und wie diese auf ihren Debütroman gewirkt hat. Im Anschluss wird es ein Nachgespräch geben.",
    time: "13:15-14:15",
    location: "Labor",
    type: "Diskutieren"
  },
  {
    title: "Die Leerstelle giert nach einem Bild",
    people: "Sarah Elena Müller und riodioproductions™",
    description: <>
      Ein Kind sucht nach dem fehlenden Gefühl, das ein Übergriff hinterlassen hat. Zwischen rauschendem Schweigen, Ameisengewimmel, Erinnerungsresten und den Verletzungen seiner Vorgänger*innen sucht das Kind nach einem Bild von sich, das die Erwachsenen zur Einsicht bringt. Überlagert und verschränkt mit Videosequenzen entsteht in dieser multimedialen Lesung aus Sarah Elena Müllers Roman "Bild ohne Mädchen" ein Sog um die flimmernde Leerstelle, an der das Unvermögen zu erkennen und zu benennen selbst Bilder hervorbringt.<br /> <br />
      CN: Kindesmissbrauch
    </>,
    time: "13:30-14:15",
    location: "Dunkelkammer",
    type: "Schauen"
  },
  {
    title: <>"Schreib auf: Ich bin Araber"- Mahmoud Darwisch</>,
    people: "Mira Sidawi",
    description: "Mahmoud Darwischs Werke sind ein Zeugnis der Erfahrungen und Hoffnungen der palästinensischen Bevölkerung und haben die arabische und internationale Literatur maßgeblich geprägt. Dennoch bleiben die Werke vieler anderer talentierter Schriftstellerinnen aus Palästina in Deutschland weitgehend unbeachtet. Wir möchten das Bewusstsein für diese Lücke in der deutschen Literaturlandschaft schärfen und das Interesse an der literarischen Vielfalt Palästinas wecken. Gemeinsam mit Mira Sidawi, einer Theaterschaffenden, Schriftstellerin und Schauspielerin aus Beirut, werden in diesem Format das Schreiben und die Werke von Mahmoud Darwisch gewertschätzt. Die Veranstaltung wird moderiert und übersetzt von Aya Khalil. Sie findet statt auf Arabisch, Englisch und Deutsch.",
    time: "13:30-14:30",
    location: "Klassenzimmer",
    type: "Diskutieren"
  },
  {
    title: <>Der Prozess - das Schlechte im Guten zu finden...</>,
    people: <>Meret Buchholz, Dennis Brock</>,
    description: <>
      ist gar nicht so einfach. Wenn du es trotzdem wagen willst, werde Teil eines Schreibkollektivs und entscheide über den Prozess. Die Zeit läuft, der Text ist im Wandel und der Stift bleibt niemals still. Der Verhandlungstermin ist Freitag, der 23.06. von 13 - 14 Uhr. Der Verhandlungsort ist die Werkstatt.
      <br /><br />
      Anmeldung unter workshop@prosanova.net. Entstanden in Kooperation mit dem Literaturinstitut der Universität Hildesheim.
    </>,
    time: "13:15-15:15",
    location: "Werkstatt",
    type: "Teilnehmen"
  },
  {
    title: <>Das Labyrinth der Gurken</>,
    people: <>Thomas Stangl</>,
    description: <>Obwohl wir permanent von Text und Nachrichten umgeben sind, ist das Briefeschreiben wohl eher vom Aussterben bedroht. Doch im ganzen Festivaltrubel brauchen wir vielleicht nichts so sehr wie eine kurze Pause, in der wir unseren Gedanken nachhängen können. In der Cafeteria kannst du eine kurze Pause einlegen und dem Autor Thomas Stangl einen Brief schreiben. Anlass dazu bietet ein Kurzprosatext, der lediglich aus einem Satz besteht und den du gemeinsam mit Stift und Papier vor Ort findest. Im Nachgang des Festivals beantwortet Thomas Stangl exklusiv für das PROSANOVA sieben Briefe.</>,
    time: "ab 14 Uhr",
    location: "Mensa",
    type: "Andauern"
  },
  {
    title: <>Macetti</>,
    people: <>Damon Taleghani</>,
    description: <>Ein Geiger, versehentlich im Fluchtauto. Ein machthungriger Stadtplaner. Enttäuschte Kinder, maoistische Splitter, ein verlassenes Parteibüro in Leipzig. Dies ist eine Live-Vertonung eines Spionageromans mit kaputtem E-Harmonium und sehr kleinen Büchern. Geschichte ist das Gegenteil von einem Staubsauger. Zufällig trifft das auch auf elektrische Aerophone zu. In seinem DDR-Roman „Macetti“ beobachtet Damon Taleghani iranische Parteikader im Deutschland der Sechziger- und Siebzigerjahre.</>,
    time: "14:30-15:30",
    location: "Aula",
    type: "Lesen"
  },
  {
    title: <>Macht Sprache: Sensibles Übersetzen</>,
    people: <>poco.lit</>,
    description: <>Sprache kann diskriminieren und Diskriminierung aufrecht erhalten. Schon in einer Sprache ist das eine Herausforderung, noch schwieriger wird es in Übersetzungen. Übersetzungen nehmen immer an mehreren Diskursen teil: Sie gehen aus einem bestehenden Diskurs hervor und treten in einen anderen ein. Anhand von konkreten Beispielen schauen wir in diesem Workshop, wie Übersetzungen bestimmte Diskurse mitgestalten und diskutieren verschiedene Handlungsoptionen und mögliche Leitlinien, die bei der Begriffswahl helfen können. Mithilfe der digitalen Plattform machtsprache.de tragen wir gemeinsam Wissen zusammen, auf das auch nach dem Workshop noch zurückgegriffen werden kann.</>,
    time: "14:30-16:30",
    location: "Werkstatt",
    type: "Teilnehmen"
  },
  {
    title: <>no. mad. in. the. attic. </>,
    people: <>அவ்ரீனா பிரபலா-ஜாஸ்லின் (Avrina Prabala-Joslin)</>,
    description: <>Letters. Journal entries. Worn out soles. Nicotine patches. In the moonlight, the yellow wallpaper mutates. We're on all fours, we've broken free. I told me how to save me in a dream. Light the candle. Burn the Great House. Mad, madder, maddest. Cull. That's not you in the mirror. That's the child you were. Would you like to hold hands? There's surely ways to escape diagnoses. The garden awaits. You know the way, you are. Kiss the dark, leak at its lips. Slap yourself awake. Write everything down, don't you miss even a single detail.
      <br /><br />
      அவ்ரீனா பிரபலா-ஜாஸ்லின் / avrina prabala-joslin has been meaning to tell a story of  horror and madness and the strange world of words. It's time. Inspired by Wide Sargasso Sea (Jean Rhys) and The Yellow Wallpaper (Charlotte Perkins Gilman).
      Note: disturbing content and noises.
      <br /><br />
      <br /><br />
      Briefe. Tagebücher. Abgewetzte Schuhe. Nikotinpflaster. Im Mondlicht mutiert die gelbe Tapete. Wir sind auf allen Vieren, wir haben uns losgerissen. Ich habe mir im Traum gesagt, wie ich mich retten kann. Zünde die Kerze an. Brenn das Herrenhaus nieder. Irr, irrer, am irrsten. Schlachte. Das bist nicht du im Spiegel; das ist das Kind, das du mal warst. Willst du Händchen halten? Bestimmt gibt es Wege, der Diagnose zu entkommen. Der Garten wartet auf dich. Du weißt, wie du bist. Küsse die Dunkelheit, lecke ihre Lippen. Schlag dich wach. Schreib alles auf, lass bloß kein Detail aus.
      <br /><br />
      Schon lange wollte அவ்ரீனா பிரபலா-ஜாஸ்லின் / avrina prabala-joslin eine Geschichte über Grauen und Wahnsinn und die seltsame Welt der Worte erzählen. Nun ist es soweit. Inspiriert von Wide Sargasso Sea (Jean Rhys) und The Yellow Wallpaper (Charlotte Perkins Gilman).
      CN: verstörender Inhalt und Geräusche.
      Diese Veranstaltung wird auf Englisch stattfinden.</>,
    time: "15-16:45",
    location: "Klassenzimmer",
    type: "Aufführen"
  },
  {
    title: <>Die Erfindung der Unruhe I Literaturmeditation I </>,
    people: <>Laura Shirin</>,
    description: <>
      In den Literaturmeditationen werden die Augen geschlossen, die Atmung wird beruhigt und es wird ein Punkt kommen, an dem der Text nicht mehr Selbstzweck ist. Vielleicht wird er zu einem Traum weiterverarbeitet. Vielleicht auch nicht. Vielleicht ist es falsch davon auszugehen, dass es eine Monotonie, eine Ruhe, eine Konsistenz geben muss. Störungen können passieren, auch in Literaturmeditationen. An jedem Festivaltag findet eine Literaturmeditation zu unterschiedlichen Zeitpunkten statt. Diese wird geleitet von Laura Shirin.
    </>,
    time: "15-15:30",
    location: "Labor",
    type: "Teilnehmen"
  },
  {
    title: <>Ewig Laufen</>,
    people: <>Franziska Gänsler</>,
    description: <>
      In ihrem Debütroman "Ewig Sommer" erzählt Franziska Gänsler von der gegenwärtigen Klimakatastrophe: Mit präzisen Beschreibungen und einer bildgewaltigen Sprache sind die Szenen Dystopie und Hoffnung zugleich, erlauben sich mehrdeutig zu sein. Innerhalb eines literarischen Spaziergangs holt sie die brennenden Wälder und den Rauch aus Bad Heim nach Hildesheim. Treffpunkt für den Spaziergang ist um 15 Uhr an der Sparkasse gegenüber der Schule. Moderiert von Duygu Ağal.
    </>,
    time: "15-16 Uhr",
    location: <>
      Extern<br />
      Treffpunkt: 15 Uhr an der Sparkasse gegnüber der Schule
    </>,
    type: "Lesen"
  },
  {
    title: <>Der letzte Kommunist: Matthias Frings über Ronald M. Schernikau</>,
    people: <>Matthias Frings</>,
    description: <>
      Das Werk des kommunistischen und schwulen Schriftstellers Ronald M. Schernikau ist lange in Vergessenheit geraten. Zumindest in Teilen des Literaturbetriebs hat es in den letzten Jahren eine Renaissance erlebt. Ein Grund dafür ist die 2009 erschienene Biografie "Der letzte Kommunist" des langjährigen Schernikau-Freundes Matthias Frings. Auf dem PROSANOVA wird Matthias Frings aus seinem Buch "Der letzte Kommunist. Das traumhafte Leben des Ronald M. Schernikau" lesen und mit uns über Schernikau ins Gespräch kommen.
    </>,
    time: "15-16 Uhr",
    location: "Container",
    type: "Diskutieren"
  },
  {
    title: <>Juice and Sauce</>,
    people: <>Olufemi Atibioke</>,
    description: <>Ausstellung zum Format "Wenn der geklaute Laptop eine Erfindung wäre" in der Dunkelkammer. Danach geht es weiter um 16 Uhr im Labor.</>,
    time: "15-15:30",
    location: "Dunkelkammer",
    type: "Aufführen"
  },
  {
    title: <>Juice and Sauce</>,
    people: <>Olufemi Atibioke</>,
    description: <>
      In dieser performativen, lautlosen Lesung von Olufemi Atibioke geht es um die Geschichte eines gestohlenen Laptops. Es ist der Versuch, einen Zusammenhang zu rekonstruieren, der sich weigert, einer zu sein. Ausgehend von Anna Kims und Karosh Tahas Briefwechsel bleiben viele Fragen offen: Geht die Haltung des Schreibenden dem Text voraus? Ist das Scheitern am Text eine Konseqeunz der Haltung? Und wenn der Text geklaut wird - was bleibt dann von dieser Haltung übrig?
    </>,
    time: "16-16:45",
    location: "Labor",
    type: "Aufführen"
  },
  {
    title: <>Bekenntnisse an das Misstrauen: Kettwirts</>,
    people: <>Vici Dewinski</>,
    description: <>
      "Ein Sprichwort sagt, dass der Ort, an dem du geboren wurdest, immer in deinem  Herzen verankert ist. Auch, wenn er an der Grenze zur Hölle liegt."
      Geheimnisse, Albträume und mündliche Überlieferungen prägen die Geschichte des längst vergessenen Ortes und seiner sogenannten  Dorfbewohnerennie. Verweilen Sie kurz, aber bleiben Sie besser nicht zu lang. Fremdkörper sind auf Dauer nicht tragbar. Bestehend aus Sound- und performativen Videoinstallationen präsentiert dieses Auszüge aus Vici Dewinskis Graphic Novel "Kettwirts". Skurriler Humor und düstere Bildsprache verbinden sich hier mit märchenhaft-poetischer Sprachästhetik und scheinen dabei die Grenzen von Fiktion und dualistischer Realität aufzuheben.
      Im Rahmen des Vermittlungsprogramms "Bekenntnisse an das Misstrauen" ist in Zusammenarbeit von Vici Dewinski mit Mentorin Laura Shirin ein Triptychon entstanden.
    </>,
    time: "16-20 Uhr",
    location: "Dunkelkammer",
    type: "Aufführen"
  },
  {
    title: <>Rezensionsmaschine</>,
    people: <>Behzad Karim Khani</>,
    description: <>
      Das deutschsprachige Feuilleton ist ein Ort des Spannungsverhältnisses von Wahrheit und Wahrnehmung. In den Mechanismen des undurchsichtigen Betriebs wird Literatur rezipiert, kritisiert, verteidigt, geliebt und wertgeschätzt. Auf diese Weise wird der Blick auf Romane zwangsläufig immer wieder umgelenkt auf die Autor:innen. Behzad Karim Khani richtet im Rahmen der Rezensionsmaschine nun den Blick auf die Besprechung seines Debütromans "Hund Wolf Schakal". Irgendwo zwischen den Beschreibungen als Gangsterroman, Milieuroman und Migrantenroman lässt sich vielleicht eine Wahrheit finden - vielleicht aber auch nicht. Zwischendurch liest Khani immer wieder Ausschnitte aus "Hund Wolf Schakal" - und startet so den Versuch einer Verschmelzung aus Blick nach innen und nach außen.
    </>,
    time: "17-18:00 Uhr",
    location: "Aula",
    type: "Diskutieren"
  },
  {
    title: <>TraumaTelefon</>,
    people: <>Julia Friese</>,
    description: <>
      Sind wir Sprachcomputer auf Basis der Programmiersprache unserer Eltern? Wie prägen uns Elternphrasen? Sätze, die wir in unseren ersten Lebensjahren immer wieder gehört haben. Und was geschieht, wenn man sich kanonische Erziehungssätze Wort für Wort anschaut - wenn man „Reiß dich zusammen“ auseinandernimmt? Und wie lässt sich das in Literatur übersetzen?
      Finde - in dem Spiel mit dem sprechenden Telefon - heraus, was dich geprägt hat und komm mit Julia Friese ins Gespräch über die literarische Übersetzung von Trauma. Welche Wunden liegen hinter den Worten und welche Verantwortung trägt Literatur dabei, wenn wir uns Trauma gleichzeitig zu- und abwenden? Wähl einfach Julia Frieses Nummer! Im Sani-Raum findest du dafür ein Telefon.
      <br /><br />
      CN: Themenfelder Kindheit, Elternschaft und Erziehung
    </>,
    time: "17-18 Uhr",
    location: "Sanitätsraum",
    type: "Teilnehmen"
  },
  {
    title: <>
      The Translator Is Present<br />
      Oder<br />
      In Conversation: Jen Calleja und Saskia Vogel
    </>,
    people: <>Jen Calleja und Saskia Vogel</>,
    description: <>Xenophobie, Ausbeutung, Sex und Macht: Die beiden Übersetzer*innen und Autor*innen Jen Calleja und Saskia Vogel treffen sich im Gespräch und erzählen uns davon, was sie beim Schreiben inspiriert und wie ihre Routinen und Praktiken aussehen. Begleitet wird das Gespräch von Passagen aus ihren neusten Werken. Die Veranstaltung wird auf Englisch stattfinden.</>,
    time: "17:15-18:15",
    location: "Klassenzimmer",
    type: "Diskutieren"
  },
  {
    title: <>triangle of exhaustion</>,
    people: <>Simoné Goldschmidt-Lechner (sgl), Selma Kay Matter und Mirjam Wittig</>,
    description: <>In einer Relaxed Performance werden die Autor*innen Simoné Goldschmidt-Lechner, Selma Kay Matter und Mirjam Wittig aus neuen Texten lesen. Aus drei verschiedenen Positionen hat sich ein Dreieck ergeben, das triangle of exhaustion (ABC). Zwischen drei Textpositionen (A, B, C) aufgespannt, in seiner Form stabil gehalten durch eine endlose Bewegung aus Anstrengung, Erschöpfung und Wiederholung.
      Punkt A spricht von der Anstrengung, sich verständlich zu machen in einem Raum, der nicht sicher ist.
      Punkt B spricht von Überanstrengung als Alltagserfahrung eines chronisch kranken Körpers.
      Punkt C spricht von der Erschöpfung eines zerstörten Bodens und der Anstrengung, ihn wiederherzustellen.
      In einer Trigonometrie der Erschöpfung lassen die Autor*innen ihre Texte in Beziehung zueinander treten. Welche Verbindungen (a, b, c) ergeben sich daraus? In welchen Winkeln (α, β, γ) verhalten die Texte sich zueinander? And how can we get some rest?</>,
    time: "17:30-18:30",
    location: "Labor",
    type: "Aufführen"
  },
  {
    title: <>kadal ondru</>,
    people: <>அவ்ரீனா பிரபலா-ஜாஸ்லின் (Avrina Prabala Joslin) und சிந்துஜன் வரதராஜா (Sinthujan Varatharajah)</>,
    description: <>“Water masses (are) a constant reminder of what was, what could have been and stopped being” (possible biography of an ocean).
      What does it mean to share an ocean? To return to water, not land? What does the ocean swallow and hide? Whose epitaphs are written in water and what eulogies do whales sing? In this session, Avrina Prabala-Joslin and Sinthujan Varatharajah will let their tongues form waves to allow for water to form human words.
      <br /><br />
      {"//"}
      <br /><br />
      "Wassermassen (sind) eine ständige Erinnerung an das, was war, was hätte sein können und was nicht mehr ist." (mögliche Biografie eines Ozeans)
      Was bedeutet es, einen Ozean zu teilen? Zum Wasser zurückzukehren, nicht zum Land? Was verschluckt und versteckt der Ozean? Wessen Epitaphien werden ins Wasser geschrieben und welche Eulogien singen die Wale? In dieser Sequenz werden Avrina Prabala-Joslin und Sinthujan Varatharajah ihre Zungen Wellen bilden lassen, damit das Wasser menschliche Worte formen kann. Die Veranstaltung wird auf Englisch stattfinden.</>,
    time: "18:45-19:45 ",
    location: "Aula",
    type: "Aufführen"
  },
  {
    title: <>Das Ende ist nah</>,
    people: <>Amir Gudarzi</>,
    description: <>Amir Gudarzi liest aus seinem im August 2023 erscheinenden Roman "Das Ende ist nah". Aus Wien kommend bringt er die Tradition der Psychoanalyse mit. Das Publikum liegt, setzt sich aus, lässt sich ein: der unsichtbare Autor seinen Text als Berührung, die in das Unbewusste der Zuhörenden vordringt. Seine Stimme wird zu einer inneren Stimme und am Ende bleibt nur das Wort. </>,
    time: "19-20 Uhr",
    location: "Labor",
    type: "Lesen"
  },
  {
    title: <>Der Sprung / Die Sprünge (in der Zeit)</>,
    people: <>Thomas Stangl</>,
    description: <>Wie können wir etwas greifen, das im nächsten Augenblick schon wieder verschwunden ist? Und gibt es Momente, die sich dem Fortgang der Zeit entziehen?<br />
      Diesen Fragen widmet sich Thomas Stangl in seinem 2022 erschienenen Roman “Quecksilberlicht”, aus dem er in einer kollaborativen Soundlesung mit der Künstlerin Martyna Murphy Baginski lesen wird. Während der Autor verzweifelten, wunderbaren und wahnsinnigen Kämpfen gegen Zeit und Verschwinden durch die Jahrhunderte nachspürt, ist das Medium Sound schon von selbst ein Spiel mit Zeit. Denn was könnte vergänglicher sein als der Ton, der schon wieder weg ist, sobald wir ihn bemerken? <br />
      Wir wollen die Medien Text und Sound erkunden und das Zusammenkommen der beiden Künstler*innen als Match begreifen. Wir können gespannt sein auf schnelle Wechsel und ein sich Einstellen auf das unbekannte Gegenüber.</>,
    time: "19:15-20 Uhr",
    location: "Klassenzimmer",
    type: "Aufführen"
  },
  {
    title: <>Sprache als widerständiger Rückzugsort / Ein Kurzfilmabend</>,
    people: "",
    description: <>Das permanente Verschwinden: Das ist es, was Ilse Aichinger als überzeugte Kinogängerin am Film begeisterte. Diese Bewegung, das sich ständig Auflösende, das Anfangen ohne ein Ende zu benennen, das Verdichtete, Geraffte, niemals Verkürzte, hat sich auch in ihre Texte übertragen. In einer Auswahl von fünf Kurzfilmen setzen wir uns innerhalb eines Kinoabends der Möglichkeit des Verlustes des roten Fadens aus. Ein Kurzfilmabend mit Beiträgen über May Ayim, Semra Ertan, James Baldwin und mehr.</>,
    time: "20:15-22 Uhr",
    location: "Container",
    type: "Schauen"
  },
  {
    title: <>Die Erde ist tot! Lang lebe die Erde! </>,
    people: <>Lara Hajj Sleiman, Deborah Lara Schaefer</>,
    description: <>Ein Sci-Fi Livehörspiel: Berlin 2045 - um die Erde abzukühlen, haben Großkonzerne wie Tesla die
      Welt mit neuen, fluoreszierenden Wäldern überzogen. Am Spreeufer, wo
      Esther lebt, entstehen Elendsviertel und neue Wolkenkratzer mit
      Algenreaktorfassaden. Vor vier Jahren hat Esther mit Freunden das
      Tageslicht gegründet - eine 14-köpfige Kommune, in der sie in
      Gemeinschaft leben und später ihre Kinder großziehen wollen. Ihr Leben
      scheint nach Plan zu laufen, bis ihr Freund Jascha nach einem Suizidversuch
      mit einer schweren Psychose in die Psychiatrie eingewiesen wird und ihre
      Community finanziell vor dem Aus steht.
      CN: Psychische Erkrankung</>,
    time: "20:30-21:15",
    location: "Labor",
    type: "Lesen"
  },
  {
    title: "",
    people: <>One Mother Collective<br />Preach & EuroEyez</>,
    description: "PARTY",
    time: "21-22:30",
    location: "Aula",
    type: "Feiern"
  },
  {
    title: "",
    people: <>00sirenas00</>,
    description: "PARTY",
    time: "23-1",
    location: "Aula",
    type: "Feiern"
  },
  {
    title: "",
    people: <>disk.o</>,
    description: "PARTY",
    time: "1-3",
    location: "Aula",
    type: "Feiern"
  },
  {
    title: "",
    people: <>sth that runs</>,
    description: "PARTY",
    time: "3-4",
    location: "Aula",
    type: "Feiern"
  }
]

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
    people: "",
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
    title: "an alle orte, die hinter uns liegen",
    time: "ab 12:00",
    description: "Kippen, das ist eine Bewegung, das ist ein Impuls, ein Antasten. In Sinthujan Varatharajhs Debüt \"an alle orte, die hinter uns liegen\" wird das Einheitliche in die Schieflage gebracht: Was passiert, wenn wir uns Sprache als Verschiebung nähern, dem Sprechen als Instrument der Macht? In einem Vortrag mit Auszügen aus seinem*ihrem Buch widmet sich Varatharajah dem Kippen als Versuch aus einer Schieflage in die Gerade zu kommen.",
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
        Party
      </>
    ),
    type: "Feiern",
  },

  {
    location: "Schulhof",
    people: <>Odile Kennel</>,
    title: "Wildes Übersetzen",
    time: "10:00 - 12:00",
    description: (
      <>
        vergiss // beim Übersetzen den Inhalt // es kommt auf die Sprache an“
        Dieser Vorstellung wollen wir uns in der Lyrik-Übersetzungswerkstatt
        nähern. Das Original betrachten wir von hinten, wir übersetzen
        multilinguale Gedichte sowie Gedichte aus Sprachen, die wir nicht
        verstehen. Grundkenntnisse sind nicht erforderlich, geleitet wird der
        Workshop auf Deutsch und Englisch, weitere Sprachen willkommen. Maximal
        10 Teilnehmer:innen. Anmeldung per Mail unter workshops@prosanova.net
      </>
    ),
    type: "Teilnehmen",
  },

  {
    location: "Container",
    people: <>--</>,
    title: "Wildes Übersetzen",
    time: "ab 10:00",
    description: (
      <>
        Im Container öffnen wir die verstaubte Konservendose, die da, ganz da
        hinten im Vorratsschrank. Hier finden wir Stimmen der
        Literaturgeschichte, die unerhört blieben und überhört wurden. Der
        Container ist der Versuch, diesen Stimmen Sichtbarkeit zu verschaffen,
        sie zu feiern, ihnen zu gedenken. Wir hören Soundcollagen, machen einen
        Filmabend, führen Interviews mit Hinterbliebenen. Wir erinnern,
        konservieren, bereiten auf und erleben nach. Mit: Ilse Aichinger, Ronald
        M. Schernikau, Mascha Kaléko, May Ayim, Semra Ertan, Else
        Lasker-Schüler, Marianne Fritz, stolzeaugen.books und solange wir
        erinnern, Selma Meerbaum, Sakine Cansiz und Mahmoud Darwisch.
      </>
    ),
    type: "Hören",
  },

  {
    location: "Container",
    people: <>Olufemi Atibioke</>,
    title: "The Line / Literatur Meditation III",
    time: "10:00 - 10:30",
    description: (
      <>
        In den Literaturmeditation werden die Augen geschlossen, die Atmung wird
        beruhigt und es wird ein Punkt kommen, an dem der Text nicht mehr
        Selbstzweck ist. Vielleicht wird er zu einem Traum weiterverarbeitet.
        Vielleicht auch nicht. Vielleicht ist es falsch davon auszugehen, dass
        es eine Monotonie, eine Ruhe, eine Konsistenz geben muss. Störungen
        können passieren, auch in dieser Literaturmeditation. An jedem
        Festivaltag findet eine Literaturmeditation zu unterschiedlichen
        Zeitpunkten statt. Mehr Infos dazu im Timetable.
      </>
    ),
    type: "Teilnehmen",
  },

  {
    location: "Klassenzimmer",
    people: <>disk.o</>,
    title: "",
    time: "21:00 - 22:00",
    description: (
      <>
        Party
      </>
    ),
    type: "Feiern",
  },

  {
    location: "Aula",
    people: <>yung_womb, slimgirl fat</>,
    title: "",
    time: "22:00 - 00:00",
    description: (
      <>
        Party
      </>
    ),
    type: "Feiern",
  },

  {
    location: "Klassenzimmer",
    people: <>Orientalisman and Cansel</>,
    title: "",
    time: "22:00 - 00:00",
    description: (
      <>
        Party
      </>
    ),
    type: "Feiern",
  },

  {
    location: "Labor",
    people: <>Elona Beqiraj und Argon Beqiraj</>,
    title: "I caught myself feeling jealous of the moon",
    time: "12:00 - 13:00",
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
    location: "Container",
    people: <>Cana Bilir-Meier</>,
    title: "Zwischen den Zeilen: Von der Hässlichkeit",
    time: "12:00 - 13:00",
    description: (
      <>
        Wie wird gesprochen? Wie wird kritisiert? Welche Kriterien gibt es für
        gute und schlechte Wörter? Welche Worte werden als "hochkulturell"
        gelesen? In diesem Format geht es um die guten Wörter, die zu schlechten
        gemacht werden. Um die sogenannten "schönen Wörter", die eigentlich das
        "Schlechte" implizieren wollen und verharmlosen. In einem Videobeitrag
        verhandelt Cana Bilir-Meier die Sprache der Kritik in der
        Literaturlandschaft und die Kommerzialisierung von Texten.Sie nimmt die
        Sprache in den Blick, die die harte Realität abbildet und die von
        Verlagen ungewollt bleibt. Denn sind es nicht gerade diese Worte, die es
        wert sind, rezipiert zu werden?
      </>
    ),
    type: "Schauen",
  },

  {
    location: "Aula",
    people: <>Pavement Gun</>,
    title: "",
    time: "00:00 - 03:00",
    description: (
      <>
        Party
      </>
    ),
    type: "Feiern",
  },

  {
    location: "Klassenzimmer",
    people: <>Gemini Gems</>,
    title: "",
    time: "00:00 - 02:00",
    description: (
      <>
        Party
      </>
    ),
    type: "Feiern",
  },

  {
    location: "Labor",
    people: <>Katharina Angus (Mentorat: Olufemi Atibioke)</>,
    title: "Bekenntnisse an das Misstrauen: Lucky Girl",
    time: "13.30 - 14.00",
    description: (
      <>
        Kim fragt sich: Kann ein Vibrator, der von gegeneinanderstoßenden
        Magneten gesteuert wird, eine Kupferspirale ziehen? Sieht es auf dem
        Mond aus wie in Sudbury, Kanada und was ist im Sommer '92 mit Marlene
        passiert? Gemeinsam mit Kim tauchen wir ein in eine digitale Welt, die
        Recherche und Erinnerungen der Protagonistin in Dialog treten lässt.
        „Lucky Girl“ ist ein essayistisches Prosastück, das bei der Lesung mit
        Visuals kombiniert wird. Entstanden ist dies im Rahmen des
        Vermittlungsprogramms "Bekenntnisse an das Misstrauen" - gemeinsam mit
        Mentor Olufemi Atibioke.
      </>
    ),
    type: "Aufführen",
  },

  {
    location: "Dunkelkammer",
    people: <>KaHakan Tezkan</>,
    title: "Eine Poetik der Kerne",
    time: "14:00 - 15:00 und 15:00 - 16:00",
    description: (
      <>
        Mit Hakan Tezkan gehen wir in einer Live-Installation die Bewegung der
        Texte ab und wollen uns ausgehend von schon Geschriebenem und noch nicht
        Geschriebenem fragen, was ein Text überhaupt ist, genauer: was uns ein
        Text überhaupt bedeuten kann. Was folgt, ist die Antwort eines Autors,
        der 2018 sein Debüt publiziert hat und danach von der Bildfläche des
        Literaturbetriebs verschwunden ist. Die Antwort könnte so beginnen:
        Jeder Text ist eine Anhäufung, jeder Text ist gehäufter Raum. Was wir
        finden, ist Hinein-, Darunter und Dazwischengeschriebenes. Hakan Tezkan
        spürt dieser Erkenntnis nicht nur im Raum, sondern auch lesend nach,
        indem er seinen Roman mit eigenen, aber auch mit Fragmenten anderer
        Autor*innen durchsetzt. Am Ende finden wir vielleicht eine Einladung -
        die Einladung an das Publikum, weiterzuschreiben.
      </>
    ),
    type: "Aufführen",
  },

  {
    location: "Labor",
    people: <>Armeghan Taheri</>,
    title: "Robin H. und die Frage der Schuld",
    time: "15:00 - 16:00",
    description: (
      <>
        Wer hat wem was an welchem Tag wie getan? Die Frage der Schuld liegt
        zusammen mit Robins Fleisch in einer Schublade verschlossen. In einer
        Soundlesung mit gesprochenen Soundscape-Kompositionen von Armeghan
        Taheri (aka Robin Hoe) und Nima Schaper wird der Text zu etwas
        Lebendigem. Er verlässt die enge Struktur der sprachlichen Regeln, wird
        von Sound und Ton dekonstruiert und in seine Einzelteile zerlegt.
        Sprache und Musik stellen die Frage nach der Symbiose von Befreiung,
        Versagen und Selbstzerstörung.
      </>
    ),
    type: "Aufführen",
  },

  {
    location: "Aula",
    people: <>Heike Geißler</>,
    title: "Wochen, Wunden. Wunder. Eine Schulung mit Möglichkeiten.",
    time: "15:15 - 16:15",
    description: (
      <>
        Anknüpfend an ihren Roman DIE WOCHE nähert sich Heike Geißler den
        Demonstrationen. Das chorische Wir ihres Romans spricht weiter, bewegt
        sich über den Roman hinaus in die Gegenwart. Das ist eine Demonstration
        am Rande, das ist eine Befragung, ein Spaß aber auch. Ausgangspunkt sind
        Fragen, wie: Wohin mit der Energie, die aus dem Burn-out resultiert?
        Wohin mit Wut und Verzweiflung? Was anfangen mit dem Misstrauen? Und:
        Wohin mit den Witzen? Wohin mit allem Schmerz? Hierher! Eine Interaktion
        aus Lesung, Video und vielleicht auch Tafelarbeit, eine Schulstunde,
        extra für PROSANOVA entwickelt. Und immer gibt es die Frage: Wie geht’s?
        Kann das so bleiben? Was tun? Heike Geißler zeigt eine Suche nach den
        benötigten Möglichkeiten und deren Inspektion im Jetzt.
      </>
    ),
    type: "Aufführen",
  },

  {
    location: "Klassenzimmer",
    people: <>---</>,
    title: "",
    time: "02:00 - 03:00",
    description: (
      <>
        Party
      </>
    ),
    type: "Feiern",
  },
  {
    location: "Container",
    people: (
      <>
        stolzeaugen.books x solange.wir.erinnern (Moderation: Aylin Himmetoglu)
      </>
    ),
    title: "Wenn die Worte sich an uns erinnern würden",
    time: "16:00 - 17:15",
    description: (
      <>
        Der stolzeaugen.books Verlagsgesellschaft nimmt im deutschsprachigen
        Literaturbetrieb eine Sonderrolle ein. Jennifer Aghedo und Michelle
        Crooks kommen als Vetreter:innen des stolzeaugen.books Verlags zum
        PROSANOVA und lesen aus "Texte nach Hanau" vor, der ersten Publikation
        des Verlags und einem Sammelband verschiedenster Autor:innen zum
        Anschlag und seinen Konsequenzen. In einem anschließenden Gespräch mit
        Aylin Himmetoğlu wird es um die Fragen gehen, wie textliches Erinnern
        aussehen kann, wie Erinnern als literarische Praxis aussehen kann und
        welche politische Notwendigkeit die Verlagsarbeit von stolzeaugen.books
        begleitet. Die Veranstaltung findet in Kooperation mit der Ausstellung
        "Solange Wir Erinnern" statt. "Solange Wir Erinnern" ist ein Projekt,
        das sich zum Ziel gesetzt hat, ein Hanau-Gedenken in Schulen zu
        etablieren. Im Anschluss einer thematischen Auseinandersetzung und
        Sensibilisierung mit der Kontinuität rechter Gewalt in Deutschland,
        erarbeiten Schüler:innen aus Berlin und Hamburg künstlerische
        Interventionen in Erinnerung und Solidarität mit Betroffenen und Opfern
        rechter Gewalt mit dem Fokus auf den jüngsten rechtsterroristischen
        Attentat in Hanau. „Solange Wir Erinnern“ ist ein Projekt von Theater
        findet Stadt e. V., und wird gefördert durch den Berliner Projektfonds
        Kulturelle Bildung in Kooperation mit dem Maxim Gorki Theater.
        Projektleitung: Hiyam Biary und Elona Beqiraj Ausstellungskonzeption- &
        produktion: Ronak Jundi
      </>
    ),
    type: "Diskutieren",
  },
  {
    location: "Labor",
    people: <>Moderation und Organisation: Franziska Bothe</>,
    title: "Open Stage",
    time: "16:30 - 17:30",
    description: (
      <>
        Im Vorhinein des Festivals haben wir nach euren Texten gesucht: Texte
        zum Performen, Texte zum Vorlesen, Texte zum Vor-Sich-Hinnuscheln. Hier
        ist jetzt die Bühne für all diese Texte - was uns erwartet, ist
        unbekannt.
      </>
    ),
    type: "Teilnehmen",
  },
  {
    location: "Sani-Raum",
    people: <>Olufemi Atibioke</>,
    title: "Ausfälle",
    time: "16:30 - 18:00",
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
        sich trösten zu lassen und weiterhin zu scheitern.
      </>
    ),
    type: "Andauern",
  },

  {
    location: "Aula",
    people: <>disk.o</>,
    title: "",
    time: "03:00 - 04:00",
    description: (
      <>
        Party
      </>
    ),
    type: "Feiern",
  },
  },
];
