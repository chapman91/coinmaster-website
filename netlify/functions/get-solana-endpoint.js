exports.handler = async (event) => {
  try {
    console.log('Received request with event:', event);

    const alchemyApiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;

    if (!alchemyApiKey) {
      console.error('API key is not configured.');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'API key is not configured' }),
      };
    }

    // Extract the Solana public key from the query parameters
    const publicKey = event.queryStringParameters?.publicKey;

    if (!publicKey) {
      console.error('Public key is missing.');
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'Public key is required as a query parameter',
        }),
      };
    }

    // Construct the Alchemy API URL with query parameters
    const apiUrl = `${alchemyApiKey}?method=getAccountInfo&params=${encodeURIComponent(
      JSON.stringify([publicKey])
    )}&jsonrpc=2.0&id=1`;

    // Make a GET request to the Alchemy API
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      console.error('Failed to fetch from API:', errorDetails);
      return {
        statusCode: response.status,
        body: JSON.stringify({
          error: 'Failed to fetch data',
          details: errorDetails,
        }),
      };
    }

    const data = await response.json();
    console.log('Received data:', data);

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error('Error in function execution:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
