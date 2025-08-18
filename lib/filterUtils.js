// helper functions for wine filtering

/**
 BUILD URL QUERY string from filter object (Turn filter object into URL parameters)
 * eg. { region: "Kakheti", grape: ["Rkatsiteli", "Saperavi"] }
 * into "?region=Kakheti&grape=Rkatsiteli,Saperavi"
 */
export const buildFilterQuery = (filters) => {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value && value.length > 0) {
      // if it's an array (=multiple selections), join with commas
      if (Array.isArray(value)) {
        params.set(key, value.join(","));
      } else {
        params.set(key, value);
      }
    }
  });

  return params.toString();
};

/* PARSE URL query string params back into filter object
 */

export const parseFiltersFromURL = (query) => {
  const filters = {
    region: [],
    grape: [],
    winemaker: [],
    technology: [],
    year: [],
  };

  // parse each filter type (all arrays), split comma-separated values back into arrays
  if (query.region) {
    filters.region = query.region.split(",");
  }

  if (query.grape) {
    filters.grape = query.grape.split(",");
  }

  if (query.winemaker) {
    filters.winemaker = query.winemaker.split(",");
  }

  if (query.technology) {
    filters.technology = query.technology.split(",");
  }

  if (query.year) {
    filters.year = query.year.split(",").map((y) => parseInt(y));
  }
  //  coverts string to number

  return filters;
};

/**TOGGLE CHECKBOX toggles a value in a filter array (Add/remove values from filter arrays)
 * eg ("Rkatsiteli", "Saperavi")
 * into ["Rkatsiteli", "Saperavi"]
 */
// toggle works with one filter array (eg grape selection)

export const toggleFilterValue = (currentArray, value) => {
  if (currentArray.includes(value)) {
    // remove if already selected
    return currentArray.filter((item) => item !== value);
  } else {
    // add if not selected
    return [...currentArray, value];
  }
};

/**
 * sets a single filter value (for tag clicks and single-select filters)
 * eg. Current state: { grape: ["Rkatsiteli"], region: ["Kakheti"] }
 * click tech "Qvevri": { grape: ["Rkatsiteli"], region: ["Kakheti"], technology: ["Qvevri"] }
 */
// set works with entire filter object (all categories)

export const setFilterValue = (currentFilters, filterType, value) => {
  const newFilters = { ...currentFilters }; // copy entire filter state
  // Modify just ONE category within the big object
  if (newFilters[filterType].includes(value)) {
    // If already selected, remove it (toggle off)
    newFilters[filterType] = newFilters[filterType].filter(
      (item) => item !== value
    );
  } else {
    // If not selected, add it
    newFilters[filterType] = [...newFilters[filterType], value];
  }

  return newFilters; // Return COMPLETE new object
};

/**
 * clears all filters
 * returns empty filter state
 */
export const clearAllFilters = () => ({
  region: [],
  grape: [],
  winemaker: [],
  technology: [],
  year: [],
});

/**
 * builds SWR URL for API calls
 * eg buildAPIUrl({ region: "Kakheti", grape: ["Rkatsiteli"] })
 * into "/api/wines?region=Kakheti&grape=Rkatsiteli"
 */

export const buildAPIUrl = (filters) => {
  const queryString = buildFilterQuery(filters);
  return queryString ? `/api/wines?${queryString}` : "/api/wines";
};

/**
 * checks if any filters are active
 * used to show/hide "Clear All" button
 */
export const hasActiveFilters = (filters) => {
  return !!(
    (filters.region && filters.region.length > 0) ||
    (filters.winemaker && filters.winemaker.length > 0) ||
    (filters.grape && filters.grape.length > 0) ||
    (filters.technology && filters.technology.length > 0) ||
    (filters.year && filters.year.length > 0)
  );
};
