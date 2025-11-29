import { lazy, Suspense } from 'react';

// React / Library imports
import { ProgressBar, Header, Footer, StickyCta } from '@/components/layout';
import { LegalDocuments } from '@/components/legal';

// Sections (Lazy loaded)
const Hero = lazy(() => import('@/components/sections').then(m => ({ default: m.Hero })));
const Problem = lazy(() => import('@/components/sections').then(m => ({ default: m.Problem })));
const RoiSection = lazy(() => import('@/components/sections').then(m => ({ default: m.RoiSection })));
const Weapons = lazy(() => import('@/components/sections').then(m => ({ default: m.Weapons })));
const ValueStack = lazy(() => import('@/components/sections').then(m => ({ default: m.ValueStack })));
const Testimonials = lazy(() => import('@/components/sections').then(m => ({ default: m.Testimonials })));
const Profile = lazy(() => import('@/components/sections').then(m => ({ default: m.Profile })));
const Pricing = lazy(() => import('@/components/sections').then(m => ({ default: m.Pricing })));
const FAQ = lazy(() => import('@/components/sections').then(m => ({ default: m.FAQ })));
const Closing = lazy(() => import('@/components/sections').then(m => ({ default: m.Closing })));

function App() {
  return (
    <div className="min-h-screen bg-white text-text-primary font-sans selection:bg-baum-500 selection:text-white">
      <ProgressBar />
      <Header />
      
      <main>
        <Suspense fallback={<div className="h-screen" />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
          <Problem />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
          <RoiSection />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
          <Weapons />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
          <ValueStack />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
          <Profile />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
          <Pricing />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
          <Closing />
        </Suspense>
      </main>

      <LegalDocuments />
      <Footer />
      <StickyCta />
    </div>
  );
}

export default App;

