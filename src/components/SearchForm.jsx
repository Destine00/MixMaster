import { useState } from "react";
import Wrapper from "../assets/wrappers/SearchForm";
import { loader } from "../pages/Landing";
import { Form, useNavigation } from "react-router-dom";

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "loading";

  return (
    <Wrapper>
      <Form className="form">
        <input type="search" className="form-input" name="search" defaultValue={searchTerm} />
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "searching" : "search"}
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
