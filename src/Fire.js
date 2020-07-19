import firebase from 'firebase';
// import busboy from "busboy";
// const cors = require(cors)({ origin: true });

// exports.uploadFile = functions.https.onRequest((req, res) => {
//   cors(req, res, (request, response) => {
//     if (req.method !== "POST") {
//       return response.state(500).json({
//         message: "Not allowed!",
//       });
//     }
//     const busboy = new Busboy({ headers: request.headers });
//     let uploadData = null;

//     busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
//       const filepath = path.join(os.tmpdir(), filename);
//       uploadData = { file: filepath, type: mimetype };
//     });
//     busboy.on("finish", () => {
//       const bucket = gcs.bucket("tru-color-painting.appspot.com");
//       bucket
//         .upload(uploadData.file, {
//           uploadType: "media",
//           metadata: {
//             metadata: {
//               contentType: uploadData.type,
//             },
//           },
//         })
//         .then((err, uploadFile) => {
//           if (err) {
//             return response.status(500).json({
//               error: err,
//             });
//           }
//           response.status(200).json({
//             message: "It worked!",
//           });
//         });
//     });
//   });
// });

const firebaseConfig = {
  apiKey: "AIzaSyBMkk9OppXguDQ-9Qng1UAHpU_9x3A9PUw",
  authDomain: "tru-color-painting.firebaseapp.com",
  databaseURL: "https://tru-color-painting.firebaseio.com",
  projectId: "tru-color-painting",
  storageBucket: "tru-color-painting.appspot.com",
  messagingSenderId: "532680303892",
  appId: "1:532680303892:web:50dc8f9a3d99f938b60e01",
  measurementId: "G-SS0VKQ31BE",
};

const fire = firebase.initializeApp(firebaseConfig);

 export default fire;


