/**
 * @description sleep
 * @param  {number} time
 */
const sleep = (time: number): Promise<void> => new Promise<void>((resolve) => setTimeout(() => resolve(), time))

export default sleep
