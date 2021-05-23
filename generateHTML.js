// Function that generates the HMTL
function generateHTML(userAnswers) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <title>Generate HTML</title>
    </head>
    <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Hi! My name is Sofia</h1>
      <p class="lead">I am from Mexico.</p>
      <h3>Example heading <span class="badge badge-secondary">${managersName}</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is Sofiacarf</li>
        <li class="list-group-item">LinkedIn: sofiacarf</li>
      </ul>
    </div>
  </div>
    </body>
    </html>`
}

module.exports = generateHTML;