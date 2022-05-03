// creating linked list class
export let LinkedListNode = function (data) {
	this.data = data;
	this.next = null;
};

// insert at head function
export let insertAtHead = function (head, data) {
	// creating new node
	let newNode = new LinkedListNode(data);
	// add at head
	newNode.next = head;
	return newNode;
};

// insert at tail function
export let insertAtTail = function (head, node) {
	// checking if no head
	if (!head) {
		return node;
	}
	// otherwise keep head at temp file
	let temp = head;

	// if value exists at temp.next
	while (temp.next) {
		// assign it on temp variable
		temp = temp.next;
	}
	// update the temp.next value with node
	temp.next = node;
	// and return the head
	return head;
};

// create random linked list
export let createRandomLinkedList = function (length) {
	// create variable listhead and assign null
	let listHead = null;

	// create simple loop
	for (let i = 0; i < length; i++) {
		listHead = insertAtHead(listHead, Math.floor(Math.random() * 100 + 1));
	}
	return listHead;
};

// create linkedList function
export let createLinkedList = function (lst) {
	// create variable listhead and assign null
	let listHead = null;
	// reverse lst
	lst.reverse();
	// go through the list and call insertAtHead function
	for (let x = 0; x < lst.length; x++) {
		listHead = insertAtHead(listHead, lst[x]);
	}
	return listHead;
};

// create display function
export let display = function (head) {
	// keep head at temp variable
	let temp = head;
	// create empty variable
	let s = '';
	// create while loop
	while (temp) {
		s += temp.next;
		if (temp) {
			s += ', ';
		}
	}
	return s;
};

// to change to list function
export let toList = function (head) {
	// create empty array
	let lst = [];
	// keep in temp value
	let temp = head;
	// while there is a value in temp
	while (temp) {
		// push that data to list
		lst.push(temp.data);
		// assign next value to temp
		temp = temp.next;
	}
	// after while loop quits, return list
	return lst;
};

// check if equal function
export let isEqual = function (list1, list2) {
	// check if list1 and list2 is equal
	if (list1 === list2) {
		// then return early
		return true;
	}
	// otherwise while there is value in list1 and list2
	while (list1 && list2) {
		// check if list1 and list2 data is not equal
		if (list1.data !== list2.data) {
			// if so, return false
			return false;
		}
		// assign list1.next data to list1
		list1 = list1.next;
		// assign list2.next data to list2
		list2 = list2.next;
	}
	// and check if data is the same and return that
	return list1 === list2;
};

// create get length function
export let get_length = function (head) {
	let list_length = 0;
	// while there is value in head
	while (head) {
		// grab the next value in and assign to the head
		head = head.next;
		// increase list length
		list_length++;
	}
	return list_length;
};
