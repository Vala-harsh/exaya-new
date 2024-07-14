import React from "react";

import Component from "@/utils/component";
import { fetchContent } from "@/component/common/useContent";

async function getData(slug: any) {
  const res = await fetchContent(`/project_list/${slug}.json`);
  
  const data = JSON.parse(res);
  return data;
}

export async function generateStaticParams() {
  const arr: any[] = [
    "tranquil_tropics",
  ];
  return await arr.map((slug) => ({
    slug: slug,
  }));
}

// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const { slug } = params;

//   // fetch data
// //   const res = await fetchContent(`/seo/solution/${slug}.json`);
  
  
//   const data = JSON.parse(res);

//   return {
//     title: data.seo.title,
//     description: data.seo.desc,
//     alternates: {
//       canonical: `${WEBSITE_URL}/solution/${slug}`,
//     },
//     openGraph: {
//       title: data.seo.title,
//       description: data.seo.desc,
//       url: `${WEBSITE_URL}/solution/${slug}`,
//       type: "website",
//     },
//     twitter: {
//       title: data.seo.title,
//       description: data.seo.desc,
//     },
//   };
// }

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const data: any = await getData(slug);

  return (
    <div>
      <div>
        {data?.body?.map((block: any) => {
          return Component(block);
        })}
      </div>
    </div>
  );
}
