import axios from "axios"

/*  
    given start and end time, aquire all nodes and transactions 
    that occurred within time frame 
    
    TODO: 
    change colors
    add timestamps
*/

export async function fetchDataFromAPI(file) {
    try {
        const response = await axios.get(file);
        return response.data.data; // Assuming the API response is in the expected format
    } catch (error) {
        console.error('Axios error:', error);
        throw error; // Re-throw the error for the calling code to handle if needed
    }
}

/*

http://localhost:5173/?link=https://0d09-76-78-246-51.ngrok-free.app/api/v1/?startTime=2023-11-01T00:00:00Z&endTime=2023-11-30T23:59:59Z

*/

export async function getData(file, afterFunction = (data) => { }) {
    try {

        console.log("Getting Data:", file);

        const apiData = await fetchDataFromAPI(file);

        // console.log("api data")
        // console.log(apiData);

        // Process the API data as needed
        const nodes = apiData.users;
        const transactions = apiData.transactions;

        let data = {
            nodes: Array.from(nodes),
            transactions: Array.from(transactions)
        }

        afterFunction(data);

    } catch (error) {
        // Handle errors if needed
        console.error('Error:', error);
    }
}