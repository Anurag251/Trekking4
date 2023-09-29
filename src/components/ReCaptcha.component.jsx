// // import React from "react";
// // import { ReCaptcha } from "react-recaptcha-v3";

// // const RECAPTCHA_SITE_KEY = "6LeSWlwoAAAAAFklYC_yhhewsa3TSqH8Fq-Hf6Zh";

// // const ReCaptchaComponent = ({ onVerify }) => {
// //   const verifyCallback = (recaptchaToken) => {
// //     // Pass the token to the parent component
// //     onVerify(recaptchaToken);
// //   };

// //   return (
// //     <ReCaptcha
// //       sitekey={RECAPTCHA_SITE_KEY}
// //       action="submit"
// //       verifyCallback={verifyCallback}
// //     />
// //   );
// // };

// // export default ReCaptchaComponent;

// import React, { useEffect } from "react";

// const ReCaptchaComponent = () => {
//   const recaptchaSiteKey = "6LeSWlwoAAAAAFklYC_yhhewsa3TSqH8Fq-Hf6Zh"; // Replace with your reCAPTCHA site key

//   const onClick = (e) => {
//     e.preventDefault();
//     window.grecaptcha.enterprise.ready(async () => {
//       const token = await window.grecaptcha.enterprise.execute(
//         recaptchaSiteKey,
//         { action: "LOGIN" }
//       );
//       // IMPORTANT: The 'token' that results from execute is an encrypted response sent by
//       // reCAPTCHA Enterprise to the end user's browser.
//       // This token must be validated by creating an assessment.
//       // See https://cloud.google.com/recaptcha-enterprise/docs/create-assessment
//       console.log("Token:", token); // You can handle the token as needed
//     });
//   };

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src =
//       "https://www.google.com/recaptcha/enterprise.js?render=" +
//       recaptchaSiteKey;
//     script.async = true;
//     script.onload = () => {
//       // Script has loaded
//     };
//     document.head.appendChild(script);

//     return () => {
//       // Cleanup script on component unmount
//       document.head.removeChild(script);
//     };
//   }, [recaptchaSiteKey]);

//   return (
//     <div>
//       <button onClick={onClick}>Verify reCAPTCHA</button>
//     </div>
//   );
// };

// export default ReCaptchaComponent;
