import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

export default function Home() {
  const allPosts = getSortedPostsData();
  return (
    <section className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">블로그</h1>
      <ul>
        {allPosts.map(({ id, date, title, thumbnail }) => (
          <li key={id} className="mb-4">
            <Link
              href={`/blog/${id}`}
            >
              <div className="flex flex-row gap-4 bg-gray-300 rounded-md">
              {thumbnail && <img src={thumbnail} alt={title} className="w-24 h-24 object-cover rounded-md bg-slate-400"/>}
                <div className="flex flex-col">
                  <p
                    className="text-2xl font-medium text-blue-500 hover:underline"
                  >
                    {title}
                  </p>
                  <br />
                  <small className="text-gray-500">{date}</small>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}