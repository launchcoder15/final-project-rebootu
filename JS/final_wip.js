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

	// 
	$('.btn-default').click(addTodoItem);
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
	$(h3).click(changeListTitle).focus();

	// call addTodoItem function when placeholder is clicked
	$(placeholder).click(addTodoItem);

	// variable and span for glyphicon remove
	var glyphiconRemove = $("<span></span>")

	// class for glyphicon remove
	glyphiconRemove.attr('class', 'glyphicon glyphicon-remove');
	
	// place glyphicon before h3
	$(h3).before(glyphiconRemove);

	// call function to remove entire list when glyphiconRemove is clicked
	glyphiconRemove.click(removeEntireList);
}	

function changeListTitle() {

	// variable for form element
	var form = $("<form></form>");
	
	// variable for input of form 
	var input = $("<input type='text' autofocus='autofocus'></input>");
	
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
	var listForm = $("<form class='creation-form'></form>");
	
	// variable for input of form 
	var listInput = $("<input type='text' autofocus='autofocus'></input>");
	
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

	// submit new item
	var newItem = $(this).find( ".item" ).val();
	$(this).find('.item').val('');

	// variable for placeholder element
	var placeholder = $("<p class='placeholder'>Click to Add a ToDo...</p>");

	// variable name and declare li as jquery object
	var thisIsTheListItemIJustMade = $("<li class='listItem'>" + newItem + "</li>");

	// append new item to list
	$(this).parent().append(thisIsTheListItemIJustMade);

	// creat button group
	var buttonDiv = $("<div class='btn-group btn-group-sm' role='group'></div>");
	var buttonEdit = $("<button type='button' class='btn btn-default'>Edit</button>");
	var buttonRemove = $("<button type='button' class='btn btn-danger'>Done</button>");

	// add button group to each list item
	$(thisIsTheListItemIJustMade).append(buttonDiv);
	$(buttonDiv).append(buttonEdit);
	$(buttonDiv).append(buttonRemove);

	// remove list item when remove button is clicked
	$('.btn-danger').click(removeTodoItem);

	// edit list item when edit button is clicked
	$('.btn-default').click(editTodoItem);

	$(this).replaceWith(placeholder);

	$(placeholder).click(addTodoItem);
}

function removeTodoItem() {

	// remove entire li
	$(this).parent().parent().remove();
}

function editTodoItem() {
	
	// variable for form element
	var listForm = $("<form class='edit-form'></form>");
	
	// variable for input of form 
	var listInput = $("<input type='text' autofocus='autofocus'></input>");
	
	// give input a class
	listInput.attr('class', 'items');

	// attach input to form
	var inputForm = $(listForm).append(listInput);	
	
	// hide .placeholder when clicked
	$(this).hide();
	
	// replace .placeholder with form
	$(this).parent().parent().replaceWith(listForm);
	
	// submit new list item and call submitInputedListItem function
	listForm.submit(submitEditedListItem);	
}

function submitEditedListItem() {
	// cancel form action
	event.preventDefault();

	// submit new item
	var newItem = $(this).find( ".items" ).val();
	$(this).find('.items').val('');

	// variable for placeholder element
	var placeholder = $("<p class='placeholder'>Click to Add a ToDo...</p>");

	// variable name and declare li as jquery object
	var thisIsTheListItemIJustMade = $("<li class='listItem'>" + newItem + "</li>");

	// append new item to list
	$(this).parent().append(thisIsTheListItemIJustMade);

	// creat button group
	var buttonDiv = $("<div class='btn-group btn-group-sm' role='group'></div>");
	var buttonEdit = $("<button type='button' class='btn btn-default'>Edit</button>");
	var buttonRemove = $("<button type='button' class='btn btn-danger'>Done</button>");

	// add button group to each list item
	$(thisIsTheListItemIJustMade).append(buttonDiv);
	$(buttonDiv).append(buttonEdit);
	$(buttonDiv).append(buttonRemove);

	// remove list item when remove button is clicked
	$('.btn-danger').click(removeTodoItem);

	// edit list item when edit button is clicked
	$('.btn-default').click(editTodoItem);

	$('.items').replaceWith(thisIsTheListItemIJustMade);	
}

function removeEntireList() {

	$(this).parent().remove();
}