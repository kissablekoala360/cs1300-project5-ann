# Development

### Link to Deployed Website
The link is `https://kissablekoala360.github.io/cs1300-project5/`

### Goal and Value of the Application
The goal of my application is to allow users to plan their next holiday or business trip. Users can filter by trip types (International and Domestic) and vacation types (City and Tropical). They can also sort the trips by price.

### Usability Principles Considered
I focused on three main usability principles: Visibility of system status, Consistency and standards, and Aesthetic and minimalist design. The first principle is visible when you click the "Book Flight" or "Remove Flight" button. There is a clear difference indicated to the user about the state of the location tile, i.e., whether a flight is in the cart or not. The filter also always directly tells the user what options are active. For the second principle, I made sure that my colors were consistent. Smaller font sizes have lighter colors. I also used components to ensure location tiles are identical execpt for their data. Finally, for the third principle, I chose to include only the important information about a place on each location tile. I also kept the text to a minimum throughout the page. I also kept the colors to the same hue of pink.

### Organization of Components
I created a component for the filter, cart, and trips. I made the filter into a component because it has a lot of unique code which would not fit into the general app structure. I made the cart into a component for a similar reason. I built trips into a component so as to allow it to be reused 12 times for each trip.

### How Data is Passed Down Through Components
Data is passed down into the filter and cart through useState setters and getters. Data is passed into the location tile through a map of the data.json.

### How the User Triggers State Changes
The user triggers a state change by clicking the "Book Flight" and "Remove Flight". These two buttons trigger the appropriate add or remove function. The user changing the filter activates a useEffect loop which automatically filters the location tiles.