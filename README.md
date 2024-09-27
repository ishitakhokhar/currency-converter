# Currency Converter

A simple, fast, and efficient currency converter that utilizes the [Currency API](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api) to fetch up-to-date exchange rates for over 200 currencies, including common cryptocurrencies and precious metals. This project provides users with the ability to convert between different currencies and view historical exchange rates.

## Features:
- **Blazing Fast**: Leverages a free, high-speed API with no rate limits.
- **200+ Currencies Supported**: Converts between popular currencies, cryptocurrencies, and metals.
- **Daily Updates**: Currency rates are updated daily to provide accurate and reliable conversions.
- **Historical Rates**: View and convert based on exchange rates from specific historical dates.
- **Lightweight**: Uses JSON format, with minified versions available for bandwidth optimization.

## Usage
1. **Get Latest Rates**: Fetch the most recent currency rates by setting a base currency (e.g., USD, EUR, BTC).
2. **Convert Currencies**: Easily convert between two currencies using real-time rates.
3. **Historical Data**: Access historical exchange rates by specifying a date.

## API Endpoints
The project uses the following API endpoints:
- **List all currencies**: `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`
- **Latest rates for a base currency**: `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currencyCode}.json`
- **Historical rates**: `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/v1/currencies/{currencyCode}.json`

For more detailed API documentation, visit the [Currency API Documentation](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api).

## Contribution:
Feel free to open issues or submit pull requests to improve this currency converter. Any feedback is appreciated!
