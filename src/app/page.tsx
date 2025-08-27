import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { PassionsSection } from "@/app/_components/passions-section";
import { TestimonialsSection } from "@/app/_components/testimonials-section";
import { AboutSection } from "@/app/_components/about-section";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Intro />
      <PassionsSection />
      <HeroPost
        title={heroPost.title}
        coverImage={heroPost.coverImage}
        date={heroPost.date}
        author={heroPost.author}
        slug={heroPost.slug}
        excerpt={heroPost.excerpt}
      />
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      <AboutSection />
      <TestimonialsSection />
    </main>
  );
}
