/**
 * @desc created constructor
 * @param { number } k length
 */
var MyCircularQueue = function(k) {
	// queue length	
	this.length = k;
	// queue
	this.queue = new Array(k);
	// front index	
	this.front = -1;
	// rear index
	this.tail = -1;
};

/** 
 * @desc add value to quque
 * @param { number } value
 * @return { boolean }
 */
MyCircularQueue.prototype.enQueue = function(value) {
	if (this.isFull()) {
		return false;
	} else {
		if (this.front === -1) {
			this.front = 0;
		}
		this.tail = (this.tail + 1) % this.length;
		this.queue[this.tail] = value;
		return true;
	}
};

/**
 * @desc del value
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
	if (this.isEmpty()) {
		return false;
	} else {
		if (this.front === this.tail) {
			this.front = -1;
			this.tail = -1;
			return true;
		}
		this.front = (this.front + 1) % this.length;
		return true;
	}
};

/**
 * @desc get queue front value
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
	if (this.isEmpty()) {
		return -1;
	} else {
		return this.queue[this.front];
	}
};

/**
 * @desc get queue rear value
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
	if (this.isEmpty()) {
		return -1;
	} else {
		return this.queue[this.tail];
	}
};

/**
 * @desc judge queue isempty
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
	if (this.front === -1) {
		return true;
	} else {
		return false;
	}
};

/**
 * @desc judge queue isfull
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
	if ((this.tail + 1) % this.length === this.front) {
		return true;
	} else {
		return false;
	}
};
