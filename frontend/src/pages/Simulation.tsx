import { useEffect, useRef, useState } from "react";
import { BallManager } from "../game/classes/BallManager";
import { WIDTH } from "../game/constants";
import { pad } from "../game/padding";

export function Simulation() {
  const canvasRef = useRef<any>();
  let [outputs, setOutputs] = useState<{ [key: number]: number[] }>({
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
    12: [],
    13: [],
    14: [],
    15: [],
    16: [],
    17: [],
  });

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
        canvasRef.current as unknown as HTMLCanvasElement,
        (index: number, startX?: number) => {
          setOutputs((outputs: any) => {
            return {
              ...outputs,
              [index]: [...(outputs[index] as number[]), startX],
            };
          });
        }
      );
      simulate(ballManager);

      return () => {
        ballManager.stop();
      };
    }
  }, [canvasRef]);

  return (
    <div className="flex flex-col lg:flex-row items-stretch min-h-screen p-4">
      <div className="flex flex-col justify-center lg:w-1/2 mb-6 lg:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white text-center lg:text-left">Simulation Data</h2>
        <div className="bg-gray-800 p-4 rounded-lg max-h-[50vh] lg:max-h-[70vh] overflow-y-auto">
          <pre className="text-xs md:text-sm text-gray-300">
            {JSON.stringify(outputs, null, 2)}
          </pre>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center lg:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white text-center">Plinko Simulation</h2>
        <canvas 
          ref={canvasRef} 
          width="800" 
          height="800"
          className="w-full max-w-[350px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] h-auto"
          style={{ aspectRatio: '1/1' }}
        ></canvas>
      </div>
    </div>
  );
}
