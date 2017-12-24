const config = {
  next: {
    dir: './src',
    dev: false,
  }
}

if (process.env.NODE_ENV !== 'production') {
  config.next.dev = true
}

module.exports = config