import { allPosts } from "@/.contentlayer/generated";
import Header from "@/components/header";
import Link from "next/link";

export default function Home() {
  function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      timeZone: "Asia/Seoul",
    });
  }

  // Sort projects by date (descending)
  const posts = allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));

  const renderIntro = () => (
    <>
      <div className="md:flex items-center gap-8">
        <img className="p-4 m-0 w-96" src="/main_img.png" />
        <div className="text-4xl my-10 leading-snug">
          Welcome!
          <br />I am <span className="font-semibold">Hyesoo Park</span>, a Ph.D.
          student in School of Interactive Computing at Georgia Tech.
          <br />
        </div>
      </div>
      <section>
        <p>
          My research interests lie in Human-Computer Interaction, particularly
          in social computing and computer-supported cooperative work. In this
          context, I focus on designing systems that empower people to
          collaborate to support <b>human well-being</b>, for those historically
          underserved by digital solutions. Recently, I have explored how
          data-powered systems can promote positive behavior change by
          encouraging self-awareness, reflection and social support. I’m
          currently advised by{" "}
          <a href="https://faculty.cc.gatech.edu/~jkim693/" target="_blank">
            Prof. Jennifer G. Kim.
          </a>
        </p>
      </section>
    </>
  );

  return (
    <div className="!max-w-full prose dark:prose-invert divide-y">
      {renderIntro()}
      {posts.map((post) => (
        <article key={post._id} className="py-2 flex">
          {/* <Link href={post.slug}> */}
          <div className="text-[#898989] font-bold shrink-0 w-24">
            {formatDate(post.date)}
          </div>
          <div>
            {post.title}
            {post.link && (
              <Link
                href={post.link}
                className="px-1 text-main_color dark:text-main_color_dark"
                target="_blank"
              >
                Link
              </Link>
            )}
          </div>
          {/* </Link> */}
        </article>
      ))}
    </div>
  );
}
