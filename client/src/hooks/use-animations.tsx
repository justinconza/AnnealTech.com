import { useEffect, useState } from 'react';

// Animation states for components
export type AnimationState = 
  | 'initial'   // Default state
  | 'entering'  // Element is appearing
  | 'entered'   // Element is fully visible
  | 'exiting'   // Element is disappearing
  | 'exited';   // Element is fully hidden

// Options for the animation hook
interface UseAnimationOptions {
  initialState?: AnimationState;
  duration?: number;
  delay?: number;
  onComplete?: () => void;
}

/**
 * Hook for managing component animations
 */
export function useAnimation(options: UseAnimationOptions = {}) {
  const {
    initialState = 'initial',
    duration = 300,
    delay = 0,
    onComplete
  } = options;

  const [state, setState] = useState<AnimationState>(initialState);
  const [isVisible, setIsVisible] = useState(initialState !== 'exited');

  // Start the entrance animation
  const enter = () => {
    if (state !== 'entering' && state !== 'entered') {
      setIsVisible(true);
      setState('entering');
      
      setTimeout(() => {
        setState('entered');
        onComplete?.();
      }, duration + delay);
    }
  };

  // Start the exit animation
  const exit = () => {
    if (state !== 'exiting' && state !== 'exited') {
      setState('exiting');
      
      setTimeout(() => {
        setState('exited');
        setIsVisible(false);
        onComplete?.();
      }, duration + delay);
    }
  };

  // Toggle between entering and exiting
  const toggle = () => {
    if (state === 'entered' || state === 'entering') {
      exit();
    } else {
      enter();
    }
  };

  return {
    state,
    isVisible,
    enter,
    exit,
    toggle,
    style: {
      transition: `all ${duration}ms ease-in-out ${delay}ms`
    }
  };
}

/**
 * Hook for triggering animations when an element appears in viewport
 */
export function useInViewAnimation(options: UseAnimationOptions & { 
  threshold?: number;
  rootMargin?: string;
} = {}) {
  const { threshold = 0.1, rootMargin = '0px', ...animationOptions } = options;
  const animation = useAnimation(animationOptions);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref || typeof IntersectionObserver !== 'function') return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animation.enter();
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref);
    
    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, rootMargin, animation]);

  return {
    ...animation,
    ref: setRef,
  };
}

/**
 * Helper to get animation classes based on state
 */
export function getAnimationClasses(
  state: AnimationState,
  baseClass: string,
  {
    entering = `${baseClass}--entering`,
    entered = `${baseClass}--entered`,
    exiting = `${baseClass}--exiting`,
    exited = `${baseClass}--exited`,
  }: {
    entering?: string;
    entered?: string;
    exiting?: string;
    exited?: string;
  } = {}
) {
  switch (state) {
    case 'entering':
      return entering;
    case 'entered':
      return entered;
    case 'exiting':
      return exiting;
    case 'exited':
      return exited;
    default:
      return '';
  }
}