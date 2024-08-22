
import { allProjects } from "@/.contentlayer/generated";
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
        <div className="prose dark:prose-invert">
            {allProjects.map((project) => (
                <article key={project._id}>
                    <div className="flex items-center justify-between w-full">
                        <div className="flex-1">
                            <Link href={project.slug}>
                                <h2>{project.title}</h2>
                            </Link>
                            {project.description && (
                                <p>{project.description}</p>
                            )}
                        </div>
                        {/* Vertical seperator */}
                        <div className="mx-2.5" />
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
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}
