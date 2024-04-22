import InfiniteScroll from "@/components/InfiniteScroll";
import React, { lazy, Suspense } from "react";

const Intro = lazy(() => import("./intro/page"));
const Home = lazy(() => import("./home/page"));
const AboutPage = lazy(() => import("./about/page"));
const Contacts = lazy(() => import("./contact/page"));
const ExperiencePage = lazy(() => import("./experience/page"));

const pageContents = [
  <Suspense key="intropage" fallback={<div>Loading...</div>}>
    <Intro />
  </Suspense>,
  <Suspense key="Homepage" fallback={<div>Loading...</div>}>
    <Home />
  </Suspense>,
  <Suspense key="Aboutpage" fallback={<div>Loading...</div>}>
    <AboutPage />
  </Suspense>,
  <Suspense key="Experiencepage" fallback={<div>Loading...</div>}>
    <ExperiencePage />
  </Suspense>,
  <Suspense key="Contactform" fallback={<div>Loading...</div>}>
    <Contacts />
  </Suspense>,
];

const Index = () => {
  return (
    <div>
      <InfiniteScroll pages={pageContents} />
    </div>
  );
};

export default Index;