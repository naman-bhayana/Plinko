import { useEffect, useRef } from "react";

import { BallManager } from "../game/classes/BallManager";
import { pad } from "../game/padding";
import { WIDTH } from "../game/constants";

export const Simulate = () => {
  const canvasRef = useRef<any>();

  async function simulate(ballManager: BallManager) {
    let i = 0;
    while (1) {
      i++;
      ballManager.addBall(pad(WIDTH / 2 + 20 * (Math.random() - 0.5)));
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  useEffect(() => {
    if (canvasRef.current) {
      const ballManager = new BallManager(
        canvasRef.current as unknown as HTMLCanvasElement
      );
      simulate(ballManager);

      return () => {
        ballManager.stop();
      };
    }
  }, [canvasRef]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <canvas 
        ref={canvasRef} 
        width="800" 
        height="800"
        className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[800px] h-auto"
        style={{ aspectRatio: '1/1' }}
      ></canvas>
    </div>
  );
};
