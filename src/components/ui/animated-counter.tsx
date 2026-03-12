"use client";

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

export function AnimatedCounter({ value }: { value: string }) {
  // Extract number and suffix from string like "+500" or "4.9/5"
  const numMatch = value.match(/[\d.]+/);
  const numValue = numMatch ? parseFloat(numMatch[0]) : 0;
  
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const spring = useSpring(0, {
    stiffness: 50,
    damping: 20,
    bounce: 0,
    duration: 2000
  });

  const display = useTransform(spring, (current) => {
    // Determine if it was an integer or decimal
    const isDecimal = value.includes('.');
    const formatted = isDecimal ? current.toFixed(1) : Math.round(current).toString();
    return value.replace(/[\d.]+/, formatted);
  });

  useEffect(() => {
    spring.set(numValue);
  }, [numValue, spring]);

  return <motion.span>{display}</motion.span>;
}
