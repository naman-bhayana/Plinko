import { useEffect, useRef, useState } from "react";
import { BallManager } from "../game/classes/BallManager";
import axios from "axios";
import { Button } from "../components/ui";
import { baseURL } from "../utils";

export function Game() {
  const [ballManager, setBallManager] = useState<BallManager>();
  const canvasRef = useRef<any>();

  useEffect(() => {
    if (canvasRef.current) {
      const ballManager = new BallManager(
        canvasRef.current as unknown as HTMLCanvasElement
      );
      setBallManager(ballManager);
    }
  }, [canvasRef]);

  return (
    <div className="flex flex-col items-center p-4 pt-8">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
        <canvas 
          ref={canvasRef} 
          width="800" 
          height="800"
          className="w-full max-w-[350px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] h-auto"
          style={{ aspectRatio: '1/1' }}
        ></canvas>
        <div className="flex flex-col items-center lg:items-start">
          <Button
            className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg bg-green-600 hover:bg-green-700"
            onClick={async () => {
              const response = await axios.post(`${baseURL}/game`, {
                data: 1,
              });
              if (ballManager) {
                ballManager.addBall(response.data.point);
              }
            }}
          >
            Add Ball
          </Button>
        </div>
      </div>
    </div>
  );
}
