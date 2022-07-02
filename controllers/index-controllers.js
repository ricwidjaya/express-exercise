const indexControllers = {
  getIndex: (req, res, next) => {
    return res.render('index')
  },

  getAbout: (req, res, next) => {
    const page = 'about'
    return res.render('about', {
      page
    })
  },
  
  getProtfolio: (req, res, next) => {
    const page = 'portfolio'
    return res.render('portfolio', {
      page
    })
  },

  getContact: (req, res, next) => {
    const page = 'contact'
    return res.render('contact', {
      page
    })
  }
}

module.exports = indexControllers