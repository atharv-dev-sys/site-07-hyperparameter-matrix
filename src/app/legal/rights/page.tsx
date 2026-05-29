import { ShieldAlert } from 'lucide-react';

export default function RightsPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <header className="text-center mb-12">
        <ShieldAlert className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">
          Content Rights & Usage
        </h1>
        <p className="mt-4 text-xl text-foreground/80 max-w-3xl mx-auto text-balance">
          Guidelines for sharing and citing NeuroMatrix architectural research
        </p>
      </header>

      <div className="max-w-3xl mx-auto space-y-8 bg-card p-6 sm:p-8 rounded-xl shadow-lg text-foreground/80">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">1. Original Research & Tools</h2>
          <p className="leading-relaxed text-balance">
            All visualization engines, architectural models, and technical articles on NeuroMatrix are original works designed to advance the understanding of neural network optimization. We encourage using these tools for personal research and educational exploration.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">2. Intellectual Property</h2>
          <p className="leading-relaxed text-balance">
            The NeuroMatrix name, logo, and unique visualization logic are the intellectual property of this platform. If you wish to integrate our tools into a commercial product or larger framework, please contact us for formal licensing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">3. Citation & Fair Use</h2>
          <p className="leading-relaxed text-balance">
            We encourage academic and community sharing. You are welcome to:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Use screenshots of simulations in research papers or presentations with proper attribution</li>
              <li>Share links to specific tool configurations with colleagues</li>
              <li>Cite our technical articles in your own work</li>
            </ul>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">4. Prohibited Actions</h2>
          <p className="leading-relaxed text-balance">
            To maintain the integrity of our theoretical models, we prohibit:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Automated scraping of our article database or visualization logic</li>
              <li>Repackaging our tools as paid services without authorization</li>
              <li>Using NeuroMatrix content in a way that implies official endorsement of a specific product</li>
            </ul>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">5. Educational Collaboration</h2>
          <p className="leading-relaxed text-balance">
            If you are an educator or researcher looking to use NeuroMatrix in a classroom or laboratory setting, we are happy to provide supporting documentation or customized configurations. Please reach out to discuss how we can support your work.
          </p>
        </section>

        <p className="text-center font-semibold text-foreground/90 pt-4 border-t border-border/40">
          These guidelines ensure that NeuroMatrix remains a high-quality, open resource for the neural network research community.
        </p>
      </div>
    </div>
  );
}
