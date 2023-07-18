exports.getContactPage = (req, res) => {
  res.render('contactus');
};

exports.postContactForm = (req, res) => {
  // Retrieve the form data from the request body
  const { firstName, lastName, email, phone } = req.body;

  // Process the form data and perform any necessary actions

  // Render the success view with the form data
  res.render('success', { firstName, lastName, email, phone });
};
