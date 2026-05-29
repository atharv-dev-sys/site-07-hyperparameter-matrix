
"use client";

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AdSlotProps {
  className?: string;
  variant?: 'banner' | 'leaderboard' | 'small' | 'inline' | 'skyscraper';
  label?: string;
  slotId?: string;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export function AdSlot({ className, label = "Advertisement", variant, slotId }: AdSlotProps) {
  const adCalled = useRef(false);

  useEffect(() => {
    // Prevent double execution and server-side firing
    if (typeof window !== 'undefined' && !adCalled.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        adCalled.current = true;
      } catch (err) {
        console.error("AdSense push error:", err);
      }
    }
  }, []);

  // Map variant to structural ID for CLS prevention
  const defaultSlotId = variant === 'leaderboard' || variant === 'banner' 
    ? 'slot-lead-billboard' 
    : variant === 'skyscraper' 
    ? 'slot-sidebar-skyscraper'
    : variant === 'small'
    ? 'slot-nav-inline'
    : undefined;

  const finalSlotId = slotId || defaultSlotId;

  // Map variant to height for CLS prevention
  const variantStyles = {
    banner: "min-h-[100px] w-full",
    leaderboard: "min-h-[90px] md:min-h-[250px] w-full",
    small: "min-h-[60px] w-full",
    inline: "min-h-[250px] w-full",
    skyscraper: "min-h-[600px] w-[160px] md:w-[300px]",
  };

  return (
    <div 
      id={finalSlotId}
      className={cn(
        "ad-slot-container relative flex items-center justify-center border border-dashed border-border bg-muted/30 text-muted-foreground text-sm text-center rounded-md my-6 overflow-hidden transition-all", 
        variant && variantStyles[variant],
        className
      )}
    >
      <ins 
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', height: '100%' }}
        data-ad-client="ca-pub-5015165884772367"
        data-ad-slot="YOUR_AD_SLOT_HERE"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <span className="absolute top-1 right-1 pointer-events-none opacity-40 font-mono text-[9px] uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}
