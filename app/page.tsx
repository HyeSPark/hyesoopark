import { allPosts, Post } from "@/.contentlayer/generated";
import Header from "@/components/header";
import Link from "next/link";

const MAX_NEWS_NUM = 8;

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
  const visibleNewsPosts = posts.slice(0, MAX_NEWS_NUM);
  const invisibleNewsPosts = posts.slice(MAX_NEWS_NUM, posts.length);

  const renderIntro = () => (
    <>
      <section className="pb-6">
        <div className="md:flex items-center gap-8">
          <img className="p-4 m-0 w-96" src="/main_img.png" />
          <div className="text-4xl my-8 leading-snug">
            Welcome!
            <br />
            I&apos;m <b>Hyesoo Park</b>, a design researcher dreaming{" "}
            <i>social justice in workplace</i>.
            <br />
          </div>
        </div>
        <p>
          I research in the fields of Human-Computer Interaction (HCI) and
          Science and Technology Studies (STS), as a Ph.D. student at{" "}
          <a href="https://www.ic.gatech.edu/" target="_blank">
            Georgia Tech&apos;s School of Interactive Computing
          </a>{" "}
          advised by{" "}
          <a href="https://faculty.cc.gatech.edu/~jkim693/" target="_blank">
            Prof. Jennifer G. Kim
          </a>
          . Through feminist and disability justice lenses, I critically examine{" "}
          <i>productivity tools</i>.
        </p>
        <ul>
          <li>
            I ask how workers marginalized by productivity norms labor, and what
            kinds of environments could be designed <i>from</i> their lived
            experience.
          </li>
          <li>
            I imagine alternatives that value care, community resilience, and
            collective action.
          </li>
        </ul>

        <p>
          Lately, I&apos;m exploring 1) LLM&apos;s opportunities and challenges
          of <b>job seeking support for autistic individuals</b>, 2){" "}
          <b>online body doubling community</b> as a care practice for
          productivity, and 3) working structure and tacit knowledge of{" "}
          <b>activists responding to tech-facilitated sexual violence</b>.
        </p>
      </section>
    </>
  );

  const renderPost = (post: Post) => (
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
    </article>
  );

  return (
    <div className="!max-w-full prose dark:prose-invert divide-y">
      {renderIntro()}
      {visibleNewsPosts.map(renderPost)}
      <details className="flex flex-col collapsible">
        <summary className="order-2 cursor-pointer list-none font-medium text-center my-2 text-gray-400">
          <span className="when-closed">Show all</span>
          <span className="when-open">Hide</span>
        </summary>
        <div className="order-1 mb-3 w-full  divide-y">
          {invisibleNewsPosts.map(renderPost)}
        </div>
      </details>
    </div>
  );
}
