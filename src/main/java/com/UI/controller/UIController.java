package com.UI.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class UIController {

	@RequestMapping("/demo")
	public ModelAndView test(){
		return new ModelAndView("Home");
		
	}
}
