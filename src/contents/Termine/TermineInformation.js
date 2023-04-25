import { useMobile } from "hooks/useMediaQuery";
import React from "react";
import { Link } from "react-router-dom";


export const TermineInformation = [
    {
        date: "30/03",
        title: ["Be<wbr>kennt<wbr>nisse an das ", "Miss<wbr>trauen"],
        contentJSX: <>
            <p><span className="font-size-3">OPEN CALL</span><br />
                <span className="font-montiac-italic">Bekenntnisse an das Misstrauen.</span></p>
            <p>Zu welchem Misstrauen bekennt ihr euch?</p>
            <p>Zu dieser Frage haben wir eure szenischen, experimentellen und gattungsbrechenden Texte gesucht. Unsere Jury – bestehend aus Olufemi Atibioke, Deniz Bolat und Laura Shirin – musste sich schwern Herzens für drei Texte entscheiden, die in einem gemeinsamen Inszenierungprozess erarbeitet und auf dem Festival gezeigt werden. Wie die Texte umgesetzt werden, bleibt den Autor:innen in Absprache mit den Mentor:innen freigestellt – ob klassisch, experimentell, visuell, interaktiv, medial oder etwas anderes. Wir können uns also alle auf unterschiedliche Formen der Inszenierung freuen, die am Festivalwochenende gezeigt werden.</p>
            <p>Und am Ende bleibt nur noch die Frage, wem wir trauen wollen und wo das Misstrauen bleiben wird.</p>
            <p className="font-size-4" style={{ textAlign: "center" }}>AUTOR*INNEN</p>
            <div className="termine-artist-grid" style={{
                display: "grid",
                columnGap: "1rem",
                rowGap: "1rem",
                width: "100%",

            }}>
                <div>
                    <img className="border-radius" src="images/KatharinaAngus.JPG" style={{
                        aspectRatio: "5/4",
                        objectPosition: "50% 45%",
                        objectFit: "cover",
                        width: "100%",
                    }} />
                    <p>Katharina Angus studierte Drehbuchschreiben, Literaturwissenschaft und Osteuropawissenschaften mit Aufenthalten in Krakau und Prag. Sie veröffentlichte unter anderem in den Literaturzeitschriften Mosaik und BELLA triste. Im Jahr 2021 war sie Stipendiatin des Klagenfurter Literaturkurses und Teilnehmerin beim Stuttgarter Lit.Fest.
                        Vom Hessischen Literaturrat e.V. und dem Prager Literaturhaus deutschsprachiger Autoren erhielt sie im November 2022 ein Aufenthaltsstipendium in Prag, um an ihrem Debütroman zu arbeiten.<br />
                        Sie lebt als freie Journalistin in Berlin.
                    </p>
                </div>
                <div>
                    <img title="Foto: Jonas Erler" className="border-radius" src="images/PhilippLaue.jpeg" style={{
                        aspectRatio: "5/4",
                        objectPosition: "50% 0%",
                        objectFit: "cover",
                        width: "100%",
                    }} />
                    <p>Philipp Laue (er/ihn), 1996 in Halle/Saale geboren, aufgewachsen im Mitteldeutschen Chemiedreieck, studierte Psychologie in Jena. Nach Beschäftigungen als Universitätsdozent und in der Jugendhilfe, arbeitet er mittlerweile als wissenschaftlicher Mitarbeiter und lebt in Leipzig. In seinen Texten verhandelt er u. a. Leben in dörflichen (Un)Strukturen, familiäre Zerwürfnisse, Beziehungslosigkeit in Beziehungen. Seine Gedichte und Prosa werden seit 2021 in verschiedenen Independent-Magazinen (HotTopic!, FLUT Magazin, DRAMA, apostrophe u. a.) gedruckt.<br />twitter/instagram: @imbluescreen.</p>
                </div>
                <div>
                    <img className="border-radius" src="images/ViciDewinski.JPG" style={{
                        aspectRatio: "5/4",
                        objectPosition: "50% 7%",
                        objectFit: "cover",
                        width: "100%",
                    }} />
                    <p>Vici Dewinski wurde 1998 in Chemnitz geboren. Sie studiert Bühnen- und Kostümbild an der  Hochschule für Bildende Künste in Dresden und ist Stipendiatin der Studienstiftung des  deutschen Volkes. Seit 2021 arbeitet Vici als Installationskünstlerin, Regisseurin und Autorin.  Dabei erschafft sie performative Installationen, die an der Schnittstelle zwischen Bildender Kunst,  Theater und Animation operieren. Ihre Arbeit zeichnet sich durch gewaltige Atmosphären,  grotesken Humor und bis ins Detail abgestimmte Räume aus. Ihre Texte entführen uns in eine Welt  voller unausgesprochener Gedanken und Emotionen.</p>
                </div>
            </div>
            <p className="font-size-4" style={{ textAlign: "center" }}>JURY</p>
            <div className="termine-artist-grid" style={{
                display: "grid",
                columnGap: "1rem",
                rowGap: "1rem",
                width: "100%",

            }}>
                <div>
                    <img className="border-radius" src="images/AtibiokePrivat.jpg" style={{
                        aspectRatio: "5/4",
                        objectPosition: "50% 45%",
                        objectFit: "cover",
                        width: "100%",
                    }} />
                    <p>Olufemi-Just Atibioke ist studierter Kulturwissenschaftler. Arbeitet in der Kulturellen Bildung. Schreibt Text. Letzte Veröffentlichungen: Story des Jares in BELLA triste Nr. 63.</p>
                </div>
                <div>
                    <img className="border-radius" src="images/LauraShirinPrivat.JPG" style={{
                        aspectRatio: "5/4",
                        objectPosition: "50% 0%",
                        objectFit: "cover",
                        width: "100%",
                    }} />
                    <p>Laura Shirin ist politische Performerin. In ihren Arbeiten setzt sie sich einerseits akademisch, andererseits künstlerisch zu Themen um Rassismus, (Queer-)Feminismus und Intersektionalität auseinander. Dabei befinden sich drängende Fragen nach Zugehörigkeit und Identität, Momente des Empowerment und Verlusts sowie der Suche nach Haymat und Community. Ihre erste Buchpublikation fand dazu im Gedichtband „Haymatlos“ statt, während weitere Texte in „Texte nach Hanau“ zu finden sind. Sie publizierte darüber hinaus beim Young Migrants Blog und beim Mo:No Magazin für Text und Bild.</p>
                </div>
                <div>
                    <img className="border-radius" src="images/DenizBolatPrivat.jpg" style={{
                        aspectRatio: "5/4",
                        objectPosition: "50% 7%",
                        objectFit: "cover",
                        width: "100%",
                    }} />
                    <p>Deniz Bolat studiert in Hildesheim und lebt in Berlin. Früher war Deniz ein Teil der BELLA triste und arbeitet jetzt in der künstlerischen Programmgestaltung des Fuchsbau Festivals und in der Redaktion für das KONTENT Online Magazin. Deniz schreibt Lyrik und war Teil der open poems am Haus für Poesie für das Poesiefestival Berlin 2022 und veröffentlichte einen Lyrikbeitrag für das Narr #32. Er beschäftigt sich mit Narrativen von Gewalt und ihrer Übersetzung in verschiedene Gewerke. Deniz schreibt gerade seine Bachelorarbeit über ethnischen Nationalismus, forscht zur Gründung einer Spielstätte am Haus der Statistik in Berlin und arbeitet in der Dramaturgie.</p>
                </div>
            </div>
        </>
    },
    {
        date: "11/05",
        title: ["Auftakt<wbr>lesung"],
        contentJSX: <>
            <p><span className="font-montiac font-size-3">Auftaktlesung</span></p>
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
            <div className="termine-artist-grid" style={{
                display: "grid",
                columnGap: "1rem",
                rowGap: "1rem",
                width: "100%",
            }}>
                <div>
                    <img title="Foto: Havin Al-Sindy" className="border-radius" src="images/KaroshTaha.jpg" style={{
                        aspectRatio: "5/4",
                        objectPosition: "50% 0%",
                        objectFit: "cover",
                        width: "100%",
                    }} />
                    <p>Karosh Taha, 1987 geboren und aufgewachsen in der kurdischen Stadt Zaxo, hat Anglistik und Geschichtswissenschaften an der Universität Duisburg-Essen studiert. Ihr Debütroman erschien unter dem Titel Beschreibung einer Krabbenwanderung im März 2018 beim DuMont Buchverlag. Im April 2020 erschien ihr zweiter Roman Im Bauch der Königin als Wendebuch ebenfalls bei DuMont. Beide Romane erhielten zahlreiche Stipendien und Preise, zuletzt die Alfred-Döblin Medaille. Sie lebt und arbeitet in Köln und Paris.</p>
                </div>
                <div>
                    <img className="border-radius" src="images/BehzadKarimKani.jpeg" style={{
                        aspectRatio: "5/4",
                        objectPosition: "50% 40%",
                        objectFit: "cover",
                        width: "100%",
                    }} />
                    <p>Behzad Karim Khani, 1977 geboren in Teheran exilierte 1986 nach Deutschland, studierte Kunstgeschichte und Medienwissenschaft an der Ruhruniversität Bochum. Er lebt in Berlin-Kreuzberg und arbeitet als Autor und freier Journalist. 2022 war er für den Ingeborg Bachmann Preis nominiert. Sein preisgekrönter Roman 'Hund, Wolf, Schakal' erschien bei Hanser Berlin.</p>
                </div>
                <div>
                    <img title="© Heike Steinweg/Suhrkamp Verlag" className="border-radius" src="images/HeikeGeissler.jpg" style={{
                        aspectRatio: "5/4",
                        objectPosition: "50% 0%",
                        objectFit: "cover",
                        width: "100%",
                    }} />
                    <p>Heike Geißler, 1977 in Riesa geboren, ist Autorin, Übersetzerin und Mitherausgeberin der Heftreihe Lücken kann man lesen. Zuletzt erschienen der Reportage-Roman Saisonarbeit (Spector Books, 2014), das Fragenheft und Hörspiel Fragen für alle sowie das gemeinschaftliche Literaturprojekt Check your habitus, kuratiert von Daniela Dröscher. Mit der Schauspielerin Charlotte Puder arbeitet sie als Kollektiv George Bele. Heike Geißler wurde mit zahlreichen Stipendien und Preisen ausgezeichnet und lebt heute in Leipzig.</p>
                </div>
            </div>
            <p className="font-size-4" style={{ textAlign: "center" }}>MODERATION</p>
            <div className="termine-artist-grid" style={{
                display: "grid",
                columnGap: "1rem",
                rowGap: "1rem",
                width: "100%",
            }}>
                <div>
                    <img title="Foto: Manuel Gehrke" className="border-radius" src="images/Alexander_Solloch_Fotograf_Manuel_Gehrke.jpg" style={{
                        aspectRatio: "5/4",
                        objectPosition: "50% 0%",
                        objectFit: "cover",
                        width: "100%",
                    }} />
                    <p>Alexander Solloch, geb. 1978 in Wesel/Niederrhein, studierte in Leipzig und Aix-en-Provence Geschichte, Französisch und Journalistik; Volontariat beim Norddeutschen Rundfunk; seit 2014 Literaturredakteur bei NDR Kultur.</p>
                </div>
            </div>

        </>
    },
    {
        date: "23/05",
        title: ["Abend der ", "Kollektive"],
        contentJSX: <>
            <span className="font-size-3"> Und dazwischen Zwischenräume.</span><br></br>  <span className="font-montiac-italic">Abend der Kollektive.</span>
            <p>
                23.5. - 18.30 Uhr<br />
                Literaturhaus St. Jakobi <br />
                Jakobikirchgasse<br />
                31134 Hildesheim
            </p>
            <p>
                In einer Kooperation mit dem Literaturinstitut der Universität Hildesheim und dem Literaturhaus St. Jakobi widmen wir uns dem Kollektiven als Praxis im Literaturbetrieb. Wie originell können wir sein, wenn wir gemeinsam arbeiten? Welche Rolle nimmt die soziale Praxis neben der künstlerischen ein und wie viele Kompromisse müssen eingegangen werden? Welche Ausschlüsse geschehen, wenn wir uns auf ganz bestimmte Kollektivpartner:innen einlassen? All das wollen wir uns gemeinsam fragen - und holen uns dafür Unterstützung von einzelnen Vertreter:innen aus verschiedenen Kollektiven. Mit dabei: Lynn Takeo Musiol (dyke dogs), Kyra Schmidt (Biwi Kefempom), Sandra Burckhardt (Wiese), Irina Nekrasov (Postmigrantische Störung), Alexander Rupflin (Hermes Baby) und Maren Wurster. Der Fokus liegt an diesem Abend auf dem Gemeinsamen - wir wollen diskutieren und so selbst kollektive Erfahrungen machen. Mehr Informationen und Tickets <Link target="_blank" to={"https://stjakobi.de/veranstaltungen/abend-der-kollektive"}>hier</Link>.
            </p>
            <p className="font-size-4" style={{ textAlign: "center" }}>KÜNSTLER*INNEN</p>
            <div className="termine-artist-grid" style={{
                display: "grid",
                columnGap: "1rem",
                rowGap: "1rem",
                width: "100%",
            }}>
                <div>
                    <img title="Foto: Yana Kaziulia" className="border-radius" src="images/Dyke_Dogs_FotoYanaKaziulia.jpg" style={{
                        aspectRatio: "5/4",
                        objectPosition: "50% 36%",
                        objectFit: "cover",
                        width: "100%",
                    }} />
                    <p>Lynn Takeo Musiol arbeitet als Autor*in, Regisseur*in und Performer*in mit dem Fokus auf Klima, Klasse und Queerness. Lynn Takeo ist Mitgründer*in des Theater-Kollektivs les dramaturx, das aktuell am Theater Magdeburg die Inszenierung »Meister Röckle« auf die Bühne bringt.</p>
                    <p>
                        Eva Tepest ist Autor*in und Journalist*in. Evas Schreibpraxis konzentriert sich auf autofiktionale und essayistische Textformen. Wie können marginalisiert Autor*innen ihre Erfahrungen erzählen? Kann ein Text submissive sein? Evas Essayband »Power Bottom« erschien im März im MÄRZ Verlag. Dey schreibt eine Sex-Kolumne für das Missy Magazine.
                    </p>
                    <p>
                        Gemeinsam betreiben Musiol/Tepest das Performance- und Schreibkollektiv DYKE DOGS, mit dem sie u. a. die gleichnamige lesbisch-queere Kulturpartie in der Berliner Schaubühne organisieren. Mit ihrem gemeinsamen Schreiben waren Musiol & Tepest Finalist*innen des Open Mikes 2020. Ihre Maxime: Dyke is a riot. Dyke ist tragisch. Dyke ist immer unzureichend.
                    </p>
                </div>
                <div>
                    <img title="Foto: Franziska Hauser" className="border-radius" src="images/MarenWurster_c_FranziskaHauser.jpg" style={{
                        aspectRatio: "5/4",
                        objectPosition: "50% 55%",
                        objectFit: "cover",
                        width: "100%",
                    }} />
                    <p>Maren Wurster studierte Philosophie in Köln und Literarisches Schreiben in Leipzig. Ihr Romandebüt „Das Fell“ wurde 2017 bei Hanser Berlin veröffentlicht. Ihr aktueller Roman „Eine beiläufige Entscheidung“ erzählt von einer Mutter, die ihr Kind verlässt, und einem Kind, das mutterlos aufwächst. In dem Memoir „Papa stirbt, Mama auch“ und dem erzählenden Sachbuch „Totenwache“ hat sie sich mit dem Abschied von den eigenen Eltern auseinandergesetzt. Maren Wurster war Mitglied des Autorinnen-Kollektivs „Writing with Care/Rage“, das sich in Texten und Veranstaltungen kritisch mit Kreativ- und Care-Arbeit auseinandersetzte. Zuletzt lud sie andere Schriftsteller:innen zu einer „Archäologie des Verlusts“ ein. Die Texte wurden in der Volksbühne Berlin präsentiert und in der Literaturzeitschrift Akzente veröffentlicht.</p>
                </div>
                <div>
                    <img title="biwikefempom" className="border-radius" src="images/BiwiKefempom.jpg" style={{
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
                        <img title="Foto: Mirko Lux" className="" src="images/SandraBurkhardt_Foto_MirkoLux.jpg" style={{
                            objectPosition: "100% 40%",
                            objectFit: "cover",
                            height: "100%",
                            width: "100%"
                        }} />
                    </div>
                    <p>Sandra Burkhardt, 1992 geboren, studierte Kunstgeschichte und Literarisches Schreiben in Karlsruhe, Leipzig und Berlin. 2018 erschien im gutleut verlag ihr Debütband „Wer a sagt“, mit dem sie 2019 bei den Lyrikempfehlungen der Leipziger Buchmesse vertreten war. Im Sommer diesen Jahres erscheint „Fragmente einer echten Ikone. Petrarca-Variationen“ bei kookbooks. Mit auf der Wiese (Wie es ist) مرج ist Sandra seit Sommer 2020.</p>
                </div>
                <div style={{
                    flex: "1 1 0",
                    minWidth: "200px",
                }}>
                    <img title="Kollektiv Wiese (Wie es ist)" className="border-radius" src="images/KollektivWiese.jpg" style={{
                        objectPosition: "50% 40%",
                        objectFit: "cover",
                        aspectRatio: "5/4",
                        width: "100%"
                    }} />
                    <p>
                        Das 2017 gegründete Kollektiv Wiese (Wie es ist) مرج†ist eine mehrsprachige Schreibwerkstatt, in der Literatur und Poesie übersetzt, besprochen und weitergeschrieben wird. Auf der Wiese
                        werden verschiedene Sprachen gesprochen, vorrangig übersetzt wird momentan zwischen syrischem Arabisch und Deutsch. Die Gruppe setzt sich zusammen aus Schriftersteller*innen,Übersetzer*innen und Literaturwissenschaftler*innen verschiedenster Herkunft und ist offen für alle. Von 2021 bis 2022 widmete sich das Kollektiv mit den Projekten „Der unsichtbare Prozess“ und „Al-Khatib-Glossar“ einer Übersetzungskritik des Al-Khatib-Verfahrens in Koblenz, das unter
                        dem „Weltrechtsprinzip“ zwei Geheimdienstler des syrischen Assad-Regimes vor Gericht stellte.
                        Es entstanden Leseperformances und eine Ausstellung. Außerdem soll das „Al-Khatib-Glossar“ mit Texten, Bildern und Audiomitschnitten noch dieses Jahr als Website erscheinen.
                        Die Wiese trifft sich mittwochabends im Theater X, Berlin-Moabit und lädt unregelmäßig zu öffentlichen Veranstaltungen. Sie ist immer offen für neue Mitglieder, die mitarbeiten, eigene Texte
                        mitbringen oder Übersetzungen anregen möchten.

                    </p>
                    <p>
                        Email: <Link target="_blank" to="mailto:wiesewieesist@gmx.de">wiesewieesist@gmx.de</Link><br />
                        Instagram: <Link target="_blank" to={"https://www.instagram.com/wiesewieesist/"}>@wiesewieesist</Link>
                    </p>
                </div>
            </div>
            <div style={{
                display: "flex",
                padding: "2rem",
                alignItems: "center",
                flexWrap: "wrap"
            }}>
                <img className="" src="images/LStJ_Logo_Digital_RGB_klein.png" style={{
                    height: "100%",
                    maxWidth: "50%",
                    minWidth: "170px",
                    marginBottom: "2rem"
                }} />
                <img className="" src="images/LitInst_quer.png" style={{
                    height: "100%",
                    maxWidth: "50%",
                    minWidth: "170px"
                }} />
            </div>
        </>
    },
    {
        date: "01-02/06",
        title: ["ZU<wbr>SAMMEN<wbr>KOMMEN"],
        contentJSX: <>
            <span className="font-montiac font-size-3">ZUSAMMENKOMMEN</span>
            <p>
                1.-2.6. (jeweils 13-20 Uhr)<br />
                Puls<br />
                Angoulêmeplatz 2<br />
                31134 Hildesheim
            </p>
            <p>
                Wir laden euch zum Vorbeischauen und Verweilen ein und freuen uns, zwischen Tabellen aktualisieren, Recherche und Finanzplanung mit euch ins Gespräch zu kommen. Egal, ob ihr euch ausruhen oder socialisen wollt, ob ihr zum Schreiben und Nachdenken gekommen seid oder ob ihr einfach nur mit uns Collagen basteln wollt - wir freuen uns! Denn das PROSANOVA 23 startet in weniger als einem Monat und wir wollen uns kennenlernen. Für Getränke, Snacks und genügend (Bastel- Streit- / Nachdenk-) Material sorgen wir!
            </p>
            <img className="" src="images/Puls_rot@3x.png" style={{
                width: "60%",
            }} />
        </>
    },
    {
        date: "02/06",
        title: ["Dort, wo wir waren"],
        contentJSX: <>
            <span className="font-montiac font-size-3"> Dort, wo wir waren</span>
            <p>
                2.6. - 18 Uhr<br />
                Puls<br />
                Angoulêmeplatz 2<br />
                31134 Hildesheim
            </p>
            <p>
                Wo fängt das Schreiben an und wo hört es auf? Wer kann schreiben? Und welchen Anteil hat die Fantasie, welchen die Wirklichkeit für das Erzählen von Geschichten?
            </p>
            <p>
                Begleitend zum Festival veranstalten wir Workshops für Kinder und Jugendliche zwischen 13 und 17 Jahren. Die im gemeinsamen Prozess entstandenen Texte werden am 2.6. um 19 Uhr auf einer öffentlichen Lesung im Puls (Angoulêmeplatz 2) in Hildesheim vorgelesen. Geleitet werden die Workshops von Franziska Bothe und Limo.
            </p>
            <div className="termine-artist-grid" style={{
                display: "grid",
                columnGap: "1rem",
                rowGap: "1rem",
                width: "100%",
            }}>
                <div>
                    <img title="Foto: Katharina Bußmann" className="border-radius" src="images/Franzi.jpg" style={{
                        aspectRatio: "5/4",
                        objectPosition: "50% 10%",
                        objectFit: "cover",
                        width: "100%",
                    }} />
                    <p>Franziska Bothe (*1992) arbeitete in der offenen Kinder- und Jugendarbeit in Berlin. Seit 2021 studiert sie Literarisches Schreiben in Hildesheim, tüftelt an ihrem autobiografischen Romanprojekt und leitet Schreibworkshops in verschiedenen Kontexten.</p>
                </div>
                <div>
                    <img className="border-radius" src="images/Limo.jpg" style={{
                        aspectRatio: "5/4",
                        objectPosition: "50% 60%",
                        objectFit: "cover",
                        width: "100%",
                    }} />
                    <p>
                        Limo ist 24 Jahre alt und kommt aus Hamburg. Seit zwei Jahren arbeitet sie
                        als Schreibbegleiterin für kreativ-heilsames Schreiben und als
                        Diversitätstrainerin. Im März diesen Jahres schloss sie ihre Weiterbildung
                        zur Schreibtherapeutin ab. Neben dem Schreiben ist sie Diversitätstrainerin
                        mit dem Fokus auf rassismuskritische und feministische Arbeit.

                    </p>
                </div>

            </div>
        </>
    },
    {
        date: "23-25/06",
        title: ["Festival<wbr>wochen<wbr>ende"],
        contentJSX: <>
            <span className="font-size-3">Festivalwochenende</span> <br></br> <span className="font-montiac-italic">23.–25.06. </span><br></br>
            <p>
                Keßlerstraße 51<br />
                31134 Hildesheim
            </p>
            <br></br>Seid dabei, wenn das Prosanova-Festival in die siebte Runde
            geht und macht Hildesheim mit uns unsicher. Literatur, Performance,
            Musik, Workshops und das Get-Together des Literaturbetriebs wartet in
            Hildesheim auf euch!
        </>
    },
    {
        date: "Sommer 2023",
        title: ["Sonder<wbr>aus<wbr>gabe der ", "BELLA ", "Triste"],
        contentJSX: <>
            <span className="font-size-3">Sonderausgabe der BELLA triste </span>  <span className="font-montiac-italic"><br />Zeitschrift für junge Literatur{" "}</span>
            <p>
                Sommer 2023
            </p>
            <p>
                In der Sonderausgabe der BELLA triste widmen wir uns dem Archivieren als künstlerischer Praxis. Wie können wir festhalten, was wir an drei Tagen Festival erlebt haben? Was bleibt vom Rausch? Um diese Fragen zu beantworten, wollen wir die BELLA als Ort der Versammlung sehen, als Begegnungsstätte und weniger als bloße Dokumentation des PROSANOVAs. Wir fragen uns, wie wir Strukuren weiterführen können, die wir auf dem Festival erprobt haben. Ist es möglich, das PROSANOVA zwischen zwei Buchdeckel zu klemmen? In der Schlechte Wörter-BELLA werden Texte, Fotos, Musik sowie alles, was sich Genrebezeichnungen entzieht, veröffentlicht, die in irgendeiner Art und Weise Teil des Festivals waren. Dazu arbeiten wir eng mit der Redaktion der BELLA triste zusammen.
            </p>
        </>
    }
]