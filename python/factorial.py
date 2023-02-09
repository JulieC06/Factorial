def factorial(num):
	# your code here
	count = num
	answer = 1
	while count > 1:
		answer = answer * count
		count -= 1
	return answer
print(factorial(4))
