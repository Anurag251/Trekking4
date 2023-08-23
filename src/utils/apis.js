import axios from 'axios';

function createAPI() {
  const api = axios.create({
    baseURL: "https://stnepal.com.np/newtrekking/api/v1",
    // baseURL: "https://mountaingotrekking.com/trekking/api/v1",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      // Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });

  return api;
}

export const apis = createAPI();

// export const apis = axios.create({
//   baseURL: "https://admin.book4clean.com/api/v1",
// });


// Upper Mustang trek offers a spectacular trekking experience in the remote trans-Himalayan mountain region of Nepal. The 17-day trip begins in Kathmandu with tours of UNESCO World Heritage Sites.  Then we drive to Pokhara and fly to Jomsom the next day and begin trekking. Upper Mustang is also known as the Last Forbidden Kingdom because it wasn’t until the 1990s that tourists were allowed to enter the region. While trekking in the Upper Mustang region of Nepal, we can admire the uniqueness of tree-less landscape, rocky trails and views of Nilgiri, Annapurna, Dhaulagiri and other Himalayas.

 