
import { allProjects } from "@/.contentlayer/generated";
import Image from "next/image"
import Header from "@/components/header";
import Link from "next/link";

export default function Home() {
    function formatDate(date: string) {
        return new Date(date).toLocaleDateString("kr-KR", {
            year: "numeric",
            month: "short",
        });
    }
    // Sort projects by date (descending)
    const projects = allProjects.sort((a, b) => (a.from > b.from ? -1 : 1));

    return (
        <div className="prose dark:prose-invert flex flex-wrap gap-4 max-w-4xl divide-y md:divide-y-0 ">
            {allProjects.map((project) => (
                <Link 
                    key={project._id} 
                    href={project.slug}
                    className="relative flex flex-col justify-center gap-4 no-underline pt-6 md:pt-0 overflow-hidden md:rounded-md"
                >
                    <Image 
                        alt={`The representative image of ${project.title}`} 
                        src={project.thumb}
                        width={400}
                        height={240}
                        className="m-0 bg-white rounded-md border"
                    ></Image>
                    <div className="md:absolute relative top-0 w-full h-full 
                        md:opacity-0 hover:opacity-100 transition duration-500 
                        flex flex-col gap-2 md:items-center justify-center md:px-5">
                        <div className="absolute top-0 w-full h-full bg-black md:opacity-50 opacity-0"> </div>
                        <div className="flex gap-2 z-20">
                            {project.tags && project.tags.map((el, i) => (
                                <kbd key={i} className="bg-main_color text-white px-2">#{el}</kbd>
                            ))}
                        </div>
                        <div className="text-2xl font-bold md:text-white z-20">{project.title}</div>
                        {project.description && (
                            <div className="z-20 md:text-white">{project.description}</div>
                        )}
                        <h4 className="m-0 p-0 md:text-white z-20">
                            {formatDate(project.from)} ~ {formatDate(project.to)}
                        </h4>
                    </div>
                    {/* <div className="flex items-center justify-between w-full"> */}
                        {/* <div className="flex-1">
                            <Link href={project.slug}>
                                <h2>{project.title}</h2>
                            </Link>
                            {project.description && (
                                <p>{project.description}</p>
                            )}
                        </div> */}
                        {/* Vertical seperator */}
                        {/* <div className="mx-2.5" />
                        <div className="w-44 flex flex-col items-center justify-center">
                            {project.organization && (
                                <h5>{project.organization}</h5>
                            )}
                            <h4 className="m-0 p-0 flex flex-col md:flex-row gap-1">
                                <span>
                                    {formatDate(project.from)} ~ 
                                </span>
                                <span>
                                    {formatDate(project.to)}
                                </span>
                                
                            </h4>
                        </div> */}
                    {/* </div> */}
                </Link>
            ))}
        </div>
    );
}
