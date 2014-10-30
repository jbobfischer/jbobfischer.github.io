$(document).ready(function($) {
				// init controller
				var controller = new ScrollMagic({globalSceneOptions: {duration: 100}});

				// build scenes
				new ScrollScene({triggerElement: "#sec1"})
								.setClassToggle("#high1", "active") // add class toggle
								.addTo(controller)
								.addIndicators();
				new ScrollScene({triggerElement: "#sec2"})
								.setClassToggle("#high2", "active") // add class toggle
								.addTo(controller)
								.addIndicators();
				new ScrollScene({triggerElement: "#sec3"})
								.setClassToggle("#high3", "active") // add class toggle
								.addTo(controller)
								.addIndicators();
				new ScrollScene({triggerElement: "#sec4"})
								.setClassToggle("#high4", "active") // add class toggle
								.addTo(controller)
								.addIndicators();

			});
