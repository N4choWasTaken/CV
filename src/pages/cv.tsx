import Hero from "../components/Hero";
import MainLayout from "../layouts/MainLayout";
import PageLayout from "../layouts/PageLayout";

export default function Cv() {
  return (
    <div className="h-screen overflow-scroll snap-mandatory snap-y">
        <MainLayout className="snap-center">
            <Hero />
        </MainLayout>
        <PageLayout className="snap-center">
            <h1 className="text-5xl font-extrabold text-center">CV</h1>
        </PageLayout>
    </div>
  )
}
