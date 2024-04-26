import { ReactNode } from "react";
import Head from "next/head";
//COMPONENT
import { Header } from "../../components";
//MATERIAL-UI
import useMediaQuery from "@mui/material/useMediaQuery";
import cvIcon from "../../images/resume1.png";
import fiverrIcon from "../../images/fiverr.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
//REACT-REVEAL
import Slide from "react-reveal/Slide";
import Image from "next/image";

type LayoutProps = {
    children: ReactNode;
    title: string;
};

function Layout({ children, title }: LayoutProps) {
    const screen1024 = useMediaQuery("(min-width: 1024px)");
    const screen770 = useMediaQuery("(max-width: 770px)");
    const screen300 = useMediaQuery("(max-width: 300px)");

    return (
        <div
            className="bg-gray-100"
            style={{
                height: "100vh" /* set the height to match that of the viewport. */,
                width: "100vw" /* set the width to match that of the viewport. */,
                margin: 0 /* remove any browser-default margins. */,
                overflowX: "hidden",
                backgroundImage: "url('./bg3.png')", // Replace 'path/to/your/image.jpg' with the actual path to your image
                backgroundSize: "cover", // This ensures the image covers the entire background
                backgroundPosition: "center",
            }}
        >
            <Head>
                <title> {title} | Portfolio </title>
            </Head>

            <Header />

            <div className="container mt-11">{children}</div>

            <footer
                className={`bg-gray-800 ${screen770 && `-mt-0.5`}`}
                aria-labelledby="footer-heading"
            >
                    <div
                        className={`${
                            !screen300 && `bg-gray-900`
                        } pt-8 pb-4 flex items-center align-middle justify-center flex-col lg:mt-16`}
                    >
                        <Slide duration={1300} left>
                            <div className="flex space-x-6 md:order-2 align-middle">
                                <a
                                    className="cursor-pointer text-white hover:text-gray-500 myHoverEffect1"
                                    target="_blank"
                                    href="https://drive.google.com/file/d/1WkHSlwavp1bCKDM6Mv0IwkxJkLHfJEs_/view?usp=sharing"
                                >
                                    <img
                                        className=" h-[30px] lg:h-[40px]"
                                        src={"../resume1.png"}
                                    />
                                </a>
                                <a
                                    className="cursor-pointer text-white hover:text-gray-500 myHoverEffect1"
                                    target="_blank"
                                    href="https://www.github.com/salmansarwarr"
                                >
                                    <GitHubIcon
                                        style={{
                                            fontSize: screen1024
                                                ? "40px"
                                                : "30px",
                                        }}
                                    />
                                </a>
                                <a
                                    className="cursor-pointer text-white hover:text-gray-500 myHoverEffect1"
                                    target="_blank"
                                    href="https://www.linkedin.com/in/-salmansarwar/"
                                >
                                    <LinkedInIcon
                                        style={{
                                            fontSize: screen1024
                                                ? "40px"
                                                : "30px",
                                        }}
                                    />
                                </a>
                                <a
                                    className="cursor-pointer text-white hover:text-gray-500 myHoverEffect1"
                                    target="_blank"
                                    href="https://www.fiverr.com/msalman__sarwar?public_mode=true"
                                >
                                    <img
                                        className="grayscale h-[32px] lg:h-[40px]"
                                        src={"../fiverr.png"}
                                    />
                                </a>
                            </div>
                        </Slide>

                        <Slide duration={1300} right>
                            <p
                                className={`mt-8 text-base md:mt-0 md:order-1 ${
                                    screen300 && `hidden`
                                }`}
                            >
                                <a
                                    href="#"
                                    className="text-white select-none"
                                >
                                    {" "}
                                    Contact @{" "}
                                </a>
                                <a
                                    href="#"
                                    className="text-white select-none"
                                >
                                    {" "}
                                    <span
                                        style={{
                                            fontFamily: "serif !important",
                                        }}
                                        className="font-bold"
                                    >
                                        +923150259301
                                    </span>{" "}
                                    ( WhatsApp ){" "}
                                </a>
                            </p>
                        </Slide>
                    </div>
            </footer>
        </div>
    );
}

export default Layout;
