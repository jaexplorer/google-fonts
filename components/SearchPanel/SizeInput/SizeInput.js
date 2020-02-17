import React, { Fragment, useState, useEffect, useRef } from "react";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  SizeContainer,
  CurrentSize,
  Arrow,
  Size,
  Dropdown,
  DropdownItem,
} from "./SizeInput.styles";

const QUERY = gql`
  query searchPanel {
    searchPanel {
      sizeInput
    }
  }
`;

const MUTATION = gql`
  mutation UpdateSizeInput($input: String!) {
    updateSizeInput(input: $input)
  }
`;

const SizeInput = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const sizeDropdown = useRef(null);
  const { data } = useQuery(QUERY);
  const [updateSizeInput] = useMutation(MUTATION, {
    refetchQueries: ["searchPanel"],
  });

  useEffect(() => {
    const handleClick = e => {
      if (dropdownOpen) {
        !sizeDropdown.current.contains(e.target)
          ? setDropdownOpen(false)
          : updateSizeInput({ variables: { input: e.target.innerText } }),
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
          <Size>{data?.searchPanel.sizeInput}</Size>
          <Arrow />
        </CurrentSize>
        {dropdownOpen && (
          <Dropdown ref={sizeDropdown}>
            <DropdownItem>20px</DropdownItem>
            <DropdownItem>24px</DropdownItem>
            <DropdownItem>30px</DropdownItem>
            <DropdownItem>36px</DropdownItem>
          </Dropdown>
        )}
      </SizeContainer>
    </Fragment>
  );
};

export default SizeInput;
