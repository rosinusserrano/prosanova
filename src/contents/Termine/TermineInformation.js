import { useMobile } from "hooks/useMediaQuery";
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
                11.5. - 19.30 Uhr<br />
                Literaturhaus St. Jakobi<br />
                Jakobikirchgasse<br />
                31134 Hildesheim
            </p>
            <p>Über einen Monat vor dem Festivalwochenende starten wir mit einer ersten Lesung. Heike Geißler, Bezhad Karim Khani und Karosh Taha sind zu Gast und lesen für uns aus neuen und bekannten Büchern. </p>
            <p>Alle drei vereint das Erzählen der Brüche. Behzad Karim Khani erzählt in seinem neuen Roman "Hund Wolf Schakal" die Geschichte zweier Brüder, ihrer Distanz und der gleichzeitigen unbedingten Liebe. Gleichzeitig nähert sich Karosh Taha in ihrem letzten Roman "Im Bauch der Königin" zwei Jugendlichen, die auf der Suche nach Halt immer wieder sowohl auf Zurückweisung als auch auf unerwartete Unterstützung treffen. Nun kommt sie mit neuen Texten nach Hildesheim und liest für das PROSANOVA exklusiv und vorab bisher Unbekanntes. Die Brüche bei Heike Geißler sind benannt: In ihrem Roman "Die Woche" versuchen zwei Personen mit einer Woche zurechtzukommen, in der Montag auf Montag folgt und politische Auseinandersetzungen unabdingbar und allgegenwärtig werden. </p>
            <p>Wir wollen uns auf das Festival einstimmen und ersten Worten lauschen. Begleitet wird das Ganze vom NDR. Nach der Lesung wird es ein spannendes und aufschlussreiches Gespräch geben, moderiert von Alexander Solloch. Mehr Informationen und Tickets <Link target="_blank" to={"https://stjakobi.de/veranstaltungen/prosanova-auftakt-mit-behzad-karim-khani-karosh-taha-und-heike-geissler "} >hier</Link></p>
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

        </>
    },
    {
        date: "23/05",
        title: ["Abend der ", "Kollektive"],
        contentJSX: <>
            <span className="font-montiac-italic"> Und dazwischen Zwischenräume. Abend der Kollektive.</span>
            <p>
                23.5. - 18.30 Uhr<br />
                Literaturhaus St. Jakobi <br />
                Jakobikirchgasse<br />
                31134 Hildesheim
            </p>
            <p>
                In einer Kooperation mit dem Literaturinstitut der Universität Hildesheim und dem Literaturhaus St. Jakobi widmen wir uns dem Kollektiven als Praxis im Literaturbetrieb. Wie originell können wir sein, wenn wir gemeinsam arbeiten? Welche Rolle nimmt die soziale Praxis neben der künstlerischen ein und wie viele Kompromisse müssen eingegangen werden? Welche Ausschlüsse geschehen, wenn wir uns auf ganz bestimmte Kollektivpartner:innen einlassen? All das wollen wir uns gemeinsam fragen - und holen uns dafür Unterstützung von einzelnen Vertreter:innen aus verschiedenen Kollektiven. Mit dabei: Lynn Takeo Musiol (dyke dogs), Kyra Schmidt (Biwi Kefempom), Sandra Burckhardt (Wiese), Tristan Marquardt (Q13), Alexnder Rupflin (Hermes Baby) und Maren Wurster. Der Fokus liegt an diesem Abend auf dem Gemeinsamen - wir wollen diskutieren und so selbst kollektive Erfahrungen machen. Mehr Informationen und Tickets <Link target="_blank" to={"https://stjakobi.de/veranstaltungen/abend-der-kollektive"}>hier</Link>.
            </p>
            <p className="font-size-4" style={{ textAlign: "center" }}>KÜNSTLER*INNEN</p>
            <div style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap"
            }}>
                <div style={{
                    flex: "1 1 0",
                    minWidth: "200px"
                }}>
                    <img alt="Foto: Paula Winkler" className="border-radius" src="images/Maren_Wurster(c)PaulaWinkler.jpg" style={{
                        aspectRatio: "5/4",
                        objectPosition: "50% 10%",
                        objectFit: "cover",
                        width: "100%",
                    }} />
                    <p>Maren Wurster studierte Philosophie in Köln und Literarisches Schreiben in Leipzig. Ihr Romandebüt „Das Fell“ wurde 2017 bei Hanser Berlin veröffentlicht. Ihr aktueller Roman „Eine beiläufige Entscheidung“ erzählt von einer Mutter, die ihr Kind verlässt, und einem Kind, das mutterlos aufwächst. In dem Memoir „Papa stirbt, Mama auch“ und dem erzählenden Sachbuch „Totenwache“ hat sie sich mit dem Abschied von den eigenen Eltern auseinandergesetzt. Maren Wurster war Mitglied des Autorinnen-Kollektivs „Writing with Care/Rage“, das sich in Texten und Veranstaltungen kritisch mit Kreativ- und Care-Arbeit auseinandersetzte. Zuletzt lud sie andere Schriftsteller:innen zu einer „Archäologie des Verlusts“ ein. Die Texte wurden in der Volksbühne Berlin präsentiert und in der Literaturzeitschrift Akzente veröffentlicht.</p>
                </div>
                <div style={{
                    flex: "1 1 0",
                    minWidth: "200px"
                }}>
                    <img alt="biwikefempom" className="border-radius" src="images/BiwiKefempom.jpg" style={{
                        aspectRatio: "5/4",
                        objectPosition: "50% 0%",
                        objectFit: "cover",
                        width: "100%",
                    }} />
                    <p>
                        Das Autor*innen-Kollektiv BIWI KEFEMPOM (bis wir keinen einzigen Femi(ni)zid mehr politisieren müssen) besteht aus Judith Goetz, Cari Maier, Kyra Schmied und Marcela Torres Heredia.
                    </p>
                    <p>
                        Judith Goetz ist Literatur- und Politikwissenschaftlerin, Gender-Forscherin, Rechtsextremismus-Expertin und Lehrbeauftragte an unterschiedlichen Universitäten, Mitglied der Forschungsgruppe Ideologien und Politiken der Ungleichheit (FIPU), der Europäischen feministischen Plattform und dem Autor*innenkollektiv Feministische Intervention (Ak. Fe.In). Ihre Interessensschwerpunkte liegen bei Frauen*/ Gender und Rechtsextremismus sowie Antifeminismus. Zuletzt erschienen die von ihr mitherausgegebenen Sammelbände »Rechtsextremismus: Herausforderung für den Journalismus« (2021) und »Handlungsstrategien gegen Rechtsextremismus« (2022).
                    </p>
                    <p>
                        Cari Maier ist Politikwissenschaftler*in und Sozioökonom*in und beschäftigt sich mit feministischer Gesellschaftstheorie, insbesondere Sorge- und Carearbeit. Cari promoviert zu theoretischen Konzeptionen von Sorge und solidarischen Beziehungsweisen an der Goethe Universität Frankfurt am Main und lehrt aktuell am Fachbereich für Politische Theorie an der Universität Wien sowie im Fachbereich Soziale Arbeit an der FH Campus Wien. Cari ist Mitglied der Forschungsgruppe Ideologien und Politiken der Ungleichheit (FIPU), des Arbeitskreises Gender, Kinship, Sexuality am Institut für Sozialforschung in Frankfurt am Main und des feministischen Theoriekollektivs fe.ory in Wien.
                    </p>
                    <p>
                        Kyra Schmied lehrt an der Universität Wien am Fachbereich Politische Theorie und studiert Gender Studies. Neben Auseinandersetzungen mit Fragen zu Raum, Körper und Öffentlichkeit beschäftigt sich Kyra mit einer feministischen Relektüre der Pariser Commune (1871) und damit zusammenhängend mit der Transgression vergeschlechtlichter gesellschaftlicher Strukturen und der Relevanz solidarischer Praxen.
                    </p>
                    <p>
                        Marcela Torres Heredia, MA MA (Bogotá, Kolumbien) ist Doktorandin und Stipendiatin der Österreichischen Akademie der Wissenschaften (DOC-team) am Institut Sozial- und Kulturanthropologie an der Universität Wien mit dem Projekt: The Socio-Ecological Crisis Up Close: Conflicts, Experiences and Alternatives in the Andean-Amazon Region. Marcela ist Mitherausgeberin der Sonderausgabe des Journals »Europa verrücken – Kämpfe zwischen Kolonialität und Dekolonisierung«.
                    </p>
                </div>
                <div style={{
                    flex: "1 1 0",
                    minWidth: "200px",
                }}>
                    <div style={{
                        width: "100%",
                        aspectRatio: "5/4",
                        overflow: "hidden"
                    }} className="border-radius">
                        <img className="" src="images/SandraBurkhardt_Foto_MirkoLux.jpg" style={{
                            objectPosition: "80% 40%",
                            objectFit: "cover",
                            height: "100%",
                            width: "50%"
                        }} />
                        <img className="" src="images/KollektivWiese.jpg" style={{
                            objectPosition: "50% 40%",
                            objectFit: "cover",
                            height: "100%",
                            width: "50%"
                        }} />
                    </div>
                    <p>Sandra Burkhardt, 1992 geboren, studierte Kunstgeschichte und Literarisches Schreiben in Karlsruhe, Leipzig und Berlin. 2018 erschien im gutleut verlag ihr Debütband „Wer a sagt“, mit dem sie 2019 bei den Lyrikempfehlungen der Leipziger Buchmesse vertreten war. Im Sommer diesen Jahres erscheint „Fragmente einer echten Ikone. Petrarca-Variationen“ bei kookbooks. Mit auf der Wiese (Wie es ist) مرج ist Sandra seit Sommer 2020.</p>
                    <p>
                        <i>Beschreibung Wiese (Wie es ist) مرج</i>
                    </p>
                    <p>
                        Das 2017 gegründete Kollektiv Wiese (Wie es ist) Maist eine mehrsprachige Schreibwerkstatt, in
                        der Literatur und Poesie übersetzt, besprochen und weitergeschrieben wird. Auf der Wiese werden verschiedene Sprachen gesprochen, vorrangig übersetzt wird momentan zwischen syrischem Arabisch und Deutsch. Die Gruppe setzt sich zusammen aus Schriftersteller*innen, Übersetzer*innen und Literaturwissenschaftler*innen verschiedenster Herkunft und ist offen für alle. Von 2021 bis 2022 widmete sich das Kollektiv mit den Projekten „Der unsichtbare Prozess“ und „Al-Khatib-Glossar“ einer Übersetzungskritik des Al-Khatib-Verfahrens in Koblenz, das unter dem „Weltrechtsprinzip“ zwei Geheimdienstler des syrischen Assad-Regimes vor Gericht stellte. Es entstanden Leseperformances und eine Ausstellung. Außerdem soll das „Al-Khatib-Glossar“ mit Texten, Bildern und Audiomitschnitten noch dieses Jahr als Website erscheinen.
                    </p>
                    <p>
                        Die Wiese trifft sich mittwochabends im Theater X, Berlin-Moabit und lädt unregelmäßig zu öffentlichen Veranstaltungen. Sie ist immer offen für neue Mitglieder, die mitarbeiten, eigene Texte mitbringen oder Übersetzungen anregen möchten.
                    </p>
                    <p>
                        Email: <Link target="_blank" to="mailto:wiesewieesist@gmx.de">wiesewieesist@gmx.de</Link><br />
                        Instagram: <Link target="_blank" to={"https://www.instagram.com/wiesewieesist/"}>@wiesewieesist</Link>
                    </p>
                </div>
            </div>
            <div style={{
                display: "flex",
                padding: "3rem",
                gap: "3rem",
                alignItems: "center"
            }}>
                <img className="" src="images/LStJ_Logo_Digital_RGB_klein.png" style={{
                    objectPosition: "50% 40%",
                    objectFit: "cover",
                    height: "100%",
                    width: "50%"
                }} />
                <img className="" src="images/LitInst_quer.png" style={{
                    objectPosition: "50% 40%",
                    objectFit: "cover",
                    height: "100%",
                    width: "50%"
                }} />
            </div>
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