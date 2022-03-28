const express = require("express");
const app = express();
const port = 3001;
var cors = require("cors");

//parse
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

app.use(
  fileUpload({
    createParentPath: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//cors
app.use(cors());

//server
app.post("/", cors(), (req, res) => {
  console.log(req.files);
  // console.log(req.files.myFile);
  // res.send("Hello World!")
  main(req.files.myFile);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// app.get("/", cors(), (req, res) => {
//   res.send("Hello World!");
// });

var Jimp = require("jimp");

//User-Defined Function to read the images
async function main(param) {
  const image1 = await Jimp.read(param.data);
  const image2 = await Jimp.read(
    "https://media.geeksforgeeks.org/wp-content/uploads/20190328185333/gfg111.png"
  );

  //call to blit function
  image1
    .blit(image2, 20, 40)
    //write image
    .write("blit1.png");
  console.log("Image Processing Completed");
}

// main();
