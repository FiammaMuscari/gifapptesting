import {render, fireEvent, screen} from "@testing-library/react";
import {GifApp} from "../src/GifApp";
import React from "react";
import '@testing-library/jest-dom'


describe ("Reset y Delete", () =>{
    
    test("Verificar estado inicial, boton Delete no aparece", ()=>{
        const {queryByTestId} = render(<GifApp />);
        const Delete= queryByTestId("buttonDelete");
        expect(Delete).toBe(null);
        screen.debug()
    })

    test("se renderiza reset", ()=>{
        const {getByTestId} = render(<GifApp />);
        const Reset= getByTestId("buttonReset");
        expect(Reset).toBeTruthy();
    })
    
    test('test borrar todo', ()=>{
        const {getByTestId, queryByTestId} = render(<GifApp />);
        const Reset= getByTestId("buttonReset");
        const Delete= queryByTestId("buttonDelete");
        
        fireEvent.click(Reset)
        expect(Delete).toBe(null);
    })
    
    test('eliminar por categoria', ()=>{
    const newcategory = "One piece";
    const categories = ["One piece", "Berserk", "Naruto"];
    for (let i = 0; i < categories.length; i++) {
      if (newcategory === categories[i]) {
        categories.splice(categories.indexOf(newcategory), 1);
      }
    }
    expect(categories).toEqual(["Berserk", "Naruto"]);
  });

})