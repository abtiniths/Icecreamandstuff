// need to install passportjs

let checkLoggedIn = (req, res, next) => {
if(req.isAthenticated()){ 
return res.redirect("/login")
  }
  next();
}

let checkLoggedOut = (req, res) => {
    if(req.isAthenticated()){ 
        return res.redirect("/")
          }
          next();
}


let postLogOut = (req, res) => {
    req.session.destroy( function(error) {
        return res.redirect("/login")
    })
}

module.exports = {
    checkLoggedIn,
    checkLoggedOut,
    postLogOut
}