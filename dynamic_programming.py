"""Dynamic Programming Module"""

def fibonacci(n, memo=None):
    """Fibonacci with memoization"""
    if memo is None:
        memo = {}
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo)
    return memo[n]

def fibonacci_bottom_up(n):
    """Fibonacci using bottom-up DP"""
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

def longest_common_subsequence(text1, text2):
    """LCS using dynamic programming"""
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return dp[m][n]

def coin_change(coins, amount):
    """Minimum coins needed for amount"""
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    
    for i in range(1, amount + 1):
        for coin in coins:
            if coin <= i:
                dp[i] = min(dp[i], dp[i - coin] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1

if __name__ == "__main__":
    print(f"Fibonacci(10): {fibonacci(10)}")
    print(f"LCS length: {longest_common_subsequence('abc', 'ac')}")
    print(f"Min coins: {coin_change([1,2,5], 5)}")
