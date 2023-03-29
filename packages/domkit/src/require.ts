/**
 * Dynamically load a JavaScript file and execute a callback function.
 *
 * @param file - The URL of the JavaScript file to load.
 * @param callback - The callback function to execute when the script is loaded.
 *
 * @example
 *
 * requireScript('path/to/script.js', () => {
 *   console.log('Script loaded');
 * });
 *
 * @since 1.0.0
 */
const requireScript = (file: string, callback: (ev: Event) => any): void => {
  // Create a new script element
  const script = document.createElement('script')

  // Add an onload event listener to the script element
  script.addEventListener('load', callback)

  // Add the script element to the document body
  document.body.appendChild(script)

  // Set the `src` attribute of the script element
  script.src = file
}

export default requireScript
