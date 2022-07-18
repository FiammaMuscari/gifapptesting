import React from "react";
import { fireEvent, render } from "@testing-library/react";

import { Modal } from "../../src/components/Modal";

describe("Test en <Modal />", () => {

  test("Modal muestra a los childs y el botón de cierre", () => {
    // Arrange
    const showModal = jest.fn();

    // Act
    const { getByText } = render(
      <Modal onOpen={showModal}>
        <div>test</div>
      </Modal>
    );
    // Assert
    expect(getByText("test")).toBeTruthy();

    // Act
    fireEvent.click(getByText("test"));

    // Assert
    expect(showModal).toHaveBeenCalledTimes(1);
  });
});
