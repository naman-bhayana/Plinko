import { useEffect, useRef, useState } from "react"
import { BallManager } from "../game/classes/BallManager";
import axios from "axios";
import { baseURL } from "../utils";


export function Game() {
    const [ballManager, setBallManager] = useState<BallManager>();
    const canvasRef = useRef<any>();

    useEffect(() => {
        if (canvasRef.current) {
            const ballManager = new BallManager(canvasRef.current as unknown as HTMLCanvasElement,)
            setBallManager(ballManager)
        }

    }, [canvasRef])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <canvas 
                ref={canvasRef} 
                width="800" 
                height="800"
                className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[800px] h-auto mb-6"
                style={{ aspectRatio: '1/1' }}
            ></canvas>
            <button 
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg md:text-xl transition-colors"
                onClick={async() => {
                    const response = await axios.post(`${baseURL}/game`, {data: 1});
                    if (ballManager) {
                        ballManager.addBall(response.data.point);
                    }
                }}
            >
                Add Ball
            </button>
        </div>
    )
}