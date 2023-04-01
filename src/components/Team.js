import React from "react";
import "../styles/imprint.css";
import "../styles/fonts.css";
import "../styles/pages.css";
import { Helmet } from "react-helmet";
import WigglyButton from "components/WigglyButton";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import Team1 from "../Leni.png";
import Team2 from "../Melek.png";
import Team3 from "../Hiyam.png";
import Team4 from "../Lucie.png";
import Team5 from "../Lina.png";
import Team6 from "../Clara.png";
import Team7 from "../anna-lena-maatz.png";
import Team8 from "../bela-neumann.png";
import Team9 from "../dilara-buzoglu.png";
import Team10 from "../leon-ahlhorn.png";
import Team11 from "../linda-rabe.png";
import Team12 from "../lynn-stechert.png";
import Team13 from "../marlene-horn.png";
import Team14 from "../marlene-regenfuß.png";
import Team15 from "../nima-schaper.png";
import Team16 from "../roya-schaper.png";
import Team17 from "../tilman-busch.png";

import { Routes } from "react-router-dom";

function Team() {
  return (
    <>
      <Helmet>
        <title>PROSANOVA 2023 | Impressum</title>
        <meta
          name="description"
          content="Prosanova 2023, Festival für junge Literatur | Impressum"
        />
      </Helmet>

      <div className=" page-grid-inside inside-main-content-wrapper ">
        <div className="  inside-page-padding border-radius font-size-1 grid-6-column-mobile grid-3-column scrollable-element grid-child grid-row-start-2 ">
          <div className="team-grid ">
            <div className="grid-3-column txt-align-center">
              <span className="font-script font-size-3">K</span>ünstlerische{" "}
              <span className="font-script font-size-3">L</span>eitung{" "}
            </div>
            <WigglyButton>
              <div className="team-image">
                <img
                  src={Team1}
                  alt="Leni"
                  className="border-radius grid-1-column"
                />
              </div>
            </WigglyButton>

            <WigglyButton>
              <div className="team-image">
                <img
                  src={Team2}
                  alt="Melek"
                  className="border-radius grid-1-column"
                />
              </div>
            </WigglyButton>

            <WigglyButton>
              <div className="team-image">
                <img
                  src={Team3}
                  alt="Hiyam"
                  className="border-radius grid-1-column"
                />
              </div>
            </WigglyButton>

            <WigglyButton>
              <div className="team-image">
                <img
                  src={Team4}
                  alt="Lucie"
                  className="border-radius grid-1-column"
                />
              </div>
            </WigglyButton>

            <WigglyButton>
              <div className="team-image">
                <img
                  src={Team5}
                  alt="Lina"
                  className="border-radius grid-1-column"
                />
              </div>
            </WigglyButton>

            <WigglyButton>
              <div className="team-image">
                <img
                  src={Team6}
                  alt="Clara"
                  className="border-radius grid-1-column"
                />
              </div>
            </WigglyButton>

            <div className="grid-3-column txt-align-center">
              <span className="font-script font-size-3">P</span>raktikant*innen{" "}
            </div>

            <WigglyButton>
              <div className="team-image">
                <img
                  src={Team7}
                  alt="Anna-Lena Maatz"
                  className="border-radius grid-1-column"
                />
              </div>
            </WigglyButton>

            <WigglyButton>
              <div className="team-image">
                <img
                  src={Team8}
                  alt="Bela Neumann"
                  className="border-radius grid-1-column"
                />
              </div>
            </WigglyButton>

            <WigglyButton>
              <div className="team-image">
                <img
                  src={Team9}
                  alt="Dilara Buzoglu"
                  className="border-radius grid-1-column"
                />
              </div>
            </WigglyButton>

            <WigglyButton>
              <div className="team-image">
                <img
                  src={Team10}
                  alt="Leon Ahlhorn"
                  className="border-radius grid-1-column"
                />
              </div>
            </WigglyButton>

            <WigglyButton>
              <div className="team-image">
                <img
                  src={Team11}
                  alt="Linda Rabe"
                  className="border-radius grid-1-column"
                />
              </div>
            </WigglyButton>

            <WigglyButton>
              <div className="team-image">
                <img
                  src={Team12}
                  alt="Lynn Stechert"
                  className="border-radius grid-1-column"
                />
              </div>
            </WigglyButton>

            <WigglyButton>
              <div className="team-image">
                <img
                  src={Team13}
                  alt="Marlene Horn"
                  className="border-radius grid-1-column"
                />
              </div>
            </WigglyButton>

            <WigglyButton>
              <div className="team-image">
                <img
                  src={Team14}
                  alt="Marlene Regenfuß"
                  className="border-radius grid-1-column"
                />
              </div>
            </WigglyButton>

            <WigglyButton>
              <div className="team-image">
                <img
                  src={Team15}
                  alt="Nima Schaper"
                  className="border-radius grid-1-column"
                />
              </div>
            </WigglyButton>

            <WigglyButton>
              <div className="team-image">
                <img
                  src={Team16}
                  alt="Roya Schaper"
                  className="border-radius grid-1-column"
                />
              </div>
            </WigglyButton>

            <WigglyButton>
              <Link to="team17" smooth={true} duration={500}>
                <div className="team-image">
                  <img
                    src={Team17}
                    alt="Tilman Busch"
                    className="border-radius grid-1-column"
                  />
                </div>
              </Link>
            </WigglyButton>
          </div>

          <div className="added-padding"></div>
        </div>

        <div className="background-color-grey inside-page-padding border-radius font-size-1 grid-6-column-mobile  grid-child grid-3-column scrollable-element ">
          <section className="team-txt">
            <span className=" font-script font-size-3">L</span> eni von der{" "}
            <span className="font-script font-size-3">W</span>aydbrink, geboren
            in Berlin, studiert seit 2020 Literarisches Schreiben, Theater und
            Medien an der Universität Hildesheim. Sie arbeitet und schreibt fürs
            Theater. Veröffentlichungen erfolgten u.A. beim »4+1 festival für
            junge autorInnen« am Schauspiel Leipzig. Im Mai 2023 wird ihr Text
            »ZU KÜSTEN oder: Wir standen uns die Beine in den Arsch« im Rahmen
            des Nachwuchswettbewerbs »Die gestohlene Zukunft« am Theater an der
            Drachengasse in Wien gezeigt. Leni von der Waydbrink war
            Mitherausgeberin der Zeitschrift BELLA triste. Beim PROSANOVA ist
            sie für die Ressorts Produktion und Infrastruktur verantwortlich.
          </section>
          <section className="team-txt">
            <span className=" font-script font-size-3">M</span>
            elek <span className="font-script font-size-3">H</span>alici
            studiert Literarisches Schreiben, Philosophie und Theater in
            Hildesheim. Schreibt Prosagedichte, Essays und Szenisches. Zuletzt
            eingeladen zum »4+1 ein treffen junger autorInnen« in Leipzig. War
            Mitherausgeberin der BELLA triste und ist Teil der Künstlerischen
            Leitung beim PROSANOVA 2023. Ist dort zuständig für die Ressorts
            Kommunikation und Öffentlichkeitsarbeit.
          </section>
          <section className="team-txt">
            <span className=" font-script font-size-3">H</span>iyam{" "}
            <span className=" font-script font-size-3">B</span>iary ist in
            Berlin-Kreuzberg geboren und aufgewachsen. Nach dem Abitur
            absolvierte sie ein FSJ am Hebbel am Ufer Theater. Danach folgte
            ihre Mitarbeit an den Produktionen:  Radical Present, UNART
            Performance Wettbewerb 2020, Act e.V., Theater X, Romnja Theater
            Kollektiv. Sie absolvierte eine Regieassistenz bei Sebastian Mauksch
            bei dem Stück „Ich lieb dich nicht, du liest mich nicht – Aha“ am
            Ballhaus Ost. Seit Januar 2022 steht sie gemeinsam mit dem
            Performance-Kollektiv She She Pop als Performerin in der Produktion
            “Dance Me” auf der Berliner Bühne des HAU und auf anderen
            deutschlandweiten Bühnen. Als Teil von Berlin Mondiale war sie 2021
            Standort-Koordinatorin. Außerdem etablierte sie sich im
            Festivalkontext als Projektassistenz des „İç İçe – Festival für neue
            anatolische Musik“, ebenso wie als Teil der Kuration und
            Organisation des Online Festivals „Futur 3.0“ 2021 vom gefeierten
            „Futur Drei“ Film des Jünglinge Filmkollektivs. Neben ihrem Studium
            Szenische Künste an der Universität Hildesheim leitete Hiyam von
            Oktober bis Dezember 2021 für das Gorki X das Sonderprojekt Weil wir
            nicht vergessen mit, angebunden an die Ausstellung Offener Prozess
            zur Aufarbeitung des NSU-Komplex. Beim PROSANOVA ist sie für Social
            Media, Infrastruktur und Presse verantwortlich.
          </section>
          <section className="team-txt">
            <span className=" font-script font-size-3">L</span>ucie{" "}
            <span className=" font-script font-size-3">F</span>rahm, geboren in
            Berlin, nach dem Abitur absolvierte sie ein FSJ bei der
            Kunstvermittlung der Staatlichen Museen zu Berlin. Studiert in
            Hildesheim Literatur, wirkte dort u.A. in einem Verein für
            Kinokultur mit. War Mitherausgeberin der Anthologie Landpartie 2021,
            seit 2022 Mitherausgeberin der BELLA triste. Beim PROSANOVA 2023 ist
            sie zuständig für die Ressorts Finanzen und Produktion.
          </section>
          <section className="team-txt">
            <span className=" font-script font-size-3">L</span>ina{" "}
            <span className=" font-script font-size-3">B</span>riks ist in
            Hamburg geboren und aufgewachsen und studierte zunächst Klassische
            Philologie und Romanistik in Hamburg und Salerno, anschließend
            European Studies in Amsterdam sowie Literary Translation in Norwich.
            Lina arbeitet als freie Übersetzer*in und Lektor*in unter anderem
            für New Writing, Eggbox Publishing und das National Centre for
            Writing. Seit 2022 ist Lina außerdem Mitherausgeber*in der BELLA
            triste und Teil der künstlerischen Leitung für das PROSANOVA
            Festival 2023.
          </section>
          <section className="team-txt">
            <span className=" font-script font-size-3">C</span>lara{" "}
            <span className=" font-script font-size-3">D</span>önicke ist in
            Hamburg geboren und studiert Literarisches Schreiben, Musik und
            Philosophie in Hildesheim. Ihre Prosatexte sind bisher in
            Anthologien erschienen, 2021 war sie in der Redaktion des
            vierteiligen Podcasts »Die Toten«. Beim PROSANOVA 2023 ist sie als
            Teil der künstlerischen Leitung für Finanzen und Kommunikation
            zuständig.
          </section>
          <section className="team-txt">
            <span className=" font-script font-size-3">A</span>nna-Lena{" "}
            <span className=" font-script font-size-3">M</span>aatz,
            aufgewachsen im Allgäu, studiert seit 2020 Vergleichende
            Literaturwissenschaft an der Universität Augsburg. Neben dem Studium
            Teil des Online-Magazins "Schauinsblau" und Referentin für Kultur
            des AStA an der Universität Augsburg. Bei PROSANOVA 23 ist sie
            Praktikantin im Bereich Presse und Social Media.
          </section>
          <section className="team-txt">
            <span className=" font-script font-size-3">B</span>éla{" "}
            <span className=" font-script font-size-3">N</span>eumann, geboren
            in Berlin, war 5 Jahre Teil der Statisterie der Deutschen Oper 
            Berlin und hat an zwei interdisziplinären Projekten der
            Bühnenkunstschule ACADEMY  mitgewirkt. Seit 2022 studiert er
            Literarisches Schreiben und Kulturjournalismus in  Hildesheim und
            ist Bassist in einer Indie-Band. Für das PROSANOVA 2023 ist er
            Praktikant  im Bereich Produktion.
          </section>
          <section className="team-txt">
            <span className=" font-script font-size-3">D</span>ilara{" "}
            <span className=" font-script font-size-3">B</span>uzoğlu ist 1999
            in Niedersachsen geboren. Studierte an der Freien Universität Berlin
            sowie seit 2019 an der Universität Wien im Fach der Theater- Film-
            und Medienwissenschaften. Durch ihr Studium beschäftigt sie sich
            viel mit herrschaftskritischen Fragen und forscht gerade im Rahmen
            ihrer BA zu Feminismen in der SWANA-Region.
          </section>
          <section className="team-txt">
            <span className=" font-script font-size-3">L</span>eon{" "}
            <span className=" font-script font-size-3">A</span>hlborn,
            aufgewachsen in Göttingen. Studierte zunächst Humanmedizin und
            später im Bachelor Philosophie und Germanistik an der Universität
            Halle. Mittlerweile Masterstudium der Philosophie an der Universität
            Jena.
          </section>
          <section className="team-txt">
            <span className=" font-script font-size-3">L</span>inda{" "}
            <span className=" font-script font-size-3">R</span>abe, aufgewachsen
            in Mönchengladbach, studiert derzeit Philosophie-Künste-Medien an
            der Universität Hildesheim. Bei PROSANOVA 2023 ist sie Praktikantin
            im Bereich Infrastruktur.
          </section>
          <section className="team-txt">
            <span className=" font-script font-size-3">L</span>ynnVe{" "}
            <span className=" font-script font-size-3">S</span>ophia Ltechert,
            geboren 1998 in Braunschweig, studiert derzeit Kunstwissenschaften
            an der Universität Bremen. Im Wintersemester 2022/2023 studierte sie
            Contemporary Arts Practice am Y Institut für Transdisziplinarität
            der Hochschule der Künste Bern, Schweiz.
          </section>
          <section className="team-txt">
            <span className=" font-script font-size-3">M</span>arlene{" "}
            <span className=" font-script font-size-3">H</span>orn kommt aus
            Bonn und hat Philosophie, Kunst und Gesellschaftswissenschaften
            studiert. Das Studium der Kulturvermittlung mit Schwerpunkt
            Literatur hat sie nach Hildesheim gezogen. Neben dem Studium
            begleitet sie Workshops zur Selbsterfahrung und Berufsorientierung
            oder beschäftigt sich mit Lyrik und Illustration.
          </section>
          <section className="team-txt">
            <span className=" font-script font-size-3">M</span>arlene{" "}
            <span className=" font-script font-size-3">R</span>egenfuß ist in
            Göttingen aufgewachsen. Nach Sprüngen durch die süddeutsche 
            Unilandschaft und Praktika an kleinen Theatern, ist sie nach
            Hildesheim gezogen. Hier studiert sie  seit ein paar Jahren
            Kulturwissenschaften und ästhetische Praxis und erweitert ihr
            kulturelles  Kapital. Sie schreibt Kurzprosa und Lyrik, spielt mit
            literarischen Ideen und dramatischen Situationen.
          </section>
          <section className="team-txt">
            <span className=" font-script font-size-3">N</span>ima{" "}
            <span className=" font-script font-size-3">S</span>chaper geboren
            und groß geworden  in Köln. Nach dem Abitur an Kölner Gesamtschule
            ein  Jahr in Odessa, Ukraine gelebt. Studiert seit  Wintersemester
            21/22 Kulturwissenschaften und  Ästhetische Praxis an der
            Universität Hildesheim.  Außerdem als DJ, Music Producer und
            Sound/Video  Künstler tätig.
          </section>
          <section className="team-txt">
            <span className=" font-script font-size-3">R</span>oya{" "}
            <span className=" font-script font-size-3">S</span>chaper ist 19
            Jahre alt und in Köln aufgewachsen. Momentan lebt sie zwischen Köln,
            London und Berlin. Roya liest viel, macht Musik, Filme und schreibt.
          </section>
          <section className="team-txt">
            <span className=" font-script font-size-3">T</span>ilman{" "}
            <span className=" font-script font-size-3">B</span>usch, geboren und
            aufgewachsen in Göttingen. Studierte in Halle (Saale) Soziologie und
            Wirtschaftswissenschaften. Seit 2021 Kreatives Schreiben und
            Kulturjournalismus an der Universität Hildesheim.
          </section>
          <div className="added-padding"></div>
        </div>
      </div>
    </>
  );
}

export default Team;
