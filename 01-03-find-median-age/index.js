import { MinHeap, MaxHeap } from './Heap.js';

class MedianOfAges {
	constructor() {
		maxHeap = new MaxHeap();
		minHeap = new MinHeap();
	}

	insertAge(num) {
		// check if the heap is empty or input num is lower than max
		if (maxHeap.isEmpty() || maxHeap.getMax() >= num) {
			// in that case insert it to the maxHeap
			maxHeap.insert(num);
			// else if input num is higher than max than put it into minHeap
		} else minHeap.insert(num);

		// if maxHeap size is higher than minHeap size + 1
		if (maxHeap.getSize() > minHeap.getSize() + 1) {
			// then grab the max from max heap
			var max = maxHeap.removeMax();
			// and insert it into min heap
			minHeap.insert(max);
			// else max heap size is lower than min heap
		} else if (maxHeap.getSize() < minHeap.getSize()) {
			// grab the min value from min heap
			var min = minHeap.removeMin();
			// put that into min heap
			maxHeap.insert(min);
		}
	}

	// finding median
	findMedian() {
		// if max heap size is equal to min heap size
		if (maxHeap.getSize() == minHeap.getSize()) {
			// we have even number of elements, take the average of middle two elements
			return maxHeap.getMax() / 2.0 + minHeap.getMin() / 2.0;
		}
		// because max-heap will have one more element than the min-heap
		return maxHeap.getMax() / 1.0;
	}
}

// Driver code

var medianAge = new MedianOfAges();
medianAge.insertAge(22);
medianAge.insertAge(35);
console.log(
	'The recommended content will be for ages under: ' + medianAge.findMedian()
);
medianAge.insertAge(30);
console.log(
	'The recommended content will be for ages under: ' + medianAge.findMedian()
);
medianAge.insertAge(25);
console.log(
	'The recommended content will be for ages under: ' + medianAge.findMedian()
);
