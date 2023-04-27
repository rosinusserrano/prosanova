import React from 'react';
import '../styles/imprint.css';
import '../styles/fonts.css';
import '../styles/pages.css';
import '../styles/responsive.css'
import { Helmet } from 'react-helmet';

import { Link, Routes } from 'react-router-dom';


function importAll(r) {
  return r.keys().map(r);
}

function Imprint() {
  const foerderer = [
    "images/partner/FördererAutorenstiftungLogo.jpg",
    "images/partner/FördererBürgerstiftung.jpg",
    "images/partner/FördererDeutscherLiteraturfonds.png",
    "images/partner/FördererFachbereich2.png",
    "images/partner/FördererFriedrichWeinhagenStiftung.jpg",
    "images/partner/FördererHildesheim.png",
    "images/partner/FördererNMWK.jpg",
    "images/partner/FördererProHelvetia.png",
    "images/partner/FördererSparkasse.png",
    "images/partner/FördererStiftungNiedersachsen.png",
    "images/partner/FördererStudierendenwerk.png",
    "images/partner/FördererUnipräsidium.jpg",
    "images/partner/FördererUniversitätsgesellschaft.jpg",
    "images/partner/FördererVGHS.png",
  ]

  const koops = [
    "images/partner/KoopFachbereich2.png",
    "images/partner/KoopHoeme.png",
    "images/partner/KoopKET.png",
    "images/partner/KoopLitInst.png",
    "images/partner/KoopLitradio.jpeg",
    "images/partner/KoopLStJ.png",
    "images/partner/KoopNDR.jpg",
    "images/partner/KoopPuls.png",
    "images/partner/KoopUniHildesheim.jpg",
    "images/partner/KoopWallungen.png"
  ]

  return <>
    <Helmet>
      <title>PROSANOVA 2023 | Impressum</title>
      <meta name='description' content='Prosanova 2023, Festival für junge Literatur | Impressum' />
    </Helmet>

    <div className=' page-grid-inside inside-main-content-wrapper '
    style={{height: "100%"}}>

      <div className=' background-color-grey inside-page-padding border-radius grid-6-column-mobile grid-4-column scrollable-element grid-child font-sz-small grid-row-start-2 '
      style={{height: "100%"}}>

        Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:
        <br /> <br />
        BELLA triste – Zeitschrift für junge Literatur <br /> Neustädter Markt 3-4 <br />
        D-31134 Hildesheim
        <br /> <br />

        IHRE BETROFFENENRECHTE
        <br /> <br />

        Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:<br />
        Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung,
        Berichtigung unrichtiger personenbezogener Daten,
        Löschung Ihrer bei uns gespeicherten Daten,
        Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen,
        Widerspruch gegen die Verarbeitung Ihrer Daten bei uns und
        Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben.
        Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zu- kunft widerrufen.
        Sie können sich jederzeit mit einer Beschwerde an die für Sie zuständige Aufsichtsbehörde wen- den. Ihre zuständige
        Aufsichtsbehörde richtet sich nach dem
        Bundesland Ihres Wohnsitzes,
        Ihrer Arbeit oder der mutmaßlichen Verletzung. Eine Liste der Aufsichtsbehörden (für den nichtöffentli- chen Bereich)
        mit Anschrift finden Sie unter:
        <Link className="Links" target="_blank" to="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html" > https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html</Link>        <br /> <br />

        ZWECKE DER DATENVERARBEITUNG DURCH DIE VERANTWORTLICHE STELLE UND DRITTE
        <br /> <br />

        Wir verarbeiten Ihre personenbezogenen Daten nur zu den in dieser Datenschutzerklärung ge- nannten Zwecken.
        Eine Übermittlung
        Ihrer persönlichen Daten an Dritte zu anderen
        als den ge- nannten Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:
        Sie Ihre ausdrückliche Einwilligung dazu erteilt haben,
        die Verarbeitung zur Abwicklung eines Vertrags mit Ihnen erforderlich ist,
        die Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist,
        die Verarbeitung zur Wahrung berechtigter Interessen erforderlich ist und kein Grund zur Annahme besteht, dass Sie
        ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben.
        <br /> <br />

        LÖSCHUNG BZW. SPERRUNG DER DATEN
        <br /> <br />

        Wir halten uns an die Grundsätze der Datenvermeidung und Datensparsamkeit. Wir speichern Ihre personenbezogenen
        Daten daher nur so lange, wie dies zur Erreichung der hier genannten Zwecke erforderlich ist oder wie es die vom
        Gesetzgeber vorgesehenen vielfältigen Speicher- fristen vorsehen. Nach Fortfall des jeweiligen Zweckes bzw.
        Ablauf dieser Fristen werden die ent- sprechenden Daten routinemäßig und entsprechend den gesetzlichen Vorschriften
        gesperrt oder gelöscht.
        <br /> <br />
        ERFASSUNG ALLGEMEINER INFORMATIONEN BEIM BESUCH UNSERER WEBSITE
        <br /> <br />

        Wenn Sie auf unsere Website zugreifen, werden automatisch mittels eines Cookies Informationen
        allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das
        verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Provi- ders und ähnliches. Hierbei handelt es
        sich ausschließlich um Informationen, welche keine Rückschlüsse auf Ihre Person zulassen.
        Diese Informationen sind technisch notwendig, um von Ihnen angeforderte Inhalte von Webseiten korrekt auszuliefern und
        fallen bei Nutzung des Internets zwingend an. Sie werden insbesondere zu folgenden Zwecken verarbeitet:
        Sicherstellung eines problemlosen Verbindungsaufbaus der Website,
        Sicherstellung einer reibungslosen Nutzung unserer Website,
        Auswertung der Systemsicherheit und -stabilität sowie
        zu weiteren administrativen Zwecken. Die Verarbeitung Ihrer personenbezogenen Daten basiert auf unserem berechtigten
        Interesse aus den vorgenannten Zwecken zur Datenerhebung. Wir verwenden Ihre Daten nicht, um Rück- schlüsse auf Ihre Person
        zu ziehen. Empfänger der Daten sind nur die verantwortliche Stelle und ggf. Auftragsverarbeiter.
        Anonyme Informationen dieser Art werden von uns ggfs. statistisch ausgewertet, um unseren In- ternetauftritt und die
        dahinterstehende Technik zu optimieren.
        <br /> <br />
        COOKIES         <br /> <br />

        Wie viele andere Webseiten verwenden wir auch so genannte „Cookies“. Cookies sind kleine Textdateien, die von einem
        Websiteserver auf Ihre Festplatte übertragen werden. Hierdurch erhal- ten wir automatisch bestimmte Daten wie z. B.
        IP-Adresse, verwendeter Browser, Betriebssys- tem und Ihre Verbindung zum Internet.
        Cookies können nicht verwendet werden, um Programme zu starten oder Viren auf einen Compu- ter zu übertragen. Anhand
        der in Cookies enthaltenen Informationen können wir Ihnen die Navi- gation erleichtern und die korrekte Anzeige unserer
        Webseiten ermöglichen.
        In keinem Fall werden die von uns erfassten Daten an Dritte weitergegeben oder ohne Ihre Einwil- ligung eine Verknüpfung
        mit personenbezogenen Daten hergestellt.
        Natürlich können Sie unsere Website grundsätzlich auch ohne Cookies betrachten. Internet-Browser sind regelmäßig so
        eingestellt, dass sie Cookies akzeptieren. Im Allgemeinen können Sie die Verwendung von Cookies jederzeit über die
        Einstellungen Ihres Browsers deaktivieren. Bitte verwenden Sie die Hilfefunktionen Ihres Internetbrowsers, um zu erfahren,
        wie Sie diese Einstel- lungen ändern können. Bitte beachten Sie, dass einzelne Funktionen unserer Website möglicherweise
        nicht funktionieren, wenn Sie die Verwendung von Cookies deaktiviert haben.        <br /> <br />

        KOMMENTARE        <br /> <br />

        Wenn Besucher Kommentare auf der Website schreiben, sammeln wir die Daten, die im Kommen- tar-Formular angezeigt werden,
        außerdem die IP-Adresse des Besuchers und den User-Agent- String (damit wird der Browser identifiziert), um die Erkennung
        von Spam zu unterstützen. Aus deiner E-Mail-Adresse kann eine anonymisierte Zeichenfolge erstellt (auch Hash genannt)
        und dem Gravatar-Dienst übergeben werden, um zu prüfen, ob du diesen benutzt. Die Daten- schutzerklärung des Gravatar-Dienstes
        findest
        du hier: https://automattic.com/privacy/. Nach- dem dein Kommentar freigegeben wurde, ist dein Profilbild öffentlich
        im Kontext deines Kommentars sichtbar.         <br /> <br />

        ERBRINGUNG KOSTENPFLICHTIGER LEISTUNGEN         <br /> <br />

        Zur Erbringung kostenpflichtiger Leistungen werden von uns zusätzliche Daten erfragt, wie z.B. Zahlungsangaben, um Ihre
        Bestellung ausführen zu können. Wir speichern diese Daten in unseren Systemen bis die gesetzlichen Aufbewahrungsfristen
        abgelaufen sind. SSL-VERSCHLÜSSELUNG
        Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der Technik
        entsprechende Verschlüsselungsverfahren (z. B. SSL) über HTTPS.         <br /> <br />

        NEWSLETTER         <br /> <br />

        Auf Grundlage Ihrer ausdrücklich erteilten Einwilligung, übersenden wir Ihnen regelmäßig unseren Newsletter bzw.
        vergleichbare Informationen per E-Mail an Ihre angegebene E-Mail-Adresse. Für den Empfang des Newsletters ist die
        Angabe Ihrer E-Mail-Adresse ausreichend. Bei der An- meldung zum Bezug unseres Newsletters werden die von Ihnen
        angegebenen Daten ausschließ- lich für diesen Zweck verwendet. Abonnenten können auch über Umstände per E-Mail
        informiert werden, die für den Dienst oder die Registrierung relevant sind (Beispielsweise Änderungen des
        Newsletterangebots oder technische Gegebenheiten).
        Für eine wirksame Registrierung benötigen wir eine valide E-Mail-Adresse. Um zu überprüfen, dass eine Anmeldung
        tatsächlich durch den Inhaber einer E-Mail-Adresse erfolgt, setzen wir das „Double-opt-in“-Verfahren ein. Hierzu
        protokollieren wir die Bestellung des Newsletters, den Versand einer Bestätigungsmail und den Eingang der hiermit
        angeforderten Antwort. Weitere Daten werden nicht erhoben. Die Daten werden ausschließlich für den Newsletterversand
        verwendet und nicht an Dritte weitergegeben.
        Die Einwilligung zur Speicherung Ihrer persönlichen Daten und ihrer Nutzung für den Newsletter- versand können Sie
        jederzeit widerrufen. In jedem Newsletter findet sich dazu ein entsprechen- der Link. Außerdem können Sie sich jederzeit
        auch direkt auf dieser Webseite abmelden oder uns Ihren entsprechenden Wunsch über die am Ende dieser Datenschutzhinweise
        angegebene Kon- taktmöglichkeit mitteilen.         <br /> <br />

        KONTAKTFORMULAR         <br /> <br />

        Treten Sie bzgl. Fragen jeglicher Art per E-Mail oder Kontaktformular mit uns in Kontakt, erteilen Sie uns zum Zwecke
        der Kontaktaufnahme Ihre freiwillige Einwilligung. Hierfür ist die Angabe einer validen E-Mail-Adresse erforderlich.
        Diese dient der Zuordnung der Anfrage und der anschlie- ßenden Beantwortung derselben. Die Angabe weiterer Daten ist
        optional. Die von Ihnen gemachten Angaben werden zum Zwecke der Bearbeitung der Anfrage sowie für mögliche
        Anschlussfragen gespeichert.
        Nach Erledigung der von Ihnen gestellten Anfrage werden personenbezogene Daten automatisch gelöscht.
        <br /> <br />

        VERWENDUNG VON SCRIPTBIBLIOTHEKEN (GOOGLE WEBFONTS)         <br /> <br />

        Um unsere Inhalte browserübergreifend korrekt und grafisch ansprechend darzustellen, verwen- den wir auf dieser
        Website Scriptbibliotheken und Schriftbibliotheken wie z. B. Google Webfonts (https://www.google.com/webfonts/).
        Google Webfonts werden zur Vermeidung mehrfachen Ladens in den Cache Ihres Browsers übertragen. Falls der Browser die
        Google Webfonts nicht unterstützt oder den Zugriff unterbindet, werden Inhalte in einer Standardschrift angezeigt.
        Der Aufruf von Scriptbibliotheken oder Schriftbibliotheken löst automatisch eine Verbindung zum Betreiber der Bibliothek aus.
        Dabei ist es theoretisch möglich – aktuell allerdings auch unklar ob und ggf. zu welchen Zwecken – dass Betreiber
        entsprechender Bibliotheken Daten erheben. Die Datenschutzrichtlinie des Bibliothekbetreibers Google finden Sie hier:
        https://www.google. com/policies/privacy/         <br /> <br />



        ÄNDERUNG UNSERER DATENSCHUTZBESTIMMUNGEN         <br /> <br />

        Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen
        entspricht oder um Änderungen unserer Leistungen in der Daten- schutzerklärung umzusetzen, z.B. bei der Einführung neuer
        Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
        FRAGEN AN DEN DATENSCHUTZBEAUFTRAGTEN
        Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für
        den Datenschutz verantwortliche Person in unserer Organisation:


        Melek Halici
        melek.halici@bellatriste.de
        Die Datenschutzerklärung wurde mit dem Datenschutzerklärungs-Generator der activeMind AG erstellt.

        <p>KOOPERATIONSPARTNER</p>

        <div className='imprint-logo-grid'>
          {koops.map((filename) => {
            return <div style={{
              display: "flex",
              justifyItems: "center"
            }}>
              <img src={filename} style={{width: "100%", alignSelf: "center"}}/>
            </div>
          })}
        </div>
          <br/><br/><br/><br/>
        <div className='imprint-logo-grid'>
          {foerderer.map((filename) => {
            return <div style={{
              display: "flex",
              justifyContent: "center"
            }}>
              <img src={filename} style={{width: "100%", alignSelf: "center"}}/>
            </div>
          })}
        </div>

        <div className='added-padding'></div>

      </div>

      <div className='background-color-grey inside-page-padding border-radius grid-row-start-mobile-1 grid-6-column-mobile  grid-child grid-2-column scrollable-element font-sz-small'>
        ANGABEN GEMÄSS § 5 TM Bella triste e.V. <br /><br />
        Vorsitz: <br />Lucie Frahm <br />Melek Halici<br /> Lina Briks<br /><br />
        Neustädter Markt 3-4<br />
        31135 Hildesheim<br />
        Telefon: + 49 (0) 172 7213929
        <br /> eMail: kontakt [at] bellatriste.de;<br /> <br />Internet: https://www.bellatriste.de<br />
        VERANTWORTLICH FÜR DEN INHALT  NACH § 55 ABS. 2 RSTV: <br />BELLA Triste e.V. <br />
        Neustädter Markt 3-4 <br />
        31134 Hildesheim  <br /> <br />
        WEB- DESIGN & DEVELOPEMENT:<br />
        YAEL OHMER<br />
        MARCO ROSINUS SERRANO <br /> <br />

        GRAFIKDESIGN: <br />
        VIVIEN SORRENTINO <br />ELFI HANDINA MURANDU <br /> <br />
        HAFTUNGSAUSSCHLUSS:  <br /> <br />
        HAFTUNG FÜR INHALTE <br /> <br />
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Ak- tualität der
        Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
        Seiten nach den all- gemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht ver- pflichtet,
        übermittelte oder gespei- cherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechts- widrige
        Tätigkeit hinweisen. Ver- pflichtungen zur Entfernung oder Sperrung der Nutzung von Infor- mationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeit- punkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Be- kanntwerden von entsprechenden
        Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.<br /><br />
        HAFTUNG FÜR LINKS<br /><br />
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf de- ren Inhalte wir keinen Einfluss ha- ben. Deshalb können wir für diese
        fremden Inhalte auch keine Ge- währ übernehmen. Für die Inhal-
        te der verlinkten Seiten ist stets der jeweilige Anbieter oder Be- treiber der Seiten verantwortlich. Die verlinkten Seiten wurden
        zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße über- prüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        Eine permanente inhalt- liche Kontrolle der verlinkten Sei- ten ist jedoch ohne konkrete An- haltspunkte einer Rechtsverletzung
        nicht zumutbar. Bei Bekanntwer- den von Rechtsverletzungen wer- den wir derartige Links umgehend entfernen.  <br /> <br />
        URHEBERRECHT <br /> <br />
        Die durch die Seitenbetreiber er- stellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
        Die Vervielfältigung, Bearbeitung, Verbrei- tung und jede Art der Verwertung außerhalb der Grenzen des Urhe- berrechtes
        bedürfen der schrift- lichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten,
        nicht kommerziel- len Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
        Urheberrechte Dritter beach- tet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung
        aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzun- gen werden wir derartige Inhalte umgehend entfernen.  <br /> <br />
        DATENSCHUTZ <br /> <br />
        Um unsere Datenschutzerklärung zu lesen, klicken Sie bitte hier: Datenschutzerklärung im Sinne der Datenschutz-Grundverordnung der Europäischen Union

        <div className='added-padding'></div>

      </div>

    </div>
  </>;

}

export default Imprint;
