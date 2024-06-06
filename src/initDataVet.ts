import axios from "axios";

const initializeData = async () => {
  try {
    const response = await axios.post("http://localhost:3000/api/vets/initial");
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error);
  }
};

initializeData();
