import { createContext, useContext } from "react";

// Context for the global controller
interface FoldGlobalContextType {
  globalExpandLevel: number;
  setGlobalExpandLevel: (level: number) => void;
  maxDepthDetected: number;
  registerDepth: (depth: number) => void;
}

export const FoldGlobalContext = createContext<
  FoldGlobalContextType | undefined
>(undefined);

export const useFoldGlobal = () => {
  const context = useContext(FoldGlobalContext);
  if (!context) {
    throw new Error("useFoldGlobal must be used within a FoldProvider");
  }
  return context;
};

// Context for nesting depth
export const FoldDepthContext = createContext<number>(0);

export const useFoldDepth = () => useContext(FoldDepthContext);

// Context for visibility chain (Render Hidden pattern)
export const FoldVisibilityContext = createContext<boolean>(true);

export const useFoldVisibility = () => useContext(FoldVisibilityContext);
