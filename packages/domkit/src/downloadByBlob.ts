/**
 * Download resources thought Blob
 * @param {BlobPart} dataStream
 * @param {string} fileName
 * @since 1.0.0
 * @todo jest
 */
const downloadByBlob = (dataStream: BlobPart, fileName = 'unknown'): void => {
  const blob = new Blob([dataStream])
  const objectURL = URL.createObjectURL(blob)
  let btn = document.createElement('a')
  btn.download = `${fileName}.xlsx` //file type
  btn.href = objectURL
  btn.click()
  URL.revokeObjectURL(objectURL)
  btn = null as any
}

export default downloadByBlob
