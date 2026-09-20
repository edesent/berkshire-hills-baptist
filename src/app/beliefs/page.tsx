import type { Metadata } from "next";
import ResourcePage from "@/components/ResourcePage";
import pages from "@/data/weebly.json";
export const metadata: Metadata = {
  title: "Doctrine",
  alternates: { canonical: "/beliefs" },
};
export default function Page() {
  return <ResourcePage page={pages.find((p) => p.path === "/beliefs")!} />;
}
