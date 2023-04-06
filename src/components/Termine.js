import React from "react";
import "../styles/imprint.css";
import "../styles/fonts.css";
import "../styles/pages.css";
import { Helmet } from "react-helmet";
import WigglyButton from "./WigglyButton";

import { Link, Routes } from "react-router-dom";

function Termine() {
  return (
    <>
      <Helmet>
        <title>PROSANOVA 2023 | Impressum</title>
        <meta
          name="description"
          content="Prosanova 2023, Festival für junge Literatur | Impressum"
        />
      </Helmet>
      <div className=" page-grid-inside-5-cl  ">

        <div className="  grid-tab-column-1  font-size-1 grid-6-column-mobile grid-1-column  grid-child  ">
        <WigglyButton>
          <div className="font-montiac-mono inside-page-padding termine-Datum border-radius font-size-3">
            30/03
          </div>
          <div className="inside-page-padding border-radius termine-titel font-size-1 font-montiac-italic">
            <span className="font-script">B</span>ekenntnisse an das{" "}
            <span className="font-script">M</span>isstrauen
          </div>
          </WigglyButton>
        </div>


        <div className="  grid-tab-column-1    font-size-1 grid-6-column-mobile grid-1-column  grid-child  ">
          <WigglyButton>
          <div className="font-montiac-mono inside-page-padding termine-Datum border-radius font-size-3">
            11/05
          </div>

          <div className="inside-page-padding border-radius termine-titel font-size-1 font-montiac-italic">
            <span className="font-script">A</span>uftakt
            <br></br> <span className="font-script">L</span>esung
          </div>
          </WigglyButton>
        </div>

        <div className="   grid-tab-column-1   font-size-1 grid-6-column-mobile grid-1-column  grid-child  ">
        <WigglyButton>
          <div className="font-montiac-mono inside-page-padding termine-Datum border-radius font-size-3">
            23/05
          </div>

          <div className="inside-page-padding border-radius termine-titel font-size-1 font-montiac-italic">
            <span className="font-script">A</span>bend der <br></br>
            <span className="font-script">K</span>ollektive
          </div>
          </WigglyButton>
        </div>

        <div className="   grid-tab-column-1   font-size-1 grid-6-column-mobile grid-1-column  grid-child  ">
        <WigglyButton>
          <div className="font-montiac-mono inside-page-padding termine-Datum border-radius font-size-3">
            23–25/06
          </div>

          <div className="inside-page-padding border-radius termine-titel font-size-1 font-montiac-italic">
            <span className="font-script">F</span>estival<br></br>
            <span className="font-script">W</span>ochenende
          </div></WigglyButton>
        </div>

        <div className="   grid-tab-column-1   font-size-1 grid-6-column-mobile grid-1-column  grid-child  ">
        <WigglyButton>
          <div className="font-montiac-mono inside-page-padding termine-Datum border-radius font-size-3">
            15/08
          </div>

          <div className="inside-page-padding border-radius termine-titel font-size-1 font-montiac-italic">
            <span className="font-script">S</span> onderaugabe der <br></br>{" "}
            <span className="font-script">B</span>ella{" "}
            <span className="font-script">T</span> riste
          </div></WigglyButton>
        </div>

        <div className="font-montiac-mono no-scroll-bar grid-6-column-mobile mobile-grid-row-start-2 termine-text background-color-grey inside-page-padding border-radius scrollable-element grid-tab-column-1 grid-1-column">
          <span className="font-montiac-italic">OPEN CALL: Bekenntnisse an das Misstrauen Zu welchem Misstrauen
          bekennt ihr euch?</span> <br></br>
          <br></br>Zu dieser Frage suchen wir eure szenischen, experimentellen
          und gattungsbrechenden Texte, die thematisch aus unterschiedlichen
          Kontexten stammen können. Drei Texte werden mit einem Preisgeld
          ausgezeichnet und auf dem Festival inszeniert. Die Jury besteht aus
          Olufemi Atibioke, Deniz Bolat und Laura Shirin, die euch im Anschluss
          an die Auswahlphase bei der Umsetzung eurer Texteinreichungen und
          Konzepte sowohl inhaltlich, als auch dramaturgisch zur Seite stehen
          werden. Wie die Texte umgesetzt werden, bleibt euch dabei in Absprache
          mit den Mentor*innen freigestellt - ob klassisch, experimentell,
          visuell, interaktiv, medial oder etwas anderes. Natürlich solange es
          sich im vorgegebenen Budget bewegt. Die Teilnahme an einem
          Probenwochenende mit den Mentor*innen vor dem Festival ist
          verpflichtend. Eure Einsendungen könnt ihr als PDF-Dateien bis zum
          30.03.2023 an presse@prosanova.net schicken, gerne auch mit Konzept,
          wie ihr euch eure Inszenierung/Umsetzung beim Festival vorstellen
          könnt. Der Open Call richtet sich an Menschen mit Wohnsitz in
          Deutschland. Fragen an besagte E-Mail-Adresse oder per Instagram.
        </div>
        <div className="font-montiac-mono no-scroll-bar grid-6-column-mobile mobile-grid-row-start-4 termine-text background-color-grey inside-page-padding border-radius scrollable-element grid-tab-column-1 grid-1-column">
        <span className="font-montiac-italic"> Auftaktlesung im Literaturhaus St. Jakobi </span> <br></br>
          <br></br>Literaturhaus St. Jakobi, 12345 Hildesheim, 19:30 <br></br>
          <br></br> Über einen Monat vor dem Festivalwochenende starten wir mit
          einer ersten Lesung. Heike Geißler, Bezhad Karim Khani und Karosh Taha
          sind zu Gast und lesen für uns aus neuen und bekannten Büchern. Wir
          wollen uns auf das Festival einstimmen und ersten Worten lauschen.
          Begleitet wird das Ganze vom NDR. Mehr Informationen und Tickets hier:
          <Link target="blank"
            className="Links"
            to=" https://stjakobi.de/veranstaltungen/prosanova-auftakt-mit-behzad-karim-khani-karosh-taha-und-heike-geissler"
          >
            {" "}
            https://stjakobi.de/veranstaltungen/prosanova-auftakt-mit-behzad-karim-khani-karosh-taha-und-heike-geissler
          </Link>
        </div>

        <div className="font-montiac-mono no-scroll-bar grid-6-column-mobile mobile-grid-row-start-6 termine-text background-color-grey inside-page-padding border-radius scrollable-element grid-tab-column-1 grid-1-column">
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
        </div>
        <div className="font-montiac-mono no-scroll-bar grid-6-column-mobile mobile-grid-row-start-8 termine-text background-color-grey inside-page-padding border-radius scrollable-element grid-tab-column-1 grid-1-column">
        <span className="font-montiac-italic"> Festivalwochenende 23.–25.06. </span><br></br>
          <br></br>Hildesheim <br></br>
          <br></br>Seid dabei, wenn das Prosanova-Festival in die siebte Runde
          geht und macht Hildesheim mit uns unsicher. Literatur, Performance,
          Musik, Workshops und das Get-Together des Literaturbetriebs wartet in
          Hildesheim auf euch!
        </div>
        <div className="font-montiac-mono no-scroll-bar grid-6-column-mobile mobile-grid-row-start-10 termine-text background-color-grey inside-page-padding border-radius scrollable-element grid-tab-column-1 grid-1-column">
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
        </div>
      </div>
    </>
  );
}

export default Termine;
