$(document).ready(function($) {
				// init controller
				var controller = new ScrollMagic({globalSceneOptions: {duration: 600}});

				// build scenes
				new ScrollScene({triggerElement: "#bio"})
								.setClassToggle("#bioB", "active") // add class toggle
								.addTo(controller)
								//.addIndicators();
				new ScrollScene({triggerElement: "#rea"})
								.setClassToggle("#reaB", "active") // add class toggle
								.addTo(controller)
								//.addIndicators();
				new ScrollScene({triggerElement: "#men"})
								.setClassToggle("#menB", "active") // add class toggle
								.addTo(controller)
								//.addIndicators();
				new ScrollScene({triggerElement: "#tea"})
								.setClassToggle("#teaB", "active") // add class toggle
								.addTo(controller)
								//.addIndicators();

			});
