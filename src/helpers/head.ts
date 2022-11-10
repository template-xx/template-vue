class Head {
  title(value: string) {
    document.title = value
    return this
  }
}

export default new Head()
