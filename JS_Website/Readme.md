The objective of this project was to learn JavaScript by implementing a couple features on a website.

# Features

- Home page with a feed
- Gallery page
- Carrousel on the gallery page
- Forms

## Home page with a feed

Main objective: fetch an API to create an automatic feed
  - Dynamic creation of each article HTML block
  - Automatic creation of the feed with the API articles

## Dynamic Form

Main objective: create a form that lets the user input an article

For this objective I chose to have a select option in the form.
  - The user can select three categories or a random one
  - The URL of the fetch gets modified accordingly
  - A random object is selected in the JSON for the article
  - The article layout gets created depending on the category

Notes:
1. The magic items category has a special layout as each object is quite detailled
   - The attunement shows "No" if the value is empty
   - The rarity is colored depending on its value (ex: legendary in yellow, uncommon in green...)
   - As each object description can be quite different and include tables and others, I chose to ignore this part for the exercice and modify only the layout for the common keys (rarity, attunement)
2. The most recent article shows up at the top of the feed, skills are always at the bottom

## Gallery

Main objective: create a gallery letting the user choose between a grid or column display

## Add an image

Main objective: allow the user to add an image to the gallery
  - upload via URL or file
  - chose to put the form in a dropdown, 0/10 do not recommend, it hurt my brain

## Delete an article or image

Main objective: being able to delete an article or image in the feed, but ONLY those added manually

Note: I didn't linger too much on the button design and placement as I mainly wanted it to be functionnal first

## Carrousel on the gallery page

Main objective: create a carrousel on the gallery page with images auto-scrolling

Note: I didn't take the time to resize the images for them to fit in the carrousel, as such some of them are a bit cropped. 

Carrousel and gallery images don't match as I wasn't able to find an API for DND images.
