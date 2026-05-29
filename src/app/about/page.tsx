import { Brain, Zap, Target, Layers, Cpu, LineChart } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 font-sans">
      <section className="text-center mb-16 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 text-foreground shadow-md rounded-2xl p-10 border border-primary/10">
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight">🌟 Our Mission</h1>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed text-muted-foreground font-medium">
          At NeuroMatrix, we are dedicated to providing precision computational tools for neural network optimization. 
          Our platform simplifies complex architectural tuning challenges through theoretical modeling and advanced convergence analysis.
        </p>
      </section>

      <section className="mb-16 bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 shadow-xl rounded-2xl p-10 border border-slate-700">
        <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
          <Cpu className="h-8 w-8 text-primary" />
          Technical Excellence
        </h2>
        <p className="text-lg leading-relaxed mb-4 text-slate-300">
          Our solutions are built on rigorous mathematical foundations and deep learning standards. 
          From learning rate decay schedules to activation function dynamics, we deliver data-driven insights for 
          machine learning operations expanding in Pune and Kharadi&apos;s tech hubs.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-card shadow-lg rounded-2xl p-8 border border-border transition-all hover:border-primary/50 group">
          <Layers className="h-10 w-10 text-primary mb-4 transition-transform group-hover:scale-110" />
          <h3 className="text-2xl font-bold text-foreground mb-3">Optimization Layers</h3>
          <p className="text-muted-foreground leading-relaxed">
            Advanced analysis of optimizer behavior, comparing Adam, SGD, and RMSprop under various constraints.
          </p>
        </div>

        <div className="bg-card shadow-lg rounded-2xl p-8 border border-border transition-all hover:border-primary/50 group">
          <Brain className="h-10 w-10 text-primary mb-4 transition-transform group-hover:scale-110" />
          <h3 className="text-2xl font-bold text-foreground mb-3">Architectural Tuning</h3>
          <p className="text-muted-foreground leading-relaxed">
            Deep dive into dropout strategies and weight initialization patterns to prevent gradient explosion.
          </p>
        </div>

        <div className="bg-card shadow-lg rounded-2xl p-8 border border-border transition-all hover:border-primary/50 group">
          <LineChart className="h-10 w-10 text-primary mb-4 transition-transform group-hover:scale-110" />
          <h3 className="text-2xl font-bold text-foreground mb-3">Convergence Mapping</h3>
          <p className="text-muted-foreground leading-relaxed">
            Theoretical loss surface visualization to identify optimal convergence paths for enterprise models.
          </p>
        </div>

        <div className="bg-card shadow-lg rounded-2xl p-8 border border-border transition-all hover:border-primary/50 group">
          <Zap className="h-10 w-10 text-primary mb-4 transition-transform group-hover:scale-110" />
          <h3 className="text-2xl font-bold text-foreground mb-3">Inference Efficiency</h3>
          <p className="text-muted-foreground leading-relaxed">
            Optimizing hyperparameters to balance precision and computational throughput for production environments.
          </p>
        </div>
      </section>

      <section className="text-center mt-16 bg-muted/30 border border-border shadow-md rounded-2xl p-10">
        <h2 className="text-4xl font-bold mb-6">Why Choose NeuroMatrix?</h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-4 text-muted-foreground">
          We bridge the gap between deep learning theory and practical implementation. 
          Our tools are engineered for accuracy, speed, and providing high-value technical insights 
          for data science engineering workflows in modern tech corridors.
        </p>
      </section>
    </main>
  );
}
