declare module '@lottiefiles/react-lottie-player' {
    import React from 'react';
  
    interface PlayerProps {
      autoplay?: boolean;
      loop?: boolean;
      src: string | object;
      style?: React.CSSProperties;
      onEvent?: (event: string) => void;
    }
  
    export const Player: React.FC<PlayerProps>;
  }
  