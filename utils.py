"""Utility Functions"""

def validate_email(email):
    """Validate email format"""
    import re
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None

def is_palindrome(s):
    """Check if string is palindrome"""
    clean = ''.join(c.lower() for c in s if c.isalnum())
    return clean == clean[::-1]

def calculate_factorial(n):
    """Calculate factorial of n"""
    if n < 0:
        return None
    if n <= 1:
        return 1
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

def reverse_string(s):
    """Reverse a string"""
    return s[::-1]

def find_max_min(arr):
    """Find max and min in array"""
    if not arr:
        return None, None
    return max(arr), min(arr)

def remove_duplicates(arr):
    """Remove duplicates from list"""
    return list(set(arr))

def chunks(arr, size):
    """Split array into chunks"""
    for i in range(0, len(arr), size):
        yield arr[i:i + size]

if __name__ == "__main__":
    print(validate_email("test@example.com"))
    print(is_palindrome("A man, a plan, a canal: Panama"))
    print(f"Factorial of 5: {calculate_factorial(5)}")
    print(f"Max/Min: {find_max_min([1, 5, 3, 9, 2])}")
    print(f"No duplicates: {remove_duplicates([1, 2, 2, 3, 3, 3])}")
