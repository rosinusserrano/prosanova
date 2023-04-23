import React from "react";
import { Link } from "react-router-dom";

export const TermineInformation = [
    {
        date: "30/03",
        title: ["Bekenntnisse an das ", "Misstrauen"],
        contentJSX: <>
            <p><span className="font-size-3">OPEN CALL</span><br />
                <span className="font-montiac-italic">Bekenntnisse an das Misstrauen.</span></p>
            <p>Zu welchem Misstrauen bekennt ihr euch?</p>
            <p>Zu dieser Frage haben wir eure szenischen, experimentellen und gattungsbrechenden Texte gesucht. Unsere Jury – bestehend aus Olufemi Atibioke, Deniz Bolat und Laura Shirin – musste sich schwern Herzens für drei Texte entscheiden, die in einem gemeinsamen Inszenierungprozess erarbeitet und auf dem Festival gezeigt werden. Wie die Texte umgesetzt werden, bleibt den Autor:innen in Absprache mit den Mentor:innen freigestellt – ob klassisch, experimentell, visuell, interaktiv, medial oder etwas anderes. Wir können uns also alle auf unterschiedliche Formen der Inszenierung freuen, die am Festivalwochenende gezeigt werden.</p>
            <p>Und am Ende bleibt nur noch die Frage, wem wir trauen wollen und wo das Misstrauen bleiben wird.</p>
            <p>
                <p className="font-size-4" style={{ textAlign: "center" }}>JURY</p>
                <div style={{
                    display: "flex",
                    gap: "1rem",
                    flexWrap: "wrap"
                }}>
                    <div style={{
                        flex: "1 1 0",
                        minWidth: "200px"
                    }}>
                        <img className="border-radius" src="images/AtibiokePrivat.jpg" style={{
                            aspectRatio: "5/4",
                            objectPosition: "50% 45%",
                            objectFit: "cover",
                            width: "100%",
                        }} />
                        <p>Olufemi-Just Atibioke ist studierter Kulturwissenschaftler. Arbeitet in der Kulturellen Bildung. Schreibt Text. Letzte Veröffentlichungen: Story des Jares in BELLA triste Nr. 63.</p>
                    </div>
                    <div style={{
                        flex: "1 1 0",
                        minWidth: "200px"
                    }}>
                        <img className="border-radius" src="images/LauraShirinPrivat.jpg" style={{
                            aspectRatio: "5/4",
                            objectPosition: "50% 0%",
                            objectFit: "cover",
                            width: "100%",
                        }} />
                        <p>Laura Shirin ist politische Performerin. In ihren Arbeiten setzt sie sich einerseits akademisch, andererseits künstlerisch zu Themen um Rassismus, (Queer-)Feminismus und Intersektionalität auseinander. Dabei befinden sich drängende Fragen nach Zugehörigkeit und Identität, Momente des Empowerment und Verlusts sowie der Suche nach Haymat und Community. Ihre erste Buchpublikation fand dazu im Gedichtband „Haymatlos“ statt, während weitere Texte in „Texte nach Hanau“ zu finden sind. Sie publizierte darüber hinaus beim Young Migrants Blog und beim Mo:No Magazin für Text und Bild.</p>
                    </div>
                    <div style={{
                        flex: "1 1 0",
                        minWidth: "200px"
                    }}>
                        <img className="border-radius" src="images/DenizBolatPrivat.jpg" style={{
                            aspectRatio: "5/4",
                            objectPosition: "50% 7%",
                            objectFit: "cover",
                            width: "100%",
                        }} />
                        <p>Deniz Bolat studiert in Hildesheim und lebt in Berlin. Früher war Deniz ein Teil der BELLA triste und arbeitet jetzt in der künstlerischen Programmgestaltung des Fuchsbau Festivals und in der Redaktion für das KONTENT Online Magazin. Deniz schreibt Lyrik und war Teil der open poems am Haus für Poesie für das Poesiefestival Berlin 2022 und veröffentlichte einen Lyrikbeitrag für das Narr #32. Er beschäftigt sich mit Narrativen von Gewalt und ihrer Übersetzung in verschiedene Gewerke. Deniz schreibt gerade seine Bachelorarbeit über ethnischen Nationalismus, forscht zur Gründung einer Spielstätte am Haus der Statistik in Berlin und arbeitet in der Dramaturgie.</p>
                    </div>
                </div>
            </p>
        </>
    },
    {
        date: "11/05",
        title: ["Auftaktlesung"],
        contentJSX: <>
            <p><span className="font-montiac-italic font-size-1">Auftaktlesung</span></p>
            <p>
                11.5. - 19:30 Uhr<br />
                Literaturhaus St. Jakobi<br />
                Jakobikirchgasse<br />
                31134 Hildesheim
            </p>
            <p>Über einen Monat vor dem Festivalwochenende starten wir mit einer ersten Lesung. Heike Geißler, Bezhad Karim Khani und Karosh Taha sind zu Gast und lesen für uns aus neuen und bekannten Büchern. </p>
            <p>Alle drei vereint das Erzählen der Brüche. Behzad Karim Khani erzählt in seinem neuen Roman "Hund Wolf Schakal" die Geschichte zweier Brüder, ihrer Distanz und der gleichzeitigen unbedingten Liebe. Gleichzeitig nähert sich Karosh Taha in ihrem letzten Roman "Im Bauch der Königin" zwei Jugendlichen, die auf der Suche nach Halt immer wieder sowohl auf Zurückweisung als auch auf unerwartete Unterstützung treffen. Nun kommt sie mit neuen Texten nach Hildesheim und liest für das PROSANOVA exklusiv und vorab bisher Unbekanntes. Die Brüche bei Heike Geißler sind benannt: In ihrem Roman "Die Woche" versuchen zwei Personen mit einer Woche zurechtzukommen, in der Montag auf Montag folgt und politische Auseinandersetzungen unabdingbar und allgegenwärtig werden. </p>
            <p>Wir wollen uns auf das Festival einstimmen und ersten Worten lauschen. Begleitet wird das Ganze vom NDR. Nach der Lesung wird es ein spannendes und aufschlussreiches Gespräch geben, moderiert von Alexander Solloch. Mehr Informationen und Tickets <Link to={"https://stjakobi.de/veranstaltungen/prosanova-auftakt-mit-behzad-karim-khani-karosh-taha-und-heike-geissler "} >hier</Link></p>
            <p>
                <p className="font-size-4" style={{ textAlign: "center" }}>LESENDE</p>
                <div style={{
                    display: "flex",
                    gap: "1rem",
                    flexWrap: "wrap"
                }}>
                    <div style={{
                        flex: "1 1 0",
                        minWidth: "200px"
                    }}>
                        <img alt="Foto: Manuel Gehrke" className="border-radius" src="images/Alexander_Solloch_Fotograf_Manuel_Gehrke.jpg" style={{
                            aspectRatio: "5/4",
                            objectPosition: "50% 0%",
                            objectFit: "cover",
                            width: "100%",
                        }} />
                        <p>Alexander Solloch, geb. 1978 in Wesel/Niederrhein, studierte in Leipzig und Aix-en-Provence Geschichte, Französisch und Journalistik; Volontariat beim Norddeutschen Rundfunk; seit 2014 Literaturredakteur bei NDR Kultur.</p>
                    </div>
                    <div style={{
                        flex: "1 1 0",
                        minWidth: "200px"
                    }}>
                        <img alt="Foto: Havin Al-Sindy" className="border-radius" src="images/KaroshTaha.jpg" style={{
                            aspectRatio: "5/4",
                            objectPosition: "50% 0%",
                            objectFit: "cover",
                            width: "100%",
                        }} />
                        <p>Karosh Taha, 1987 geboren und aufgewachsen in der kurdischen Stadt Zaxo, hat Anglistik und Geschichtswissenschaften an der Universität Duisburg-Essen studiert. Ihr Debütroman erschien unter dem Titel Beschreibung einer Krabbenwanderung im März 2018 beim DuMont Buchverlag. Im April 2020 erschien ihr zweiter Roman Im Bauch der Königin als Wendebuch ebenfalls bei DuMont. Beide Romane erhielten zahlreiche Stipendien und Preise, zuletzt die Alfred-Döblin Medaille. Sie lebt und arbeitet in Köln und Paris.</p>
                    </div>
                    <div style={{
                        flex: "1 1 0",
                        minWidth: "200px"
                    }}>
                        <img className="border-radius" src="images/BehzadKarimKani.jpeg" style={{
                            aspectRatio: "5/4",
                            objectPosition: "50% 40%",
                            objectFit: "cover",
                            width: "100%",
                        }} />
                        <p>Behzad Karim Khani, 1977 geboren in Teheran exilierte 1986 nach Deutschland, studierte Kunstgeschichte und Medienwissenschaft an der Ruhruniversität Bochum. Er lebt in Berlin-Kreuzberg und arbeitet als Autor und freier Journalist. 2022 war er für den Ingeborg Bachmann Preis nominiert. Sein preisgekrönter Roman 'Hund, Wolf, Schakal' erschien bei Hanser Berlin.</p>
                    </div>
                    <div style={{
                        flex: "1 1 0",
                        minWidth: "200px"
                    }}>
                        <img alt="© Heike Steinweg/Suhrkamp Verlag" className="border-radius" src="images/HeikeGeissler.jpg" style={{
                            aspectRatio: "5/4",
                            objectPosition: "50% 0%",
                            objectFit: "cover",
                            width: "100%",
                        }} />
                        <p>Heike Geißler, 1977 in Riesa geboren, ist Autorin, Übersetzerin und Mitherausgeberin der Heftreihe Lücken kann man lesen. Zuletzt erschienen der Reportage-Roman Saisonarbeit (Spector Books, 2014), das Fragenheft und Hörspiel Fragen für alle sowie das gemeinschaftliche Literaturprojekt Check your habitus, kuratiert von Daniela Dröscher. Mit der Schauspielerin Charlotte Puder arbeitet sie als Kollektiv George Bele. Heike Geißler wurde mit zahlreichen Stipendien und Preisen ausgezeichnet und lebt heute in Leipzig.</p>
                    </div>
                </div>
            </p>

        </>
    },
    {
        date: "23/05",
        title: ["Abend der ", "Kollektive"],
        contentJSX: <>
            <span className="font-montiac-italic"> Und dazwischen Zwischenräume. Abend der Kollektive Literaturhaus{" "} </span>
            <br></br>
            <br></br>
            St.Jakobi, 12345 Hildesheim, 18:30 <br></br>
            <br></br>In einer Kooperation mit dem Literaturinstitut der
            Universität Hildesheim und dem Literaturhaus St. Jakobi widmen wir uns
            dem Kollektiven als Praxis im Literaturbetrieb. Wie originell können
            wir sein, wenn wir gemeinsam arbeiten? Welche Rolle nimmt die soziale
            Praxis neben der künstlerischen ein und wie viele Kompromisse müssen
            eingegangen werden? Welche Ausschlüsse geschehen, wenn wir uns auf
            ganz bestimmte Kollektivpartner:innen einlassen? All das wollen wir
            uns gemeinsam fragen - und holen uns dafür Unterstützung von einzelnen
            Vertreter:innen aus verschiedenen Kollektiven. Mit dabei: Lynn Takeo
            Musiol (dyke dogs), Kyra Schmidt (Biwi Kefempom), Sandra Burckhardt
            (Wiese), Tristan Marquardt (Q13), Alexnder Rupflin (Hermes Baby) und
            Maren Wurster. Der Fokus liegt an diesem Abend auf dem Gemeinsamen -
            wir wollen diskutieren und so selbst kollektive Erfahrungen machen.
            Mehr Informationen und Tickets hier:
            <Link target="blank"
                className="Links"
                to=" https://stjakobi.de/veranstaltungen/prosanova-auftakt-mit-behzad-karim-khani-karosh-taha-und-heike-geissler"
            >
                {" "}
                https://stjakobi.de/veranstaltungen/prosanova-auftakt-mit-behzad-karim-khani-karosh-taha-und-heike-geissler
            </Link>
        </>
    },
    {
        date: "01-02/06",
        title: ["ZUSAMMENKOMMEN"],
        contentJSX: <>
            <span className="font-montiac-italic"> Und dazwischen Zwischenräume. Abend der Kollektive Literaturhaus{" "} </span>
            <br></br>
            <br></br>
            St.Jakobi, 12345 Hildesheim, 18:30 <br></br>
            <br></br>In einer Kooperation mit dem Literaturinstitut der
            Universität Hildesheim und dem Literaturhaus St. Jakobi widmen wir uns
            dem Kollektiven als Praxis im Literaturbetrieb. Wie originell können
            wir sein, wenn wir gemeinsam arbeiten? Welche Rolle nimmt die soziale
            Praxis neben der künstlerischen ein und wie viele Kompromisse müssen
            eingegangen werden? Welche Ausschlüsse geschehen, wenn wir uns auf
            ganz bestimmte Kollektivpartner:innen einlassen? All das wollen wir
            uns gemeinsam fragen - und holen uns dafür Unterstützung von einzelnen
            Vertreter:innen aus verschiedenen Kollektiven. Mit dabei: Lynn Takeo
            Musiol (dyke dogs), Kyra Schmidt (Biwi Kefempom), Sandra Burckhardt
            (Wiese), Tristan Marquardt (Q13), Alexnder Rupflin (Hermes Baby) und
            Maren Wurster. Der Fokus liegt an diesem Abend auf dem Gemeinsamen -
            wir wollen diskutieren und so selbst kollektive Erfahrungen machen.
            Mehr Informationen und Tickets hier:
            <Link target="blank"
                className="Links"
                to=" https://stjakobi.de/veranstaltungen/prosanova-auftakt-mit-behzad-karim-khani-karosh-taha-und-heike-geissler"
            >
                {" "}
                https://stjakobi.de/veranstaltungen/prosanova-auftakt-mit-behzad-karim-khani-karosh-taha-und-heike-geissler
            </Link>
        </>
    },
    {
        date: "02/06",
        title: ["Dort, wo wir waren"],
        contentJSX: <>
            <span className="font-montiac-italic"> Und dazwischen Zwischenräume. Abend der Kollektive Literaturhaus{" "} </span>
            <br></br>
            <br></br>
            St.Jakobi, 12345 Hildesheim, 18:30 <br></br>
            <br></br>In einer Kooperation mit dem Literaturinstitut der
            Universität Hildesheim und dem Literaturhaus St. Jakobi widmen wir uns
            dem Kollektiven als Praxis im Literaturbetrieb. Wie originell können
            wir sein, wenn wir gemeinsam arbeiten? Welche Rolle nimmt die soziale
            Praxis neben der künstlerischen ein und wie viele Kompromisse müssen
            eingegangen werden? Welche Ausschlüsse geschehen, wenn wir uns auf
            ganz bestimmte Kollektivpartner:innen einlassen? All das wollen wir
            uns gemeinsam fragen - und holen uns dafür Unterstützung von einzelnen
            Vertreter:innen aus verschiedenen Kollektiven. Mit dabei: Lynn Takeo
            Musiol (dyke dogs), Kyra Schmidt (Biwi Kefempom), Sandra Burckhardt
            (Wiese), Tristan Marquardt (Q13), Alexnder Rupflin (Hermes Baby) und
            Maren Wurster. Der Fokus liegt an diesem Abend auf dem Gemeinsamen -
            wir wollen diskutieren und so selbst kollektive Erfahrungen machen.
            Mehr Informationen und Tickets hier:
            <Link target="blank"
                className="Links"
                to=" https://stjakobi.de/veranstaltungen/prosanova-auftakt-mit-behzad-karim-khani-karosh-taha-und-heike-geissler"
            >
                {" "}
                https://stjakobi.de/veranstaltungen/prosanova-auftakt-mit-behzad-karim-khani-karosh-taha-und-heike-geissler
            </Link>
        </>
    },
    {
        date: "23-25/06",
        title: ["Festivalwochenende"],
        contentJSX: <>
            <span className="font-montiac-italic"> Festivalwochenende 23.–25.06. </span><br></br>
            <br></br>Hildesheim <br></br>
            <br></br>Seid dabei, wenn das Prosanova-Festival in die siebte Runde
            geht und macht Hildesheim mit uns unsicher. Literatur, Performance,
            Musik, Workshops und das Get-Together des Literaturbetriebs wartet in
            Hildesheim auf euch!
        </>
    },
    {
        date: "Sommer 2023",
        title: ["Sonderausgabe der ", "Bella ", "Triste"],
        contentJSX: <>
            <span className="font-montiac-italic"> Sonderausgabe der BELLA triste – Zeitschrift für junge Literatur{" "}</span>
            <br></br>
            <br></br>
            15.08. <br></br>
            <br></br>Hildesheim In der Sondersausgabe der BELLA triste widmen wir
            uns dem Archivieren als künstlerischer Praxis. Wie können wir
            festhalten, was wir an drei Tagen Festival erlebt haben? Was bleibt
            vom Rausch? Wir wollen die BELLA als Ort der Versammlung sehen, als
            Begegnungsstätte und weniger als bloße Dokumentation des PROSANOVAs.
            Wir fragen uns, wie wir Strukuren weiterführen können, die wir auf dem
            Festival erprobt haben. Ist es möglich, das PROSANOVA zwischen zwei
            Buchdeckel zu klemmen? In der "Schlechte Wörter"-BELLA werden Texte,
            Fotos sowie alles dazwischen veröffentlicht, die in irgendeiner Art
            und Weise Teil des Festivals waren. Dazu arbeiten wir eng mit der
            Redaktion der BELLA triste zusammen.
        </>
    }
]