import { Suspense, lazy } from "react";
import type { ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { LoadingState } from "./components/States";

const Home = lazy(() => import("./pages/Home").then((m) => ({ default: m.Home })));
const About = lazy(() => import("./pages/About").then((m) => ({ default: m.About })));
const Impact = lazy(() => import("./pages/Impact").then((m) => ({ default: m.Impact })));
const Work = lazy(() => import("./pages/Work").then((m) => ({ default: m.Work })));
const UniformsWork = lazy(() => import("./pages/work/Uniforms").then((m) => ({ default: m.UniformsWork })));
const CommunityWork = lazy(() => import("./pages/work/Community").then((m) => ({ default: m.CommunityWork })));
const YouthWork = lazy(() => import("./pages/work/Youth").then((m) => ({ default: m.YouthWork })));
const Stories = lazy(() => import("./pages/Stories").then((m) => ({ default: m.Stories })));
const StoryDetail = lazy(() => import("./pages/StoryDetail").then((m) => ({ default: m.StoryDetail })));
const GalleryPage = lazy(() => import("./pages/Gallery").then((m) => ({ default: m.GalleryPage })));
const Campaigns = lazy(() => import("./pages/Campaigns").then((m) => ({ default: m.Campaigns })));
const CampaignDetail = lazy(() => import("./pages/CampaignDetail").then((m) => ({ default: m.CampaignDetail })));
const GetInvolved = lazy(() => import("./pages/GetInvolved").then((m) => ({ default: m.GetInvolved })));
const Volunteer = lazy(() => import("./pages/Volunteer").then((m) => ({ default: m.Volunteer })));
const Partners = lazy(() => import("./pages/Partners").then((m) => ({ default: m.Partners })));
const Team = lazy(() => import("./pages/Team").then((m) => ({ default: m.Team })));
const Contact = lazy(() => import("./pages/Contact").then((m) => ({ default: m.Contact })));
const Transparency = lazy(() => import("./pages/Transparency").then((m) => ({ default: m.Transparency })));
const TimelinePage = lazy(() => import("./pages/Timeline").then((m) => ({ default: m.TimelinePage })));
const NotFound = lazy(() => import("./pages/NotFound").then((m) => ({ default: m.NotFound })));

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-sm focus:bg-blue focus:px-4 focus:py-2 focus:text-cream-soft"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        <Suspense fallback={<LoadingState label="Loading page" />}>{children}</Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/impact" element={<Layout><Impact /></Layout>} />
        <Route path="/work" element={<Layout><Work /></Layout>} />
        <Route path="/work/uniforms" element={<Layout><UniformsWork /></Layout>} />
        <Route path="/work/community" element={<Layout><CommunityWork /></Layout>} />
        <Route path="/work/youth" element={<Layout><YouthWork /></Layout>} />
        <Route path="/stories" element={<Layout><Stories /></Layout>} />
        <Route path="/stories/:slug" element={<Layout><StoryDetail /></Layout>} />
        <Route path="/gallery" element={<Layout><GalleryPage /></Layout>} />
        <Route path="/campaigns" element={<Layout><Campaigns /></Layout>} />
        <Route path="/campaigns/:slug" element={<Layout><CampaignDetail /></Layout>} />
        <Route path="/get-involved" element={<Layout><GetInvolved /></Layout>} />
        <Route path="/volunteer" element={<Layout><Volunteer /></Layout>} />
        <Route path="/partners" element={<Layout><Partners /></Layout>} />
        <Route path="/team" element={<Layout><Team /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/transparency" element={<Layout><Transparency /></Layout>} />
        <Route path="/timeline" element={<Layout><TimelinePage /></Layout>} />
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </>
  );
}
