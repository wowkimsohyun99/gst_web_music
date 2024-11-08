// import React from 'react';
// import 'antd/dist/antd.css';
// import HomePage from "./HomePage";
// import PlayersPage from "./PlayersPage";
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// const App = () => {
//   return (
//       <div>
//           <BrowserRouter>
//               <Routes>
//                   <Route path="/web_music" element = {<HomePage/>}/>
//                   <Route path="/web_music/playing" element = {<PlayersPage/>}/>
//               </Routes>
//           </BrowserRouter>
//       </div>
//   );
// };
//
// export default App;

import "./styles/index.css";
import "./styles/audioControl.css";
import { useState } from "react";
import AdditionSettings from "./components/additionalInfo";
import PauseImage from "./components/pauseImage";
import Loading from "./components/loadingImage";
import RadioStations from "./components/radioStations";
import github from "./images/github.png";
import play from "./images/playBtn.png";
import AudioControls from "./components/audioControl";
import pauseImg from "./images/pause.png";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";


function App() {
    const [BtnClass, setBtnClass] = useState("PlayPause"); //pause play change
    const [BtnClass2, setBtnClass2] = useState("playBtn");
    const [playPauseImg, setPlayPause] = useState(play);

    const [livestream, playLiveStream] = useState(false);
    const [pauseScreen, setPauseScreen] = useState("pauseScreen");
    const [currentLivestream, setLivestream] = useState(
        "https://www.youtube.com/watch?v=5qap5aO4i9A&ab_channel=LofiGirl"
    );

    const [stationName, setStationName] = useState("LofiGirl");


    const [youtubeChannel, setYoutubeChannel] = useState("");

    const handlePausePlaySwitch = (e) => {
        let className = e.target.className;

        if (className === "PlayPause" || className === "playBtn") {
            setPlayPause(pauseImg);
            setBtnClass("PlayPause2");
            setBtnClass2("playBtn2");
            start();
        } else if (className === "PlayPause2" || className === "playBtn2") {
            setPlayPause(play);
            setBtnClass("PlayPause");
            setBtnClass2("playBtn");
            pause();
        }
    };



    const start = () => {
        playLiveStream(false);
        playLiveStream(true);
        setPauseScreen("unpauseScreen");
    };

    const pause = () => {
        setPauseScreen("pauseScreen");
        playLiveStream(false);
    };

    const [video, setVideo] = useState(
        `//www.youtube.com/embed/TURbeWK2wwg?autoplay=1&mute=1&start=1`
    );

    // <------------- Radio Change section -------------->

    const LofiGirlVideo = () => {
        setVideo("//www.youtube.com/embed/TURbeWK2wwg?autoplay=1&mute=1&start=1");
        setStationName("LofiGirl");
        setYoutubeChannel(
            "https://www.youtube.com/channel/UCSJ4gkVC6NrvII8umztf0Ow"
        );
        setLivestream(
            "https://www.youtube.com/watch?v=5qap5aO4i9A&ab_channel=LofiGirl"
        );
        playLiveStream(true);
        setPauseScreen("unpauseScreen");
        setPlayPause(pauseImg);
        setBtnClass("PlayPause2");
        setBtnClass2("playBtn2");
    };

    const AmbientRenders = () => {
        setVideo("//www.youtube.com/embed/hBGbt2CRDpA?autoplay=1&mute=1&start=1");
        setStationName("Ambient Renders");
        setYoutubeChannel(
            "https://www.youtube.com/channel/UCXbXfisDHV_gDjawCKTyTIw"
        );
        setLivestream(
            "https://www.youtube.com/watch?v=GlEps1Ra06U&ab_channel=RelaxingAmbienceASMR"
        );
        playLiveStream(true);
        setPauseScreen("unpauseScreen");
        setPlayPause(pauseImg);
        setBtnClass("PlayPause2");
        setBtnClass2("playBtn2");
    };

    const IvyRecords = () => {
        setVideo("//www.youtube.com/embed/F1B9Fk_SgI0?autoplay=1&mute=1&start=10");
        setStationName("Ivy Records");
        setYoutubeChannel(
            "https://www.youtube.com/channel/UCv7qaGzuEfLhKxAZf4eZONg"
        );
        setLivestream(
            "https://www.youtube.com/watch?v=aLqc8TdoLJ0"
        );
        playLiveStream(true);
        setPauseScreen("unpauseScreen");
        setPlayPause(pauseImg);
        setBtnClass("PlayPause2");
        setBtnClass2("playBtn2");
    };

    const Krewella = () => {
        setVideo("https://www.youtube.com/watch?v=J-gYJBsln-w&ab_channel=KrewellaMusicVEVO?autoplay=1&mute=1&start=1");
        setStationName("Krewella");
        setYoutubeChannel("https://www.youtube.com/channel/UCDY_0WzkHyj0A1ev6RTql1Q");
        setLivestream(
            "https://www.youtube.com/watch?v=J-gYJBsln-w&ab_channel=KrewellaMusicVEVO"
        );
        playLiveStream(true);
        setPauseScreen("unpauseScreen");
        setPlayPause(pauseImg);
        setBtnClass("PlayPause2");
        setBtnClass2("playBtn2");
    };

    const HFiveGOneFunc = () => {
        setVideo("//www.youtube.com/embed/lniKA4QHuxg?autoplay=1&mute=1&start=1");
        setStationName("H5G1 Music");
        setYoutubeChannel(
            "https://www.youtube.com/channel/UCIPy2w-XdvaU73L3nAK1-0g"
        );
        setLivestream(
            "https://www.youtube.com/watch?v=-9gEgshJUuY&ab_channel=lofigeek"
        );
        playLiveStream(true);
        setPauseScreen("unpauseScreen");
        setPlayPause(pauseImg);
        setBtnClass("PlayPause2");
        setBtnClass2("playBtn2");
    };

    const StudyMD = () => {
        setVideo("https://www.youtube.com/watch?v=TetGasf6DjU&ab_channel=StudyMD");
        setStationName("StudyMD");
        setYoutubeChannel(
            "https://www.youtube.com/@StudyMDm"
        );
        setLivestream(
            "https://www.youtube.com/watch?v=TetGasf6DjU&ab_channel=StudyMD"
        );
        playLiveStream(true);
        setPauseScreen("unpauseScreen");
        setPlayPause(pauseImg);
        setBtnClass("PlayPause2");
        setBtnClass2("playBtn2");
    };

    const astralThrob = () => {
        setVideo("//www.youtube.com/embed/RJcIzUNKSQk?autoplay=1&mute=1&start=1");
        setStationName("Astral Throb");
        setYoutubeChannel("https://www.youtube.com/c/AstralThrob");
        setLivestream(
            "https://www.youtube.com/watch?v=UedTcufyrHc&ab_channel=NightrideFM"
        );
        playLiveStream(true);
        setPauseScreen("unpauseScreen");
        setPlayPause(pauseImg);
        setBtnClass("PlayPause2");
        setBtnClass2("playBtn2");
    };

    const proximity = () => {
        setVideo("https://www.youtube.com/watch?v=xETEYG-az9E&ab_channel=Proximity");
        setStationName("Proximity");
        setYoutubeChannel("https://www.youtube.com/@Proximity");
        setLivestream(
            "https://www.youtube.com/watch?v=xETEYG-az9E&ab_channel=Proximity"
        );
        playLiveStream(true);
        setPauseScreen("unpauseScreen");
        setPlayPause(pauseImg);
        setBtnClass("PlayPause2");
        setBtnClass2("playBtn2");
    };

    const theJazzHopCafe = () => {
        setVideo("https://www.youtube.com/watch?v=lbpCmN1IqGk&ab_channel=TheJazzHopCafé?autoplay=1&mute=1&start=1");
        setStationName("The Jazz Hop Café");
        setYoutubeChannel("https://www.youtube.com/c/TheJazzHopCafé");
        setLivestream(
            "https://www.youtube.com/watch?v=lbpCmN1IqGk&ab_channel=TheJazzHopCafé"
        );
        playLiveStream(true);
        setPauseScreen("unpauseScreen");
        setPlayPause(pauseImg);
        setBtnClass("PlayPause2");
        setBtnClass2("playBtn2");
    };

    const Spinnin = () => {
        setVideo("https://www.youtube.com/watch?v=Oaq9uRxsJhQ&ab_channel=Spinnin%27Records");
        setStationName("Spinnin' Records");
        setYoutubeChannel(
            "https://www.youtube.com/@spinninrecords"
        );
        setLivestream(
            "https://www.youtube.com/watch?v=N65Jb683pXQ&ab_channel=Spinnin%27Records"
        );
        playLiveStream(true);
        setPauseScreen("unpauseScreen");
        setPlayPause(pauseImg);
        setBtnClass("PlayPause2");
        setBtnClass2("playBtn2");
    };

    const Tomorrowland = () => {
        setVideo("//https://www.youtube.com/watch?v=wBgSH-CGPzg&ab_channel=Tomorrowland");
        setStationName("Tomorrowland");
        setYoutubeChannel(
            "https://www.youtube.com/user/tomorrowlandchannel/custom"
        );
        setLivestream(
            "https://www.youtube.com/watch?v=wBgSH-CGPzg&ab_channel=Tomorrowland"
        );
        playLiveStream(true);
        setPauseScreen("unpauseScreen");
        setPlayPause(pauseImg);
        setBtnClass("PlayPause2");
        setBtnClass2("playBtn2");
    };

    const Lck = () => {
        setVideo("https://www.youtube.com/watch?v=HUuyaeJtbaI&ab_channel=LCKTiếngViệt");
        setStationName("LCK Official");
        setYoutubeChannel(
            "https://www.youtube.com/@LCKTiengViet"
        );
        setLivestream(
            "https://www.youtube.com/watch?v=HUuyaeJtbaI&ab_channel=LCKTiếngViệt"
        );
        playLiveStream(true);
        setPauseScreen("unpauseScreen");
        setPlayPause(pauseImg);
        setBtnClass("PlayPause2");
        setBtnClass2("playBtn2");
    };

    const animeVibe = () => {
        setVideo("//www.youtube.com/embed/5B7Rsw0L2r8?autoplay=1&mute=1&start=0");
        setStationName("AnimeVibe");
        setYoutubeChannel("https://www.youtube.com/c/AnimeVibe");
        setLivestream(
            "https://www.youtube.com/watch?v=WDXPJWIgX-o&ab_channel=nostalgic"
        );
        playLiveStream(true);
        setPauseScreen("unpauseScreen");
        setPlayPause(pauseImg);
        setBtnClass("PlayPause2");
        setBtnClass2("playBtn2");
    };

    const SoothingRelaxation = () => {
        setVideo("https://www.youtube.com/watch?v=-5ajVJ1Yxlg&ab_channel=SoothingRelaxation?autoplay=1&mute=1&start=0");
        setStationName("Soothing Relaxation");
        setYoutubeChannel("https://www.youtube.com/@SoothingRelaxation");
        setLivestream(
            "https://www.youtube.com/watch?v=-5ajVJ1Yxlg&ab_channel=SoothingRelaxation"
        );
        playLiveStream(true);
        setPauseScreen("unpauseScreen");
        setPlayPause(pauseImg);
        setBtnClass("PlayPause2");
        setBtnClass2("playBtn2");
    };

    const DooPiano = () => {
        setVideo("https://www.youtube.com/watch?v=GqmAe0QfkjU&ab_channel=DooPiano?autoplay=1&mute=1&start=0");
        setStationName("DooPiano");
        setYoutubeChannel("https://www.youtube.com/@DooPiano");
        setLivestream(
            "https://www.youtube.com/watch?v=GqmAe0QfkjU&ab_channel=DooPiano"
        );
        playLiveStream(true);
        setPauseScreen("unpauseScreen");
        setPlayPause(pauseImg);
        setBtnClass("PlayPause2");
        setBtnClass2("playBtn2");
    };

    return (
        <div className="interfaceContainer">
            <div className="radioContainer">
                <div className="logo">Study Stream</div>
                <div className="subHeading"></div>
                <div className="radioStationsContainer">
                    <RadioStations
                        Ambient={AmbientRenders}
                        Anime={animeVibe}
                        Astral={astralThrob}
                        Krewella={Krewella}
                        Proximity={proximity}
                        Spinnin={Spinnin}
                        Ivy={IvyRecords}
                        High={HFiveGOneFunc}
                        Lofi={LofiGirlVideo}
                        Study={StudyMD}
                        Jazz={theJazzHopCafe}
                        Lck={Lck}
                        Tomorrowland={Tomorrowland}
                        SoothingRelaxation={SoothingRelaxation}
                        DooPiano={DooPiano}
                    />
                </div>
                <div className="socialsContainer2">
                    <div className="socials">
                        <motion.div
                            whileHover={{ scale: 1.09 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => {
                                window.open("https://github.com/wowkimsohyun99");
                            }}
                            className="link"
                        >
                            <img className="githubLogo" src={github} alt="" />
                            Github
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="audioControlContainer">
                <AudioControls
                    playPause={handlePausePlaySwitch}
                    buttonClass={BtnClass}
                    playPauseImage={playPauseImg}
                    buttonClass2={BtnClass2}
                    LiveStreamAudio={currentLivestream}
                    LiveStreamPlayPause={livestream}
                />
            </div>
            <div className={pauseScreen}>
                <PauseImage />
                <p style={{ marginTop: "0rem" }}>Music Paused</p>
            </div>
            <AdditionSettings youtube={youtubeChannel} radio={stationName} />
            <div class="videoContainer">
                <ReactPlayer
                    className="vid"
                    width="140%"
                    height="140%"
                    loop="true"
                    playing={livestream}
                    volume="mute"
                    url={video}
                />
            </div>



            <Loading />
        </div>
    );
}

export default App;

