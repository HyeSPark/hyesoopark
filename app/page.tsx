import { allPosts } from "@/.contentlayer/generated"
import Header from "@/components/header";
import Link from "next/link"

export default function Home() {

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString("kr-KR", {
        year: "numeric",
        month: "short",
    });
  }

  // Sort projects by date (descending)
  const posts = allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));

  const renderIntro = () => (
    <>
      <div className="md:flex items-center gap-8">
        <img className="p-4 m-0" src="/main_img.png"/>
        <div className="text-4xl font-semibold my-10 leading-snug">
          Hello! <br />
          I’m Hye Soo, <br />
          a HCI researcher.<br />
        </div>
    </div>
    <section>
      <p>
        I’m a master’s student at <a href="https://cs.kaist.ac.kr/" target="_blank">KAIST School of Computing</a>, 
        and a member of <a href="http://ic.kaist.ac.kr/wiki/wiki.cgi?Main" target="_blank">ICLAB</a>. I’m under the advisement of Prof. 
        Uichin Lee. I aim to understand human behavior changes by 
        computing through the research.
      </p>
      <p>
        My research interests are focused on Human-Computer interaction, 
        specially about the system for digital health care and behavior change. 
        I am also broadly interested in the following keywords - social computing, 
        behavior change supporting system and accessible computing.
      </p>
    </section>
    </>
  )

  return (
    <div className="!max-w-full prose dark:prose-invert divide-y">
      {renderIntro()}
      {posts.map((post) => (
        <article key={post._id} className="py-2 flex">
          {/* <Link href={post.slug}> */}
            <div className="text-[#898989] font-bold shrink-0 w-24">{formatDate(post.date)}</div>
            <div>
              {post.title}
              {post.link && <Link href={post.link} className="px-1 text-main_color dark:text-main_color_dark" target="_blank">Link</Link>}
            </div>
          {/* </Link> */}
        </article>
      ))}
    </div>
  )
}
