import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ResourcePage from "@/components/ResourcePage";
import pages from "@/data/weebly.json";
const custom = new Set([
  "/",
  "/who-we-are",
  "/beliefs",
  "/services",
  "/directions",
  "/contact",
  "/salvation",
  "/missions",
  "/visit",
  "/sermons",
  "/donate",
]);
export const dynamicParams = false;
export function generateStaticParams() {
  return pages
    .filter((p) => !custom.has(p.path))
    .map((p) => ({ slug: p.path.slice(1).split("/") }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = pages.find((p) => p.path === "/" + slug.join("/"));
  return page
    ? { title: page.title, alternates: { canonical: page.path } }
    : {};
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const page = pages.find((p) => p.path === "/" + slug.join("/"));
  if (!page) notFound();
  return <ResourcePage page={page} />;
}
