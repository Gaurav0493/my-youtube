import { render, screen } from '@testing-library/react';
import App from './App';
import { mount } from "enzyme";


describe('youtube demo app',()=>{

  let wrapper;
  beforeEach(()=>{
    wrapper = mount(<App />);
  })

  test('name of the demo app',()=>{
    expect(wrapper.find("header").text().toLowerCase()).toContain("my youtube");
  });


  test("render a input field for searching with lable", () => {
    expect(wrapper.find("#search-lable").text().toLowerCase()).toBe("search youtube video");
  });

  test("do not render empty video list if videos are not there", () => {
    expect(wrapper.find(".main").exists()).toBeTruthy();
    expect(wrapper.find(".item").exists()).toBeFalsy();
  });

  test("empty search field", () => {
    expect(wrapper.find("#search-bar").get(0).props.value).toEqual(undefined)
  });

  test("search for the video", () => {
    let inputField = wrapper.find("#search-bar")
    inputField.value = "test"
    wrapper.find("#search-bar").simulate("submit");
    expect(inputField.value).toBe("test");
    expect(wrapper.find(".item").exists()).toBeTruthy();
  });

})

