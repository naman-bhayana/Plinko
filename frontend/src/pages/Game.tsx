import { useEffect, useRef, useState } from "react";
import { BallManager } from "../game/classes/BallManager";
import axios from "axios";
import { Button } from "../components/ui";
import { baseURL } from "../utils";

export function Game() {
  const [ballManager, setBallManager] = useState<BallManager>();
  const [isFirstBall, setIsFirstBall] = useState(true);
  const canvasRef = useRef<any>();

  useEffect(() => {
    if (canvasRef.current) {
      const ballManager = new BallManager(
        canvasRef.current as unknown as HTMLCanvasElement
      );
      setBallManager(ballManager);
    }
  }, [canvasRef]);

  const handleAddBall = async () => {
    try {
      const response = await axios.post(`${baseURL}/game`, {
        data: 1,
      });
      if (ballManager) {
        ballManager.addBall(response.data.point);
        if (isFirstBall) {
          setIsFirstBall(false);
        }
      }
    } catch (error) {
      console.error("Error adding ball:", error);
    }
  };

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
        <div className="flex flex-col items-center lg:items-start gap-4">
          <Button
            className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg bg-green-600 hover:bg-green-700"
            onClick={handleAddBall}
          >
            Add Ball
          </Button>
          
          {isFirstBall && (
            <div className="max-w-xs text-center">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <div className="flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-yellow-800">First Ball Notice</span>
                </div>
                <p className="text-xs text-yellow-700">
                  The first ball may take up to 20 seconds to drop as the backend initializes. Please be patient!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
