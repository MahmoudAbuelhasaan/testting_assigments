import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

const typeIntoFormElements = ({ email, password, confirmPassword }) => {
  const emailInputElement = screen.getByLabelText("Email address");
  const passwordInputElement = screen.getByLabelText("Password");
  const confirmPasswordInputElement = screen.getByLabelText("Confirm Password");

  if (email) {
    userEvent.type(emailInputElement, email);
  }
  if (password) {
    userEvent.type(passwordInputElement, password);
  }
  if (confirmPassword) {
    userEvent.type(confirmPasswordInputElement, confirmPassword);
  }

  return {
    emailInputElement,
    passwordInputElement,
    confirmPasswordInputElement,
  };
};

describe("testing App component", () => {
  beforeEach(() => {
    render(<App />);
  });
/*  test("testing input initially empty", () => {
    expect(screen.getByLabelText("Email address").value).toBe("");
  });

  test("test email input changed its value", () => {
    const { emailInputElement } = typeIntoFormElements({
      email: "amira@gmail.com",
    });
    expect(emailInputElement.value).toBe("amira@gmail.com");
  });

  test("should show email message error when email is invalid", () => {
    expect(
      screen.queryByText(/The email you input is invalid./i)
    ).not.toBeInTheDocument();

    typeIntoFormElements({ email: "amiragmail.com" });

    // const btn=screen.getByRole("button",{name:/submit/i})
    const btn = screen.getByTestId("my-button");
    userEvent.click(btn);

    expect(
      screen.queryByText(/The email you input is invalid./i)
    ).toBeInTheDocument();
  });

  test("should show No Error when every thing is valid", () => {
    typeIntoFormElements({
      email: "amira@gmail.com",
      password: "123ASD",
      confirmPassword: "123A",
    });

    // const btn=screen.getByRole("button",{name:/submit/i})
    const btn = screen.getByTestId("my-button");
    userEvent.click(btn);

    expect(
      screen.queryByText(/The email you input is invalid./i)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(/The password you entered should contain 5 or more characters./i)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(/The passwords don't match. Try again./i)
    ).toBeInTheDocument();
  });*/

  test("lab testing password", () => {
    typeIntoFormElements({
      email: "m7moud@gmail.com",
      password: "36363666&",
      confirmPassword: "36363666&",
    });

    const btn = screen.getByTestId("my-button");
    userEvent.click(btn);

    expect(
      screen.queryByText(/The password you entered should contain 8 or more characters./i)
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText(/Password must contain at least one Special Symbol./i)
    ).not.toBeInTheDocument();
  });
});
