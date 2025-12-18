"""Search Algorithms Module"""

def linear_search(arr, target):
    """Linear search - O(n) time complexity"""
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

def binary_search(arr, target):
    """Binary search on sorted array - O(log n)"""
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

def binary_search_recursive(arr, target, left, right):
    """Recursive binary search"""
    if left > right:
        return -1
    
    mid = (left + right) // 2
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, right)
    else:
        return binary_search_recursive(arr, target, left, mid - 1)

def jump_search(arr, target):
    """Jump search - O(sqrt n) time"""
    n = len(arr)
    step = int(n ** 0.5)
    prev = 0
    
    while arr[min(step, n) - 1] < target:
        prev = step
        step += int(n ** 0.5)
        if prev >= n:
            return -1
    
    while arr[prev] < target:
        prev += 1
        if prev == min(step, n):
            return -1
    
    if arr[prev] == target:
        return prev
    return -1

def exponential_search(arr, target):
    """Exponential search"""
    if arr[0] == target:
        return 0
    
    i = 1
    while i < len(arr) and arr[i] <= target:
        i *= 2
    
    return binary_search(arr, target, i // 2, min(i, len(arr) - 1))

if __name__ == "__main__":
    test_arr = [1, 5, 10, 15, 20, 25, 30]
    target = 15
    print(f"Linear: {linear_search(test_arr, target)}")
    print(f"Binary: {binary_search(test_arr, target)}")
    print(f"Jump: {jump_search(test_arr, target)}")
