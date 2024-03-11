

// JSON stands for JavaScript Object Notation

//it's used to transmit data in web applications (sending data from server to client)

//JSON is a string that looks like javascript notation but it can actually run independent of javascript 


//little things to note

//JSON has only properties, no methods 

//everything has to be wrapped in "". single ones '' won't work

//use JSON.parse() to convert the JSON string to javascript code



//coding along with the example on mdn https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

//Below is the fetch api used to pull the json from mdn. the JSON file that was created here isn't being used


//This is the top level function that has to run at the bottom for everything to populate
async function populate() {
    const requestURL =
      "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const superHeroes = await response.json();
  
    // this is calling upon the functions below
    populateHeader(superHeroes);
    populateHeroes(superHeroes);
  }


  //this function is populating the header, h1, and paragraph for the html
  function populateHeader(obj) {
    const header = document.querySelector("header");
    const myH1 = document.createElement("h1");
    myH1.textContent = obj.squadName;
    header.appendChild(myH1);
  
    const myPara = document.createElement("p");
    myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
    header.appendChild(myPara);
  }
 


//this is populating the hero stats
  function populateHeroes(obj) {
    const section = document.querySelector("section");
    const heroes = obj.members;
  
    for (const hero of heroes) {
      const myArticle = document.createElement("article");
      const myH2 = document.createElement("h2");
      const myPara1 = document.createElement("p");
      const myPara2 = document.createElement("p");
      const myPara3 = document.createElement("p");
      const myList = document.createElement("ul");
  
      myH2.textContent = hero.name;
      myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
      myPara2.textContent = `Age: ${hero.age}`;
      myPara3.textContent = "Superpowers:";
  
      const superPowers = hero.powers;
      for (const power of superPowers) {
        const listItem = document.createElement("li");
        listItem.textContent = power;
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }
  
  populate();

  //two really important methods that will be used regularly are JSON.parse() and JSON.stringify()


  //takes code from the server, where the code is JSON and converts it into javascript. That being JSON.parse()


  //the other converts the code that I will have writtne, and converts it into JSON. that being JSON.stringify()

  
  //
  