import { getPostData, getSortedPostsData } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function BlogPostPage({ params }: any) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  return (
    <article className="max-w-2xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{postData.date}</p>
      {postData.thumbnail && <img src={postData.thumbnail} alt={postData.title} className="w-24 h-24 object-cover rounded-md bg-slate-400"/>}
      <div
        className="[&>ol>li]:text-red-500 [&>h1]:text-2xl [&>h1]:font-bold pt-4"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </article>
  );
}