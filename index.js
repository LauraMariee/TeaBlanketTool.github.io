let db;
const request = indexedDB.open("MyTestDatabase");
request.onerror = (event) => {
  console.error("Why didn't you allow my web app to use IndexedDB?!");
};
request.onsuccess = (event) => {
  db = event.target.result;
};

const TeaData = [
  { NumberOfTea: "0", Date: "" }
];


// This is what our customer data looks like.
const currentTeaData = [
  { key: "444-44-4444", TeaNumber: "Bill", Date: "currentDate"},
];

  const objectStore = db.createObjectStore("TeaData", { keyPath: "key" });
  objectStore.createIndex("TeaNumber", "TeaNumber", { unique: false });
  objectStore.createIndex("Date", "Date", { unique: true });

  // Use transaction oncomplete to make sure the objectStore creation is
  // finished before adding data into it.
  objectStore.transaction.oncomplete = (event) => {
    // Store values in the newly created objectStore.
    const TeaObjectStore = db
      .transaction("TeaData", "readwrite")
      .objectStore("TeaData");
      currentTeaData.forEach((TeaData) => {
        TeaObjectStore.add(TeaData);
    });


function deleteDatabaseEntry(){
  const request = db
  .transaction(["TeaData"], "readwrite")
  .objectStore("TeaData")
  .delete("444-44-4444");
  request.onsuccess = (event) => {
  // It's gone!
};


function updateDatabaseEntry(teaNumber){
  const objectStore = db
  .transaction(["TeaData"], "readwrite")
  .objectStore("TeaData");
const request = objectStore.get("444-44-4444");
request.onerror = (event) => {
  // Handle errors!
};
request.onsuccess = (event) => {
  // Get the old value that we want to update
  const data = event.target.result;

  // update the value(s) in the object that you want to change
  data.TeaNumber = teaNumber;
  data.Date = "date";

  // Put this updated object back into the database.
  const requestUpdate = objectStore.put(data);
  requestUpdate.onerror = (event) => {
    // Do something with the error
  };
  requestUpdate.onsuccess = (event) => {
    // Success - the data is updated!
  };
};
}

function addDatabaseEntry(){
  const transaction = db.transaction(["TeaData"], "readwrite");
}

function getDatabaseEntry(){
  db
  .transaction("customers")
  .objectStore("customers")
  .get("444-44-4444").onsuccess = (event) => {
  console.log(`Name for SSN 444-44-4444 is ${event.target.result.name}`);
};
}


}


    window.onload = () => {
      document.getElementById('my-button').addEventListener("click", submitNumber);
      }

    function clearForm(){
        document.getElementById("form").reset();
    }

    function submitNumber() {
   // var teaValue = getElementsByClassName(quantity).value(); 
    let csv = "/storage/emulated/0/Download/teaBlanket.csv;charset=utf-8,"; // accept data as CSV

    var encodedUri = encodeURI(csv);
    clearForm();
  }




