const router = require ("express").Router();
const { v4: uuidv4 } = require("uuid");

const {
  readAndAppend,
  readFromFile,
  writeToFile,
} = require("../helpers/fsUtils");

// This is a GET route for retrieving all the data
router.get("/", (req, res) =>
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)))
);

// This is a POST route for submitting feedback
router.post("/", (req, res) => {
  // This is a destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // below is the variable for the object we will save
    const inputNote = {
      title,
      text,
      id: uuidv4(),
    };

    readAndAppend(inputNote, "./db/db.json");

    const response = {
      status: "success",
      body: newNote,
    };

    res.json(response);
  } else {
    res.json("Error in posting feedback");
  }
}); 

router.delete("/:id", (req, res) => {
  readFromFile("./db/db.json")
    .then((data) => {
      const requestId = req.params.id.toLowerCase();
      let match = false;
      let noteData = JSON.parse(data);

    // This code will get rid of the matching note id
    for (let i = 0; i < noteData.length; i++) {
      if (requestId === noteData[i].id.toLowerCase()) {
        match = true;
        noteData.splice(i, 1);
      }
    }

    if (match) {
      // write to the db.json
      writeToFile("./db/db.json", noteData);
      const response = {
        status: "success",
      };
      res.json(response);
    } else {
      res.json("No id found");
    }
  })
  .catch((error) => console.log(error));
});

module.exports = router;