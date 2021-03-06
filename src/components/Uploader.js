import axios from "axios";
// const UploadImg = async (image, token) => {
//   if (!image) {
//     return;
//   }
//   var formData = new FormData();
//   formData.append("file", {
//     uri: image,
//     type: "image/jpeg",
//     name: "image.jpg",
//   });
//   formData.append("pay_to__id", "604251f3a05a4435e0597c58");
//   axios({
//     url: "https://server-me2love.herokuapp.com/api/v1/Update/UploadImg",
//     method: "POST",
//     data: formData,
//     headers: {
//       "Content-Type": "multipart/form-data",
//       Authorization: token,
//     },
//   })
//     .then((res) => {
//       console.log(res.data);
//       //   dispatch(upDateUserSUcess(res.data));
//     })
//     .catch((error) => {
//       if (error.response) {
//         // dispatch(upDateUserFailure(error.data));
//         // console.log(error.response.data);
//       } else {
//         // upDateUserFailure({ message: "error" });
//         // console.log(error);
//       }
//     });
// };
