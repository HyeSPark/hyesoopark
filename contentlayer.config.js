import { defineDocumentType, makeSource } from "contentlayer/source-files";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
    slug: {
        type: "string",
        resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
        type: "string",
        resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
};

export const Page = defineDocumentType(() => ({
    name: "Page",
    filePathPattern: `pages/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required: true,
        },
        description: {
            type: "string",
        },
    },
    computedFields,
}));

export const Post = defineDocumentType(() => ({
    name: "Post",
    filePathPattern: `posts/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required: true,
        },
        link: {
            type: "string",
        },
        date: {
            type: "date",
            required: true,
        },
    },
    computedFields,
}));

export const Project = defineDocumentType(() => ({
    name: "Projects",
    filePathPattern: `projects/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required: true,
        },
        description: {
            type: "string",
        },
        tags: {
            type: "list", of: { type: "string" },
        },
        from: {
            type: "date",
            required: true,
        },
        to: {
            type: "date",
            required: true,
        },
        thumb: {
            type: "string",
            required: true,
        }
    },
    computedFields,
}));

export const Publication = defineDocumentType(() => ({
    name: "Publication",
    filePathPattern: `pubs/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required: true,
        },
        authors: {
            type: "list", of: { type: "string" },
            required: true,
        },
        date: {
            type: "string",
            required: true,
        },
        venue: {
            type: "string",
            required: true,
        },
        img: {
            type: "string",
            required: true,
        },
        isFullPaper: {
            type: "boolean",
            required: true,
        },
        venueLink: {
            type: "string"
        },
        pdfLink: {
            type: "string"
        },
        doiLink: {
            type: "string"
        },
        vidLink: {
            type: "string"
        }
    },
    computedFields,
}));


export default makeSource({
    contentDirPath: "./content",
    documentTypes: [Post, Page, Project, Publication],
});
