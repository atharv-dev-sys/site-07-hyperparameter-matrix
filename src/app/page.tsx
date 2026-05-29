import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Zap, Target, ArrowRight, Layers } from "lucide-react";
import Link from "next/link";
import { AdPlaceholder } from "@/components/ad-placeholder";
import { HyperparameterMatrix } from "@/components/hyperparameter-matrix";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              NeuroMatrix - Architecture Tuning
            </h1>
            <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl lg:text-2xl font-medium">
              Precision hyperparameter optimization and loss convergence visualization for enterprise neural architectures.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="#matrix-visualizer">Launch Matrix <Zap className="ml-2 h-4 w-4 fill-current" /></Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
                <Link href="/articles">Technical Docs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-6xl mx-auto px-4 -mt-10 mb-16 relative z-10" id="matrix-visualizer">
        <HyperparameterMatrix />
      </div>

      <AdPlaceholder variant="leaderboard" label="Billboard Ad" className="w-full max-w-5xl mx-auto mb-16" />

      <section className="w-full py-20 bg-muted/50 border-y border-border/40">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Architectural Integrity</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our theoretical modeling provides deep insights into the dynamics of gradient descent and weight initialization.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="bg-background/60 backdrop-blur border-primary/10 transition-all hover:border-primary/30">
              <CardHeader>
                <Layers className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Optimization Layers</CardTitle>
                <CardDescription>
                  Comparative analysis of Adam, SGD, and RMSprop across varying learning rate decay schedules.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-background/60 backdrop-blur border-primary/10 transition-all hover:border-primary/30">
              <CardHeader>
                <Brain className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Activation Dynamics</CardTitle>
                <CardDescription>
                  Visualizing the impact of ReLU vs. Sigmoid on gradient flow and vanishing gradient mitigation.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-background/60 backdrop-blur border-primary/10 transition-all hover:border-primary/30">
              <CardHeader>
                <Target className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Convergence Paths</CardTitle>
                <CardDescription>
                  Real-time SVG rendering of theoretical loss surfaces to identify optimal tuning vectors.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <AdPlaceholder variant="banner" label="Bottom Banner Ad" className="w-full max-w-5xl mx-auto mt-20 mb-12" />
    </div>
  );
}
