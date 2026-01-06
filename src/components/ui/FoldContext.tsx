import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';

// Context for the global controller
interface FoldGlobalContextType {
  globalExpandLevel: number;
  setGlobalExpandLevel: (level: number) => void;
  maxDepthDetected: number;
  registerDepth: (depth: number) => void;
}

const FoldGlobalContext = createContext<FoldGlobalContextType | undefined>(undefined);

export const useFoldGlobal = () => {
  const context = useContext(FoldGlobalContext);
  if (!context) {
    throw new Error('useFoldGlobal must be used within a FoldProvider');
  }
  return context;
};

// Context for nesting depth
const FoldDepthContext = createContext<number>(0);

export const useFoldDepth = () => useContext(FoldDepthContext);

export const FoldProvider = ({ children }: { children: React.ReactNode }) => {
  const [globalExpandLevel, setGlobalExpandLevel] = useState<number>(0);
  const [maxDepthDetected, setMaxDepthDetected] = useState<number>(0);

  const registerDepth = useCallback((depth: number) => {
    setMaxDepthDetected(prev => Math.max(prev, depth));
  }, []);

  const value = useMemo(() => ({
    globalExpandLevel,
    setGlobalExpandLevel,
    maxDepthDetected,
    registerDepth
  }), [globalExpandLevel, maxDepthDetected, registerDepth]);

  return (
    <FoldGlobalContext.Provider value={value}>
      <FoldDepthContext.Provider value={0}>
        {children}
      </FoldDepthContext.Provider>
    </FoldGlobalContext.Provider>
  );
};

// Component to increase depth for children
export const FoldDepthProvider = ({ children, depth }: { children: React.ReactNode; depth: number }) => {
  return (
    <FoldDepthContext.Provider value={depth}>
      {children}
    </FoldDepthContext.Provider>
  );
};
