import { Brain } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Brain className="h-7 w-7 text-primary" />
      <span className="text-xl font-bold text-primary font-headline tracking-tight">
        NeuroMatrix
      </span>
    </div>
  );
}
