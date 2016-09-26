# Mashup project

This project combines the Google Search Autocomplete API with the Wikipedia API. My goal was to find hip search terms, that are often being searched, when you start typing a word. Next it will autoamticall check whether there is a Wikipedia article for this.

## API description
Google Search Autocomplete API listens on the URL `http://suggestqueries.google.com/complete/search?client=firefox?q=YOURQUERY`
Wikipedia API listens on the URL `https://en.wikipedia.org/w/api.php` which requires a data element with `page=YOURQUERY`

