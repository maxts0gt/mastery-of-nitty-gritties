import { LinkedListNode, LinkedList } from './LinkedList.js';

// Time O(1) | Space O(1)

class LRUCache {
	// constructing necessaries
	constructor(capacity) {
		this.capacity = capacity;
		this.cache = {};
		this.cacheVals = new LinkedList();
	}

	// inserting the value if the key is not present
	Set(key, value) {
		// check if we have it
		if (this.cache[key] == null) {
			// if not see if we need to evict
			this.evictIfNeeded();
			// now create new node
			let newNode = new LinkedListNode(key, value);
			// insert that to value list
			this.cacheVals.insertAtTail(newNode);
			// set at the cache
			this.cache[key] = newNode;
		} else {
			// means we have it already
			// remove from current position
			this.cacheVals.remove(this.cache[key]);
			// create new node
			let newNode = new LinkedListNode(key, value);
			// insert at the end
			this.cacheVals.insertAtTail(newNode);
			// set inside the cache
			this.cache[key] = newNode;
		}
	}

	// getting the key
	Get(key) {
		// if we don't have it, return null
		if (this.cache[key] == null) {
			return null;
		} else {
			// means we have it, create variable value
			let value = this.cache[key].data;
			// remove value from cache vals
			this.cacheVals.remove(this.cache[key]);
			// create new node
			let node = new LinkedListNode(key, value);
			// insert the value at the end
			this.cacheVals.insertAtTail(node);
			// and return the node
			return node;
		}
	}

	evictIfNeeded() {
		// check if size exceeds capacity
		if (this.cacheVals.size >= this.capacity) {
			// then remove the LRU
			node = this.cacheVals.removeHead();
			// delete from the cache as well
			delete this.cache[node.key];
		}
	}

	// printing key and the data
	printcache() {
		let node = this.cacheVals.head;
		while (node) {
			process.stdout.write('(' + node.key + ',' + node.data + ')');
			node = node.next;
		}
		console.log();
	}
}

var obj = new LRUCache(3);
obj.Set(10, 20);
obj.printcache();

obj.Set(15, 25);
obj.printcache();

obj.Set(20, 30);
obj.printcache();

obj.Set(25, 35);
obj.printcache();

obj.Set(5, 40);
obj.printcache();

obj.Get(25);
obj.printcache();
