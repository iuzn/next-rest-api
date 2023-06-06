import Link from "next/link";

export default function Home() {
  return (<div>
    <h1>Next.js API Routes for Restful API</h1>
    <p>This template is a starting point for building a RESTful API with Next.js API Routes.</p>
    <p>To start, edit <code>src/app/api/route.ts</code>.</p>
    <div>

    To test the API, click on the links below: <br />
      <Link href="/api">
        <strong>
          Test API
        </strong>
      </Link>
    </div>
  </div>)
}
