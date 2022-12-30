import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Data() {
  const [query, setQuery] = useState<any>();
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    setQuery(router.query);
  }, [router.isReady, router.query]);

  return <div>{query ? query["category"] : ""}</div>;
  // return <div>teste</div>;
}
