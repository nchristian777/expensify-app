import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

//database.ref('expenses').on('child_removed', (snapshot) => {
//  console.log(snapshot.key, snapshot.val());
//});
//
//database.ref('expenses').on('child_changed', (snapshot) => {
//  console.log(snapshot.key, snapshot.val());
//});

//database.ref('expenses')
//  .on('value', (snapshot) => {
//    const expenses = [];
//
//    snapshot.forEach((childSnapshot) => {
//      expenses.push({
//        id: childSnapshot.key,
//        ...childSnapshot.val()
//      });
//    })
//
//    console.log(expenses);
//  });


//database.ref('expenses')
//  .once('value')
//  .then((snapshot) => {
//    const expenses = [];
//
//    snapshot.forEach((childSnapshot) => {
//      expenses.push({
//        id: childSnapshot.key,
//        ...childSnapshot.val()
//      });
//    });
//
//    console.log(expenses);
//  });

//database.ref('expenses').push({
//  description: 'stuff',
//  note: 'blah',
//  amount: 1.50,
//  createdAt: 24242
//});

//database.ref('notes/-LKhjKpqI6Z6Yb3yXUcw').update({
//  body: 'Buy food'
//});

//database.ref('notes').push({
//  title: 'Course Topics',
//  body: 'React'
//});

//const firebaseNotes = {
//  notes: {
//    fsak: {
//      title: 'First note',
//      body: 'This is my note'
//    },
//    fasffaf: {
//      title: 'another note',
//      body: 'This is my note'
//    }
//  }
//};
//
//const notes = [{
//  id: '12',
//  title: 'First note',
//  body: 'This is my note'
//},{
//  id: '761ase',
//  title: 'another note',
//  body: 'This is my note'
//}];
//
//database.ref('notes').set(notes);

//const onValueChange = database.ref().on('value', (snapshot) => {
//  const data = snapshot.val();
//  console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
//});

//const onValueChange = database.ref().on('value', (snapshot) => {
//  console.log(snapshot.val());
//}, (e) => {
//  console.log('Error with data fettching', e);
//});
//
//setTimeout(() => {
//  database.ref('age').set(28);
//}, 5000);
//
//setTimeout(() => {
//  database.ref().off(onValueChange);
//}, 8000);
//
//setTimeout(() => {
//  database.ref('age').set(30);
//}, 10000);

//database.ref()
//  .once('value')
//  .then((snapshot) => {
//    const val =  snapshot.val();
//    console.log(val);
//  })
//  .catch((e) => {
//    console.log('Error fetching data', e);
//  });

//database.ref().set({
//  name: 'Nathan Christian',
//  age: 30,
//  stressLevel: 6,
//  job: {
//    title: 'Software developer',
//    company: 'Google'
//  },
//  location: {
//    city: 'Colorado Springs',
//    country: 'United States'
//  }
//}).then(() => {
//  console.log('Data is saved');
//}).catch((e) => {
//  console.log('This failed', e);
//});
//
//database.ref().update({
//  stressLevel: 9,
//  'job/company': 'Amazon',
//  'location/city': 'Seattle'
//});

//database.ref('isSingle').remove().then(() => {
//  console.log('Data removed');
//}).catch((e) => {
//  console.log('Failed to remove data', e);
//});
