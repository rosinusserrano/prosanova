import React from "react";
import "../../styles/imprint.css";
import "../../styles/fonts.css";
import "../../styles/pages.css";
import { Helmet } from "react-helmet";
import { useMobile } from "hooks/useMediaQuery";
import InfoSmall from "./InfoSmall";
import InfoLarge from "./InfoLarge";

function Info() {
  const isMobile = useMobile()
  return (
    <>
      <Helmet>
        <title>PROSANOVA 2023 | Info</title>
        <meta
          name="description"
          content="Prosanova 2023, Festival für junge Literatur | Information"
        />
      </Helmet>

      {isMobile ? <InfoSmall /> : <InfoLarge />}

      {/* <div className="inside-main-content-wrapper" style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        height: "100%"
      }}>
        <div className="inside-page-padding background-color-grey border-radius font-size-5 scrollable-element"
          style={{
            flexGrow: "revert",
          }}>
          PROSANOVA 2023 ist ein Festival für junge Literatur, das vom 23. -
          25. Juni 2023 in Hildesheim stattfindet. <br></br> <br></br>Seit 2005 findet
          das bundesweit größte und bekannteste Event für junge,
          deutschsprachige Gegenwartsliteratur im Rhythmus von drei Jahren in
          Hildesheim - mitten in Niedersachsen - statt. 40 junge
          Gegenwartsautor*innen sind eingeladen, ihr Schreiben, ihre Texte und
          literarischen Verfahren in Hildesheim zu inszenieren und in über 30
          Veranstaltungen einem breiten Publikum aus Fachbesucher*innen des
          Literaturbetriebs, Hildesheimer Bürger*innen, Studierenden sowie
          überregionalen Pressevertreter*innen vorzustellen.

        </div>

        <div className="inside-page-padding border-radius font-size-5 scrollable-element background-color-grey"
          style={{
            flexGrow: "revert",
          }}>
          <span className="font-b-bold">Schlechte Wörter</span><br></br> <br></br> Die diesjährige Ausgabe des Prosanovas findet unter
          dem Motto Schlechte Wörter statt. Der titelgebende Kurzprosatext von
          Ilse Aichinger gibt uns den Anlass für eine Suche nach den Wörtern -
          überall. Wir hinterfragen Eindeutigkeit und suchen nach
          Mehrdeutigkeit, wir wollen ein neues Terrain für die Rezeption von
          Text erproben. Was passiert, wenn wir Texte als Räume begreifen, die
          wir begehen und von allen Seiten betrachten können?
        </div>
      </div> */}
    </>
  );
}

export default Info;
