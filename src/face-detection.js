"use strict";

const request = require("request");

require("dotenv").config();

const subscriptionKey = process.env.SUBSCRIPTION_FACE_API_KEY;
const uriBase = process.env.URI_BASE;
const imageUrl =
  "https://cdn-ofuxico.akamaized.net/img/upload/noticias/2019/05/13/silvio_santos_reproducao_instagram_349201_36.jpg";

const params = {
  returnFaceId: "true",
  returnFaceLandmarks: "false",
  returnFaceAttributes:
    "age,gender,headPose,smile,facialHair,glasses," +
    "emotion,hair,makeup,occlusion,accessories,blur,exposure,noise",
};

const options = {
  uri: uriBase,
  qs: params,
  body: '{"url": ' + '"' + imageUrl + '"}',
  headers: {
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Key": subscriptionKey,
  },
};

request.post(options, (error, response, body) => {
  if (error) {
    console.log("Error ao identificar a imagem: ", error);
    return;
  }

  let jsonResponse = JSON.stringify(JSON.parse(body), null, "  ");
  console.log("JSON Response\n");
  console.log(jsonResponse);
});
