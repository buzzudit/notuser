import type { BlogPost } from "@/data/blog";
import { BlogCard } from "@/components/site/BlogCard";

type BlogGridProps = {
  posts: BlogPost[];
};

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
