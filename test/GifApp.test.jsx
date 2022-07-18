import {render, fireEvent, screen} from "@testing-library/react";
import {GifApp} from "../src/GifApp";
import React from "react";

describe ("Reset y Delete", () =>{

    test("se renderiza reset", ()=>{
        const {getByTestId} = render(<GifApp />);
        const Reset= getByTestId("buttonReset");
        expect(Reset).toBeTruthy();
    })
    //dentro de ternario se utiliza queryby en vez que getby
    test("se renderiza delete", ()=>{
        const {queryByTestId} = render(<GifApp />);
        const Delete= queryByTestId("buttonReset");
        expect(Delete).toBeTruthy();
    })

})