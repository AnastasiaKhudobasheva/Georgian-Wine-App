import styled from "styled-components";
import Link from "next/link";

const Navigation = () => {
  return (
    <NavContainer>
      <NavContent>
        <NavBrand>
          <Link href="/">Georgian Wines</Link>
        </NavBrand>

        <NavLinks>
          <NavLink href="/">Wine Collection</NavLink>
          <NavLink href="/wishlist">My Wishlist</NavLink>
        </NavLinks>
      </NavContent>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  background: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 1rem 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBrand = styled.div`
  a {
    font-size: 1.5rem;
    font-weight: 700;
    color: #944710;
    text-decoration: none;

    &:hover {
      color: #7a3a0d;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 3rem;
  margin-right: auto;
  margin-left: auto;
  margin-right: 0;
`;

const NavLink = styled(Link)`
  color: #6b7280;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.2s ease;

  &:hover {
    color: #944710;
  }
`;

export default Navigation;
