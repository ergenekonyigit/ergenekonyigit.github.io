import React, { useEffect, useRef } from 'react'
import Matter from 'matter-js'
import { sample } from 'lodash'

const WIDTH = 300
const HEIGHT = 500
const PARTICLE_BOUNCYNESS = 0.6
const TOTAL_BALL_COUNT = 1500
const BALL_SIZE = 2
const PEG_SIZE = 2
const BACKGROUND_COLOR = '#000000'
const WALL_COLOR = '#222222'
const PEG_COLOR = '#333333'

const colors = [
  '#ff2d55',
  '#5856d6',
  '#ff9500',
  '#ffcc00',
  '#ff3b30',
  '#5ac8fa',
  '#007aff',
  '#4cd964',
]

const color = sample(colors)

const GaltonBoard = () => {
  const boxRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    let Engine = Matter.Engine
    let Render = Matter.Render
    let Runner = Matter.Runner
    let World = Matter.World
    let Bodies = Matter.Bodies
    let Body = Matter.Body
    let Events = Matter.Events

    let engine = Engine.create({
      enableSleeping: true,
    })

    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: WIDTH,
        height: HEIGHT,
        background: BACKGROUND_COLOR,
        wireframes: false,
        showSleeping: false,
      },
    })

    Render.run(render)

    const runner = Runner.create()
    Runner.run(runner, engine)

    const ball = (x, y) =>
      Bodies.circle(x, y, BALL_SIZE, {
        restitution: PARTICLE_BOUNCYNESS,
        friction: 0.00001,
        frictionAir: 0.042,
        sleepThreshold: 25,
        render: {
          fillStyle: color,
        },
      })

    const peg = (x, y) =>
      Bodies.circle(x, y, PEG_SIZE, {
        isStatic: true,
        restitution: PARTICLE_BOUNCYNESS,
        render: {
          fillStyle: PEG_COLOR,
        },
      })

    const wall = (x, y, width, height) =>
      Bodies.rectangle(x, y, width, height, {
        isStatic: true,
        render: {
          fillStyle: WALL_COLOR,
        },
      })

    const line = (x, y, width, height, angle) =>
      Bodies.rectangle(x, y, width, height, {
        isStatic: true,
        angle: angle,
        render: {
          fillStyle: WALL_COLOR,
        },
      })

    // outer walls
    World.add(engine.world, [
      wall(150, 0, 300, 20), // top
      wall(150, 500, 300, 20), // bottom
      wall(0, 500, 20, 1000), // left
      wall(300, 500, 20, 1000), // right
    ])

    // inner walls
    World.add(engine.world, [
      line(185, 63, 75, 2, Math.PI * -0.3), // right top
      line(115, 63, 75, 2, Math.PI * 0.3), // left top
      line(196, 110, 75, 2, Math.PI * 0.153), // right middle
      line(104, 110, 75, 2, Math.PI * -0.153), // left middle
      line(260, 190, 140, 2, Math.PI * 0.353), // right bottom
      line(40, 190, 140, 2, Math.PI * -0.353), // left bottom
    ])

    // pegs
    const pegs = []
    const spacingY = 14
    const spacingX = 14
    let i, j
    for (i = 0; i < 21; i++) {
      for (j = 1; j < i; j++) {
        if (i > 9) {
          pegs.push(
            World.add(
              engine.world,
              peg(150 + (j * spacingX - i * (spacingX / 2)), i * spacingY)
            )
          )
        }
      }
    }

    // divider walls
    for (let x = 20; x <= 280; x += 10) {
      if (x !== 0) {
        let divider = wall(x, 404, 2, 220)
        World.add(engine.world, divider)
      }
    }

    const rand = (min, max) => Math.random() * (max - min) + min

    const dropBall = () => {
      let droppedBall = ball(150 + rand(-5, 5), 15)

      Body.setVelocity(droppedBall, {
        x: rand(-0.05, 0.05),
        y: 0,
      })
      Body.setAngularVelocity(droppedBall, rand(-0.05, 0.05))

      Events.on(droppedBall, 'sleepStart', () => {
        Body.setStatic(droppedBall, true)
      })

      World.add(engine.world, droppedBall)
    }

    let count = 0
    var intervalId = setInterval(function () {
      if (count === TOTAL_BALL_COUNT) {
        clearInterval(intervalId)
      }

      dropBall()
      count++
    }, 10)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div
      ref={boxRef}
      style={{
        width: WIDTH,
        height: HEIGHT,
      }}
    >
      <canvas ref={canvasRef} />
    </div>
  )
}

export default GaltonBoard
