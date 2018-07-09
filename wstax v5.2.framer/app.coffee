time = .25 #time for bnav trans

revealPoi = (i,n) ->
	poi1.animate	
		opacity: i
		options: 
			time: n
	
	poi2.animate
		opacity: i
		options: 
			time: n
	
	poi3.animate
		opacity: i
		options: 
			time: n
	

flow = new FlowComponent
flow.showNext(mapScreen)
flow.header = (statusBar)
flow.footer = (sliderBar)
#Falling Map Animation 
# systemStatus.animate
# 	opacity: 1
# 	options:
# 		time: 1.05
# 		curve: Bezier.easeIn
# 		delay: 1.2
# 		

# 			
# 
# poi1.animate
# 	y: land1.y
# 	opacity: 1.00
# 	options:
# 		time: 0.3
# 		curve: Bezier.easeIn
# 		delay: 0.61
# 		
# poi2.animate
# 	y: land3.y
# 	opacity: 1.00
# 	options:
# 		time: 0.4
# 		curve: Bezier.easeIn
# 		delay: .7
# poi3.animate
# 	y: land2.y
# 	opacity: 1.00
# 	options:
# 		time: 0.4
# 		curve: Bezier.easeIn
# 		delay: 1					

#Impact Scroll
scroll = new ScrollComponent
	width: Screen.width
	y: impactSticky.y + impactSticky.height
	parent: impactScreen
	scrollHorizontal: false
	height: 443
	speedY: .65
	x: 2
	
scrollCards.parent = scroll.content

scroll.contentInset =
	top: -250
	bottom: 5

#Animate status
progressLine.strokeLength = 0
check.opacity = 0
revealPoi(0,0)

splash.animate
	opacity: 0
	options: 
		delay: 2


splash.onAnimationEnd ->
	progressLine.animate
		strokeLength: systemStatus.width
		options:
			time: 2
			curve: Bezier.easeOut


progressLine.onAnimationEnd ->
	check.animate
		opacity: 1
		scale: 1.5
		options:
			delay: .1
			curve: Spring(damping: 0.25)
			time: 1.2

check.onAnimationStart ->
	running.text = "All Windstax Running"

progressLine.onAnimationEnd ->
	revealPoi(1,1)




selectStatus.opacity = 1
selectImpact.opacity = 0
selectSavings.opacity = 0
selectSettings.opacity = 0


shutoffKnob.originX=shutoffKnob.x

shutoffKnob.draggable.horizontal = true
shutoffKnob.draggable.vertical = false
shutoffKnob.draggable.overdrag = false
shutoffKnob.draggable.momentum = false

#Slider Microinteraction
inProgress_1.visible = false
alert_1.visible = false

shutoffKnob.draggable.constraints = {
	width: switchBack.width
	height: switchBack.height
}	

tapRestore.opacity = 0
inProgress_1.opacity = 0
powerOff.opacity = 0

red1 = "#B62525"
green1 = "#36D6A3"
# Start dragging
shutoffKnob.onPan ->
	if shutoffKnob.x + shutoffKnob.width > m1.x
		shutoffKnob.animate
			scale: 1.02
			knobItself.backgroundColor = red1 
			switchBack.borderColor = red1
		
			
shutoffKnob.on Events.DragEnd, ->
	if shutoffKnob.x + shutoffKnob.width < markerEnd.x	
		shutoffKnob.animate
			scale: 1
			x: shutoffKnob.originX 
			options:
				time: 0.15
				curve: Bezier.easeIn
			knobItself.animate
				knobItself.backgroundColor = green1
				switchBack.borderColor = green1
	else if shutoffKnob.x + shutoffKnob.width >= markerEnd.x	
		shutoffKnob.visible = false
		powerTransition()		
	

powerTransition = ->
	inProgress_1.visible = true
	inProgress_1.bringToFront
	inProgress_1.animate
		opacity: 1.00
		options:
			time: 2
			curve: Bezier.easeIn
	vacation_text.visible = false
	shutoff.visible = false
	powerOff.animate
		opacity: 1.00
		options:
			time: .4
			delay: 3
	tapRestore.animate
		opacity: 1.00
		options:
			time: .5
			delay: 5
	
	tapRestore.onTap ->
		alert_1.visible = true
		Screen.blur = 20
	
	alert_1.onTap ->
		alert_1.visible = false
		shutoff.visible = true
		inProgress_1.visible = false
		powerOff.visible = false
		tapRestore.visible = false
		knobItself.backgroundColor = green1
		switchBack.borderColor = green1
		shutoff.bringToFront()
		shutoffKnob.visible = true
		shutoffKnob.animate
			scale: 1
			x: shutoffKnob.originX 
			options:
				time: 0.15
				curve: Bezier.easeIn
		
		
#progress bar test
# progress = new Layer
# 	y: 347
# 	height: 50
# 	width: 0
# 	backgroundColor: red1
# 
# progress.animationOptions =
# 	time: 500
# 	delay: 1
# 	curve: Spring
# 
# progress.states.a =
# width: Screen.width
# 		
# mapScreen.onTap ->
# 	progress.stateCycle()
# 	
		






#Navigation

#graph prep
flip = (A) ->
	A.height = 0
	A.rotationY = 180
flip(sep)
flip(oct)
flip(nov)
flip(dec)
flip(jan)
flip(feb)


mapScreen.onTap ->
	flow.showNext(statusScreen, animate: false)

nvi.onTap ->
	slider.animate
		x: (nvi.x)
		options:
			time: time	
	selectStatus.opacity = 0
	selectImpact.opacity = 1
	selectSavings.opacity = 0
	selectSettings.opacity = 0


	flow.showNext(impactScreen, animate: false)	

nvs.onTap ->
	slider.animate
		x: (nvs.x)
		options:
			time: time
	selectStatus.opacity = 1
	selectImpact.opacity = 0
	selectSavings.opacity = 0
	selectSettings.opacity = 0	
	
	flow.showNext(statusScreen, animate: false)


grow = (A,h,t,d) ->
	A.animate
		height: h
		options:
			time: t
			delay: d
# 			curve: Bezier.easeOut
nvm.onTap ->
	slider.animate
		x: (nvm.x)
		options:
			time: time
	selectStatus.opacity = 0
	selectImpact.opacity = 0
	selectSavings.opacity = 1
	selectSettings.opacity = 0	
	
	flow.showNext(savingsScreen, animate: false)
	
	grow(sep,-55,.25, .1)

	sep.onAnimationStart ->
		grow(oct,-70,.25, .2)
		
	oct.onAnimationStart ->
		grow(nov,-85, .3)
		
	nov.onAnimationStart ->
		grow(dec,-110, .4)
		
	dec.onAnimationStart ->
		grow(jan,-132, .5)
		
	jan.onAnimationStart ->
		grow(feb,-107, .6)

			
	
# 	sep.animate
# 		height: -75
	


		
		
	

	
nvg.onTap ->
	slider.animate
		x: (nvg.x)
		options:
			time: time	
	selectStatus.opacity = 0
	selectImpact.opacity = 0
	selectSavings.opacity = 0
	selectSettings.opacity = 1

	flow.showNext(settingsScreen, animate: false)
	
backToMap.onTap ->
	flow.showNext(mapScreen, animate: false)
	
settingsSupport.onTap ->
	flow.showNext(Chat1)
	slider.visible = false
		
	
Chat1.onTap ->
	flow.showNext(Chat2)

Chat2.onTap ->
	flow.showNext(settingsScreen)
	slider.visible = true
	
		
#Savings Screen
gotoAllTime.onTap ->
	flow.showNext(allTime, animate: false)	
	
gotoMonth.onTap ->
	flow.showNext(savingsScreen, animate: false)
	
gotoWeek.onTap ->
	flow.showNext(byWeek, animate: false)
	
ovals.bringToFront()

statuses = new PageComponent
	y: 113
	width: Screen.width
	height: 338
	parent: statusScreen
	scrollVertical: false
	speedX: .7
	
statuses.sendToBack()

	
statuses.addPage(topCard)
statuses.addPage(topCard2)
statuses.addPage(topCard3)

statuses.snapToPage(topCard)
statuses.snapToPage(topCard2)
statuses.snapToPage(topCard3)


	



