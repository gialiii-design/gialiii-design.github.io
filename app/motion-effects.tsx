'use client';

import {useEffect} from 'react';

export function MotionEffects() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.body.classList.add('motion-ready');

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (reduced || !('IntersectionObserver' in window)) {
      revealItems.forEach(item => item.classList.add('is-visible'));
      return () => document.body.classList.remove('motion-ready');
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        (entry.target as HTMLElement).classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, {threshold: 0.12, rootMargin: '0px 0px -6%'});

    revealItems.forEach(item => observer.observe(item));

    const interactiveCards = Array.from(document.querySelectorAll<HTMLElement>('.project-card, .visual-work-card'));
    const cleanups = interactiveCards.map(card => {
      const onMove = (event: PointerEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        card.style.setProperty('--pointer-x', `${x * 100}%`);
        card.style.setProperty('--pointer-y', `${y * 100}%`);
        card.style.setProperty('--rotate-x', `${(0.5 - y) * 1.6}deg`);
        card.style.setProperty('--rotate-y', `${(x - 0.5) * 1.8}deg`);
      };
      const onLeave = () => {
        card.style.setProperty('--rotate-x', '0deg');
        card.style.setProperty('--rotate-y', '0deg');
      };
      card.addEventListener('pointermove', onMove);
      card.addEventListener('pointerleave', onLeave);
      return () => {
        card.removeEventListener('pointermove', onMove);
        card.removeEventListener('pointerleave', onLeave);
      };
    });

    const magneticItems = Array.from(document.querySelectorAll<HTMLElement>('.magnetic'));
    const magneticCleanups = magneticItems.map(item => {
      const onMove = (event: PointerEvent) => {
        const rect = item.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        item.style.setProperty('--magnetic-x', `${x * 0.12}px`);
        item.style.setProperty('--magnetic-y', `${y * 0.18}px`);
      };
      const onLeave = () => {
        item.style.setProperty('--magnetic-x', '0px');
        item.style.setProperty('--magnetic-y', '0px');
      };
      item.addEventListener('pointermove', onMove);
      item.addEventListener('pointerleave', onLeave);
      return () => {
        item.removeEventListener('pointermove', onMove);
        item.removeEventListener('pointerleave', onLeave);
      };
    });

    return () => {
      observer.disconnect();
      cleanups.forEach(cleanup => cleanup());
      magneticCleanups.forEach(cleanup => cleanup());
      document.body.classList.remove('motion-ready');
    };
  }, []);

  return null;
}
