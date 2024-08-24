import { notFound } from "next/navigation";
import { allProjects } from "@/.contentlayer/generated";

import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";

interface PostProps {
    params: {
        slug: string[];
    };
}

async function getPostFromParams(params: PostProps["params"]) {
    const slug = params?.slug?.join("/");
    const post = allProjects.find((post) => post.slugAsParams === slug);

    if (!post) {
        null;
    }

    return post;
}

export async function generateMetadata({
    params,
}: PostProps): Promise<Metadata> {
    const post = await getPostFromParams(params);

    if (!post) {
        return {};
    }

    return {
        title: post.title,
        description: post.description,
    };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
    return allProjects.map((post) => ({
        slug: post.slugAsParams.split("/"),
    }));
}

export default async function PostPage({ params }: PostProps) {
    const post = await getPostFromParams(params);

    if (!post) {
        notFound();
    }

    function formatDate(date: string) {
        return new Date(date).toLocaleDateString("kr-KR", {
            year: "numeric",
            month: "short",
        });
    }

    return (
        <article className="py-6 px-5 prose dark:prose-invert px-4">
            <h1 className="mb-2">{post.title}</h1>
            <div className="flex py-4 md:flex-row flex-col md:gap-6 gap-2 justify-between md:items-center"> 

            {post.description && (
                <p className="m-0 text-xl text-slate-700 dark:text-slate-200">
                    {post.description}
                </p>
            )}
            <h4 className="m-0 opacity-50 shrink-0">
                {formatDate(post.from)} ~ {formatDate(post.to)}
            </h4>

            </div>
            <div className="flex gap-2 mb-2">
                {post.tags && post.tags.map((el, i) => (
                    <kbd key={i} className="bg-main_color text-white px-2">#{el}</kbd>
                ))}
            </div>
            <hr className="my-4" />
            <Mdx code={post.body.code} />
        </article>
    );
}
