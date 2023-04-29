import { PrettyName } from "contents/Team/TeamComponents";
import React from "react";


export const LineUpInformation = [
    {
        title: "Stoff mit Luft",
        subtitle: "(mit Duygu Agal)",
        contentJSX: <>
            <p>
                <PrettyName name={"Stoff"} /> mit <PrettyName name={"Luft"} />
            </p>
            <p>
                Hier kommt das bild hin oder so kp
            </p>
            <p>
                Und hier der text aber du kannst hier ja alles designen wie du bock hast.
            </p>
        </>
    },
    {
        title: "Amir Gudarzi",
        subtitle: "",
        contentJSX: <>
            <p>
                <PrettyName name={"Amir"} /> <PrettyName name={"Gudarzi"} />
            </p>
        </>
    }
]