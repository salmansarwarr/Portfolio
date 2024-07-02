import { useState } from "react";
import Image from "next/image";
import { project } from "../../images/services-pics";
import Cards from "./Cards";
//MATERIAL-UI
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
//REACT-REVEAL
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
//REACT-SELECT
import Select from "react-select";

type ProjectsProps = {
    projects: Array<{
        id: number;
        name: string;
        technologies: string;
        url: string;
        pic: any;
    }>;
    services: Array<{ value: string; label: string }>;
};

function Projects({ projects, services }: ProjectsProps) {
    const screen680 = useMediaQuery("(max-width: 680px)");
    const screen640 = useMediaQuery("(max-width: 640px)");
    const screen600 = useMediaQuery("(max-width: 600px)");
    const screen450 = useMediaQuery("(max-width: 450px)");
    const screen350 = useMediaQuery("(max-width: 350px)");

    const [filter, setFilter] = useState<string>("");
    const [isClearable, setIsClearable] = useState<boolean>(true);

    /* returnsBoolTrueIfExistOtherwiseFalseOnThatIndex */
    var existProjects: any[] = [];
    existProjects = [
        ...projects.map(({ technologies }) => technologies.includes(filter)),
    ];

    /* indexesOfTrues */
    var indexes: any[] = [];
    for (var [i, bool] of existProjects.entries()) {
        if (bool === true) {
            indexes = [...indexes, i];
        }
    }

    /* filterProjectsOnTrueIndex */
    var filterProjects: any[] = [];
    var i: number;
    for (i of indexes) {
        filterProjects = [...filterProjects, projects[i]];
    }

    return (
        <Zoom duration={1300}>
            <div
                className={`d-flex justify-content-center align-items-center flex-column pl-7 pr-7 ${
                    screen350 ? `mt-16` : `mt-12`
                } selection:bg-transparent`}
            >
                {screen640 ? (
                    screen450 ? (
                        <Typography
                            variant="h2"
                            className="mt-16 fw-bold text-white bg-black cursor-default pt-2 pb-6 pl-8 pr-8 rounded-xl shadow-xl shadow-gray-700/75"
                        >
                            Projects
                        </Typography>
                    ) : (
                        <Typography
                            variant="h2"
                            className="mt-16 fw-bold text-white bg-black cursor-default pt-2 pb-3 pl-8 pr-8 rounded-xl flex align-middle shadow-xl shadow-gray-700/75"
                        >
                            <span className="xs:mt-3 sm:mt-2.5 pr-2.5">
                                {" "}
                                Projects{" "}
                            </span>
                            <Image
                                src={project}
                                width="70rem"
                                height="46.75rem"
                                className="mt-1"
                            />
                        </Typography>
                    )
                ) : (
                    <Typography
                        variant="h2"
                        className="mt-16 fw-bold text-white bg-black cursor-default pt-2 pb-3 pl-8 pr-8 rounded-xl flex align-middle shadow-xl shadow-gray-700/75"
                    >
                        <span className="sm:mt-2.5 md:mt-2 lg:mt-1.5 xl:mt-1 2xl:mt-0.5 pr-2.5">
                            {" "}
                            Projects{" "}
                        </span>
                        <Image
                            src={project}
                            width="90rem"
                            height="70rem"
                            className="mt-1"
                        />
                    </Typography>
                )}

                <div
                    style={{
                        width: screen600 ? "80%" : "65%",
                        marginTop: screen680 ? 10.15 : 15.05,
                        marginBottom: screen680 ? 3.65 : 10,
                    }}
                >
                    <Select
                        options={services}
                        className="basic-single w-full mt-8"
                        classNamePrefix="select"
                        onChange={(e) => setFilter(e?.value)}
                        isClearable={isClearable}
                    />
                </div>

                <Grid
                    container
                    spacing={3}
                    className="d-f1lex align-items-center justify-content-center p-10"
                    style={{ marginTop: screen680 ? -20 : -25 }}
                >
                    {/* empty for initail & undefined for cut */
                    (filter === ("" || undefined) ? projects : filterProjects)
                        .reverse()
                        .map(({ id, name, technologies, url, pic }) => (
                            <Grid key={id} item sm={12} md={6} lg={4}>
                                <Fade>
                                    <Cards
                                        name={name}
                                        technologies={technologies}
                                        url={url}
                                        pic={pic}
                                    />
                                </Fade>
                            </Grid>
                        ))}
                </Grid>
            </div>
        </Zoom>
    );
}

export default Projects;
