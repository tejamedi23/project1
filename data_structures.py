"""Data Structures Module - Common implementations"""

class LinkedListNode:
    """Node class for linked list"""
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    """Singly Linked List implementation"""
    def __init__(self):
        self.head = None
    
    def append(self, data):
        """Add node at end"""
        new_node = LinkedListNode(data)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node
    
    def display(self):
        """Print all elements"""
        elements = []
        current = self.head
        while current:
            elements.append(str(current.data))
            current = current.next
        return ' -> '.join(elements)

class Stack:
    """Stack implementation using list"""
    def __init__(self):
        self.items = []
    
    def push(self, item):
        self.items.append(item)
    
    def pop(self):
        return self.items.pop() if not self.is_empty() else None
    
    def is_empty(self):
        return len(self.items) == 0
    
    def peek(self):
        return self.items[-1] if not self.is_empty() else None

class Queue:
    """Queue implementation"""
    def __init__(self):
        self.items = []
    
    def enqueue(self, item):
        self.items.append(item)
    
    def dequeue(self):
        return self.items.pop(0) if not self.is_empty() else None
    
    def is_empty(self):
        return len(self.items) == 0
