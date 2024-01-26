import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Enter your URL",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    console.log(url);
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_code.png"));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// var svg_string = qr.imageSync("I love QR!", { type: "svg" });
