"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Activity, RefreshCcw } from "lucide-react";

export function HyperparameterMatrix() {
  const [learningRate, setLearningRate] = useState(0.01);
  const [dropout, setDropout] = useState(0.5);
  const [optimizer, setOptimizer] = useState("adam");
  const [activation, setActivation] = useState("relu");
  const [iterations, setIterations] = useState(0);

  // Generate theoretical gradient descent paths
  const pathData = useMemo(() => {
    const points: { x: number; y: number }[] = [];
    let x = 10;
    let y = 10;
    
    // Theoretical loss function simulation
    // Path depends on hyperparameters
    const lrFactor = learningRate * 500;
    const noise = optimizer === "sgd" ? 5 : 1;
    const momentum = optimizer === "adam" ? 0.9 : 0.5;
    
    let vx = 0;
    let vy = 0;

    for (let i = 0; i < 50; i++) {
      points.push({ x, y });
      
      // Simulating a "bowl" loss function centered at (350, 250)
      const dx = (350 - x) * 0.1;
      const dy = (250 - y) * 0.1;
      
      vx = vx * momentum + dx * learningRate * 10;
      vy = vy * momentum + dy * learningRate * 10;
      
      x += vx + (Math.random() - 0.5) * noise;
      y += vy + (Math.random() - 0.5) * noise;
    }
    
    return points.map(p => `${p.x},${p.y}`).join(" ");
  }, [learningRate, optimizer, iterations]);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <Card className="shadow-lg border-primary/20">
        <CardHeader className="bg-primary/5">
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            Hyperparameter Matrix
          </CardTitle>
          <CardDescription>
            Configure architecture tuning parameters to simulate loss convergence.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label>Learning Rate</Label>
              <span className="text-sm font-mono font-bold text-primary">{learningRate.toFixed(4)}</span>
            </div>
            <Slider 
              value={[learningRate]} 
              min={0.0001} 
              max={0.1} 
              step={0.0001} 
              onValueChange={([v]: number[]) => setLearningRate(v)} 
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label>Dropout Ratio</Label>
              <span className="text-sm font-mono font-bold text-primary">{(dropout * 100).toFixed(0)}%</span>
            </div>
            <Slider 
              value={[dropout]} 
              min={0} 
              max={0.9} 
              step={0.05} 
              onValueChange={([v]: number[]) => setDropout(v)} 
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Optimizer</Label>
              <Select value={optimizer} onValueChange={setOptimizer}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Optimizer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="adam">Adam</SelectItem>
                  <SelectItem value="sgd">SGD</SelectItem>
                  <SelectItem value="rmsprop">RMSprop</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Activation</Label>
              <Select value={activation} onValueChange={setActivation}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Activation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relu">ReLU</SelectItem>
                  <SelectItem value="sigmoid">Sigmoid</SelectItem>
                  <SelectItem value="tanh">Tanh</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button 
            variant="outline" 
            className="w-full gap-2 mt-4" 
            onClick={() => setIterations(i => i + 1)}
          >
            <RefreshCcw className="h-4 w-4" />
            Reset Simulation
          </Button>
        </CardContent>
      </Card>

      <Card className="shadow-lg border-primary/20 overflow-hidden">
        <CardHeader className="bg-primary/5">
          <CardTitle>Convergence Visualizer</CardTitle>
          <CardDescription>Theoretical gradient descent path on a loss surface.</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center p-0 h-[400px] bg-slate-950 relative">
          {/* Mock contour lines */}
          <svg width="400" height="400" className="absolute opacity-20 pointer-events-none">
            <circle cx="350" cy="250" r="50" fill="none" stroke="white" strokeWidth="1" />
            <circle cx="350" cy="250" r="100" fill="none" stroke="white" strokeWidth="1" />
            <circle cx="350" cy="250" r="150" fill="none" stroke="white" strokeWidth="1" />
            <circle cx="350" cy="250" r="200" fill="none" stroke="white" strokeWidth="1" />
            <circle cx="350" cy="250" r="250" fill="none" stroke="white" strokeWidth="1" />
          </svg>
          
          <svg 
            width="400" 
            height="400" 
            viewBox="0 0 400 400" 
            className="relative z-10"
          >
            <polyline
              points={pathData}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-500 ease-in-out"
            />
            {/* Target marker */}
            <circle cx="350" cy="250" r="6" fill="#ef4444" />
          </svg>
          
          <div className="absolute bottom-4 right-4 text-[10px] font-mono text-slate-500 uppercase">
            Theoretical Projection Mode
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
