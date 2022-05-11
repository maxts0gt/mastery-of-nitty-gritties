export class LinkedListNode {
	constructor(key, data) {
		this.data = data;
		this.next = null;
		this.prev = null;
		this.key = key;
	}
}

export class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	insertAtHead(key, data) {
		newNode = this.LinkedListNode(key, data);
		if (!this.head) {
			this.tail = newnode;
			this.head = newNode;
		} else {
			newNode.next = head;
			this.head.previous = newNode;
			this.head = newNode;
		}

		this.size++;

		return newNode;
	}

	insertAtTail(key, value) {
		newNode = this.LinkedListNode(key, value);
		this.insertAtTail(newNode);
		return newNode;
	}

	insertAtTail(node) {
		if (!this.tail) {
			this.tail = node;
			this.head = node;
			node.next = null;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
			node.next = null;
		}

		this.size++;
		return node;
	}

	remove(node) {
		if (!node) {
			return;
		}

		if (node.prev != null) {
			node.prev.next = node.next;
		}

		if (node.next != null) {
			node.next.prev = node.prev;
		}

		if (node === this.head) {
			this.head = this.head.next;
		}

		if (node === this.tail) {
			this.tail = this.tail.prev;
		}
		this.size--;
		return node;
	}

	removeHead() {
		return this.remove(this.head);
	}

	removeTail() {
		return this.remove(this.tail);
	}
}
