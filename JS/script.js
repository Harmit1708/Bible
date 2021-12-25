// Create heading and image
document.body.innerHTML = `<div class="heading"><h1>Bible</h1>
<img class="img" src="/Images/Bible_book.jpg" alt="img">
</div>
<div id="mainContainer" class="sub-container"></div>
`;
//create a async function
const getData = async () => {
  try {
    //fetch the data from api
    const data = await fetch(
      "https://bible-api.com/romans%2012:1-2,5-7,9,13:1-9&10"
    );
    //convert data into json
    const jdata = await data.json();
    mainContainer.innerHTML = " ";
    //print the json  data in display
    jdata.verses.forEach((bibles) => {
      displayData(bibles);
    });
    //print the error in the console
  } catch (error) {
    console.log(error);
  }
};

//call the function
getData();

//create a function for print the display data
const displayData = (obj) => {
  //store the json data
  mainContainer.innerHTML += `<div class="container">
    <h3 class="color">Book id:<span>${obj.book_id}</span></h3>
    <p class="color">Book Name:<span>${obj.book_name}</span></p>
    <p class="color">Chapter:<span>${obj.chapter}</span></p>
    <Verse: class="color">Verse:<span>${obj.verse}</span></p>
    <p class="color" id="text">Text:<span>${obj.text}</span>
  </div>`;
};
