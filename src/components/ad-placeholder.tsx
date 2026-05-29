
"use client";

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AdPlaceholderProps {
  className?: string;
  variant?: 'banner' | 'leaderboard' | 'small' | 'inline' | 'skyscraper';
  label?: string;
  slotId?: string;
}

export function AdPlaceholder({ className, label = "Advertisement", variant, slotId }: AdPlaceholderProps) {
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

  return (
    <div 
      id={finalSlotId}
      className={cn(
        "ad-placeholder flex items-center justify-center border border-dashed border-border bg-muted/50 text-muted-foreground text-sm text-center rounded-md my-4", 
        className
      )}
    >
      <ins 
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6318347746004237"
        data-ad-slot="YOUR_AD_SLOT_HERE"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <span className="absolute pointer-events-none opacity-20 font-mono text-[10px] uppercase">
        {label} [{finalSlotId || 'Fluid'}]
      </span>
    </div>
  );
}
