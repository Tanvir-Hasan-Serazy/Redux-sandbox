import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl xl:text-4xl pt-10 ">
        Welcome to my Mini-Projects. All the projects are made using redux to
        sharpent my redux skills.
      </h1>
      <div className="px-4 pt-10">
        <ul>
          <li className="list-disc">
            <Link
              href="/counter"
              className="font-bold text-lg xl:text-3xl underline"
            >
              Counter App
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
