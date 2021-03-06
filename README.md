# write_savenotes application 
Note Taker that can be used to write and save notes.


![GitHub license](https://img.shields.io/badge/license-MIT-purple.svg)

# Table of Content
-[description](#description)
-[installation](#installation)
-[usage](#usage)
-[license](#license)
-[contribution](#contribution)
-[test](#test)
-[username](#username)
-[profile](#profile)
        
 ##username:
   queen-stack 
        
 ##description:
     This application will use an Express.js back end and will save and retrieve note data from a JSON file.
     Deployed to heruko https://salty-atoll-89598.herokuapp.com/notes
       
 ##installation:
* `GET /notes` should return the `notes.html` file
* `GET *` should return the `index.html` file
* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON
* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
* install npm pakages to run from the terminal : `express` , `shortid`
 

  ##feature enhancement:
  * `DELETE /api/notes/:id` to receive a query parameter containing the id of a note to delete. In order to delete a note, will need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
        
 ##usage:
 * I WANT to be able to write and save notes
 SO THAT I can organize my thoughts and keep track of tasks I need to complete
 * GIVEN a note-taking application
 WHEN I open the Note Taker
 * THEN I am presented with a landing page with a link to a notes page
 WHEN I click on the link to the notes page
 * THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right- hand column
 WHEN I enter a new note title and the note’s text
 * THEN a Save icon appears in the navigation at the top of the page
 WHEN I click on the Save icon
 * THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
 WHEN I click on an existing note in the list in the left-hand column
 * THEN that note appears in the right-hand column
 WHEN I click on the Write icon in the navigation at the top of the page
 * THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

![LAYOUT 1](./Assets/11-express-homework-demo-01.png)
![LAYOUT 2](./Assets/11-express-homework-demo-02.png)

        
 ##license:       
  MIT 
        
 ##contribution:
  w3schools, TA hours 
        
 ##test:
  error 404 if page is unable to be reached
              
  ##profile:
  https://www.linkedin.com/in/jeniferqueen/
