"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";

type Callback = () => void;

type PreloaderContextType = {
  unregister: (key: string) => void;
  register: (key: string, callback: Callback) => void;
  play: Callback;
  isLoaded: boolean;
};

export const PreloaderContext = createContext<PreloaderContextType>({
  register: () => {},
  play: () => {},
  unregister: () => {},
  isLoaded: false,
});

export const PreloaderContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [callbackMap, setCallbackMap] = useState(new Map());
  const [isLoaded, setIsLoaded] = useState(false);

  const register = (key: string, callback: Callback) => {
    setCallbackMap((prevMap) => {
      const clone = new Map(prevMap);
      clone.set(key, callback);
      return clone;
    });
  };

  const play = () => {
    setIsLoaded(true);
    for (const key of callbackMap.keys()) {
      callbackMap.get(key)();
    }
  };

  const unregister = (key: string) => {
    setCallbackMap((prevMap) => {
      const clone = new Map(prevMap);
      clone.delete(key);
      return clone;
    });
  };

  return (
    <PreloaderContext.Provider value={{ register, play, unregister, isLoaded }}>
      {children}
    </PreloaderContext.Provider>
  );
};

export const usePreloaderContext = () => {
  const preloaderContext = useContext(PreloaderContext);
  if (!preloaderContext)
    throw "usePreloaderContext call not wrapped in a PreloaderContextProvider";
  return preloaderContext;
};
