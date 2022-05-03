import { LinkedListNode, createLinkedList, toList } from './LinkedList.js';

// merging two country
let mergeTwoCountry = function (head1, head2) {
	// if both lists are empty then merged list is empty
	// if one of the list is empty, then other is merged list
	if (!head1) {
		return head2;
	} else if (!head2) {
		return head1;
	}

	// create mergedHead variable, this will be return value
	let mergedHead = null;
	// grab the lower head value to the beginning
	// and continue
	if (head1.data <= head2.data) {
		mergedHead = head1;
		head1 = head1.next;
	} else {
		mergedHead = head2;
		head2 = head2.next;
	}

	// create variable called mergedTail
	let mergedTail = mergedHead;
	// create while loop
	while (head1 && head2) {
		let temp = null;
		if (head1.data <= head2.data) {
			mergedHead = head1;
			head1.head1.next;
		} else {
			temp.head2;
			head2 = head2.next;
		}
		mergedTail.next = temp;
		mergedTail = temp;
	}

	// check there is value in head1
	if (head1) {
		mergedTail.next = head1;
	} else if (head2) {
		mergedTail.next = head2;
	}
	// return the merged head
	return mergedHead;
};

// create main function
function mergeKCountry(lists) {
	// check if list not empty
	if (lists.length > 0) {
		// create result variable
		let result = lists[0];
		// create for loop
		for (var i = 1; i < lists.length; i++) {
			// grab the result merge country function
			res = mergeTwoCountry(result, lists[i]);
		}
		// after loop, return the result
		return result;
	}
}
