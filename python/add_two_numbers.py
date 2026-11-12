def addTwoNumbers(list1, list2):
    add_number = False
    list_result = ""
    for i in range(len(list1)):
        result = list1[i] + list2[i]
        if add_number:
            result += 1
        if result >= 10:
            add_number = True
        list_result += str(result)[-1]

    return list_result


# addTwoNumbers([2, 4, 6], [1, 3, 5])
print(addTwoNumbers([2, 4, 6], [1, 3, 5]))
