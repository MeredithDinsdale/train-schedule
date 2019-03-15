// Initialize Firebase
var config = {
    apiKey: "AIzaSyC4z_IP4GMAMy0QXljsx2d7wIQbCzsC41E",
    authDomain: "traintracker-3f556.firebaseapp.com",
    databaseURL: "https://traintracker-3f556.firebaseio.com",
    projectId: "traintracker-3f556",
    storageBucket: "",
    messagingSenderId: "1092945455755"
  };
  firebase.initializeApp(config);
  database = firebase.database();
  
  $(document).ready(function () {
  
      $('.btn').on('click', function(event){
  
          event.preventDefault();
  
          var name = $('#name-input').val().trim();
          var destination = $('#destination-input').val().trim();
          var firstTrain = $('#firstTrain-input').val().trim();
          var frequency = $('#frequency-input').val().trim();
  
          $('#name-input').val('');
          $('#destination-input').val('');
          $('#firstTrain-input').val('');
          $('#frequency-input').val('');
  
          
  
          console.log(name);
          console.log(destination);
          console.log(firstTrain);
          console.log(frequency);
  
          database.ref().push({
              name: name,
              destination: destination,
              firstTrain: firstTrain,
              frequency: frequency,
            //   dateAdded: firebase.database.ServerValue.TIMESTAMP
          });
    
      });
  
      addInfo();
  
  });
  
  function addInfo(){
      database.ref().on('child_added', function(snapshot) {
  
          var sv = snapshot.val();
  
        //   var nextTrain = sv.dateAdded - sv.date;
        //   console.log(tMonths);
  
          console.log(sv.name);
          console.log(sv.destination);
          console.log(sv.date);
          console.log(sv.rate);
        //   console.log(sv.dateAdded);
  
          var row = $('<tr>');
          var tName = $('<td>').text(sv.name);
          var tDestination = $('<td>').text(sv.destination);
          var tFirstTrain = $('<td>').text(sv.firstTrain);
          var tFrequency = $('<td>').text(sv.frequency);
          var timeNow = new Date($.now());
          console.log(timeNow);
          var tNextArrival = sv.firstTrain
  
          
          row.append(tName).append(tDestination).append(tFrequency);
          $('#table').append(row);
      })
  }