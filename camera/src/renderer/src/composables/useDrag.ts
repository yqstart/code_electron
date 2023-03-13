class Drag {
  constructor() {}
  private mainPageX = 0
  private mainPageY = 0

  private mainBody?: HTMLBodyElement

  private mouseMove(e: MouseEvent) {
    const x = e.pageX - this.mainPageX
    const y = e.pageY - this.mainPageY
    window.api.drag({ x, y })
  }
  private mouseDown(e: MouseEvent) {
    this.mainPageX = e.pageX
    this.mainPageY = e.pageY
    const mouseMoveCallback = this.mouseMove.bind(this)
    this.mainBody?.addEventListener('mousemove', mouseMoveCallback)
    this.mainBody?.addEventListener('mouseup', () => {
      this.mainBody?.removeEventListener('mousemove', mouseMoveCallback)
    })
    this.mainBody?.addEventListener('mouseout', () => {
      this.mainBody?.removeEventListener('mousemove', mouseMoveCallback)
    })
  }
  public run() {
    window.addEventListener('DOMContentLoaded', () => {
      this.mainBody = document.querySelector('body')!

      this.mainBody.addEventListener('mousedown', this.mouseDown.bind(this))
    })
  }
}

export default () => {
  const drag = new Drag()
  return { drag }
}
