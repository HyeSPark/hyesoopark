import Image from "next/image";
import Link from "next/link";
import { GoogleScholar, Github, Behance } from "@/components/icons";

export default async function AboutPage() {
  return (
    <article className="py-6 prose dark:prose-invert">
      <Image
        className="rounded-full"
        width={150}
        height={150}
        src="/profilepic.jpg"
        alt="Profile picture of Hye Soo Park. Smiling"
      />
      <div className="flex flex-wrap gap-3 text-lg">
        <a
          target="_blank"
          className="flex rounded-full px-4 py-2 border gap-2 items-center"
          href="https://github.com/HyeSPark"
        >
          <Github /> <span>HyeSPark</span>
        </a>
        <a
          target="_blank"
          className="flex rounded-full px-4 py-2 border gap-2 items-center"
          href="https://scholar.google.com/citations?user=RI56iIAAAAAJ&hl=ko"
        >
          <GoogleScholar /> <span>Publications</span>
        </a>

        <a
          target="_blank"
          className="flex rounded-full px-4 py-2 border gap-2 items-center"
          href="https://www.behance.net/hayespark"
        >
          <Behance />
          <span>Design Projects</span>
        </a>
      </div>
      <h2>Education</h2>
      <ul>
        <li>
          Aug. 2025 - : Ph.D. in{" "}
          <Link href="https://www.ic.gatech.edu/" target="_blank">
            School of Interactive Computing, Georgia Tech
          </Link>{" "}
          - Advised by{" "}
          <Link
            href="https://scholar.google.com/citations?user=puNJcv0AAAAJ&hl=en"
            target="_blank"
          >
            Jennifer G. Kim
          </Link>
        </li>
        <li>
          Feb. 2023 - Feb. 2025: M.S. in{" "}
          <Link href="https://cs.kaist.ac.kr/" target="_blank">
            School of Computing, KAIST
          </Link>{" "}
          - Advised by{" "}
          <Link
            href="https://scholar.google.co.kr/citations?user=Sc2pBzYAAAAJ&hl=en"
            target="_blank"
          >
            Uichin Lee
          </Link>
        </li>
        <li>
          Mar. 2018 - Aug. 2022: B.E. in Industrial & Systems Engineering, KAIST
          <ul>
            <li>
              Double major in Industrial Design, Graduated{" "}
              <em>Magna Cum Laude</em>
            </li>
          </ul>
        </li>
      </ul>

      <h2>Development Skills</h2>

      <h4>Front-End</h4>
      <ul>
        <li>HTML, JS(ES6), CSS</li>
        <li>
          React.js, Next.js — Developing web app using components and hooks
        </li>
        <li>p5.js — Creating graphics and interactive web</li>
      </ul>

      <h4>Data Analysis</h4>
      <ul>
        <li>Python, Numpy, Scikit-learn</li>
        <li>PyTorch - Machine Learning</li>
      </ul>

      <h4>Collaboration & Tools</h4>
      <ul>
        <li>Git, Github — Version management, co-work</li>
        <li>Slack</li>
      </ul>

      <h2>Design Skills</h2>

      <h4>UI Prototyping</h4>
      <ul>
        <li>Figma, Protopie</li>
      </ul>

      <h4>Graphic design & Moving image design</h4>
      <ul>
        <li>
          Using Adobe Creative Suite - Photoshop, Illustrator, After Effect,
          etc.
        </li>
      </ul>

      <h4>User interviews and research</h4>
      <ul>
        <li>Qualitative & quantitative analysis</li>
      </ul>

      <h4>CAD & Rendering</h4>
      <ul>
        <li>Blender, Fusion 360</li>
      </ul>
    </article>
  );
}
