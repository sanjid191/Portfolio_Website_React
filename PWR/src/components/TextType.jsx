import { createElement, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { gsap } from 'gsap'

const TextType = ({
  text,
  as: Component = 'div',
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = '',
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = '|',
  cursorClassName = '',
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  onUpdate,
  startOnVisible = false,
  reverseMode = false,
  ...props
}) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(!startOnVisible)
  const cursorRef = useRef(null)
  const containerRef = useRef(null)

  const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text])

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed
    const { min, max } = variableSpeed
    return Math.random() * (max - min) + min
  }, [variableSpeed, typingSpeed])

  const getCurrentTextColor = () => {
    if (textColors.length === 0) return undefined
    return textColors[currentTextIndex % textColors.length]
  }

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [startOnVisible])

  useEffect(() => {
    if (showCursor && cursorRef.current) {
      gsap.set(cursorRef.current, { opacity: 1 })
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: cursorBlinkDuration,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      })
    }
  }, [showCursor, cursorBlinkDuration])

  useEffect(() => {
    if (!isVisible) return undefined

    let timeout
    const currentText = textArray[currentTextIndex]
    const processedText = reverseMode ? currentText.split('').reverse().join('') : currentText

    const executeTypingAnimation = () => {
      if (isDeleting) {
        if (displayedText === '') {
          setIsDeleting(false)
          if (currentTextIndex === textArray.length - 1 && !loop) {
            return
          }

          if (onSentenceComplete) {
            onSentenceComplete(textArray[currentTextIndex], currentTextIndex)
          }

          setCurrentTextIndex((prev) => (prev + 1) % textArray.length)
          setCurrentCharIndex(0)
          timeout = setTimeout(() => {}, pauseDuration)
        } else {
          timeout = setTimeout(() => {
            setDisplayedText((prev) => {
              const nextText = prev.slice(0, -1)
              if (onUpdate) onUpdate(nextText, currentTextIndex)
              return nextText
            })
          }, deletingSpeed)
        }
      } else {
        if (currentCharIndex < processedText.length) {
          timeout = setTimeout(() => {
            setDisplayedText((prev) => {
              const nextText = prev + processedText[currentCharIndex]
              if (onUpdate) onUpdate(nextText, currentTextIndex)
              return nextText
            })
            setCurrentCharIndex((prev) => prev + 1)
          }, variableSpeed ? getRandomSpeed() : typingSpeed)
        } else if (textArray.length > 1) {
          timeout = setTimeout(() => {
            setIsDeleting(true)
          }, pauseDuration)
        } else if (onSentenceComplete) {
          onSentenceComplete(textArray[currentTextIndex], currentTextIndex)
        }
      }
    }

    if (currentCharIndex === 0 && !isDeleting && displayedText === '') {
      timeout = setTimeout(executeTypingAnimation, initialDelay)
    } else {
      executeTypingAnimation()
    }

    return () => clearTimeout(timeout)
  }, [
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    isVisible,
    reverseMode,
    variableSpeed,
    onSentenceComplete,
    onUpdate,
    getRandomSpeed
  ])

  const shouldHideCursor =
    hideCursorWhileTyping && (currentCharIndex < textArray[currentTextIndex].length || isDeleting)

  const containerClass = ['text-type', className].filter(Boolean).join(' ')
  const cursorClass = ['text-type__cursor', shouldHideCursor ? 'text-type__cursor--hidden' : '', cursorClassName]
    .filter(Boolean)
    .join(' ')

  return createElement(
    Component,
    {
      ref: containerRef,
      className: containerClass,
      ...props
    },
    <span className="text-type__text" style={{ color: getCurrentTextColor() || 'inherit' }}>
      {displayedText}
    </span>,
    showCursor && (
      <span ref={cursorRef} className={cursorClass}>
        {cursorCharacter}
      </span>
    )
  )
}

export default TextType
