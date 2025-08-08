// helper functions for wine filtering

/**
 builds URL query string from filter object
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

/* parses URL query string into filter object
 */

export const parseFiltersFromURL = (query) => {
  const filters = {
    region: null,
    grape: [],
    winemaker: null,
    technology: [],
    year: [],
  };

  // parse each filter type
  if (query.region) {
    filters.region = query.region;
  }

  if (query.grape) {
    filters.grape = query.grape.split(",");
  }

  if (query.winemaker) {
    filters.winemaker = query.winemaker;
  }

  if (query.technology) {
    filters.technology = query.technology.split(",");
  }

  if (query.year) {
    filters.year = query.year.split(",").map((y) => parseInt(y));
  }

  return filters;
};

/**toggles a value in a filter array (for checkboxes)
 * eg ("Rkatsiteli", "Saperavi")
 * into ["Rkatsiteli", "Saperavi"]
 */
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
 * eg. ({ grape: ["Rkatsiteli"] }, technology: "Qvevri")
 * into { grape: ["Rkatsiteli"], technology: ["Qvevri"] }
 */
export const setFilterValue = (currentFilters, filterType, value) => {
  const newFilters = { ...currentFilters };

  if (filterType === "region" || filterType === "winemaker") {
    //single-select filters
    newFilters[filterType] = value;
  } else {
    // multi-select filters (grape, technology, year)
    if (newFilters[filterType].includes(value)) {
      // if already selected, remove it
      newFilters[filterType] = newFilters[filterType].filter(
        (item) => item !== value
      );
    } else {
      // if not selected, add it
      newFilters[filterType] = [...newFilters[filterType], value];
    }
  }

  return newFilters;
};

/**
 * clears all filters
 * returns empty filter state
 */
export const clearAllFilters = () => ({
  region: null,
  grape: [],
  winemaker: null,
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
    filters.region ||
    filters.winemaker ||
    (filters.grape && filters.grape.length > 0) ||
    (filters.technology && filters.technology.length > 0) ||
    (filters.year && filters.year.length > 0)
  );
};
