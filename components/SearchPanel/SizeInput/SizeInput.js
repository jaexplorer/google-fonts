import React, { Fragment, useState, useEffect, useRef } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import {
  SizeContainer,
  CurrentSize,
  Arrow,
  Size,
  Dropdown,
  DropdownItem,
} from "./SizeInput.styles";
import { useApolloClient } from "@apollo/react-hooks";

const QUERY = gql`
  query {
    sizeInput @client
  }
`;

const SizeInput = () => {
  const client = useApolloClient();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const sizeDropdown = useRef(null);
  const { data } = useQuery(QUERY);

  useEffect(() => {
    const handleClick = e => {
      if (dropdownOpen) {
        !sizeDropdown.current.contains(e.target)
          ? setDropdownOpen(false)
          : client.writeData({ data: { sizeInput: e.target.innerText } }),
          setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  });

  return (
    <Fragment>
      <SizeContainer>
        <CurrentSize onMouseDown={() => setDropdownOpen(true)}>
          <Size>{data?.sizeInput}</Size>
          <Arrow />
        </CurrentSize>
        {dropdownOpen && (
          <Dropdown ref={sizeDropdown}>
            <DropdownItem>20px</DropdownItem>
            <DropdownItem>24px</DropdownItem>
            <DropdownItem>30px</DropdownItem>
            <DropdownItem>36px</DropdownItem>
            <DropdownItem>40px</DropdownItem>
            <DropdownItem>64px</DropdownItem>
          </Dropdown>
        )}
      </SizeContainer>
    </Fragment>
  );
};

export default SizeInput;
