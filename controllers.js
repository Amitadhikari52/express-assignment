// controllers.js

// Controller for the /contactus route
exports.contactUsController = (req, res) => {
    res.render('contactus');
  };
  
  // Controller for the /success route
  exports.successController = (req, res) => {
    res.render('success');
  };
  
  // Controller for the Error404 route
  exports.error404Controller = (req, res) => {
    res.status(404).render('404');
  };
  