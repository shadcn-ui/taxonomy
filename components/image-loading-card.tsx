"use client"

import { AspectRatio } from "./ui/aspect-ratio"
import { Progress } from "./ui/progress"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

type LinearGradientProps = React.HTMLAttributes<HTMLOrSVGElement> & {
    height?: number
    width?: number
}
const LinearGradient = ({
    height = 80,
    width = 317,
    className,
    ...props
}: LinearGradientProps) => {
    const path =
        "M316 0V10C316 12.2091 314.209 14 312 14H5C2.79086 14 1 15.7909 1 18V80"

    return (
        <svg
            {...props}
            className={cn(`absolute text-primary-foreground`, className)}
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
        >
            <path d={path} stroke="currentColor" strokeOpacity="0.2" />
            <path
                d={path}
                stroke="url(#pulse-1)"
                strokeLinecap="round"
                strokeWidth="2"
            />
            <defs>
                <motion.linearGradient
                    animate={{
                        x1: [0, width * 2],
                        x2: [0, width],
                        y1: [height, height / 2],
                        y2: [height * 2, height],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                    id="pulse-1"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop
                        className="text-muted-foreground"
                        stopColor="currentColor"
                        stopOpacity="0"
                    />
                    <stop
                        className="text-muted-foreground"
                        stopColor="currentColor"
                    />
                    <stop offset="1" stopColor="#FFF" stopOpacity="0" />
                </motion.linearGradient>
            </defs>
        </svg>
    )
}

export const GridBackground = () => {
    return (
        <svg
            className="w-full text-card-foreground"
            height="258"
            viewBox="0 0 392 258"
            width="392"
        >
            <g opacity="0.1" stroke="currentColor" stroke-dasharray="1 1">
                <line x2="392" y1="15.5" y2="15.5"></line>
                <line x2="392" y1="31.5" y2="31.5"></line>
                <line x2="392" y1="47.5" y2="47.5"></line>
                <line x2="392" y1="63.5" y2="63.5"></line>
                <line x2="392" y1="79.5" y2="79.5"></line>
                <line x2="392" y1="95.5" y2="95.5"></line>
                <line x2="392" y1="111.5" y2="111.5"></line>
                <line x2="392" y1="127.5" y2="127.5"></line>
                <line x2="392" y1="143.5" y2="143.5"></line>
                <line x2="392" y1="159.5" y2="159.5"></line>
                <line x2="392" y1="175.5" y2="175.5"></line>
                <line x2="392" y1="191.5" y2="191.5"></line>
                <line x2="392" y1="207.5" y2="207.5"></line>
                <line x2="392" y1="223.5" y2="223.5"></line>
                <line x2="392" y1="239.5" y2="239.5"></line>
                <line x2="392" y1="255.5" y2="255.5"></line>
                <line
                    x1="11.9999"
                    x2="11.9999"
                    y1="2.18557e-08"
                    y2="256"
                ></line>
                <line
                    x1="27.9999"
                    x2="27.9999"
                    y1="2.18557e-08"
                    y2="256"
                ></line>
                <line
                    x1="43.9999"
                    x2="43.9999"
                    y1="2.18557e-08"
                    y2="256"
                ></line>
                <line
                    x1="59.9999"
                    x2="59.9999"
                    y1="2.18557e-08"
                    y2="256"
                ></line>
                <line
                    x1="75.9999"
                    x2="75.9999"
                    y1="2.18557e-08"
                    y2="256"
                ></line>
                <line
                    x1="91.9999"
                    x2="91.9999"
                    y1="2.18557e-08"
                    y2="256"
                ></line>
                <line x1="108" x2="108" y1="2.18557e-08" y2="256"></line>
                <line x1="124" x2="124" y1="2.18557e-08" y2="256"></line>
                <line x1="140" x2="140" y1="2.18557e-08" y2="256"></line>
                <line x1="156" x2="156" y1="2.18557e-08" y2="256"></line>
                <line x1="172" x2="172" y1="2.18557e-08" y2="256"></line>
                <line x1="188" x2="188" y1="2.18557e-08" y2="256"></line>
                <line x1="204" x2="204" y1="2.18557e-08" y2="256"></line>
                <line x1="220" x2="220" y1="2.18557e-08" y2="256"></line>
                <line x1="236" x2="236" y1="2.18557e-08" y2="256"></line>
                <line x1="252" x2="252" y1="2.18557e-08" y2="256"></line>
                <line x1="268" x2="268" y1="2.18557e-08" y2="256"></line>
                <line x1="284" x2="284" y1="2.18557e-08" y2="256"></line>
                <line x1="300" x2="300" y1="2.18557e-08" y2="256"></line>
                <line x1="316" x2="316" y1="2.18557e-08" y2="256"></line>
                <line x1="332" x2="332" y1="2.18557e-08" y2="256"></line>
                <line x1="348" x2="348" y1="2.18557e-08" y2="256"></line>
                <line x1="364" x2="364" y1="2.18557e-08" y2="256"></line>
                <line x1="380" x2="380" y1="2.18557e-08" y2="256"></line>
            </g>
        </svg>
    )
}

const PixelLoadingAnimation = () => {
    return (
        <div className="border ">
            <motion.svg
                animate={{
                    scale: [0.5, 1, 1, 0.75, 0.5],
                    rotate: [0, 0, 270, 270, 0],
                    opacity: [0, 0.2, 1, 1, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                }}
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 m-auto flex text-muted-foreground z-10 "
            >
                <path
                    d="M0 5.24537e-07H8V8H0V5.24537e-07Z"
                    fill="currentColor"
                />
                <path
                    d="M8 5.24537e-07H16V8H8V5.24537e-07Z"
                    fill="currentColor"
                />
                <path d="M0 8H8V16H0V8Z" fill="currentColor" />
                <path d="M0 16H8V24H0V16Z" fill="currentColor" />
                <path d="M8 8H16V16H8V8Z" fill="currentColor" />
                <path
                    d="M16 5.24537e-07H24V8H16V5.24537e-07Z"
                    fill="currentColor"
                />
                <path
                    d="M64 1.04907e-06V8H56V6.99381e-07L64 1.04907e-06Z"
                    fill="currentColor"
                />
                <path d="M64 8V16L56 16V8H64Z" fill="currentColor" />
                <path
                    d="M56 6.99381e-07V8L48 8V3.49692e-07L56 6.99381e-07Z"
                    fill="currentColor"
                />
                <path
                    d="M48 3.49692e-07V8H40V0L48 3.49692e-07Z"
                    fill="currentColor"
                />
                <path d="M56 8V16H48V8L56 8Z" fill="currentColor" />
                <path d="M64 16V24L56 24V16L64 16Z" fill="currentColor" />
                <path d="M0 64L9.53987e-08 56H8V64H0Z" fill="currentColor" />
                <path
                    d="M9.53987e-08 56L1.90797e-07 48H8V56H9.53987e-08Z"
                    fill="currentColor"
                />
                <path d="M8 64V56H16V64H8Z" fill="currentColor" />
                <path d="M16 64V56H24V64H16Z" fill="currentColor" />
                <path d="M8 56V48H16V56H8Z" fill="currentColor" />
                <path
                    d="M1.90797e-07 48L2.86198e-07 40H8V48H1.90797e-07Z"
                    fill="currentColor"
                />
                <path d="M64 64H56V56H64V64Z" fill="currentColor" />
                <path d="M56 64H48V56H56V64Z" fill="currentColor" />
                <path d="M64 56H56V48H64V56Z" fill="currentColor" />
                <path d="M64 48H56L56 40H64V48Z" fill="currentColor" />
                <path d="M56 56H48V48H56V56Z" fill="currentColor" />
                <path d="M48 64H40V56H48V64Z" fill="currentColor" />
                <path d="M24 32H32V40H24V32Z" fill="currentColor" />
                <path d="M32 24H40V32H32V24Z" fill="currentColor" />
                <path d="M24 24H32V32H24V24Z" fill="currentColor" />
                <path d="M32 32H40V40H32V32Z" fill="currentColor" />
            </motion.svg>
        </div>
    )
}

interface IImageLoadingCard {
    showLoadingText?: boolean
}

export const ImageLoadingCard = ({
    showLoadingText = true,
}: IImageLoadingCard) => {
    return (
        <AspectRatio ratio={1 / 1}>
            <Card className="h-full w-full flex items-center justify-center rounded-lg overflow-hidden relative">
                <CardContent className="overflow-hidden flex flex-col w-full relative p-0 items-center">
                    <PixelLoadingAnimation />
                    <div className="w-[392px] h-[258px] flex-shrink-0 relative mb-0 mt-[2px]">
                        {/* <LinearGradient className="left-0 bottom-0" />
                    <LinearGradient className="right-0 top-0 rotate-180" /> */}

                        {/* <LinearGradient className="left-0 top-0 -rotate-90" />
                    <LinearGradient className="right-0 bottom-0 rotate-90" /> */}
                        <GridBackground />
                    </div>
                </CardContent>
                {showLoadingText && (
                    <motion.span
                        animate={{
                            opacity: [0, 0.2, 1, 1, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                        }}
                        className="absolute top-2 left-4 m-auto flex text-muted-foreground z-10 "
                    >
                        Generating...
                    </motion.span>
                )}
            </Card>
        </AspectRatio>
    )
}
