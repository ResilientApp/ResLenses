
// import { Network, ethers } from 'ethers';
// import { Web3BaseProvider } from 'web3';
// import { graphql, buildSchema } from 'graphql';
// import { fetchDataFromAPI } from './endpoint';
// import axios from 'axios';

export async function test() {

  const apiKey = "BQYd0rsSmffBzkLkUs5bJkqCPlHKZPiz"

  const query = `
  query ($network: EthereumNetwork!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
    ethereum(network: $network) {
      transfers(
        options: {desc: "block.height", limit: $limit, offset: $offset}
        time: {since: $from, till: $till}
        amount: {gt: 0}
      ) {
        block {
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
          height
        }
        sender {
          address
          annotation
        }
        receiver {
          address
          annotation
        }
        currency {
          address
          symbol
        }
        amount
        amount_usd: amount(in: USD)
        transaction {
          hash
        }
        external
      }
    }
  }  
  `;

  const variables = {
      "limit": 5,
      "offset": 0,
      "network": "ethclassic",
      "from": "2024-04-05T10:04:56.000Z",
      "till": "2024-04-05T10:34:56.999Z",
      "dateFormat": "%Y-%m-%d"
  }

  const url = "https://graphql.bitquery.io/";
  const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": apiKey
      },
      body: JSON.stringify({
          query,
          'variables':variables
      })
  };

  async function bitqueryAPICall(){
    const result = await fetch(url, opts).then(res => res.json())
    // const inflow = result.data.bitcoin.inputs[0].value
    // const outflow = result.data.bitcoin.outputs[0].value
    // const balance = outflow - inflow
    console.log(result.data)
    // console.log("The Balance of the particular Bitcoin wallet is", balance)
  }

  // bitqueryAPICall()

  // let dateObj = new Date()
  // console.log("test")
  // console.log(dateObj)
  // let month   = dateObj.getUTCMonth() + 1; // months from 1-12
  // let day     = dateObj.getUTCDate();
  // let year    = dateObj.getUTCFullYear();
  // let hour    = dateObj.getUTCHours();
  // let second  = dateObj.getUTCSeconds();
  // console.log(day, month, year, hour, second)

  // let file = "http://localhost:8080/testGet?start=1-2-14-23-42&end=1-3-13-11-12"
  // try {
  //   console.log(file);
  //   const apiData = await fetchDataFromAPI(file);
  //   console.log(apiData);
  // } catch (error) {
  //     // Handle errors if needed
  //     console.error('Error:', error);
  // }

  // axios.get('https://crow.resilientdb.com/v1/transactions')
	// .then((response) => {
	// 	console.log(response.data);
	// 	// console.log("saving resdb data")
	// 	// saveJSON(response.data, "./resDB_data.json")
	// });
}

