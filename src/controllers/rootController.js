export const rootController = (req, res) => res.render("home", {pageTitle: "Home"});

export const joinController = (req, res) => res.render("join", {pageTitle: "Join"});

export const loginController = (req, res) => res.render("login", {pageTitle: "Login"});