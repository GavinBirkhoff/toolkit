/**
 * Downloads a file from a Blob object by creating a temporary object URL and clicking a link with a download attribute.
 * @param dataStream - The data to download as a Blob object.
 * @param fileName - The name to use for the downloaded file. Defaults to 'unknown'.
 * @example
 * // Download a file from an ExcelJS workbook
 * const workbook = new ExcelJS.Workbook();
 * // ...
 * const buffer = await workbook.xlsx.writeBuffer();
 * downloadByBlob(buffer, 'my-file');
 * @since 1.0.0
 */
const downloadByBlob = (dataStream: BlobPart, fileName = 'unknown'): void => {
  const blob = new Blob([dataStream], { type: 'application/octet-stream' })
  const objectURL = URL.createObjectURL(blob)
  const downloadLink = document.createElement('a')
  downloadLink.download = `${fileName}`
  downloadLink.href = objectURL
  downloadLink.click()
  URL.revokeObjectURL(objectURL)
}

export default downloadByBlob
