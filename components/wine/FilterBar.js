import styled from "styled-components";
import { useState } from "react";
import { X, Filter } from "lucide-react";

const FilterBar = ({
  filters, // current filter state from parent
  onFilterChange,
  onClearFilters,
  hasActiveFilters,
}) => {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // HARDCODED FILTER OPTIONS
  const filterOptions = {
    regions: ["Kakheti", "Imereti", "Kartli"],
    grapes: [
      "Rkatsiteli",
      "Saperavi",
      "Kisi",
      "Tsitska",
      "Tsolikauri",
      "Krakhuna",
    ],
    winemakers: ["Ori Marani", "Ethno", "Baia's Wine", "Orgo", "Gio's Marani"],
    technologies: ["Qvevri", "Oak Barrel", "Pet-Nat"],
    years: [2024, 2023, 2022, 2021, 2020],
  };

  // for checkbox clicks

  const handleCheckboxChange = (filterType, value) => {
    onFilterChange(filterType, value); // call parent's filter function
  };

  //reusable function for both desktop and mobile

  const FilterContent = () => (
    <FilterSections>
      <FilterSection>
        <FilterTitle>Region</FilterTitle>
        {filterOptions.regions.map((region) => (
          // going through each region and creating a checkbox for it
          <CheckboxRow key={region}>
            <Checkbox
              type="checkbox"
              checked={filters.region?.includes?.(region)}
              //If region filter exists, check if it includes this region, ? as safety to prevent crashes
              onChange={() => handleCheckboxChange("region", region)}
            />
            <CheckboxLabel>{region}</CheckboxLabel>
          </CheckboxRow>
        ))}
      </FilterSection>

      <FilterSection>
        <FilterTitle>Grape Varieties</FilterTitle>
        {filterOptions.grapes.map((grape) => (
          <CheckboxRow key={grape}>
            <Checkbox
              type="checkbox"
              checked={filters.grape?.includes?.(grape)}
              onChange={() => handleCheckboxChange("grape", grape)}
            />
            <CheckboxLabel>{grape}</CheckboxLabel>
          </CheckboxRow>
        ))}
      </FilterSection>

      <FilterSection>
        <FilterTitle>Winemaker</FilterTitle>
        {filterOptions.winemakers.map((winemaker) => (
          <CheckboxRow key={winemaker}>
            <Checkbox
              type="checkbox"
              checked={filters.winemaker?.includes?.(winemaker)}
              onChange={() => handleCheckboxChange("winemaker", winemaker)}
            />
            <CheckboxLabel>{winemaker}</CheckboxLabel>
          </CheckboxRow>
        ))}
      </FilterSection>

      <FilterSection>
        <FilterTitle>Technology</FilterTitle>
        {filterOptions.technologies.map((tech) => (
          <CheckboxRow key={tech}>
            <Checkbox
              type="checkbox"
              checked={filters.technology?.includes?.(tech)} //Check if this region is selected
              onChange={() => handleCheckboxChange("technology", tech)}
            />
            <CheckboxLabel>{tech}</CheckboxLabel>
          </CheckboxRow>
        ))}
      </FilterSection>

      <FilterSection>
        <FilterTitle>Vintage Year</FilterTitle>
        {filterOptions.years.map((year) => (
          <CheckboxRow key={year}>
            <Checkbox
              type="checkbox"
              checked={filters.year?.includes?.(year)}
              onChange={() => handleCheckboxChange("year", year)}
            />
            <CheckboxLabel>{year}</CheckboxLabel>
          </CheckboxRow>
        ))}
      </FilterSection>

      {hasActiveFilters && (
        <ClearButton onClick={onClearFilters}>
          <X size={16} />
          Clear All Filters
        </ClearButton>
      )}
    </FilterSections>
  );

  return (
    <>
      {/* MOBILE: Filter Button */}
      <MobileFilterButton onClick={() => setMobileFilterOpen(true)}>
        <Filter size={20} />
        Filters
        {hasActiveFilters && <ActiveDot />}
      </MobileFilterButton>

      {/* DESKTOP: Sidebar */}
      <DesktopFilterBar>
        <FilterHeader>
          <FilterHeaderTitle>Filter Wines</FilterHeaderTitle>
        </FilterHeader>
        <FilterContent />
      </DesktopFilterBar>

      {/* MOBILE: Modal Overlay */}
      {mobileFilterOpen && (
        <MobileOverlay>
          {/* MobileOverlay = Only show popup IF it's open */}
          <MobileFilterPanel>
            <MobileHeader>
              <FilterHeaderTitle>Filter Wines</FilterHeaderTitle>
              <CloseButton onClick={() => setMobileFilterOpen(false)}>
                <X size={24} />
              </CloseButton>
            </MobileHeader>
            <FilterContent />
          </MobileFilterPanel>
        </MobileOverlay>
      )}
    </>
  );
};

const MobileFilterButton = styled.button`
  font-family: "League Spartan", sans-serif;
  font-weight: 100;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: white;
  border: 1px solid #944710;
  border-radius: 6px;
  color: #944710;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    display: none; //hide on desktop
  }

  &:hover {
    background: #f7f3f0;
  }
`;

const ActiveDot = styled.div`
  width: 8px;
  height: 8px;
  background: #944710;
  border-radius: 50%;
  position: absolute;
  top: 4px;
  right: 4px;
`;

const DesktopFilterBar = styled.div`
  display: none;
  width: 100%; // responsive grid to adjust autmatically
  max-width: 280px; //prevents from getting too wide
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  height: fit-content;
  position: sticky;
  top: 2rem;
  margin-top: 4.6rem; /* match WineList top margin */

  @media (min-width: 768px) {
    display: block; //show on desktop
  }

  @media (max-width: 1024px) {
    max-width: 240px; // slightly smaller on medium screens
  }
`;

const MobileOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 50;
  display: flex;
  align-items: flex-end;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileFilterPanel = styled.div`
  background: white;
  width: 100%;
  max-height: 80vh;
  border-radius: 12px 12px 0 0;
  overflow-y: auto;
`;

const FilterHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const MobileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.5rem 0;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
`;

const FilterHeaderTitle = styled.h3`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1.25rem;
  color: #374151;
  margin: 0;
`;

const CloseButton = styled.button`
  font-family: "League Spartan", sans-serif;
  font-weight: 100;
  text-transform: uppercase;
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 0.25rem;

  &:hover {
    color: #374151;
  }
`;

const FilterSections = styled.div`
  padding: 0 1.5rem 1.5rem;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

const FilterSection = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const FilterTitle = styled.h4`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.875rem;
  color: #944710;
  margin: 0 0 0.75rem 0;
`;

const CheckboxRow = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0;
  cursor: pointer;

  &:hover {
    background: #f9fafb;
    border-radius: 4px;
    margin: 0 -0.5rem;
    padding: 0.375rem 0.5rem;
  }
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  accent-color: #944710;
  cursor: pointer;
`;

const CheckboxLabel = styled.span`
  font-size: 0.875rem;
  color: #374151;
  cursor: pointer;
`;

const ClearButton = styled.button`
  font-family: "League Spartan", sans-serif;
  font-weight: 100;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  justify-content: center;
  margin-top: 1rem;

  &:hover {
    background: #e5e7eb;
    color: #374151;
  }
`;

export default FilterBar;
