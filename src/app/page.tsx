import { Intro } from "@/app/_components/intro";
import { LatestBlogs } from "@/app/_components/latest-blogs";
import { AboutSection } from "@/app/_components/about-section";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();
  const latestPosts = allPosts.slice(0, 3);

  return (
    <main>
      <Intro />
      {<LatestBlogs posts={latestPosts} />}
      <AboutSection />
    </main>
  );
}
