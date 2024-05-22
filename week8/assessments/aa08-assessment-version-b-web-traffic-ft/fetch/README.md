# `fetch`

In this part of the assessment, you will create a function to make a request
using `fetch`.

Run `npm test` to see all the specs you need to pass. (Do **NOT** modify the
files in the __test__ directory.)

Each of the 6 test specs in this part is worth **4 points** for a total of **24
points.**

## Objective

Your objective is to implement the code in __fetch-post.js__ so that all specs
pass. In short, you will use `fetch` to make a `POST` request with a JSON body
and return a specific value from the response JSON body.

## Instructions

Create a function called `addWeatherData` in the __fetch-post.js__ file.

Inside the function, make a `POST` request to `http://example.com/api/weather`
with the following JSON body:

```json
{
  "Location": "San Francisco",
  "Date": "September 30, 1973",
  "Temperature": "67 degrees F", 
  "Precipitation": 0
}
```

If you format your request properly, you can expect the body of the response to
be:

```json
{
  "weather": [
    {
      "Location": "San Diego",
      "Date": "September 30, 1973",
      "Temperature": "78 degrees F", 
      "Precipitation": 0.10
    },
    {
      "Location": "San Francisco",
      "Date": "September 30, 1973",
      "Temperature": "67 degrees F", 
      "Precipitation": 0
    }
  ]
}
```

Return the value of the `weather` key from the `addWeatherData` function.
