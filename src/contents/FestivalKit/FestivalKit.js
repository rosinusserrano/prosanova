import { BACKGROUNDCOLOR } from 'constants'
import { motion, useAnimationControls } from 'framer-motion'
import { useMobile } from 'hooks/useMediaQuery'
import React, { useRef, useState } from 'react'
import { Helmet } from 'react-helmet'

function FestivalKit() {
    const isMobile = useMobile()

    return (
        <>
            <Helmet>
                <title>PROSANOVA 2023 | Festival-Kit</title>
                <meta
                    name="description"
                    content="Prosanova 2023, Festival für junge Literatur | Festival-Kit"
                />
            </Helmet>
            <div style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: "1rem",
                height: "100%"
            }}>
                <div className='border-radius background-color-grey inside-page-padding'
                    style={{ height: "100%", overflowY: "auto" }}>
                    <div>
                        <span className='font-size-1'>Lageplan und Orientierung</span>
                        <p>Das PROSANOVA-Festivalzentrum liegt in der Keßlerstraße 51, 31134 Hildesheim. Es handelt sich dabei um die ehemalige Hohnsen Grundschule. Die Lesungen und Formate werden in der Schule (im Erdgeschoss und im ersten Obergeschoss) und auf dem Gelände der Schule stattfinden.</p>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem"
                        }}>
                            <img
                                style={{
                                    width: "100%",
                                }}
                                src={"images/Anfahrtskarte-2-web.jpg"}
                                alt={""}
                                className="border-radius"
                            />
                            <img
                                style={{
                                    width: "100%",
                                }}
                                src={"images/Anfahrtskarte-web.jpg"}
                                alt={""}
                                className="border-radius"
                            />


                        </div>
                    </div>
                </div>
                <div style={{
                    height: "100%", overflowY: "auto",
                    borderRadius: "10px"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem"
                    }}>
                        <FestivalKitExpandable
                            title={"Infokiosk und Awareness"}
                            text={"Auf dem Festivalgelände befindet sich ein Infokiosk, der ständig besetzt ist. Dieser gibt Auskunft über die Standorte der Bühnen, Toiletten und extern-stattfindenden Formaten. Der Infokiosk wird außerdem mit einer Awareness-Person besetzt sein, die angesprochen werden kann."}
                        />
                        <FestivalKitExpandable
                            title={"Awarenessraum"}
                            text={"Es gibt einen Awarenessraum, zu dem du mit einer Awarenessperson Zutritt erhältst. Dieser Raum ist aufgrund der Ungestörtheit nicht frei zugänglich sein."}
                        />
                        <FestivalKitExpandable
                            title={"Hinweis zur Barrierefreiheit"}
                            text={"Das Festivalgelände ist nicht vollständig barrierefrei. Auf Anfrage stellen wir Scouts zur Verfügung, die Menschen mit Behinderung auf dem Festival begleiten. Es besteht die Möglichkeit, das Festivalgelände mit den Scouts vor Beginn des Festivals zu begehen. Die Plätze in den Räumen sind aufgrund der Größe begrenzt. Ein Platz kann im Falle einer Behinderung im Vorfeld unter produktion@prosanova.net reserviert werden."}
                        />
                        <FestivalKitExpandable
                            title={"Barrierefreiheit"}
                            text={"Das Erdgeschoss der Schule ist weitgehend barrierefrei. Es gibt eine Rollstuhlzufahrt über den Haupteingang. Die Rollstuhlzufahrt ist … m breit. Bei einigen Räumen ist eine Türschwelle vorhanden. Die Türen sind … m breit. Der Zugang zum ersten Obergeschoss ist nicht barrierefrei. Dort sind zwei aufeinanderfolgende Treppen mit einem Zwischengeschoss vorhanden. Die Treppen sind … m breit. Der Schulhof ist betoniert. Es sind einige Rasenflächen vorhanden."}
                        />
                        <FestivalKitExpandable
                            title={"WC und Toiletten"}
                            text={"Auf dem Parkplatz des nebenliegenden Gebäudes steht ein WC-Wagen mit Wasseranschluss. Darüber hinaus gibt es ein Behinderten-WC."}
                        />
                        <FestivalKitExpandable
                            title={"Catering"}
                            text={"Auf dem ehemaligen Schulhof wird für alle Festivalgäste ein Angebot an verschiedenen Essensständen sowie eine Bar vorhanden sein. Eine zweite Bar findet ihr im Hort. Es gibt keinen Trinkwasseranschluss."}
                        />
                        <FestivalKitExpandable
                            title={"Weiteres gastronomisches Angebot in der Umgebung"}
                            text={"In unmittelbarer Nähe befinden sich vielfältige, gastronomische Angebote. Ein Café und eine Pizzeria liegen etwa eine Gehminute vom Festivalzentrum entfernt und haben an allen drei Tagen geöffnet. Die Bäckerei Safft liegt etwa zwei Gehminuten vom Festivalzentrum entfernt und hat am Freitag und Samstag geöffnet. Etwa zehn Gehminuten entfernt liegen zwei Supermärkte, die ebenfalls Freitag und Samstag geöffnet haben."}
                        />
                        <FestivalKitExpandable
                            title={"Bus- und Bahnanbindung"}
                            text={"Vom Hildesheimer Hauptbahnhof fahren die Buslinien 1 und 4. Mit der Buslinie 1 fährt man bis zum Ostbahnhof. Von dort aus sind es etwa zehn Gehminuten bis zum Festivalzentrum. Mit der Buslinie 4 fährt man bis zum HAWK-Campus. Von dort aus ist mit fünf Gehminuten zu rechnen. Es besteht auch die Möglichkeit, mit der Regionalbahn RE10 eine Station zum Ostbahnhof zu fahren."}
                        />
                        <FestivalKitExpandable
                            title={"Evaluation"}
                            text={<>
                                Das PROSANOVA lebt vom Austausch mit unseren Besucher:innen und Gäst:innen - wir freuen uns, wenn ihr euch ein paar Minuten Zeit nehmt, die Evaluation auszufüllen: <a href='https://forms.gle/Sn39YCH3vMf8EKQ36'>https://forms.gle/Sn39YCH3vMf8EKQ36</a>
                            </>}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

function FestivalKitExpandable({ title, text }) {
    const [expanded, setExpanded] = useState(false)
    const [hovered, setHovered] = useState(false)

    const controls = useAnimationControls()

    return <div
        style={{
            backgroundColor: hovered ? "transparent" : BACKGROUNDCOLOR,
            cursor: "url(MouseHand-Klick_small.png) 32 0, pointer",
        }}
        onClick={() => {
            controls.start({
                height: expanded ? "0px" : "fit-content"
            })
            setExpanded(!expanded)
        }}
        onPointerLeave={() => setHovered(false)}
        onPointerOver={() => setHovered(true)}
        key={`fstvlkt-${title}`} className='border-radius background-color-grey inside-page-padding'>
        <span className='font-size-1'>{title}</span>
        <motion.div style={{ overflow: "hidden" }} className=''
            initial={{ height: "0px" }}
            animate={controls}>
            {text}
        </motion.div>
    </div>
}

export default FestivalKit