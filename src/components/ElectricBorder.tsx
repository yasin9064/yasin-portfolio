import './ElectricBorder.css'

import React, { useId, useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { perlin3 } from './perlin3'

interface ElectricBorderProps {
  children: React.ReactNode
  color?: string
  speed?: number
  chaos?: number
  thickness?: number
  style?: React.CSSProperties
  className?: string
}

export default function ElectricBorder({
  children,
  color = '#ff00c1',
  speed = 1,
  chaos = 1,
  thickness = 2,
  style,
  className,
}: ElectricBorderProps) {
  const id = useId()
  const containerRef = useRef<HTMLDivElement>(null)

  const baseFrequency = 0.05

  const borderPath = useMemo(() => {
    const chaosValue = 1 - chaos;
    const path = `M0,0 H1 V1 H0 Z M${chaosValue},${chaosValue} h${1 - chaosValue * 2} v${1 - chaosValue * 2} h${-(1 - chaosValue * 2)} z`;
    return path;
  }, [chaos]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    if (!containerRef.current) return

    const layers = containerRef.current.querySelectorAll(
      '.eb-overlay-1, .eb-overlay-2'
    ) as NodeListOf<HTMLElement>

    const t = time * speed

    layers.forEach((layer) => {
      const p1 = perlin3(t, 1, 1)
      const p2 = perlin3(t, 2, 1)
      const p3 = perlin3(t, 3, 1)

      layer.style.filter = `
        url(#${id}-displacement-filter)
        blur(calc(${thickness}px * ${p1 * 0.2}))
        saturate(${1 + p2 * 0.2})
      `

      layer.style.transform = `
        rotate(${p3 * 360}deg)
        scale(${1 + p1 * 0.05})
        translateX(${p2 * 10}px)
        translateY(${p3 * 10}px)
      `
    })
  })

  return (
    <div
      ref={containerRef}
      className={`electric-border ${className || ''}`}
      style={
        {
          ...style,
          '--electric-border-color': color,
          '--eb-border-width': `${thickness}px`,
        } as React.CSSProperties
      }
    >
      <div className="eb-layers">
        <div className="eb-stroke"></div>
        <div className="eb-glow-1"></div>
        <div className="eb-glow-2"></div>
        <div className="eb-overlay-1"></div>
        <div className="eb-overlay-2"></div>
        <div className="eb-background-glow"></div>
      </div>

      <div className="eb-content">{children}</div>

      <svg className="eb-svg">
        <defs>
          <filter id={`${id}-displacement-filter`}>
            <feTurbulence
              baseFrequency={baseFrequency}
              numOctaves="1"
              type="fractalNoise"
              result="turbulence"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale={thickness * 2}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          <clipPath id={`${id}-border-clip-path`} clipPathUnits="objectBoundingBox">
            <path d={borderPath} />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}
