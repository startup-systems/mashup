# Mashup project

This project is open-ended!

## Description

The website intends to show the list of items to purchase in Etsy given a specific zip code. The page only has one input box and a button.
Once the information is sent, the page will display a list with the result count and each item with its title, price and link to purchase.

In addition to the APIs described below, the code uses jQuery v3.1.1.

## APIs Involved
For this project, I used only two APIs.

### ZipCode API
This API provides information related to a specific  zip code. For this API I obtain the latitude and longitude given the zip code the user
inputs. The method used is called locToZips. To check more information about the API method, click [here](https://www.zipcodeapi.com/API#locToZips)

### Etsy API
Etsy's API provides a list of the current items available. In particular I use the method listing/active to get them all and filtering by the
latitude and longitude obtained from the zip code. To check more information about the API method, click [here](https://www.etsy.com/developers/documentation/reference/listing)
