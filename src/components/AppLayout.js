import { useRouter } from "next/router";

export default function AppLayout({ children }) {
  const router = useRouter();
  return (
    <div className="bg-slate-100 min-h-screen pt-24">
      <div className="max-w-3xl mx-auto px-4 bg-white border p-8">
        <div className="mb-8">
          Slug: <pre>{router.asPath}</pre>
        </div>
        {children}
      </div>
    </div>
  );
}
