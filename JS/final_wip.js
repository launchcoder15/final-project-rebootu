$(document).ready(function() {

	// call makeNewList function
	makeNewList();

	// create new list when  glyph is clicked
	$('#glyphiconPlus').click(makeNewList);

	// change title of todo list when clicked on
	$('.todoHeading').click(changeListTitle);

	// add new todo item	
	$('.placeholder').click(addTodoItem);

	// delete item from list when remove button is clicked
	$('.btn-danger').click(removeTodoItem);

});


function makeNewList() {

	// variable for unordered list
	var ul = $("<ul></ul>");

	// give ul a class
	ul.attr('class', 'newList');

	// variable for li
	var li = $("<li></li>");

	// append li to ul
	var newList = $(ul).append(li);

	// variable for heading
	var h3 = $("<h3 class='todo'>Click to Name a Category</h3>");

	// place h3 before li
	$(li).before(h3);

	// variable for placeholder
	var placeholder = $("<p class='placeholder'>Click to Add a ToDo...</p>");

	// place placeholder after h3
	$(h3).after(placeholder);

	// add new list before glyphiconPlus when glyphiconPlus is clicked
	$('#glyphiconPlus').before(newList);

	// call changeListTitle function when h3 is clicked
	$(h3).click(changeListTitle);

	// call addTodoItem function when placeholder is clicked
	$(placeholder).click(addTodoItem);

}	

function changeListTitle() {

	// variable for form element
	var form = $("<form></form>");
	
	// variable for input of form 
	var input = $("<input type='text'></input>");
	
	// give input a class
	input.attr('class', 'title');

	// attach input to form
	var formInput = $(form).append(input);

	// hide .todoheading when clicked
	$(this).hide();

	// replace .todoheading with form
	$(this).replaceWith(form);

	// submit new list title and call submitInputedListTitle function
	form.submit(submitInputedListTitle);

}

function submitInputedListTitle() {
	
	// cancel form action
	event.preventDefault();

	// submitted value
	var value = $( '.title' ).val();
	$('.title').val('');

	// replace form field with submitted title
	$(this).replaceWith("<h3 class='listTitle'>" + value + "</h3>");

	$('.listTitle').click(changeListTitle);
}

// add a Todo item 
function addTodoItem() {

	// variable for form element
	var listForm = $("<form></form>");
	
	// variable for input of form 
	var listInput = $("<input type='text'></input>");
	
	// give input a class
	listInput.attr('class', 'item');

	// attach input to form
	var inputForm = $(listForm).append(listInput);	
	
	// hide .placeholder when clicked
	$(this).hide();
	
	// replace .placeholder with form
	$(this).replaceWith(listForm);
	
	// submit new list item and call submitInputedListItem function
	listForm.submit(submitInputedListItem);
}

function submitInputedListItem() {
	
	// cancel form action
	event.preventDefault();

	var newItem = $(this).find( ".item" ).val();
	$(this).find('.item').val('');

	// append new item to list
	$(this).parent().append("<li class='listItem'>" + newItem + "</li>");

	
	// creat button group
	var buttonDiv = $("<div class='btn-group btn-group-sm' role='group'></div>");
	var buttonComplete = $("<button type='button' class='btn btn-default'>Complete</button>");
	var buttonAddNote = $("<button type='button' class='btn btn-default'>Add Note</button>");
	var buttonRemove = $("<button type='button' class='btn btn-danger'>Remove</button>");

	// add button group to each list item
	$('.listItem').append(buttonDiv);
	$(buttonDiv).append(buttonComplete);
	$(buttonDiv).append(buttonAddNote);
	$(buttonDiv).append(buttonRemove);

	$('.btn-danger').click(removeTodoItem);
}

function removeTodoItem() {

	$(this).parent().parent().remove();
	//$(this, '.listItem').remove();
	
}



