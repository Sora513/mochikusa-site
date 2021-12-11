import React from "react"
import { Helmet } from "react-helmet"
const Import = () => {

    return (
        <Helmet>
            <script
  src="https://code.jquery.com/jquery-3.6.0.slim.min.js"
  integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI="
  crossorigin="anonymous"></script>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP&display=swap" rel="stylesheet" />
            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"/>
            <meta name="viewport" content="width=device-width,initial-scale=1" />
        </Helmet>
    )
}

export default Import
