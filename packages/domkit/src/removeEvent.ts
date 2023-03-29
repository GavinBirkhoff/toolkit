type Element = HTMLElement | SVGElement

interface RemoveEventOptions {
  useCapture?: boolean
}

/**
 * Remove an event listener from an element.
 *
 * @param el - The element to remove the event listener from.
 * @param type - The event type to remove.
 * @param callback - The callback function to remove.
 * @param options - The options object.
 *
 * @example
 *
 * const el = document.getElementById('my-element');
 * const callback = () => {
 *   console.log('Button clicked');
 * };
 *
 * // Add the event listener
 * addEvent(el, 'click', callback, { useCapture: false });
 *
 * // Remove the event listener
 * removeEvent(el, 'click', callback, { useCapture: false });
 *
 * @since 1.0.0
 */
const removeEvent = (el: Element, type: string, callback: EventListener, options: RemoveEventOptions = {}): void => {
  if (!el) return

  const { useCapture = false } = options

  el.removeEventListener(type, callback, useCapture)
}

export default removeEvent
