export function parseDetections(detections: Chat.Detection[]) {
  return detections.reduce((acc, cur) => {
    return acc += cur.description
  }, '')
}

export function parseWordsInfo(result: Chat.RecognizeGeneralResult) {
  const middleX = result.width / 2
  let message = ''
  for (const info of result.prism_wordsInfo) {
    const infoMiddleX = (info.x + info.width) / 2
    if (infoMiddleX < middleX)
      message += `对方：${info.word}\n`

    else
      message += `我方：${info.word}\n`
  }
  return message
}
