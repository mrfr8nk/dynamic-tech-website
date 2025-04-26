import React, { memo } from 'react';
import dynamic from 'next/dynamic';

// Memoize the IconCloud component to prevent unnecessary re-renders
const IconCloud = dynamic(
  () => import("@/components/ui/icon-cloud").then((mod) => memo(mod.default)),
  {
    ssr: false,
    loading: () => (
      <div className='w-full h-full flex items-center justify-center'>
        <div className='w-10 h-10 rounded-full border-2 border-violet-500/20 border-t-violet-500 animate-spin' />
      </div>
    ),
  }
);

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "python",
  "php",
  "supabase",
  "firebase",
  "java",
  "kotlin",
  "swift",
  "objectivec",
  "csharp",
  "golang",
  "rust",
  "ruby",
  "scala",
  "elixir",
  "html",
  "css",
  "mongo",
  "mongodb",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "tailwindcss",
  "bootstrap",
  "materialui",
  "mui",
  "antdesign",
  "chakraui",
  "redux",
  "zustand",
  "mobx",
  "graphql",
  "apollo",
  "restapi",
  "aws",
  "azure",
  "gcp",
  "digitalocean",
  "heroku",
  "netlify",
  "vercel",
  "cloudflare",
  "docker",
  "amazonaws",
  "postgresql",
  "nginx",
  "vercel",
  "testinglibrary",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
  "wordpress",
  "wix",
  "webflow",
  "odoo",
  "zoho",
];

// Memoize the IconsCloud component
export const IconsCloud = memo(function IconsCloud() {
  return (
    <section className='relative w-full h-full flex justify-center items-center'>
      <div className='relative flex h-full w-full items-center justify-center overflow-visible md:overflow-hidden rounded-lg'>
        <IconCloud iconSlugs={slugs} />
      </div>
    </section>
  );
});