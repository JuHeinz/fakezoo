# fakezoo
Welcome to Fake Zoo, of all the zoos that don't exist, this is definitely the best one. ;)

This is a front end practice project made with vanilla JavaScript, Bootstrap 4.3.1, Axios &amp; randomuser.me API. A version of this website using React is in the make. 

# Animal generation:
The animals are randomly created from a selection of 98 species. Axios and the randomuser.me API are used to fetch a name and gender. The other attributes are generated by picking a random index fron an array or by generating a random number. The attributes are stored as an instance of an animal class. These instances get pushed into an array. The above steps happen in animals.js

In cardBuilder.js, a card is created for each animal. Since this project doesn't use any JavaScript frameworks, Elements are created by using document.createElement(). To facilitate styling and selection, the elements recieve class names. The finished card is put into an array

Finally, combiner.js combines the animal information and DOM Elements by looping through the card array and animal information array.