import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-with-gesture'
import Card from './Card.js'
// import './styles.css'

export default function Deck(props) {
  // These two are just helpers, they curate spring data, values that are later being interpolated into css
  const to = i => ({ x: 0, y: i * -1, scale: 1, rot: -1 + Math.random() * 2, delay:0})
  const from = i => ({ x: 0, rot: 0, scale: 1, y: i * -1 })
  // This is being used down there in the view, it interpolates rotation and scale into a css transform
  const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [springs, set] = useSprings(props.cards.length, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    set(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === props.cards.length)
      setTimeout(() => {
        gone.clear() || set(i => to(i))
        // props.nextPageFunc()
      }, 400)
  })

  let cardStyle = {
      position: 'absolute',
      width: '100%',
      willChange: 'transform',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  }

  let divStyle = {
    backgroundColor: 'white',
    width: '100vh',
    maxWidth: '300px',
    height: '100vh',
    maxHeight: '300px',
    willChange: 'transform',
    borderRadius: '10px',
    margin: '10px',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    overflow: 'hidden',
  }

  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return springs.map(({ x, y, rot, scale }, i) => (
    <animated.div className="card" key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`),position: 'absolute',
    width: '100%',
    willChange: 'transform',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', } }>
      {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
      <animated.div {...bind(i)}
      style={{
      transform: interpolate([rot, scale], trans),backgroundColor: 'white',
      width: '250px',
      height: '350px',
      willChange: 'transform',
      borderRadius: '2px',
      boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      overflow: 'hidden',
      }}>
        <Card picUrl={props.cards[i].src} playerData={props.playerData[i]} moreData={props.moreData[i]}/>
      </animated.div>
    </animated.div>
  ))
}
