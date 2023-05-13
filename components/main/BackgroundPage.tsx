import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import styles from 'styles/main/BackgroundPage.module.css'
import Image from "next/image";

interface PageProps {
    offset: number
    imageFileName: string
  }

export default function BackgroundPage ({ offset, imageFileName }: PageProps) {
    return (
        <>
        <ParallaxLayer offset={offset} speed={0}>
            <Image 
                src={"/img/" + imageFileName}
                className={styles.backgroundImage}
                fill
                alt="testest"
                />
        </ParallaxLayer>
        </>
    )
}