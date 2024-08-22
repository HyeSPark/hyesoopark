
import { Publication, allPublications } from "@/.contentlayer/generated";
import {Link as LinkIcon, Video, Pdf} from "@/components/icons";
import Link from "next/link";
import { ReactNode } from "react";

export default function Home() {
    // Sort projects by date (descending)
    const pubs = allPublications.sort((a, b) => (a.date > b.date ? -1 : 1));

    const fullPubs = pubs.filter((el) => el.isFullPaper);
    const notFullPubs = pubs.filter((el) => !el.isFullPaper);

    const renderLinkButton = (link: string, title: string, icon: ReactNode) => (
        <Link href={link} 
            target="_blank" 
            className="text-sm py-1 px-2 rounded-sm bg-[#eeeeee] 
            font-semibold text-[#494949] hover:bg-main_color hover:text-white 
            transition duration-200 no-underline flex gap-1 items-center">
                {icon}
                {title}
            </Link>
    )


    const renderPubList = (pub: Publication) => (
        <article key={pub._id}>
            <div className="flex flex-col md:flex-row md:gap-8 items-center justify-between w-full">
                <img 
                    className="w-full md:max-w-[250px] m-0 p-0.5 rounded-md border h-full object-cover mt-8"
                    src={pub.img}
                ></img>
                <div className="flex flex-col gap-1">
                    <h3>{pub.title}</h3>
                    <div>
                        {pub.authors.map((auth, i) => (<span key={i} className={`font-semibold ${
                            auth === "Hye Soo Park" ? "text-main_color" : ""
                        }`}>{auth}{i === pub.authors.length - 1 ? null : ", "}
                        </span>))}
                    </div>
                    <div className="flex gap-1">
                        {pub.venue} 
                        {pub.venueLink && <>{" ("} <Link href={pub.venueLink} target="_blank">Link</Link> {")"}</>}
                        
                    </div>
                    <div className="flex gap-2 py-1">
                        {pub.pdfLink && renderLinkButton(pub.pdfLink, "PDF", <Pdf width={16} height={16}/>)}
                        {pub.doiLink && renderLinkButton(pub.doiLink, "DOI", <LinkIcon width={16} height={16}/>)}
                        {pub.vidLink && renderLinkButton(pub.vidLink, "VIDEO", <Video width={16} height={16}/>)}
                    </div>
                </div>
            </div>
        </article>
    )

    return (
        <div className="!max-w-full prose dark:prose-invert">
            <h2>Conference & Journal Papers</h2>
            {fullPubs.map(renderPubList)}
            <hr></hr>
            <h2>Posters & Workshop Papers</h2>
            {notFullPubs.map(renderPubList)}
        </div>
    );
}
