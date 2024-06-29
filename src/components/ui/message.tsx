import React, { useEffect } from 'react'

interface MessageProps {
    message: string,
    sender: string
}

const Message: React.FC<MessageProps> = ({message, sender}) => {
    const [letters, setLetters] = React.useState<string[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const letter = message[letters.length];
            if (letter) {
                setLetters(prevLetters => [...prevLetters, letter]);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [letters, message]);


    if (sender == "bot") {
        return (
            <div className="flex items-start gap-4">
                <div className="rounded-full w-10 h-10 flex items-center justify-center text-2xl">💖</div>
                <div className="border border-solid border-[#F4F4FA] rounded-[6px] p-4 md:max-w-[35%] max-w-[70%] bg-[#F4F4FA]">
                    {letters.join('')}
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="flex items-start gap-4 justify-end">
                <div className="bg-[#9B2D31] text-[#FFF] p-4 md:max-w-[35%] max-w-[70%]
                border border-solid border-[#9B2D31] rounded-[6px]">
                    {message}
                </div>
                <div className="bg-primary w-10 h-10 flex items-center justify-center text-2xl text-primary-foreground">
                    🙂
                </div>
            </div>
        )
    }
}

export default Message


// https://www.shadergradient.co/customize?animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=1.1&cAzimuthAngle=180&cDistance=3.9&cPolarAngle=115&cameraZoom=1&color1=%23fb00ff&color2=%239B2D31&color3=%23000000&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&grain=off&lightType=3d&pixelDensity=1&positionX=-0.5&positionY=0.1&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=235&shader=defaults&toggleAxis=false&type=waterPlane&uAmplitude=0&uDensity=1.1&uFrequency=5.5&uSpeed=0.1&uStrength=2.4&uTime=0.2&wireframe=false