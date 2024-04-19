import { ReactNode } from "react";
import Head from "next/head";
//COMPONENT
import { Header } from "../../components";
//MATERIAL-UI
import useMediaQuery from "@mui/material/useMediaQuery";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import cvIcon from "../../images/8101319.png";
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
            }}
        >
            <Head>
                <title> {title} | Portfolio </title>
            </Head>

            <Header />

            <div className="container mt-11">{children}</div>

            <footer
                className={`bg-gray-50 ${screen770 && `-mt-0.5`}`}
                aria-labelledby="footer-heading"
            >
                <div
                    className={`${
                        !screen300 && `bg-black`
                    } border-t border-gray-200 pt-8 pb-4 flex items-center align-middle justify-center flex-col mt-8`}
                >
                    <Slide duration={1300} left>
                        <div className="flex space-x-6 md:order-2 align-middle">
                            <a
                                className="cursor-pointer text-gray-400 hover:text-gray-500 myHoverEffect1"
                                target="_blank"
                                href="https://drive.google.com/file/d/10OMGq78jcXn73PaCqpvgBS3Sn_hNbIiN/view?usp=sharing"
                            >
                                <Image className="opacity-70" src={cvIcon} height={40} width={40} objectFit="contain"/>
                            </a>
                            <a
                                className="cursor-pointer text-gray-400 hover:text-gray-500 myHoverEffect1"
                                target="_blank"
                                href="https://www.github.com/salmansarwarr"
                            >
                                <GitHubIcon fontSize="large" />
                            </a>
                            <a
                                className="cursor-pointer text-gray-400 hover:text-gray-500 myHoverEffect1"
                                target="_blank"
                                href="https://www.linkedin.com/in/-salmansarwar"
                            >
                                <LinkedInIcon fontSize="large" />
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
                                style={{ pointerEvents: "none" }}
                                className="text-gray-400 hover:text-gray-400 select-none"
                            >
                                {" "}
                                Contact @{" "}
                            </a>
                            <a
                                href="#"
                                style={{ pointerEvents: "none" }}
                                className="text-gray-400 hover:text-gray-400 select-none"
                            >
                                {" "}
                                <span
                                    style={{ fontFamily: "serif !important" }}
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
