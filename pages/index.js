// import WineList from "@/components/wine/WineList";

// export default function Home() {
//   return <WineList />;
// }
import styled from "styled-components";
import { useState } from "react";
import useSWR from "swr";
import FilterBar from "@/components/wine/FilterBar";
import WineCard from "@/components/wine/WineCard";
import { Loading, ErrorMessage } from "@/components/ui/LoadingAndError";
import {
  clearAllFilters,
  toggleFilterValue,
  hasActiveFilters,
  buildAPIUrl,
  setFilterValue,
} from "@/lib/filterUtils";

const HomePage = () => {
  // starts empty
  const [filters, setFilters] = useState(clearAllFilters());

  // SWR URL based on current filters
  const apiUrl = buildAPIUrl(filters);

  // fetch wines with SWR, instant filtering
  const { data: wines, error, isLoading } = useSWR(apiUrl);

  // handle checkbox filter changes
  const handleFilterChange = (filterType, value) => {
    const newFilterArray = toggleFilterValue(filters[filterType], value);
    setFilters((prev) => ({
      ...prev,
      [filterType]: newFilterArray,
    }));
  };

  // handle tag clicks
  const handleTagClick = (filterType, value) => {
    const newFilters = setFilterValue(filters, filterType, value);
    setFilters(newFilters);
  };

  // handle clear all filters
  const handleClearFilters = () => {
    setFilters(clearAllFilters());
  };

  // any filters are active check
  const filtersActive = hasActiveFilters(filters);

  // active filter count for display
  const activeFilterCount = Object.values(filters).reduce(
    (count, filterArray) => {
      return count + (Array.isArray(filterArray) ? filterArray.length : 0);
    },
    0
  );

  return (
    <Container>
      <Layout>
        <FilterBar
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
          hasActiveFilters={filtersActive}
        />

        <WineSection>
          <ResultsHeader>
            <MainTitle>Discover Georgian Wines</MainTitle>

            {filtersActive && (
              <FilterStatus>
                Showing results for {activeFilterCount} filter
                {activeFilterCount !== 1 ? "s" : ""}
              </FilterStatus>
            )}
          </ResultsHeader>

          {isLoading && (
            <Loading message="🍷 Discovering Georgian treasures..." />
          )}

          {error && (
            <ErrorMessage message="Connection issue! Please check your internet and try again." />
          )}

          {wines && wines.length === 0 && (
            <EmptyState>
              <EmptyIcon>🇬🇪</EmptyIcon>
              <EmptyTitle>No Georgian wines match these filters</EmptyTitle>
              <EmptyMessage>
                Georgian wine variety is endless! Try different selections or
                explore our full collection of authentic qvevri and traditional
                wines.
              </EmptyMessage>
              {filtersActive && (
                <ClearFiltersButton onClick={handleClearFilters}>
                  Clear All Filters
                </ClearFiltersButton>
              )}
            </EmptyState>
          )}

          {wines && wines.length > 0 && (
            <>
              <WineGrid>
                {wines.map((wine) => (
                  <WineCard
                    key={wine._id}
                    wine={wine}
                    activeFilters={filters}
                    onTagClick={handleTagClick}
                  />
                ))}
              </WineGrid>

              <ResultsFooter>
                <WineCount>
                  {wines.length} wine{wines.length !== 1 ? "s" : ""} found
                  {filtersActive && (
                    <span>
                      {" "}
                      •{" "}
                      <ClearLink onClick={handleClearFilters}>
                        Clear filters
                      </ClearLink>
                    </span>
                  )}
                </WineCount>
              </ResultsFooter>
            </>
          )}
        </WineSection>
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: system-ui, -apple-system, sans-serif;
`;

const Layout = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 0;
  }
`;

const WineSection = styled.div`
  flex: 1;
  min-width: 0;
`;

const ResultsHeader = styled.div`
  margin-bottom: 2rem;
`;

const MainTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: #374151;
  text-align: center;
  margin: 0 0 1rem 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.875rem;
    margin: 0 0 0.75rem 0;
  }
`;

const FilterStatus = styled.p`
  text-align: center;
  color: #6b7280;
  font-size: 1rem;
  margin: 0;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.875rem;
    padding: 0 1rem;
  }
`;

const WineGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  @media (min-width: 1024px) {
    gap: 2rem;
  }
`;

const ResultsFooter = styled.div`
  text-align: center;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
`;

const WineCount = styled.p`
  color: #6b7280;
  font-size: 1rem;
  margin: 0;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const ClearLink = styled.button`
  background: none;
  border: none;
  color: #944710;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #7a3a0d;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 1rem;
`;

const EmptyIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  opacity: 0.7;
`;

const EmptyTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #374151;
  margin: 0 0 1rem 0;
`;

const EmptyMessage = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0 0 2rem 0;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

const ClearFiltersButton = styled.button`
  padding: 0.75rem 2rem;
  background: #944710;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #7a3a0d;
    transform: translateY(-1px);
  }
`;

export default HomePage;
