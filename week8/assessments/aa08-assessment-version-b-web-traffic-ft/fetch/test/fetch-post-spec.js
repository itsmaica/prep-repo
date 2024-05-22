if (typeof AssertionError === 'undefined') {
  var AssertionError = require('assertion-error');
  var chai = require('chai');
  var makeFetch = require('./node-fetch')(1, true);
}

require('./response');

if (typeof expect === 'undefined') {
  expect = chai.expect;
}

describe('POST http://example.com/api/weather', () => {
  let jsonSpy;
  let spy;
  let options;
  let error;
  let result;
  
  before(async () => {
    const response = new CustomResponse(JSON.stringify(
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
    ), {
      status: 200,
      statusText: 'OK',
      headers: new CustomHeaders({
        'Content-Type': 'application/json',
      }),
    });
    jsonSpy = chai.spy.on(response, 'json');

    if (typeof makeFetch !== 'undefined') {
      spy = makeFetch(Promise.resolve(response), (...args) => {
        options = args[1];
      });
    } else {
      spy = chai.spy.on(window, 'fetch', (...args) => {
        options = args[1];
        return Promise.resolve(response);
      });
    }

    if (typeof window === 'undefined') {
      solution = require('../fetch-post');
    }

    if (typeof addWeatherData === 'undefined' && typeof solution !== 'undefined') {
      addWeatherData = solution.addWeatherData;
    }

    try {
      result = await addWeatherData();
    } catch (e) {
      error = e;
    }
  });

  after(() => {
    if (typeof window !== 'undefined') {
      chai.spy.restore(window);
    }
  });

  context('makes a request with fetch', () => {
    // Each spec is worth 4 points
    it('calls the fetch function and makes a request to http://example.com/api/weather', async () => {
      if (error) throw error;
      try {
        expect(spy).to.have.been.called.with('http://example.com/api/weather');
      } catch (e) {
        throw new AssertionError(`Expected request to be made to "http://example.com/api/weather"`);
      }
    });

    it('includes the appropriate headers', async () => {
      if (error) throw error;

      options.headers.hasOwnProperty("Content-Type") ?
        expect(options.headers["Content-Type"]).to.eql("application/json") :
        expect(options.headers["content-type"]).to.eql("application/json");

    });

    it('makes a request with a method of POST', async () => {
      if (error) throw error;

      expect(options).to.have.property('method')
      expect(options.method).to.match(/post/i);

    });

    it('makes a request with a JSON body as instructed', async () => {
      if (error) throw error;
      expect(options).to.have.property('body');
      expect(typeof options.body).to.eql("string", `Expected the body of the request to be a string`);
      expect(JSON.parse(options.body)).to.eql({ 
        "Location": "San Francisco",
        "Date": "September 30, 1973",
        "Temperature": "67 degrees F", 
        "Precipitation": 0
      }, `Expected body of fetch() request to be an object "{ 
        "Location": "San Francisco",
        "Date": "September 30, 1973",
        "Temperature": "67 degrees F", 
        "Precipitation": 0
      }".`);
    });

    it('invokes json() on the response of the fetch() call', async () => {
      if (error) throw error;
      try {
        expect(jsonSpy).to.have.been.called.with.exactly();
      } catch (e) {
        throw new AssertionError('Expected json() to have been called on the response of the fetch() call')
      }
    });

    it('and returns the list of weather data from the response', async () => {
      if (error) throw error;
      expect(result).to.eql(
        [
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
      );
    });
  });
});
