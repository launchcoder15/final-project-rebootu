// wrap input in <form> and attach a submit event handler
// insert submitted item into list
$(document).ready( function() {

	var newList = "<span id='glyphiconPlus' class='glyphicon glyphicon-plus' aria-hidden='true' style = 'color:#339933'></span>";

	// change title of list when clicked on
	$('.todo').click(changeListTitle);
	subu

	$('.todo2').click(changeListTitle);

	// input new list item when <p> is clicked on
	$("p").click(addTodoItem); 

	// create new list when glyphiconPlus is clicked
	$('#glyphiconPlus').click(clickGlyphiconPlus);
});

// change title of the first list
function changeListTitle() {
	$(this).hide("slow");

	$(this).replaceWith("<form id='title_form'><input id='title' type='text' name='item'></input></form>");
	
	$('#title_form').submit(submitTitleOfSecondaryLists);
}

// add a Todo item to the first list
function addTodoItem() {
	$(this).hide("slow");
	$(this).replaceWith("<form id='todo_form'><input id='submit' type='text' name='item'></input></form>");
	
	$('#todo_form').submit(submitSecondaryListItem);

		//doThatOtherfunction("#submit");
}

function clickGlyphiconPlus() {
	// add new list when glyphiconPlus is clicked
	$(this).before("<div class='col-md-3' id='other'><ul class='nextList'><h3 class='todo'>Do This Stuff</h3><p class='placeholder'>Do Something...</p>");					

	// change title of list when clicked on
	$('.todo').click(function() {
		$(this).hide("slow");
		$(this).replaceWith("<form id='title_forms'><input id='titles' type='text' name='item'></input></form>");
		
		$('#title_forms').submit(submitTitleOfSecondaryLists);	
	});

	// input new list item when <p> is clicked
	$("p").click(function() {
		$(this).hide("slow");
		$(this).replaceWith("<form id='new_form'><input id='submitted' type='text' name='item'></input></form>");		
		
		// submit secondary list item
		$('#new_form').submit(submitSecondaryListItem);
	});
}	

function submitInputedListTitle() {
	// cancel form action
	event.preventDefault();

	// submitted value
	var value = $( "#title" ).val();
	$('#title').val('');

	// form field replaced with submitted title
	$('#title').replaceWith("<h3 class='listTitle'>" + value + "</h3>");
}

function submitInputedListItem() {
	// cancel form action
	event.preventDefault();

	var value = $( "#submit" ).val();
	$('#submit').val('');

	// create variable to add submitted item and li to ul
	var newValue = $("<li>" + value + "</li>");

	// append new item to list
	$('.list').append(newValue);
}

function submitTitleOfSecondaryLists() {
	// cancel form action
	event.preventDefault();

	// submitted value
	var title = $( "#title" ).val();
	$('#title').val('');

	// form field replaced with submitted title
	$('#title').replaceWith("<h3 class='listTitle'>" + title + "</h3>");
}

function submitSecondaryListItem() {
	// cancel form action
	event.preventDefault();

	var values = $( "#submit" ).val();
	$('#submit').val('');

	// create variable to add submitted item and li to ul
	var newValues = $("<li>" + values + "</li>");

	// append new item to list
	$('.list').append(newValues);
}
