import React from "react";
import "../../styles/imprint.css";
import "../../styles/fonts.css";
import "../../styles/pages.css";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

function ShopSmall() {
  return (
    <>
      <Helmet>
        <title>PROSANOVA 2023 | Tickets</title>
        <meta
          name="description"
          content="Prosanova 2023, Festival für junge Literatur | Tickets"
        />
      </Helmet>

      <div className="inside-main-content-wrapper" style={{
        height: "100%",
        display: "flex",
        flexDirection: "column"
      }}>
        <div style={{
          flex: "3 1 0",
          display: 'grid',
          height: "100%",
          placeItems: 'center'
        }}>
          <div style={{ display: 'block', }}>
            <a style={{ color: "black", textDecoration: "none", margin: '1rem', cursor: "url(MouseHand-Klick_small.png) 32 0, auto", }} className="font-size-1 background-color-grey shopButtons" href="https://tickets.hoemepage.com/event/prosanova-23-dzf5c8" target="_blank">Tickets</a>
          </div>
        </div>
        <motion.div
          initial={{
            flex: "none",
          }}
          animate={{
            flex: "6 1 0",
            transition: {
              delay: 1,
              duration: 1,
              bounce: true,
              type: "spring",
              damping: 5,
              stiffness: 100
            },
          }}
          style={{ paddingLeft: "2rem", paddingRight: "2rem", overflowY: "auto" }}
          className="background-color-grey border-radius font-size-1">
          <p>
            Für alle, die noch auf der Suche nach einem Schlafplatz sind und keine Lust auf ein anonymes Hotel und Begegnungen mit Künstler:innen in Bademänteln haben, ist die von uns organisierte Bettenbörse genau das richtige. Sie bietet nicht nur die Möglichkeit, waschechte Hildesheimer:innen ganz privat kennenzulernen, sondern auch etwas Gutes zu tun: Als Dankeschön verschenkst du nämlich ein Tagesticket an dein:e Gastgeber:in (25€).
          </p>
          <p>
            Falls du (ja, wir meinen dich mit der großen Altbauwohnung mitten in der Oststadt) jetzt Lust bekommen hast, jemanden aufzunehmen, kannst du dich schon auf dein kostenloses Tagesticket freuen!
          </p>
          <p>
            Egal, ob du ein Bett brauchst oder eins zur Verfügung stellen kannst, hier findest du die Telegram-Gruppe zur Vernetzung: <a href="https://t.me/+Tnge0OQtEiFiMDFi">https://t.me/+Tnge0OQtEiFiMDFi</a>
          </p>
          <p>
            (Der Betrag von 25€ ist je nach deinen finanziellen Möglichkeiten verhandelbar, also geh gerne entweder mit deinem:r Bettenbörse-Partner:in ins Gespräch oder melde dich nochmal bei uns unter <a href="mailto:kommunikation@prosanova.net">kommunikation@prosanova.net</a>)
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default ShopSmall;
